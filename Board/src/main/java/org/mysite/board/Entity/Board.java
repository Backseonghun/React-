package org.mysite.board.Entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.CreationTimestamp;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "board")
@Setter
@Getter
public class Board {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long bno;

    @Column(name ="title",nullable = false)
    private String title;

    @Column(name = "content", nullable = false)
    private String content;

    @Column(name ="author", nullable = false)
    private String author;

    @Column(name = "hit", nullable = false)
//    @ColumnDefault("0")
    private Integer hit = 0;

    @CreationTimestamp
    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm")
    @Column(name ="create_time", nullable = false)
    private LocalDateTime createTime;
}

