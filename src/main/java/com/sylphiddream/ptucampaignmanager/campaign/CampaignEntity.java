package com.sylphiddream.ptucampaignmanager.campaign;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;

import java.time.Instant;

@Getter
@Entity
@Table(name = "campaigns")
public class CampaignEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Setter
    @NotBlank(message = "A name is required.")
    @Column(nullable = false, length = 100)
    private String name;

    @Setter
    @Column(columnDefinition = "TEXT")
    private String description;

    @Setter
    @Column(length = 150)
    private String currentLocation;

    @Setter
    @Column(length = 100)
    private String currentDate;

    @Column(nullable = false, updatable = false)
    private Instant createdAt;

    @Column(nullable = false)
    private Instant updatedAt;

    @Override
    public String toString(){
        return "CampaignEntity[" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", currentLocation='" + currentLocation + '\'' +
                ", createdAt=" + createdAt +
                ", updatedAt=" + updatedAt +
                ']';
    }

    protected CampaignEntity() {
        // Required by JPA
    }

    public CampaignEntity(
            String name,
            String description,
            String currentLocation,
            String currentDate
    ) {
        this.name = name;
        this.description = description;
        this.currentLocation = currentLocation;
        this.currentDate = currentDate;
    }

    @PrePersist
    protected void onCreate(){
        Instant now = Instant.now();
        createdAt= now;
        updatedAt= now;
    }

    @PreUpdate
    protected void onUpdate(){
        updatedAt= Instant.now();
    }
}
