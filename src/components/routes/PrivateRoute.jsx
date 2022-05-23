import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { UserContext } from '../../App'

function PrivateRoute({ admin = false, children }) {
    const user = useContext(UserContext)
    if (!user || (user && user.student && admin)) return <Navigate to='/' />
    return children
}

export default PrivateRoute