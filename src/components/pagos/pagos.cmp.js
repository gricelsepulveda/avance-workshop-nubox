import React, { Component,Fragment } from 'react'
import { Layout, Navbar, Breadcrumb } from 'react-nubox'
import GridPagos  from './gridPagos.cmp'

let arrayRoute = ['Inicio', 'Pago', 'Facturas a pagar']
class Pagos  extends Component {
  componentDidMount() {
    this.props.getListDte ()
  }
  render() {
   
    return (
      <Fragment>
        
        <Navbar system="Botón de Pago Nubox" type="alternative" />
        <Breadcrumb route={arrayRoute} />
        
        <Layout.Container >

          <Layout.Title> Facturas a Pagar</Layout.Title>

          <Layout.Box>       

            <GridPagos dataGrid= {this.props.dataDte}
              getDataDTE ={this.props.getListDte}
              pagar = {this.props.pagar}
                urlPago={this.props.urlPago}
                dataPDF={this.props.dataPDF}
            />
            
          </Layout.Box>

        </Layout.Container>

      </Fragment>
    )
  }
}

export default Pagos





