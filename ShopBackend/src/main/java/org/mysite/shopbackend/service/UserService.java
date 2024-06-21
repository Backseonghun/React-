package org.mysite.shopbackend.service;

import org.mysite.shopbackend.Entity.Role;
import org.mysite.shopbackend.Entity.User;

import java.util.List;
import java.util.Optional;

public interface UserService {
    User saveUser(User user);
    Optional<User> findByUsername(String username);
    void changeRole(Role newRole, String username);

    List<User> userAll();
}

