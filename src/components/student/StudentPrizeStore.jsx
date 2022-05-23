import React, { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap'
import { getAll } from '../../services/prize.service'
import StudentPrizeStoreCard from './StudentPrizeStoreCard'
import StudentView from './StudentView'

export default function StudentPrizeStore() {
    const [loading, setLoading] = useState(false)
    const [prizes, setPrizes] = useState([])

    async function loadPrizes() {
        try {
            setLoading(true);
            const res = await getAll();
            setPrizes(res.data)
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        loadPrizes();
    }, [])


    return (
        <StudentView>
            {
                loading ?
                    <center><Spinner variant='primary' /></center>
                    :
                    <div className="row row-cols-1 row-cols-lg-3 g-3">
                        {
                            prizes.map(prize => <div className="col" key={prize.id}><StudentPrizeStoreCard prize={prize} /></div>)
                        }
                    </div>
            }
        </StudentView>


    )
}
