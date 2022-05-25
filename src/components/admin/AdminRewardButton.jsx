import React from 'react'

export default function AdminRewardButton({ reward, onClick = () => {}, disabled = false }) {
    return (
        <button disabled={disabled} className='card shadow p-3 btn btn-secondary w-100 h-100 d-flex flex-column text-center' onClick={() => onClick(reward)}>
            <i className='bi bi-trophy mx-auto fs-1'></i>
            <strong className='mx-auto'>{reward.name}</strong>
            <strong className='text-success mx-auto'>{`$EC${reward.ecoins}`}</strong>
        </button>
    )
}
