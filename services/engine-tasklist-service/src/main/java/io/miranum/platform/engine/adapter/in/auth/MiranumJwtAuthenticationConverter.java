package io.miranum.platform.engine.adapter.in.auth;

import io.miranum.platform.engine.application.port.in.UserContext.UserContextCommand;
import io.miranum.platform.engine.application.port.in.UserContext.UserContextUseCase;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import lombok.val;
import org.springframework.core.convert.converter.Converter;
import org.springframework.security.authentication.AbstractAuthenticationToken;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.security.oauth2.server.resource.authentication.JwtAuthenticationToken;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Slf4j
@Component
@RequiredArgsConstructor
public class MiranumJwtAuthenticationConverter implements Converter<Jwt, AbstractAuthenticationToken> {
    private final UserContextUseCase userContextUseCase;

    @Override
    public AbstractAuthenticationToken convert(final Jwt jwt) {
        val miranumRoles = new ArrayList<String>();
        val resourceAccess =jwt.getClaimAsMap("ressource_access");
        if (resourceAccess != null) {
            @SuppressWarnings("unchecked") val miranumAccess = (Map<String, List<String>>) resourceAccess.get("miranum");
            if (miranumAccess != null) {
                miranumRoles.addAll(miranumAccess.get("roles"));
            }
        }

        val username = (String) jwt.getClaim("preferred_username");
        val userRoles = jwt.getClaimAsStringList("user_roles");
        val userId = jwt.getClaimAsString("miranumObjectId");
        val surname = jwt.getClaimAsString("familiy_name");
        val name = jwt.getClaimAsString("given_name");
        val email = jwt.getClaimAsString("email");

        var userContext = new UserContextCommand(username, userId, surname, name, email, userRoles);
        userContextUseCase.setUserContext(userContext);

        List<SimpleGrantedAuthority> authorities = new ArrayList<>();
        userRoles.forEach(role -> authorities.add(new SimpleGrantedAuthority(role)));

        return new JwtAuthenticationToken(jwt, authorities);
    }
}
