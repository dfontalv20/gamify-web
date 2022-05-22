import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../App'
import studentIcon from '../../resources/img/IconoEstudiante.PNG'

export default function StudentNavbar() {
    const user = useContext(UserContext);

    return (
        <header className='container-fluid '>
            <nav className="navbar row row-cols-1 row-cols-md-2 bg-success">
                <div className="col d-flex justify-content-center"><img style={{maxWidth: '100%'}} src={studentIcon} alt="" /></div>
                <div className="col d-flex justify-content-center">
                    <label className='fs-3' style={{ color: 'var(--student-font-color)' }}>{user?.name.toUpperCase() ?? '-'}</label>
                </div>
            </nav>
            <div className="row d-flex">
                <div className="col-12 col-lg-8 mx-auto">
                    <ul className="navbar-nav d-flex align-items-center" style={{ height: '4rem' }}>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Inicio</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Tienda</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Recompensas</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Equipo</NavLink>
                        </li>
                    </ul>
                </div>

            </div>
        </header >
    )
}
