import React from 'react'
import { Route } from 'react-router-dom'

function PrivateRoute({ path, element, admin = false }) {
    //si no logeado, echalo pa tras
    return (
        <Route path={path} element={element} />
    )
}

export default PrivateRoute