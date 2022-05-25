import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { confirmPurchase, denyPurchase } from '../../services/prize.service'

export default function AdminUnconfirmedPrizeCard({ purchase, onConfirm, onDeny }) {
  const [loading, setLoading] = useState(false)
  async function handleConfirmPurchase() {
    const confirm = window.confirm("¿Esta seguro de aprobar esta compra?")
    if (confirm) {
      try {
        setLoading(true);
        await confirmPurchase(purchase.id);
        alert('Compra confirmada');
        onConfirm();
      } catch (error) {
        console.error(error);
        alert('No se pudo validar la compra');
      }
      finally {
        setLoading(false);
      }
    }
  }
  async function handleDenyPurchase() {
    const confirm = window.confirm("¿Esta seguro de denegar esta compra?")
    if (confirm) {
      try {
        setLoading(true);
        await denyPurchase(purchase.id);
        alert('Compra denegada.');
        onDeny();
      } catch (error) {
        alert('No se pudo denegar la compra');
      }
      finally {
        setLoading(false);
      }
    }
  }

  return (
    <div className='card shadow'>
      <div className="row p-3">
        <div className="col-8 d-flex flex-column">
          <strong className='fs-5'>{purchase.prize.name}</strong>
          <label><i className='bi bi-person-fill me-2'></i>{purchase.student.user.name}</label>
          <label><i className='bi bi-calendar2-fill me-2'></i>{(new Date(purchase.createdAt)).toLocaleDateString()}</label>
          <label><i className='bi bi-coin me-2'></i>{`$EC${purchase.prize.ecoins}`}</label>
        </div>
        <div className="col-4 d-flex">
          <div className='m-auto d-flex flex-column'>
            <Button onClick={handleConfirmPurchase} disabled={loading} variant='success' className='my-1 bi bi-check-square' title='Confirmar'></Button>
            <Button onClick={handleDenyPurchase} disabled={loading} className='my-1 bi bi-x-square' title='Denegar'></Button>
          </div>
        </div>
      </div>
    </div>
  )
}
