import React from 'react'
import { Spinner } from 'react-bootstrap'

export default function WindowLoader() {
    return (
        <div className='container-fluid vh-100 d-flex'>
            <Spinner className='m-auto' variant='primary' style={{width: '20rem', height: '20rem'}} animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>
    )
}
