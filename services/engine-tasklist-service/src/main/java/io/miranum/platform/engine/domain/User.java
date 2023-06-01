package io.miranum.platform.engine.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.validation.constraints.NotBlank;
import java.util.List;

@Getter
@ToString(callSuper = true)
@AllArgsConstructor
@NoArgsConstructor
public class User {

    @NotBlank
    private String username;

    @NotBlank
    private String userId;

    private String surname;

    private String name;

    private String email;

    private List<Role> roles;
}
