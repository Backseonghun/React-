package org.mysite.shopbackend.service;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.mysite.shopbackend.Entity.Role;
import org.mysite.shopbackend.Entity.User;
import org.mysite.shopbackend.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;
//    private final PasswordEncoder passwordEncoder;

    public User saveUser(User user) {
//        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setRole(Role.USER);
        user.setCreateTime(LocalDateTime.now());
        return userRepository.save(user);
    }

    @Override
    public Optional<User> findByUsername(String username) {
        return userRepository.findByUsername(username);
    }

    @Override
    @Transactional
    public void changeRole(Role newRole, String username) {
        userRepository.updateUserRole(username, newRole);
    }

    @Override
    public List<User> userAll() {
        return userRepository.findAll();
    }
}
