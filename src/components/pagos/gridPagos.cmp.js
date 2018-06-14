import React,{ Fragment } from 'react'
import { Grid, Button } from 'react-nubox'


class GridPago extends React.PureComponent {

  constructor(props) {
    super(props)    
      
    const header = new Grid.Header()
    header.addHeader({ text: 'Fecha', propertyName: 'Fecha', width: 10, align:'left' })
    header.addHeader({ text: '#Factura', propertyName: 'Factura', width: 10, align: 'left' })
    header.addHeader({ text: 'Cliente', propertyName: 'Cliente', width: 30, align: 'left' })
    header.addHeader({ text: 'Fecha Vencimiento', propertyName: 'FechaVencimiento', width: 20, align: 'left' })
    header.addHeader({ text: '$Total', propertyName: 'Total', width: 20, align: 'right' })
  
    this.state = {
      data: this.props.dataExample,
      select: {},
      header: header,
      totalCount : 0,
      errorCount:false,
    }
  
  }


    changeSelected = (data) => {
      console.log(data)
      this.setState({
        select: data,
      })
    }

    pagarDocumentos = () => {
      console.log(this.state.select)
      console.log(this.state.totalCount)

    }

    componentDidMount() {
      this.props.getDataDTE()
    }
  
  
    render() {
  console.log(this)
      return (
        <Fragment >
          <Grid.Container
            structure={this.state.header}
            data={this.props.dataGrid}
            checks
            sort
            onChange={(data) => { this.changeSelected(data) }}
          >


            <Grid.ActionBar bottom>
              <input type="radio" checked="checked"/>
              <Button nbx-normal nbx-sm onClick={this.pagarDocumentos}> Pagar</Button>
            </Grid.ActionBar> 
  
            <Grid.Total width={20} price={this.state.totalCount} error={this.state.errorCount} />
            
          </Grid.Container>
        
        </Fragment>
      )
    }
}
  
export default GridPago
  
