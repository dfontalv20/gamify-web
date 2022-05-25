import React from 'react'
import { Container } from 'react-bootstrap'
import AdminLinks from './AdminLinks'
import AdminNavbar from './AdminNavbar'

export default function AdminView({ children }) {
    return (
        <div className='container-fluid bg-warning min-vh-100'>
            <AdminNavbar />
            <Container className='bg-white py-3'>
                <div className='py-2'><AdminLinks /></div>
                <div className='w-100 px-2 px-lg-5'>
                    {children ?? <></>}
                </div>
            </Container>
        </div>
    )
}
