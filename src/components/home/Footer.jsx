import React from 'react'
import companyIcon from '../../resources/img/IconoEmpresa.PNG'

export default function Footer() {
  return (
    <footer className="container-fluid">
      <div className="text-center my-2">
          <img
            src={companyIcon}
            alt="Icono de la Empresa POMELO"
          />
      </div>
    </footer>
  )
}
