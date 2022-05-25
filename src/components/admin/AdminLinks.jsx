import React from 'react'
import { NavLink } from 'react-router-dom'

export default function AdminLinks() {
    return (
        <div className="row d-flex">
            <div className="col-12 col-lg-8 mx-auto">
                <ul className="navbar-nav d-flex align-items-center" style={{ height: '4rem' }}>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/admin">Inicio</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/admin/students">Estudiantes</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}
