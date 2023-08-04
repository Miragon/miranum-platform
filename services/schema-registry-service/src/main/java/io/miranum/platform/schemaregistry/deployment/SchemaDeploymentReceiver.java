package io.miranum.platform.schemaregistry.deployment;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.miragon.miranum.connect.json.registry.application.ports.in.SaveSchemaInCommand;
import io.miragon.miranum.connect.json.registry.application.ports.in.SaveSchemaUseCase;
import io.miragon.miranum.deploymentreceiver.application.DeploymentFailedException;
import io.miragon.miranum.deploymentreceiver.application.ports.out.MiranumDeploymentReceiver;
import io.miragon.miranum.deploymentreceiver.domain.Deployment;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@Component
@RequiredArgsConstructor
public class SchemaDeploymentReceiver implements MiranumDeploymentReceiver {

    private final SaveSchemaUseCase saveSchemaUseCase;
    private final ObjectMapper objectMapper = new ObjectMapper();

    @Override
    public void deploy(final Deployment deployment, final List<String> tags) {
        try {
            final JsonNode file = this.objectMapper.readTree(deployment.getFile());
            final String schemaRef = Optional.of(file.get("key")).map(JsonNode::asText)
                            .orElseThrow(() -> new DeploymentFailedException("No key found in schema " + deployment.getFilename()));
            final SaveSchemaInCommand saveSchemaInCommand = new SaveSchemaInCommand(deployment.getNamespace(), schemaRef, tags, file);
            this.saveSchemaUseCase.saveSchema(saveSchemaInCommand);
        } catch (final IOException e) {
            throw new DeploymentFailedException("Could not parse schema " + deployment.getFilename());
        }
    }
}
