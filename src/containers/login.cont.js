import React from 'react'
import { Panel } from 'react-nubox'
import { Avatar } from 'react-nubox'
import { Input } from 'react-nubox'
import { Button } from 'react-nubox'
//import { ReCAPTCHA } from 'react-google-recaptcha'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
//import GridEmpresas from '@components/empresas/gridEmpresas.cmp'
//import * as empresasActions from '@actions/empresas.act'

/*let mapStateToProps = (state) => {
  return {
    baseParameters: state.config.baseParameters,
    empresas: state.empresas,
  }
}

let mapDispatchToProps = (dispatch) => {
  return bindActionCreators(empresasActions, dispatch)
}
*/

class Login extends React.Component {

  //let onChange 

  render(){
    /*let value
    let onChange = () => {
      console.log('Captcha value:', value)
    }*/
    return (
      <div className="nbx-login-bg">
        <Panel>
          <img className="nbx-logo-nubox" src="../../../assets/images/logo-nubox.svg" alt="logo-nubox"/>
          <h1 className="nbx-h1">Portal de pagos<br/>¡Bienvenido!</h1>
          <Avatar size="md" color="color-5"/>
          <p className="nbx-p">Ingresa tus datos para pagar</p>
          <form method="post" action="/Login/Login" className="nbx-form-login">
            <Input navegable autoFocus required={true} placeholder="Rut emisor" name="rut_emisor" id="rut_emisor"/>
            <Input navegable required={true} placeholder="Rut receptor" name="rut_receptor" id="rut_receptor"/>
            <Input navegable required={true} placeholder="Número de factura" name="n_factura" id="n_factura"/>
            <div className="nbx-captcha-container">
              {/*<ReCAPTCHA ref="recaptcha" sitekey="Your client site key" onChange={onChange}/>*/}
            </div>
            <button tabIndex="0" className="nbx-button normal alternative" type="submit">Ingresar</button>
          </form>
        </Panel>
      </div>
    )
  }
}

export default Login

//export default connect(mapStateToProps, mapDispatchToProps)(GridEmpresas)
