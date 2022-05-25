import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function AdminHomeLink({ to, title }) {
  return (
    <Link to={to} style={{textDecoration: 'none'}}>
        <Button className='w-100 h-100 d-flex py-3 unstyled' variant='success'>
            <strong className='m-auto fs-5'>{title}</strong>
        </Button>
    </Link>
  )
}
