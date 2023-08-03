package io.miranum.platform.engine.deployment;

import io.miragon.miranum.deploymentreceiver.application.ports.out.MiranumDeploymentReceiver;
import lombok.RequiredArgsConstructor;
import org.camunda.bpm.engine.RepositoryService;
import org.camunda.bpm.model.bpmn.Bpmn;
import org.camunda.bpm.model.bpmn.BpmnModelInstance;
import org.camunda.bpm.model.dmn.Dmn;
import org.camunda.bpm.model.dmn.DmnModelInstance;
import org.springframework.stereotype.Component;

import java.io.ByteArrayInputStream;
import java.util.List;

@Component
@RequiredArgsConstructor
public class EngineDeploymentReceiver implements MiranumDeploymentReceiver {

    private final RepositoryService repositoryService;

    static final String BPMN = "bpmn";
    static final String DMN = "dmn";

    @Override
    public void deploy(final String file, final String type, final String namespace, final List<String> tags) {
        // TODO @lmoesle: what about the filename?
        final String resourceName = "test.bpmn";
        if (type.equalsIgnoreCase(BPMN)) {
            final BpmnModelInstance model = Bpmn.readModelFromStream(new ByteArrayInputStream(file.getBytes()));
            Bpmn.validateModel(model);
            this.repositoryService.createDeployment()
                    .addModelInstance(resourceName, model)
                    .enableDuplicateFiltering(true)
                    .name(resourceName)
                    .deploy();
        }
        if (type.equalsIgnoreCase(DMN)) {
            final DmnModelInstance model = Dmn.readModelFromStream(new ByteArrayInputStream(file.getBytes()));
            Dmn.validateModel(model);
            this.repositoryService.createDeployment()
                    .addModelInstance(resourceName, model)
                    .enableDuplicateFiltering(true)
                    .name(resourceName)
                    .deploy();
        }
    }

}
