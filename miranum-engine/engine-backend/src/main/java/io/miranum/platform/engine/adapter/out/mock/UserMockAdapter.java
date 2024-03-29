package io.miranum.platform.engine.adapter.out.mock;

import io.miranum.platform.engine.application.port.out.user.UserPort;
import io.miranum.platform.engine.domain.user.User;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Stream;

@Component
public class UserMockAdapter implements UserPort {

    final User alex = new User("alex.admin", "Alex", "Admin", "alex@example.io");
    final User oliver = new User("oliver.office", "Oliver", "Office", "oliver@example.io");
    final User olga = new User("olga.office", "Olga", "Office", "john@example.io");
    final Map<String, User> users = Map.of("alex.admin", alex, "oliver.office", oliver, "olga.office", olga);

    @Override
    public Optional<User> findByUsername(String username) {
        return Optional.ofNullable(users.get(username));
    }

    @Override
    public List<User> findByNamesLike(String filter) {
        return Stream.of(alex, oliver, olga)
                .filter(user -> user.getForename().contains(filter) || user.getSurname().contains(filter))
                .toList();
    }
}
