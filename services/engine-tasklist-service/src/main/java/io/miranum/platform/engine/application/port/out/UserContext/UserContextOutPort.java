package io.miranum.platform.engine.application.port.out.UserContext;

public interface UserContextOutPort {
    void getCurrentUser(UserContextOutCommand command);
}
