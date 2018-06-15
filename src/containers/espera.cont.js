import React,{ Fragment } from 'react'


class Espera extends React.Component {
  constructor(props){
    super(props)
    this.state = { response: true }
  }  

    waitResponse = (response) => {
      setTimeout(() => {
        if (!response) {
        
          window.location.reload()
        } else {
 
          let actualUrl = window.location.href
          let loca  = actualUrl.split("/")[2] 
          console.log(loca)
          let pagoId =this. getParameterByName("Id")
          window.location.replace(`http://${loca}/success?PagoId=`+pagoId)
        }
      }, 3000)
    }


      getParameterByName(name, url) {
      if (!url) url = window.location.href;
      name = name.replace(/[\[\]]/g, "\\$&");
      var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
          results = regex.exec(url);
      if (!results) return null;
      if (!results[2]) return '';
      return decodeURIComponent(results[2].replace(/\+/g, " "));
    }

    componentDidMount() {
      this.waitResponse(this.state.response)
    }

    render(){

      let arrayRoute = ['Inicio', 'Pago', 'Espera Confirmación']

      return (
        <Fragment>
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
