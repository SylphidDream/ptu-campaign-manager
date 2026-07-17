package com.sylphiddream.ptucampaignmanager.campaign;

import com.sylphiddream.ptucampaignmanager.campaign.dto.CampaignResponse;
import com.sylphiddream.ptucampaignmanager.campaign.dto.CreateCampaignRequest;
import com.sylphiddream.ptucampaignmanager.campaign.dto.UpdateCampaignRequest;
import com.sylphiddream.ptucampaignmanager.common.error.CampaignNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CampaignService {

    private final CampaignRepository repository;

    public CampaignService(CampaignRepository repository){
        this.repository = repository;
    }

    public List<CampaignResponse> getAllCampaigns() {
        List<CampaignEntity> campaignEntities = repository.findAll();
        return campaignEntities.stream()
                .map(campaign -> CampaignMapper.toResponse(campaign))
                .toList();
    }

    public CampaignResponse getCampaignById(Long id){
        return CampaignMapper.toResponse(repository.findById(id)
                .orElseThrow(() -> new CampaignNotFoundException(id)
                )
        );
    }

    public CampaignResponse createCampaign(CreateCampaignRequest request){
        CampaignEntity campaign = CampaignMapper.toEntity(request);
        return CampaignMapper.toResponse(repository.save(campaign));
    }

    public CampaignResponse updateCampaign(Long id, UpdateCampaignRequest changes){
        CampaignEntity current = repository.findById(id)
                .orElseThrow(() ->
                        new CampaignNotFoundException(id)
                );
        current.setName(changes.name());
        current.setDescription(changes.description());
        current.setCurrentLocation(changes.currentLocation());
        current.setCurrentDate(changes.currentDate());
        return CampaignMapper.toResponse(repository.save(current));
    }

    public void deleteCampaign(Long id){
        repository.findById(id).orElseThrow(() -> new CampaignNotFoundException(id)
        );
        repository.deleteById(id);
    }
}
