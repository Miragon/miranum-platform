package io.miranum.platform.engine.application.port.out.UserContext;

import io.miranum.platform.engine.domain.User;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.util.List;
import java.util.Objects;


@RequiredArgsConstructor
@Getter
public class UserContextOutCommand {
    private final String username;
    private final String userId;
    private final String surname;
    private final String name;
    private final String email;
    private final List<String> roles;

    public UserContextOutCommand(User user){
        this.username = user.getUsername();
        this.email = user.getEmail();
        this.name = user.getName();
        this.userId = user.getUserId();
        this.surname = user.getSurname();

        this.roles = user.getRoles().stream()
                .map(role -> Objects.toString(role, null))
                .toList();
    }
}
