import type { CampaignResponse } from '../types'
import { CampaignListItem } from './CampaignListItem'

type CampaignListProps = {
    campaigns: CampaignResponse[]
    onDelete: (id: number) => void
}

export function CampaignList({
                                 campaigns,
                                 onDelete,
                             }: CampaignListProps) {
    return (
        <div className="campaign-list row">
            {campaigns.map((campaign) => (
                <CampaignListItem
                    key={campaign.id}
                    campaign={campaign}
                    onDelete={onDelete}
                />
            ))}
        </div>
    )
}