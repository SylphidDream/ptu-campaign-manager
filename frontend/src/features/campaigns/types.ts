//Using type instead of interface for DTOs
export type CampaignResponse = {
    id: number
    name: string
    description: string
    currentLocation: string
    currentDate: string
    createdAt: string
    updatedAt: string
}

export type CreateCampaignRequest = {
    name: string
    description: string
    currentLocation: string
    currentDate: string
}

export type UpdateCampaignRequest = {
    name: string
    description: string
    currentLocation: string
    currentDate: string
}

export type ApiErrorResponse = {
    status: number
    error: string
    message: string
    path: string
}

export type ValidationErrorResponse = {
    status: number
    error: string
    message: string
    path: string
    errors: Record<string, string>
}