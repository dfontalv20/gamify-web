import React from 'react'
import AdminHomeLink from './AdminHomeLink'
import AdminUnconfirmedPrizesViewer from './AdminUnconfirmedPrizesViewer'
import AdminView from './AdminView'

export default function AdminHome() {
  return (
    <AdminView>
      <div className="row">
        <div className="col-12 col-lg-6">
          <AdminUnconfirmedPrizesViewer />
        </div>
        <div className="col-6">
          <div className="row row-cols-1 g-2">
            <h2>Links</h2>
            <AdminHomeLink to={"/admin/students"} title="Estudiantes"/>
            <AdminHomeLink to={"/admin/companies"} title="Equipos"/>
          </div>
        </div>
      </div>
    </AdminView>
  )
}
