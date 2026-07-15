package com.sylphiddream.ptucampaignmanager.campaign;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CampaignService {

    private final CampaignRepository repository;

    public CampaignService(CampaignRepository repository){
        this.repository = repository;
    }

    public List<CampaignEntity> getAllCampaigns() {
          return repository.findAll();
    }

    public CampaignEntity getCampaignById(Long id){
        return repository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Campaign not found: " + id));
    }

    public CampaignEntity createCampaign(CampaignEntity campaign){
        return repository.save(campaign);
    }

    public CampaignEntity updateCampaign(CampaignEntity changes){
        return repository.save(changes);
    }

    public void deleteCampaign(Long id){
        repository.deleteById(id);
    }
}
