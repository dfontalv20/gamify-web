import { Button } from 'react-bootstrap'
import React from 'react'

export default function AdminCompanyCard({ company, onSelect }) {
    return (
        <div className='card shadow p-3'>
            <div className='row'>
                <div className="col-12 d-flex flex-column">
                    <strong className='fs-4'>{company.name}</strong>
                </div>
                <div className="col-12 d-flex">
                    <div className='m-auto d-flex'>
                        <Button variant='success' className='bi bi-search' onClick={() => onSelect(company)}></Button>
                        <Button variant='warning' className='bi bi-pencil mx-1'></Button>
                        <Button variant='primary' className='bi bi-x-circle'></Button>
                    </div>
                </div>
            </div>

        </div>
    )
}
