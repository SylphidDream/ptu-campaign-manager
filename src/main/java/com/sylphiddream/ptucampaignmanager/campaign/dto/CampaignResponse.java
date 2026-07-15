package com.sylphiddream.ptucampaignmanager.campaign.dto;

import java.time.Instant;

public record CampaignResponse(
        Long id,
        String name,
        String description,
        String currentLocation,
        String currentDate,
        Instant createdAt,
        Instant updatedAt
) {
}