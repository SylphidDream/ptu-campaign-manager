package com.sylphiddream.ptucampaignmanager.campaign.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record UpdateCampaignRequest(
        @NotBlank(message = "A name is required.")
        @Size(max = 100)
        String name,

        String description,

        @Size(max = 150)
        String currentLocation,

        @Size(max = 100)
        String currentDate
) {
}
