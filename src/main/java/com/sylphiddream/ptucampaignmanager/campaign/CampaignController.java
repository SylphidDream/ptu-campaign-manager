package com.sylphiddream.ptucampaignmanager.campaign;

import com.sylphiddream.ptucampaignmanager.campaign.dto.CampaignResponse;
import com.sylphiddream.ptucampaignmanager.campaign.dto.CreateCampaignRequest;
import com.sylphiddream.ptucampaignmanager.campaign.dto.UpdateCampaignRequest;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/campaigns")
public class CampaignController {
    private final CampaignService campaignService;

    public CampaignController(CampaignService campaignService) {
        this.campaignService = campaignService;
    }

    //create
    @PostMapping
    public ResponseEntity<CampaignResponse> createCampaign(
            @Valid @RequestBody CreateCampaignRequest request
    ) {
        CampaignResponse response = campaignService.createCampaign(request);
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(response);
    }

    //getAll
    @GetMapping
    public ResponseEntity<List<CampaignResponse>> getAllCampaigns(){
        List<CampaignResponse> campaigns = campaignService.getAllCampaigns();
        return ResponseEntity.ok(campaigns);
    }

    //getById
    @GetMapping("/{id}")
    public ResponseEntity<CampaignResponse> getCampaign(@PathVariable Long id){
        CampaignResponse campaign = campaignService.getCampaignById(id);
        return ResponseEntity.ok(campaign);
    }

    //update
    @PutMapping("/{id}")
    public ResponseEntity<CampaignResponse> updateCampaign(
            @PathVariable Long id,
            @Valid @RequestBody UpdateCampaignRequest request
    ) {
        CampaignResponse campaignResponse = campaignService.updateCampaign(id, request);
        return ResponseEntity.ok(campaignResponse);
    }

    //delete
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCampaign(
            @PathVariable Long id
    ){
        campaignService.deleteCampaign(id);
        return ResponseEntity.noContent().build();
    }
}
