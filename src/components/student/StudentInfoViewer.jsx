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
      <Card className='shadow p-2 my-2'>
        <div className='fs-3 d-flex align-items-center'>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-calendar2-fill me-3" viewBox="0 0 16 16">
            <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM2.545 3h10.91c.3 0 .545.224.545.5v1c0 .276-.244.5-.546.5H2.545C2.245 5 2 4.776 2 4.5v-1c0-.276.244-.5.545-.5z" />
          </svg>
          {student.group.description}
        </div>

      </Card>
      <Card className='shadow p-2 my-2'>
        <div className='fs-3 d-flex align-items-center'>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-building me-3" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694 1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z" />
            <path d="M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z" />
          </svg>
          {student.company.name}
        </div>

        {
          loading ? <center><Spinner className='my-3' animation='border' variant='primary' /></center> :
            <ul>
              {companyMembers.map((member, key) => <li key={key}>{member}</li>)}
            </ul>
        }

      </Card>
    </div>
  )
}
