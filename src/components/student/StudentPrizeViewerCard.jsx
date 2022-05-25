import React from 'react'

export default function StudentPrizeViewerCard({ prize }) {
    return (
        <div className='card shadow'>
            <div className="row px-3">
                <div className="col-2 d-flex align-items-center justify-content-start">
                    {
                        prize.confirmed ?
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                            </svg> :
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-clock" viewBox="0 0 16 16">
                                <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                            </svg>
                    }
                </div>
                <div className="col-8">
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
