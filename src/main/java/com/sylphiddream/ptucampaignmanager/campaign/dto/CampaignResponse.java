package com.sylphiddream.ptucampaignmanager.campaign.dto;

import java.time.Instant;

public record CampaignResponse(
        Long id,
        String name,
        String description,
        Instant createdAt,
        Instant updatedAt
) {
}