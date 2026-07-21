import { useEffect, useState } from 'react'
import {deleteCampaign, getCampaigns} from './campaignApi'
import { CreateCampaignForm } from "./CreateCampaignForm.tsx";
import { CampaignList } from './components/CampaignList'
import type { CampaignResponse } from './types'
import {Container} from "react-bootstrap";

export function CampaignPage() {
    const [campaigns, setCampaigns] = useState<
        CampaignResponse[]
    >([])

    const [isLoading, setIsLoading] = useState(true)
    const [errorMessage, setErrorMessage] = useState<
        string | null
    >(null)

    useEffect(() => {
        async function loadCampaigns() {
            try {
                const loadedCampaigns = await getCampaigns()

                setCampaigns(loadedCampaigns)
            } catch (error) {
                if (error instanceof Error) {
                    setErrorMessage(error.message)
                } else {
                    setErrorMessage('An unexpected error occurred')
                }
            } finally {
                setIsLoading(false)
            }
        }

        void loadCampaigns()
    }, [])

    if (isLoading) {
        return <p>Loading campaigns...</p>
    }

    if (errorMessage !== null) {
        return <p role="alert">{errorMessage}</p>
    }

    if (campaigns.length === 0) {
        return (
            <main>
                <h1>Campaigns</h1>
                <p>No campaigns have been created yet.</p>
            </main>
        )
    }

    function handleCampaignCreated(campaign: CampaignResponse) {
        setCampaigns((currentCampaigns) => [
            ...currentCampaigns,
            campaign,
        ])
    }

    async function handleDelete(id: number) {
        const confirmed = window.confirm(
            "Delete this campaign?"
        );

        if (!confirmed) {
            return;
        }

        try {
            await deleteCampaign(id);

            setCampaigns(current =>
                current.filter(campaign => campaign.id !== id)
            );
        }
        catch (error) {
            alert("Failed to delete campaign.");
        }
    }

    return (
        <Container className="py-4">
            <div className="row">
                <CreateCampaignForm
                    onCampaignCreated={handleCampaignCreated}
                />
            </div>
            <div className="row">
                <h1>Campaigns</h1>
            </div>
            {campaigns.length === 0 ? (
                <p>No campaigns have been created yet.</p>
            ) : (
                <CampaignList
                    campaigns={campaigns}
                    onDelete={handleDelete}
                />
            )}
        </Container>
    )
}