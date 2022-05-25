import React, { useEffect, useState } from 'react'
import { Card, Spinner } from 'react-bootstrap'
import { getCompanyById } from '../../services/company.service';

export default function StudentCompanyViewer({ student }) {
  const [companyMembers, setCompanyMembers] = useState([])
  const [loading, setLoading] = useState(true)

  async function loadCompany() {
    setLoading(true);
    try {
      const { data } = await getCompanyById(student.company.id)
      setCompanyMembers(data.students.map(student => student.user.name))
    } catch {
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    loadCompany()
  }, [])


  return (
    <div>
      <h2>Mi información</h2>
      <Card className='shadow p-3 my-2'>
        <div className='fs-3 d-flex align-items-center'>
          <label><i width="32" height="32" className="bi bi-calendar2-fill me-3"></i>{student.group.description}</label>

        </div>

      </Card>
      <Card className='shadow p-3 my-2'>
        <div className='fs-3 d-flex align-items-center'>
          <label><i width="32" height="32" fill="currentColor" className="bi bi-building me-3"></i>{student.company.name}</label>
        </div>

        {
          loading ? <center><Spinner className='my-3' animation='border' variant='primary' /></center> :
            <ul className='ms-4 list-unstyled'>
              {companyMembers.map((member, key) => <li className='bi bi-person-fill' key={key}> {member}</li>)}
            </ul>
        }

      </Card>
    </div>
  )
}
