import React from 'react'
import { Container } from 'react-bootstrap'
import StudentLinks from './StudentLinks'
import StudentNavbar from './StudentNavbar'

export default function StudentView({ children }) {
  return (
    <div className='container-fluid bg-success min-vh-100'>
      <StudentNavbar />
      <Container className='bg-white py-3'>
        <div className='py-2'><StudentLinks /></div>
        <div className='w-100 px-2 px-lg-5'>
          {children}
        </div>
      </Container>
    </div>
  )
}
