import type{
    ApiErrorResponse,
    CampaignResponse,
    CreateCampaignRequest,
    UpdateCampaignRequest
} from "./types.ts"

//Definition
export class CampaignApiError extends Error {
    status: number
    details?: ApiErrorResponse

    constructor(
        message: string,
        status: number,
        details?: ApiErrorResponse
    ) {
        super(message)
        this.name = "CampaignApiError"
        this.status = status
        this.details = details
    }
}

//Main Business
export async function getCampaigns(): Promise<CampaignResponse[]>{
    const response = await fetch("/api/campaigns")

    return handleResponse<CampaignResponse[]>(response)
}

export async function getCampaignById(
    id: number
): Promise<CampaignResponse> {
    const response = await fetch(`/api/campaigns/${id}`)
    return handleResponse<CampaignResponse>(response)
}

export async function createCampaign(
    request: CreateCampaignRequest
): Promise<CampaignResponse> {
    const response = await fetch(`/api/campaigns`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(request)
    })
    return handleResponse<CampaignResponse>(response)
}

export async function updateCampaign(
    id: number,
    request: UpdateCampaignRequest
): Promise<CampaignResponse> {
    const response = await fetch(`/api/campaigns/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(request)
    })
    return handleResponse<CampaignResponse>(response)
}

export async function deleteCampaign(id: number): Promise<void> {
    const response = await fetch(`/api/campaigns/${id}`, {
        method: "DELETE",
    })
    if (!response.ok) {
        const error = await parseErrorResponse(response)
        throw new CampaignApiError(
            error?.message ?? 'Failed to delete campaign',
            response.status,
            error
        )
    }
}

//Support Logic
async function handleResponse<T>(response: Response): Promise<T> {
    if(!response.ok){
        const error =await parseErrorResponse(response)

        throw new CampaignApiError(
            error?.message ?? 'The request failed.',
            response.status,
            error
        )
    }
    return response.json() as Promise<T>
}

async function parseErrorResponse(response: Response): Promise<ApiErrorResponse | undefined> {
    try{
        return await response.json() as ApiErrorResponse
    } catch {
        return undefined
    }
}