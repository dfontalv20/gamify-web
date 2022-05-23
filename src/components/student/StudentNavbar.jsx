import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../App'
import studentIcon from '../../resources/img/IconoEstudiante.PNG'
import StudentLinks from './StudentLinks';

export default function StudentNavbar() {
    const user = useContext(UserContext);

    return (
        <header className='container-fluid '>
            <nav className="navbar row row-cols-1 row-cols-md-2 bg-success">
                <div className="col d-flex justify-content-center"><img style={{ maxWidth: '100%' }} src={studentIcon} alt="" /></div>
                <div className="col d-flex justify-content-center">
                    <label className='fs-3' style={{ color: 'var(--student-font-color)' }}>{user?.name.toUpperCase() ?? '-'}</label>
                    <div className='p-1 bg-warning fs-5 position-absolute top-100 start-75 translate-middle'>
                        <label>{`$ECoins ${user?.student.ecoins}`}</label>
                    </div>
                </div>
            </nav>
        </header >
    )
}
