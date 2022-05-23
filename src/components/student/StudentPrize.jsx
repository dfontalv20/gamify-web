import React from 'react'
import { Button, Card } from 'react-bootstrap'

export default function StudentPrize({ prize }) {
    return (
        <Card className='w-100 h-100'>
            <Card.Body className='h-100 p-0'>
                <div className='text-center d-flex flex-column align-content-between h-100'>
                    <strong className='display-4 my-5'>{prize.name}</strong>
                    <div className="bg-warning mt-auto">
                        <strong className='text-primary'>{`$EC${prize.ecoins}`}</strong>
                    </div>
                    <Button variant='warning' style={{ borderRadius: 0 }} className='my-3 mx-5'>Comprar</Button>
                </div>
            </Card.Body>

        </Card>

    )
}
