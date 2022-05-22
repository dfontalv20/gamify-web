import React from 'react'
import appStoreLogo from '../../resources/img/AppStore.PNG'
import playStoreLogo from '../../resources/img/PlayStore.PNG'
import gamifyPresentationLogo from '../../resources/img/Imagen1.PNG'

function Presentation() {
  return (
    <section className='container-fluid'>
        <div className="row min-vh-100">
          <div className="col-12 col-md-6 d-flex" style={{fontSize: '2rem'}}>
            <div className='m-auto text-center' style={{width: '70%'}}>
            <strong className='presentation-title'>APRENDIZAJE DIVERTIDO</strong>
            <div className="d-flex justify-content-center mt-2">
                  <img
                    className="mx-4"
                    style={{borderRadius: '1rem'}}
                    src={appStoreLogo}
                    alt="Descargar en App Store"
                  />
                  <img
                    className="mx-4"
                    style={{borderRadius: '1rem'}}
                    src={playStoreLogo}
                    alt="Descargar en Play Store"
                  />
            </div>
            </div>
            
          </div>
          <div className="col-12 col-md-6 d-flex">
              <img
                className='m-auto'
                width='80%'
                style={{borderRadius: '1rem'}}
                src={gamifyPresentationLogo}
                alt="Imagen representativa de la gamificación"
              />
          </div>
        </div>
      </section>
  )
}

export default Presentation