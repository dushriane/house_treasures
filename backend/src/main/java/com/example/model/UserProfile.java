package com.example.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import java.time.LocalDateTime;

@Entity
@Table(name = "user_profiles")
@Getter
@Setter
public class UserProfile {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;
    
    // Profile information
    private String profilePictureUrl;
    private String coverPhotoUrl;
    private String bio;
    private String website;
    
    // Contact preferences
    private String preferredContactMethod; // "PHONE", "EMAIL", "IN_APP"
    private Boolean isPhonePublic = false;
    private Boolean isEmailPublic = false;
    
    // Verification status
    private Boolean emailVerified = false;
    private Boolean phoneVerified = false;
    private Boolean identityVerified = false; // ID verification
    private String verificationToken;
    private LocalDateTime emailVerifiedAt;
    private LocalDateTime phoneVerifiedAt;
    private LocalDateTime identityVerifiedAt;
    
    // Trust and reputation
    private Double averageRating = 0.0;
    private Integer totalRatings = 0;
    private Integer positiveRatings = 0;
    private Integer neutralRatings = 0;
    private Integer negativeRatings = 0;
    
    // Activity statistics
    private Integer itemsListed = 0;
    private Integer itemsSold = 0;
    private Integer itemsPurchased = 0;
    private Integer totalTransactions = 0;
    private LocalDateTime lastActiveAt;
    
    // Badges and achievements
    private Boolean isTopSeller = false;
    private Boolean isVerifiedSeller = false;
    private Boolean isEarlyAdopter = false;
    private Integer responseRate = 100; // Percentage of messages responded to
    
    // Preferences
    private String preferredLanguage = "en"; // "en", "rw", "fr"
    private String timezone = "Rwanda/Kigali";
    private Boolean emailNotifications = true;
    
    // Timestamps
    private LocalDateTime createdAt = LocalDateTime.now();
    private LocalDateTime updatedAt;
    
    @PreUpdate
    protected void onUpdate() {
        updatedAt = LocalDateTime.now();
    }
}
