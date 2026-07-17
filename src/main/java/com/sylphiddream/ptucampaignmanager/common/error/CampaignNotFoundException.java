package com.sylphiddream.ptucampaignmanager.common.error;

public class CampaignNotFoundException extends RuntimeException{
    public CampaignNotFoundException(Long id){
        super("Campaign " + id + " was not found");
    }
}
