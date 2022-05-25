import React, { useContext } from 'react'
import { Button } from 'react-bootstrap';
import { AdminStudentsContext } from './AdminStudents'

export default function AdminStudentCard({ student, onAssignReward }) {

    const { companies } = useContext(AdminStudentsContext);

    return (
        <div className='card shadow p-3'>
            <div className='row'>
                <div className="col-8 d-flex flex-column">
                    <strong className='fs-4'>{student.name}</strong>
                    <label><i className="bi bi-building me-2"></i>{companies.find(company => company.id === student.student.companyId).name ?? '-'}</label>
                    <label><i className="bi bi-coin me-2"></i>{`$EC${student.student.ecoins}`}</label>
                </div>
                <div className="col-4 d-flex">
                    <div className='m-auto d-flex flex-column'>
                        <Button variant='success' className='bi bi-trophy' onClick={() => onAssignReward(student)}></Button>
                        <Button variant='warning' className='bi bi-pencil my-1'></Button>
                        <Button variant='primary' className='bi bi-x-circle'></Button>
                    </div>
                </div>
            </div>

        </div>
    )
}
