import React from 'react'

export default function StudentRewardsViewerCard({ reward }) {
    return (
        <div className='card shadow'>
            <div className="row px-3">
                <div className="col-8">
                    <strong>{reward.reward.name}</strong><br />
                    <label className='text-muted'>{(new Date(reward.createdAt)).toLocaleDateString()}</label>
                </div>
                <div className="col-4 d-flex justify-content-end align-items-center">
                    <strong className='text-success'>{`$EC${reward.reward.ecoins}`}</strong>
                </div>
            </div>
        </div>
    )
}
