package org.mysite.shopbackend.Entity;

import jakarta.persistence.*;
import lombok.Data;
import java.time.LocalDateTime;

@Data
@Entity
@Table(name="users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "name", nullable = false)
    private String name;
    @Column(name ="username", nullable = false)
    private String username;
    @Column(name ="password", nullable = false)
    private String password;
    @Column(name ="create_time", nullable = false)
    private LocalDateTime createTime;

    @Enumerated(EnumType.STRING)
    @Column(name ="role", nullable = false)
    private Role role;
}
