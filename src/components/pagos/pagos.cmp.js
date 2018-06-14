import React, { Component,Fragment } from 'react'
import { Layout, Navbar, Breadcrumb } from 'react-nubox'
import GridPagos  from './gridPagos.cmp'

let arrayRoute = ['Inicio', 'Pago', 'Facturas a pagar']
class Pagos  extends Component {
  componentDidMount() {
    this.props.getListDte ()
  }
  render() {
    console.log(this)
    return (
      <Fragment>
        
        <Navbar system="Botón de Pago Nubox" user="Gricel Sepúlveda" type="alternative" />
        <Breadcrumb route={arrayRoute} />
        
        <Layout.Container >

          <Layout.Title> Este es el título </Layout.Title>

          <Layout.Box>       

            <GridPagos dataGrid= {this.props.dataDte}
            getDataDTE ={this.props.getListDte}
            />
            
          </Layout.Box>

        </Layout.Container>

      </Fragment>
    )
  }
}

export default Pagos





