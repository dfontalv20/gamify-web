import React from 'react'

export default function StudentPrizeViewerCard({ prize }) {
    return (
        <div className='card p-3 shadow'>
            <div className="row">
                <div className="col-2 d-flex fs-2">
                    {
                        prize.confirmed ?
                            <i className="bi bi-check-circle-fill m-auto" title='Confirmado'></i> :
                            <i className="bi bi-clock m-auto" title='Pendiente por confirmación'></i>
                    }
                </div>
                <div className="col-8 px-0">
                    <strong>{prize.prize.name}</strong><br />
                    <label className='text-muted'>{(new Date(prize.createdAt)).toLocaleDateString()}</label>
                </div>
                <div className="col-2 d-flex justify-content-end align-items-center">
                    <strong className='text-danger'>{`$EC${prize.prize.ecoins}`}</strong>
                </div>
            </div>
        </div>
    )
}
