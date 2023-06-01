package io.miranum.platform.engine.application.service;

import io.miranum.platform.engine.application.port.in.UserContext.UserContextCommand;
import io.miranum.platform.engine.application.port.in.UserContext.UserContextUseCase;
import io.miranum.platform.engine.domain.Role;
import io.miranum.platform.engine.domain.User;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;

import java.util.List;

@Slf4j
@Service
@AllArgsConstructor
@Validated
public class UserContextService implements UserContextUseCase {

    private static final ThreadLocal<User> USER_CONTEXT = new ThreadLocal<>();

    @Override
    public void setUserContext(UserContextCommand command) {
        List<Role> roleList= command.getRoles().stream().map(Role::new).toList();
        USER_CONTEXT.set(new User(command.getUsername(), command.getUserId(), command.getSurname(), command.getName(), command.getEmail(), roleList));
    }
}
