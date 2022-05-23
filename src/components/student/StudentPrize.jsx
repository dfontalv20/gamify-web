import React, { useContext } from 'react'
import { Button, Card } from 'react-bootstrap'
import { UserContext } from '../../App';
import { buyPrize } from '../../services/user.service';

export default function StudentPrize({ prize }) {
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
                alert('Error al comprar el premio')
            }
        }
    }

    return (
        <Card className='w-100 h-100'>
            <Card.Body className='h-100 p-0'>
                <div className='text-center d-flex flex-column align-content-between h-100'>
                    <strong className='display-4 my-5'>{prize.name}</strong>
                    <div className="bg-warning mt-auto">
                        <strong className='text-primary'>{`$EC${prize.ecoins}`}</strong>
                    </div>
                    <Button onClick={handleBuy} variant='warning' style={{ borderRadius: 0 }} className='my-3 mx-5'>Comprar</Button>
                </div>
            </Card.Body>

        </Card>

    )
}
