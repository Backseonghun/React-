package org.zerock.springbackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.zerock.springbackend.entity.User;
import org.zerock.springbackend.exception.UserNotFoundException;
import org.zerock.springbackend.respository.UserRepository;

import java.util.List;

    @CrossOrigin("http://localhost:3000")
@RestController
public class UserController {
    @Autowired
    private UserRepository userRepository;

        @PostMapping("/user")
        public User newUser(@RequestBody User newUser){
            return userRepository.save(newUser);
        }
        @GetMapping("/users")
        public List<User> getAllUsers(){
            return userRepository.findAll();
        }
        @GetMapping("/user/{id}")
        public User getUserById(@PathVariable Long id){
            return userRepository.findById(id).orElseThrow(() ->new UserNotFoundException(id));
        }

        @PutMapping("/user/{id}")
        User updateUser(@RequestBody User newUser, @PathVariable Long id) {
            return userRepository.findById(id)
                    .map(user -> {
                        user.setUsername(newUser.getUsername());
                        user.setName(newUser.getName());
                        user.setEmail(newUser.getEmail());
                        return userRepository.save(user);
                    }).orElseThrow(() -> new UserNotFoundException(id));
        }

        @DeleteMapping("/user/{id}")
        String deleteUser(@PathVariable Long id){
            if(!userRepository.existsById(id)){
                throw new UserNotFoundException(id);
            }
            userRepository.deleteById(id);
            return  "유저 아이디: "+id+"는 삭제 되었습니다";
        }
    }
