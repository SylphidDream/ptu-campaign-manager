import type { CampaignResponse } from '../types'
import {Button} from "react-bootstrap";

type CampaignListItemProps = {
    campaign: CampaignResponse
    onDelete: (id: number) => void;
}

export function CampaignListItem({
                                     campaign,
                                     onDelete,
                                 }: CampaignListItemProps) {
    return (
        <div className="campaign col-md-4">
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
                    <dt>Last updated: </dt>
                    <dd>{new Date(campaign.updatedAt).toLocaleString()}</dd>
                </div>
            </dl>

            <a className="btn btn-primary" href={`/campaigns/${campaign.id}`} style={{paddingRight: '10px'}}>edit</a>
            <Button
                variant="outline-danger"
                onClick={() => onDelete(campaign.id)}
            >
                Delete
            </Button>
        </div>
    )
}