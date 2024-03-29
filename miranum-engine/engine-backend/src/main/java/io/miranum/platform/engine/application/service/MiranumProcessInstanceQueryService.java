package io.miranum.platform.engine.application.service;

import io.miranum.platform.engine.application.port.in.process.MiranumProcessInstanceQuery;
import io.miranum.platform.engine.application.port.out.engine.ServiceInstanceVariablePort;
import io.miranum.platform.engine.application.port.out.history.GetHistoricTasksByInstanceIdPort;
import io.miranum.platform.engine.application.port.out.process.MiranumProcessInstancePort;
import io.miranum.platform.engine.application.port.out.process.ProcessConfigPort;
import io.miranum.platform.engine.application.port.out.schema.JsonSchemaPort;
import io.miranum.platform.engine.domain.jsonschema.JsonSchema;
import io.miranum.platform.engine.domain.process.MiranumProcessInstance;
import io.miranum.platform.engine.domain.process.MiranumProcessInstanceWithData;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import lombok.val;
import org.apache.commons.lang3.StringUtils;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import javax.annotation.Nullable;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

/**
 * Service to interact with process instances.
 */
@Slf4j
@Service
@RequiredArgsConstructor
public class MiranumProcessInstanceQueryService implements MiranumProcessInstanceQuery {


    private final ProcessConfigPort processConfigPort;
    private final ServiceInstanceVariablePort serviceInstanceVariablePort;
    private final JsonSchemaPort jsonSchemaPort;
    private final GetHistoricTasksByInstanceIdPort getHistoricTasksByInstanceIdPort;
    private final MiranumProcessInstancePort miranumProcessInstancePort;


    /**
     * Get all assigned  instances
     *
     * @return assigned  instances
     */
    public Page<MiranumProcessInstance> getProcessInstanceByUser(final String userId, int page, int size, String query) {
        val processInstances = this.miranumProcessInstancePort.getAllByUser(userId);
        val filteredDefinitions = filterByQuery(processInstances, query);
        return listToPage(filteredDefinitions, page, size);
    }

    /**
     * Get detail information of a instance.
     *
     * @param instanceId Id of the  instance
     * @return instance detail
     */
    public MiranumProcessInstanceWithData getServiceInstanceWithDataByUser(final String userId, final String instanceId) {

        if (!miranumProcessInstancePort.hasAccess(instanceId, userId)) {
            throw new RuntimeException("User does not have access to this instance");
        }

        final MiranumProcessInstanceWithData processInstanceWithData = this.miranumProcessInstancePort.getProcessInstanceWithData(instanceId);

        final MiranumProcessInstance processInstanceInfo = this.searchServiceInstanceById(instanceId).orElseThrow();

        val processConfig = this.processConfigPort.getByRef(processInstanceInfo.getDefinitionKey());
        processInstanceWithData.setConfig(processConfig);

        val tasks = this.getHistoricTasksByInstanceIdPort.getHistoricTasksByInstanceId(instanceId);
        processInstanceWithData.setHistoryTasks(tasks);


        if (StringUtils.isNotBlank(processConfig.getInstanceSchemaKey())) {
            final JsonSchema jsonSchema = this.jsonSchemaPort.getByRef(processConfig.getInstanceSchemaKey());
            final Map<String, Object> variables = this.serviceInstanceVariablePort.getVariables(processInstanceInfo.getId());
            final Map<String, Object> data = this.jsonSchemaPort.filterVariables(variables, processConfig.getInstanceSchemaKey());
            processInstanceWithData.setData(data);
            processInstanceWithData.setJsonSchema(jsonSchema.asMap());
        }

        return processInstanceWithData;
    }


    @Override
    public Optional<MiranumProcessInstance> searchServiceInstanceById(final String instanceId) {
        return this.miranumProcessInstancePort.searchProcessInstanceById(instanceId);
    }


    private Page<MiranumProcessInstance> listToPage(
            final List<MiranumProcessInstance> definitions,
            final int page,
            final int size) {

        val from = page * size;
        val to = Math.min((page + 1) * size, definitions.size());
        val pageContent = definitions.subList(from, to);
        return new PageImpl<MiranumProcessInstance>(pageContent, PageRequest.of(page, size), definitions.size());
    }

    private List<MiranumProcessInstance> filterByQuery(
            final List<MiranumProcessInstance> definitions,
            @Nullable final String query
    ) {
        final String lowerCaseQuery = query == null ? "" : query.toLowerCase();
        return lowerCaseQuery.isBlank()
                ? definitions
                : definitions.stream().filter(
                it ->
                        StringUtils.containsIgnoreCase(it.getId(), lowerCaseQuery)
                                || StringUtils.containsIgnoreCase(it.getDescription(), lowerCaseQuery)
                                || StringUtils.containsIgnoreCase(it.getDefinitionKey(), lowerCaseQuery)
                                || StringUtils.containsIgnoreCase(it.getDefinitionName(), lowerCaseQuery)
                                || StringUtils.containsIgnoreCase(it.getStatusKey(), lowerCaseQuery)
                                || StringUtils.containsIgnoreCase(it.getStatus(), lowerCaseQuery)
                                || StringUtils.containsIgnoreCase(it.getStartTime() != null ? it.getStartTime().toString() : "", lowerCaseQuery)
                                || StringUtils.containsIgnoreCase(it.getEndTime() != null ? it.getEndTime().toString() : "", lowerCaseQuery)
                                || StringUtils.containsIgnoreCase(it.getRemovalTime() != null ? it.getRemovalTime().toString() : "", lowerCaseQuery)
        ).collect(Collectors.toList());
    }

}
