package org.zerock.springbackend.respository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.zerock.springbackend.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {
}
