package com.sylphiddream.ptucampaignmanager.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ApplicationController {

    @GetMapping("/")
    public String home() {
        return "PTU Campaign Manager is running.";
    }
}