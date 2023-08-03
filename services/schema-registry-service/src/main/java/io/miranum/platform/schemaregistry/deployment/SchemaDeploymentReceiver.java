package io.miranum.platform.schemaregistry.deployment;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.miragon.miranum.connect.json.registry.application.ports.in.SaveSchemaInCommand;
import io.miragon.miranum.connect.json.registry.application.ports.in.SaveSchemaUseCase;
import io.miragon.miranum.deploymentreceiver.application.ports.out.MiranumDeploymentReceiver;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.util.List;

@Component
@RequiredArgsConstructor
public class SchemaDeploymentReceiver implements MiranumDeploymentReceiver {

    private final SaveSchemaUseCase saveSchemaUseCase;
    private final ObjectMapper objectMapper = new ObjectMapper();

    @Override
    public void deploy(final String file, final String type, final String namespace, final List<String> tags) {
        // TODO @lmoesle: what about the filename?
        final SaveSchemaInCommand saveSchemaInCommand = new SaveSchemaInCommand(namespace, null, tags, this.convert(file));
        this.saveSchemaUseCase.saveSchema(saveSchemaInCommand);
    }

    private JsonNode convert(final String json) {
        try {
            return this.objectMapper.readTree(json);
        } catch (final IOException e) {
            throw new RuntimeException(e);
        }
    }
}
