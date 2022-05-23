import React, { useEffect, useState } from 'react'
import { Container, Spinner } from 'react-bootstrap'
import cartIcon from '../../resources/img/CarritoDeCompras.PNG'
import storeTitleIcon from '../../resources/img/TiendaDeRecompensas.PNG'
import { getAll } from '../../services/prize.service'
import StudentLinks from './StudentLinks'
import StudentNavbar from './StudentNavbar'
import StudentPrize from './StudentPrize'

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
        <div className='container-fluid bg-success min-vh-100'>
            <StudentNavbar />
            <Container className='bg-white py-3'>
                <div className='py-2'><StudentLinks /></div>

                <div className='w-100 px-2 px-lg-5'>
                    {
                        loading ?
                            <center><Spinner variant='primary' /></center>
                            :
                            <div className="row row-cols-1 row-cols-lg-3 g-3">
                                {
                                    prizes.map(prize => <div className="col" key={prize.id}><StudentPrize prize={prize} /></div>)
                                }
                            </div>
                    }
                </div>

            </Container>

        </div>
    )
}
