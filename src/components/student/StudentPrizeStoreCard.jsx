import React, { useContext } from 'react'
import { Button, Card } from 'react-bootstrap'
import { UserContext } from '../../App';
import { buyPrize } from '../../services/user.service';

export default function StudentPrizeStoreCard({ prize }) {
    const user = useContext(UserContext);

    async function handleBuy() {
        const confirm = window.confirm('¿Esta seguro que quiere comprar este premio?');
        if (confirm) {
            try {
                const res = await buyPrize(user.id, prize.id);
                if (res.status === 201) {
                    window.dispatchEvent(new Event("storage"));
                    alert('Premio comprado');
                }
            } catch (error) {
                alert(error.response.data.message ?? 'Error al comprar el premio');
            }
        }
    }

    return (
        <Card className='w-100 h-100 shadow'>
            <Card.Body className='h-100 px-2 text-center py-5 d-flex align-items-between'>
                <label className='display-5 m-auto'>{prize.name}</label>
            </Card.Body>
            <div className="text-center">
                <div className='bg-warning'><strong className='text-primary fs-4 font-monospace'>{`$EC${prize.ecoins}`}</strong></div>
                <Button onClick={handleBuy} variant='warning' style={{ borderRadius: 0 }} className='my-3 w-75'>Comprar</Button>
            </div>
        </Card>

    )
}
