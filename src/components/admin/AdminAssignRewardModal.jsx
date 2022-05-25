import React, { useEffect, useState } from 'react'
import { Modal, ModalBody, ModalHeader, Spinner } from 'react-bootstrap'
import { getAllRewards } from '../../services/reward.service';
import { assignReward } from '../../services/user.service';
import AdminRewardButton from './AdminRewardButton';

export default function AdminAssignRewardModal({ show, onClose, student, onAssign = () => { } }) {

  const [rewards, setRewards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [assigning, setAssigning] = useState(false);

  async function loadRewards() {
    try {
      setLoading(true);
      const res = await getAllRewards();
      setRewards(res.data);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  }

  async function handleAssignReward(reward) {
    const confirm = window.confirm(`Esta seguro de asignar esta recompensa a ${student.name}`)
    if (!confirm) return
    try {
      setAssigning(true);
      await assignReward(student.id, reward.id);
      alert('Recompensa asignada');
      onAssign(student, reward);
    } catch (error) {
      alert(error.res.data.message ?? 'Error al asignar recompensa');
    } finally {
      setAssigning(false);
    }
  }

  useEffect(() => {
    loadRewards();
  }, [])


  return (
    <Modal show={show} onHide={onClose}>
      <ModalHeader closeButton>{student ? `Asignar recompensa a ${student.name.split(' ')[0]}` : ''}</ModalHeader>
      <ModalBody className={loading ? 'd-flex' : 'row row-cols-2 g-2'} style={{ minHeight: '30vh' }}>
        {
          loading ?
            <Spinner variant='primary' className='m-auto' />
            :
            rewards.map(reward => <div className='col' key={reward.id} ><AdminRewardButton reward={reward} onClick={handleAssignReward} disabled={assigning} /></div>)

        }
      </ModalBody>
    </Modal>
  )
}
