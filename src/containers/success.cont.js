import React,{ Fragment } from 'react'
import { Layout } from 'react-nubox'
import { Navbar } from 'react-nubox'
import { Breadcrumb } from 'react-nubox'
import { Button } from 'react-nubox'


class Success extends React.Component {

  render(){

    let arrayRoute = ['Inicio', 'Pago', 'Pago Exitoso']

    return (
      <Fragment>
        
        <Navbar system="Botón de Pago Nubox" type="alternative" />
        <Breadcrumb route={arrayRoute} />
        <Layout.Container >

          <Layout.Title><span className="nuboxFont nubox-check"></span> Pago Exitoso </Layout.Title>

          <Layout.Box>

            <div className="nbx-pdf-space"></div>
            <div className="nbx-buttons-pdf">
              <Button nbx-normal sm>Imprimir Comprobante</Button>
              <Button nbx-highlight sm>Finalizar</Button>
              <div className="nbx-check-mail">
                <input type="checkbox" name="copy" id="copy"/>Envía una copia a mi correo
              </div>
            </div>
          
          </Layout.Box>

        </Layout.Container>

      </Fragment>
    )
  }
}

export default Success
