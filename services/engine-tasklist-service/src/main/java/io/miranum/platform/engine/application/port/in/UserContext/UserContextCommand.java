package io.miranum.platform.engine.application.port.in.UserContext;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class UserContextCommand {

    private String username;
    private String userId;
    private String surname;
    private String name;
    private String email;
    private List<String> roles;
}
