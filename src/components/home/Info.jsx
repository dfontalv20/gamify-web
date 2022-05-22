import React from 'react'
import appStoreLogo from '../../resources/img/AppStore.PNG'
import playStoreLogo from '../../resources/img/PlayStore.PNG'
import win from '../../resources/img/Gana.jpeg'
import teams from '../../resources/img/Equipos.jpeg'
import rewards from '../../resources/img/Recompensas.jpeg'
import members from '../../resources/img/Integrantes.jpeg'

function Info() {
  return (
    <section className='bg-secondary py-4 container-fluid'>
      <div className='mx-3 row row-cols-1 g-2 row-cols-lg-4 text-center text-aling-center my-2 my-lg-5'>
        <div className="col"><img style={{ borderRadius: '1rem', maxWidth: '80%' }} src={win} alt="Gana" /></div>
        <div className="col"><img style={{ borderRadius: '1rem', maxWidth: '80%' }} src={teams} alt="Equipos" /></div>
        <div className="col"><img style={{ borderRadius: '1rem', maxWidth: '80%' }} src={rewards} alt="Recompensas" /></div>
        <div className="col"><img style={{ borderRadius: '1rem', maxWidth: '80%' }} src={members} alt="Integrantes" /></div>
      </div>
      <div className='text-center fs-4' style={{ fontFamily: 'monospace', marginBlock: '4rem' }}>
        <div className='d-flex m-auto w-75'>
          <p>
            Esta aplicación ayuda al proceso educativo ya que sistematiza
            elementos de juego para involucrar, motivar, promover el
            aprendizaje y la resolución de problemas en los jóvenes.
          </p>
        </div>

      </div>
      <div className='d-flex justify-content-center'>
        <img
          style={{ borderRadius: '1rem' }}
          className="mx-2"
          src={appStoreLogo}
          alt="Descargar en App Store"
        />
        <img
          style={{ borderRadius: '1rem' }}
          className="mx-2"
          src={playStoreLogo}
          alt="Descargar en Play Store"
        />
      </div>
    </section>
  )
}

export default Info