package com.sylphiddream.ptucampaignmanager.common.error;

import java.util.Map;

public record ValidationErrorResponse(
        int status,
        String message,
        Map<String, String> errors
) {
}
