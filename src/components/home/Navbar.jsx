import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { UserContext } from '../../App';
import logoApp from '../../resources/img/IconoDeLaApp.jpeg'
import { logout } from '../../services/auth.service';
import LoginModal from './LoginModal'


function Navbar() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const user = useContext(UserContext);

  function handleLogout() {
    const confirm = window.confirm('¿Esta seguro que desea cerrar sesión?');
    if (confirm) logout();
  }

  return (
    <header className='container-fluid'>
      <nav className="row">
        <div className="col-12 col-md-5">
          <img
            className="navbar-brand m-auto d-flex"
            src={logoApp}
            width="200rem"
            alt="Icono de la App"
          />
        </div>
        <div className="col-12 col-md-7 d-flex">
          <ul className='navbar-nav align-items-center w-100'>
            <li className="nav-item">
              {user ?
                user.student ?
                  <NavLink to="/student" className='nav-link'>Estudiante</NavLink>
                  :
                  <NavLink to="/admin" className='nav-link'>Administrador</NavLink>
                :
                <NavLink to="/" className='nav-link' onClick={() => setShowLoginModal(true)}>Acceder</NavLink>}
            </li>
            {
              user &&
              <li className="nav-item">
                <NavLink to="/" className='nav-link' onClick={() => handleLogout()}>Cerrar sesion</NavLink>
              </li>
            }
          </ul>
        </div>
      </nav>
      <LoginModal show={showLoginModal} onClose={() => setShowLoginModal(false)} onLoginSuccess />
    </header>
  )
}

export default Navbar