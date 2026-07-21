import { useState } from 'react'
import { createCampaign } from './campaignApi'
import type {
    CampaignResponse,
    CreateCampaignRequest,
} from './types'

type CreateCampaignFormProps = {
    onCampaignCreated: (campaign: CampaignResponse) => void
}

export function CreateCampaignForm({
                                       onCampaignCreated
                                   }: CreateCampaignFormProps) {
    const [formData, setFormData] = useState<CreateCampaignRequest>({
        name: '',
        description: '',
        currentLocation: '',
        currentDate: '',
    })

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [errorMessage, setErrorMessage] = useState<string | null>(null)

    function handleChange(
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) {
        const { name, value } = event.target

        setFormData((currentFormData) => ({
            ...currentFormData,
            [name]: value,
        }))
    }

    async function handleSubmit(
        event: React.FormEvent<HTMLFormElement>,
    ) {
        event.preventDefault()

        setIsSubmitting(true)
        setErrorMessage(null)

        try {
            const createdCampaign = await createCampaign(formData)

            onCampaignCreated(createdCampaign)

            setFormData({
                name: '',
                description: '',
                currentLocation: '',
                currentDate: '',
            })
        } catch (error) {
            if (error instanceof Error) {
                setErrorMessage(error.message)
            } else {
                setErrorMessage('Failed to create campaign')
            }
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="campaign-form">
            <h2>Create Campaign</h2>
            <div className="form-group row">
                <label className="col-sm-2 col-form-label">Name:</label>
                <input
                    className="col-sm-4 "
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group row">
                <label className="col-sm-2 col-form-label">Description:</label>
                <textarea
                    id="description"
                    className="col-sm-4"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                />
            </div>

            <div className="form-group row">
                <label className="col-sm-2 col-form-label">Current location:</label>
                <input
                    id="currentLocation"
                    className="col-sm-4"
                    name="currentLocation"
                    value={formData.currentLocation}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group row">
                <label className="col-sm-2 col-form-label">Campaign date:</label>
                <input
                    id="currentDate"
                    className="col-sm-4"
                    name="currentDate"
                    value={formData.currentDate}
                    onChange={handleChange}
                />
            </div>

            {errorMessage && <p>{errorMessage}</p>}

            <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Creating...' : 'Create Campaign'}
            </button>
        </form>
    )
}