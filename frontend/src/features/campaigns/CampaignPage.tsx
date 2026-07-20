import { useEffect, useState } from 'react'
import { getCampaigns } from './campaignApi'
import { CampaignList } from './components/CampaignList'
import type { CampaignResponse } from './types'

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

    return (
        <main>
            <h1>Campaigns</h1>
            <CampaignList campaigns={campaigns} />
        </main>
    )
}