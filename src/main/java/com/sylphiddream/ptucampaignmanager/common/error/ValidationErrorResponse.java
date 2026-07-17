package com.sylphiddream.ptucampaignmanager.common.error;

import java.util.Map;

public record ValidationErrorResponse(
        int status,
        String error,
        String message,
        String path,
        Map<String, String> errors
) {
}
