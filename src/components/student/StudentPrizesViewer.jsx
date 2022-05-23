import React from 'react'
import StudentPrizeViewerCard from './StudentPrizeViewerCard'

export default function StudentPrizesViewer({ prizes }) {
    return (
        <div>
            <h2>Premios Comprados</h2>
            <div className='d-flex flex-column'>
                {
                    prizes.map((prize, key) => <div className="my-1" key={key}><StudentPrizeViewerCard prize={prize} /></div>)
                }
            </div>
        </div>
    )
}
