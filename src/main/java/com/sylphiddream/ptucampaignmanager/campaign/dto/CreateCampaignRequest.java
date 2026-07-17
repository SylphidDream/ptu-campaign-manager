package com.sylphiddream.ptucampaignmanager.campaign.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record CreateCampaignRequest(
        @NotBlank(message = "A name is required.")
        @Size(max = 100, message = "Name must not exceed 100 characters.")
        String name,

        @Size(max = 5000, message = "Description must not exceed 5000 characters.")
        String description,

        @Size(max = 150, message = "Current Location must not exceed 150 characters.")
        String currentLocation,

        @Size(max = 100, message = "Current Date must not exceed 100 characters.")
        String currentDate
) {
}
