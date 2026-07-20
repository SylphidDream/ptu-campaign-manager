import type { CampaignResponse } from '../types'
import { CampaignListItem } from './CampaignListItem'

type CampaignListProps = {
    campaigns: CampaignResponse[]
}

export function CampaignList({
                                 campaigns,
                             }: CampaignListProps) {
    return (
        <section>
            {campaigns.map((campaign) => (
                <CampaignListItem
                    key={campaign.id}
                    campaign={campaign}
                />
            ))}
        </section>
    )
}