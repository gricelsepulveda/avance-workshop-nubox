import React from 'react'
import { Panel } from 'react-nubox'
import { Avatar } from 'react-nubox'
import { Input } from 'react-nubox'
import { Recaptcha } from 'react-recaptcha'

class Login extends React.Component {

  render(){
    let callback 
    return (
      <div className="nbx-login-bg">
        <Panel>
          <img className="nbx-logo-nubox" src="../../../assets/images/logo-nubox.svg" alt="logo-nubox"/>
          <h1 className="nbx-h1">Portal de pagos<br/>¡Bienvenido!</h1>
          <Avatar size="md" color="color-5"/>
          <p className="nbx-p">Ingresa tus datos para pagar</p>
          <form method="post" action="/Login/Login" className="nbx-form-login">
            <Input sm navegable autoFocus required={true} placeholder="Rut emisor" name="rut_emisor" id="rut_emisor"/>
            <Input sm navegable required={true} placeholder="Rut receptor" name="rut_receptor" id="rut_receptor"/>
            <Input sm navegable required={true} placeholder="Número de factura" name="n_factura" id="n_factura"/>
            <div className="nbx-captcha-container">
              <Recaptcha sitekey="6LcnC18UAAAAAE1cEYcLSiOn_olMGs66o8gP77P1" render="explicit" onloadCallback={callback}/>
            </div>
            <button tabIndex="0" className="nbx-button normal alternative" type="submit">Ingresar</button>
          </form>
        </Panel>
      </div>
    )
  }
}

export default Login
