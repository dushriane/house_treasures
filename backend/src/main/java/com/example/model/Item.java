package com.example.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "items")
@Getter
@Setter
public class Item {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "seller_id", nullable = false)
    private User seller;

    @Column(nullable = false)
    private String title;

    @Column(columnDefinition = "TEXT")
    private String description;

    @ManyToOne
    @JoinColumn(name = "category_id", nullable = false)
    private Category category;

    @Column(nullable = false, precision = 10, scale = 2)
    private BigDecimal price;

    // Item condition and details
    @Enumerated(EnumType.STRING)
    private ItemCondition condition;

    private String brand;
    private String model;
    private Integer yearOfPurchase;
    private String originalReceipt; // URL to receipt image

    // Location where item is available for pickup
    private String pickupProvince;
    private String pickupDistrict;
    private String pickupSector;
    private String pickupCell;
    private String pickupVillage;
    private String pickupAddress;

    // Images
    @ElementCollection
    @CollectionTable(name = "item_images", joinColumns = @JoinColumn(name = "item_id"))
    @Column(name = "image_url")
    private List<String> imageUrls;

    // Item status
    @Enumerated(EnumType.STRING)
    private ItemStatus status = ItemStatus.AVAILABLE;

    // Negotiation settings
    private Boolean isNegotiable = true;
    private BigDecimal minimumPrice; // If seller wants to set a minimum

    // Timestamps
    private LocalDateTime createdAt = LocalDateTime.now();
    private LocalDateTime updatedAt;
    private LocalDateTime soldAt;


    @PreUpdate
    protected void onUpdate() {
        updatedAt = LocalDateTime.now();
    }

    public enum ItemCondition {
        NEW,
        LIKE_NEW,
        GOOD,
        FAIR,
        POOR
    }

    public enum ItemStatus {
        AVAILABLE,
        RESERVED,
        SOLD,
        DELETED
    }
}
