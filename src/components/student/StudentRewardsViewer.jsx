import React from 'react'
import StudentRewardsViewerCard from './StudentRewardsViewerCard'

export default function StudentRewardsViewer({ rewards }) {
    return (
        <div>
            <h2>Recompensas ganadas</h2>
            <div className='d-flex flex-column'>
                {
                    rewards.map((reward, key) => <div className="my-1" key={key}><StudentRewardsViewerCard reward={reward} /></div>)
                }
            </div>
        </div>
    )
}
