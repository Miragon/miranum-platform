package io.miranum.platform.engine.adapter.out.auth;

import io.miranum.platform.engine.api.AppAuthenticationProvider;
import io.miranum.platform.engine.application.port.out.UserContext.UserContextOutCommand;
import io.miranum.platform.engine.application.port.out.UserContext.UserContextOutPort;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class AppAuthenticationProviderImpl implements AppAuthenticationProvider, UserContextOutPort {

    private String userId;
    private List<String> roles;

    @Override
    public String getCurrentUserId() {
        return this.userId;
    }

    @Override
    public List<String> getCurrentUserGroups()
    {
        return roles;
    }

    @Override
    public void getCurrentUser(UserContextOutCommand command) {
        userId = command.getUserId();
        roles = command.getRoles();
    }
}
