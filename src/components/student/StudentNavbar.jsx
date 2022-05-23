import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../App'
import studentIcon from '../../resources/img/IconoEstudiante.PNG'
import StudentLinks from './StudentLinks';

export default function StudentNavbar() {
    const user = useContext(UserContext);

    return (
        <header className='container-fluid'>
            <nav className="navbar row row-cols-1 row-cols-md-2 bg-success">
                <div className="col d-flex justify-content-center">
                    <NavLink className='d-flex align-items-center' to='/' >
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-house-fill" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z" />
                            <path fillRule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z" />
                        </svg>
                    </NavLink>
                    <img style={{ maxWidth: '100%' }} src={studentIcon} alt="" />
                </div>
                <div className="col d-flex justify-content-center">
                    <label className='fs-3 text-center' style={{ color: 'var(--student-font-color)' }}>{user?.name.toUpperCase() ?? '-'}</label>
                    <div className='p-1 bg-warning fs-5 position-absolute top-100 start-75 translate-middle'>
                        <label>{`$ECoins ${user?.student.ecoins}`}</label>
                    </div>
                </div>
            </nav>
        </header >
    )
}
