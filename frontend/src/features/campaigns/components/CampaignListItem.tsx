import type { CampaignResponse } from '../types'

type CampaignListItemProps = {
    campaign: CampaignResponse
}

export function CampaignListItem({
                                     campaign,
                                 }: CampaignListItemProps) {
    return (
        <article>
            <h2>{campaign.name}</h2>

            <p>{campaign.description}</p>

            <dl>
                <div>
                    <dt>Current location:</dt>
                    <dd>{campaign.currentLocation}</dd>
                </div>

                <div>
                    <dt>Campaign date:</dt>
                    <dd>{campaign.currentDate}</dd>
                </div>

                <div>
                    <dt>Last updated:</dt>
                    <dd>{new Date(campaign.updatedAt).toLocaleString()}</dd>
                </div>
            </dl>
        </article>
    )
}