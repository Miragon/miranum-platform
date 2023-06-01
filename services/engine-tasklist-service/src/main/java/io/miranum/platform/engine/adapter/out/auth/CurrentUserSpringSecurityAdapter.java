package io.miranum.platform.engine.adapter.out.auth;

import io.holunda.polyflow.view.auth.User;
import io.miranum.platform.engine.application.port.out.UserContext.UserContextOutCommand;
import io.miranum.platform.engine.application.port.out.UserContext.UserContextOutPort;
import io.miranum.platform.tasklist.application.port.out.security.CurrentUserPort;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.Collections;

/**
 * Service to resolve currently logged-in user.
 */
@Component
@RequiredArgsConstructor
public class CurrentUserSpringSecurityAdapter implements CurrentUserPort, UserContextOutPort {
    private String userId;

    @Override
    public User getCurrentUser() {
        return new User(userId, Collections.emptySet());
    }

    /**
     * Retrieves the username of the current user.
     *
     * @return username of the current user (from the user_name claim).
     */
    @Override
    public String getCurrentUserUsername() {
        return getCurrentUser().getUsername();
    }

    @Override
    public void getCurrentUser(UserContextOutCommand command) {
        userId = command.getUserId();
    }
}
