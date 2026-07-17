package com.sylphiddream.ptucampaignmanager.common.error;

public record ApiErrorResponse(
        int status,
        String error,
        String message,
        String path
) {
}
