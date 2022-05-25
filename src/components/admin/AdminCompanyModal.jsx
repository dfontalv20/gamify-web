import { Modal } from 'react-bootstrap';
import React, { useEffect, useState } from 'react'
import { ModalBody, ModalHeader, Spinner } from 'react-bootstrap';
import { getCompanyById } from '../../services/company.service';

export default function AdminCompanyModal({ show, onClose, companyId }) {
    const [company, setCompany] = useState(null);
    const [loading, setLoading] = useState(true);

    async function loadCompany() {
        try {
            if (!companyId) return
            setLoading(true);
            const res = await getCompanyById(companyId);
            setCompany(res.data);
        } catch (error) {
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        loadCompany();
    }, [companyId])


    return (
        <Modal show={show} onHide={onClose}>
            <ModalHeader closeButton></ModalHeader>
            <ModalBody style={{ minHeight: '30vh' }}>
                {
                    loading || !company ?
                        <Spinner variant='primary' className='m-auto' />
                        :
                        <div className="row">
                            <div className="col-12 col-lg-5 d-flex flex-column justify-content-center align-items-center">
                                <i className='bi bi-building' style={{fontSize: '6rem'}}></i>
                                <h1>{company.name}</h1>
                                <label><i className='me-2 bi bi-calendar-fill' />{company.group.description}</label>
                            </div>
                            <div className="col-12 col-lg-7 d-flex flex-column">
                                <div className='w-100'><h4>Miembros</h4></div>
                                <div className='d-flex flex-column'>
                                    {
                                        company.students.map(student =>
                                            <div className='card p-2 mb-2 shadow' key={student.id}>{student.user.name}</div>)
                                    }
                                </div>
                            </div>
                        </div>
                }
            </ModalBody>
        </Modal>
    )
}
