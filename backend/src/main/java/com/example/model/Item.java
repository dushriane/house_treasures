package com.example.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@Getter
@Setter
public class Item {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name="user_id", nullable=false)
    private User user;

    private String title;

    @Column(columnDefinition="TEXT")
    private String description;

    private String category;

    private BigDecimal price;

    private String imageUrl;

    private LocalDateTime createdAt = LocalDateTime.now();

    private LocalDateTime updatedAt;

    @Enumerated(EnumType.STRING)
    private Status status = Status.AVAILABLE;

    private enum Status{
        AVAILABLE,
        SOLD
    }
}
