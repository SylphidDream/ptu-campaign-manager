package com.sylphiddream.ptucampaignmanager.campaign.dto;

import com.sylphiddream.ptucampaignmanager.campaign.CampaignEntity;

public final class CampaignMapper {

    private  CampaignMapper(){
    }

    public static CampaignEntity toEntity(CreateCampaignRequest request){
        return new CampaignEntity(
                request.name(),
                request.description(),
                request.currentLocation(),
                request.currentDate()
        );
    }

    public static CampaignResponse toResponse(CampaignEntity entity){
        return new CampaignResponse(
                entity.getId(),
                entity.getName(),
                entity.getDescription(),
                entity.getCreatedAt(),
                entity.getUpdatedAt()
        );
    }

}
