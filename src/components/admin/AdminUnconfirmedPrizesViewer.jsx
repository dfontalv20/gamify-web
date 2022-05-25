import React, { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap';
import { getUnconfirmedPurchases } from '../../services/prize.service';
import AdminUnconfirmedPrizeCard from './AdminUnconfirmedPrizeCard';

export default function AdminUnconfirmedPrizesViewer() {

  const [purchases, setPurchases] = useState([]);
  const [loading, setLoading] = useState(true);

  async function loadUnconfirmedPurchases() {
    setLoading(true)
    try {
      const res = await getUnconfirmedPurchases();
      setPurchases(res.data);
    } catch (error) { }
    finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadUnconfirmedPurchases()
  }, [])


  return (
    <div>
      <h2>Premios por confirmar</h2>
      <div className="d-flex flex-column">
        {
          loading ?
            <Spinner className='mx-auto my-3' variant='warning' />
            :
            purchases.map(purchase =>
              <div className='my-1' key={purchase.id}>
                <AdminUnconfirmedPrizeCard purchase={purchase} onConfirm={loadUnconfirmedPurchases} onDeny={loadUnconfirmedPurchases}/>
              </div>)
        }

      </div>
    </div>
  )
}
