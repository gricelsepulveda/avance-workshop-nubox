import React from 'react'
import { Panel } from 'react-nubox'
import { Avatar } from 'react-nubox'
import { Input } from 'react-nubox'
import { Alert } from 'react-nubox'
import Recaptcha from 'react-recaptcha'

class Login extends React.Component {

  constructor(props) {
    super(props)

    this.handleSuscribe = this.handleSuscribe.bind(this)
    this.recaptchaLoaded = this.recaptchaLoaded.bind(this)
    this.verifyCallback = this.verifyCallback.bind(this)
    this.state = {
      isVerified: false,
    }
  }
  recaptchaLoaded() {
    console.log('captcha successful')
  }

  handleSuscribe() {
    if (this.state.isVerified) {
      document.getElementsByTagName('form')[0].submit()
    } else {
      let errorMessage = () => {
        Alert.show(
          <Alert.Create danger  timeout={3000}>¡Comprueba que eres una persona!</Alert.Create>
        )
      }
      errorMessage()
    }
  }

  verifyCallback(response) {
    if (response) {
      this.setState({
        isVerified: true, 
      })
    }
  }

  render(){

    return (
      <div className="nbx-login-bg">
        <Panel>
          <img className="nbx-logo-nubox" src="../../../assets/images/logo-nubox.svg" alt="logo-nubox"/>
          <h1 className="nbx-h1">Portal de pagos<br/>¡Bienvenido!</h1>
          <Avatar size="md" color="color-5"/>
          <p className="nbx-p">Ingresa tus datos para pagar</p>
          <form method="post" action="Login/Login" className="nbx-form-login">
            <Input sm navegable autoFocus required={true} placeholder="Rut emisor" name="rut_emisor" id="rut_emisor"/>
            <Input sm navegable required={true} placeholder="Rut receptor" name="rut_receptor" id="rut_receptor"/>
            <Input sm navegable required={true} placeholder="Número de factura" name="n_factura" id="n_factura"/>
            <Recaptcha sitekey="6LcnC18UAAAAAE1cEYcLSiOn_olMGs66o8gP77P1" render="explicit" onloadCallback={this.recaptchaLoaded} verifyCallback={this.verifyCallback}/>
            <button tabIndex="0" className="nbx-button normal alternative" type="button" onClick={this.handleSuscribe}>Ingresar</button>
          </form>
        </Panel>
      </div>
    )
  }
}

export default Login
