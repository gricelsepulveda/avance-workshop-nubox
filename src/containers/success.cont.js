import React,{ Fragment } from 'react'
import { Layout } from 'react-nubox'
import { Navbar } from 'react-nubox'
import { Breadcrumb } from 'react-nubox'
import { Button } from 'react-nubox'


class Success extends React.Component {

  constructor(props) {
    super(props)   
 
  
    this.state = {
      data: this.props.dataExample,
     
    }

}

componentDidMount(){
  
      fetch('http://aura/WebApi/Espera/Comprobante?PagoId='+this.getParameterByName("PagoId"),{ method : 'get' })
    .then( (response) =>{
      console.log(response)
   return response.json()
    }).then( (data) =>{
      console.log(data)
      this.setState ({url: data})
    })
    .then(function(myBlob) {
      console.log(myBlob)
    });
 
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
  render(){
   if(this.state.url){
    let arrayRoute = ['Inicio', 'Pago', 'Pago Exitoso']
    let urlSrc = "";
    return (
      <Fragment>
        
        <Navbar system="Botón de Pago Nubox" type="alternative" />
        <Breadcrumb route={arrayRoute} />
        <Layout.Container >

          <Layout.Title><span className="nuboxFont nubox-check"></span> Pago Exitoso </Layout.Title>

          <Layout.Box>

            <div className="nbx-pdf-space">
                <iframe id="pdfViewerDesprendible" src={ `data:application/pdf;base64,${this.state.url}`} height="100%" width="100%" />
            </div>
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
  }else return <div></div>  
}
  
}

export default Success
