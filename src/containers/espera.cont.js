import React,{ Fragment } from 'react'
import { Navbar } from 'react-nubox'
import { Breadcrumb } from 'react-nubox'


class Espera extends React.Component {

  render(){

    let arrayRoute = ['Inicio', 'Pago', 'Espera Confirmación']

    return (
      <Fragment>
        
        <Navbar system="Botón de Pago Nubox" type="alternative" />
        <Breadcrumb route={arrayRoute} />

        <div className="nbx-wait">
          <div className="nbx-wrapper-wait">
            <h1>Su pago está siendo procesado</h1>
            <p>Esto puede demorar hasta 20 minutos. Para ver comprobante de pago ingrese nuevamente</p>
            <img src="./assets/images/pay-draw.png"/>
          </div>
        </div>
    
      </Fragment>
    )
  }
}

export default Espera
