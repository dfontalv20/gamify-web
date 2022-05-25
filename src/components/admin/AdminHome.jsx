import React from 'react'
import AdminUnconfirmedPrizesViewer from './AdminUnconfirmedPrizesViewer'
import AdminView from './AdminView'

export default function AdminHome() {
  return (
    <AdminView>
      <div className="row row-cols-1 row-cols-lg-3">
        <div className="col">
          <AdminUnconfirmedPrizesViewer />
        </div>
      </div>
    </AdminView>
  )
}
