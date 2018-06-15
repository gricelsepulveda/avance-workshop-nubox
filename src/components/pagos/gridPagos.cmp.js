import React,{ Fragment } from 'react'
import { Grid, Button } from 'react-nubox'
import { Modal } from 'react-nubox'


class GridPago extends React.PureComponent {

  constructor(props) {
    super(props)    
      
    const header = new Grid.Header()
    header.addHeader({ text: 'Fecha', propertyName: 'FechaEmision', width: 10, align:'left' })
    header.addHeader({ text: '#Factura', propertyName: 'FolioDocumento', width: 10, align: 'left' })
    header.addHeader({ text: 'Cliente', propertyName: 'RutEmisor', width: 30, align: 'left' })
    header.addHeader({ text: 'Fecha Vencimiento', propertyName: 'FechaVencimiento', width: 20, align: 'left' })
    header.addHeader({ text: '$Total', propertyName: 'MontoTotal', width: 20, align: 'right' })
  
    this.state = {
      data: this.props.dataExample,
      select: {},
      header: header,
      totalCount : 0,
      errorCount:false,
      showModal: false,
      contentModal : <div></div>,
    }

    this.modalIframe = React.createRef()
  
  }

    showModalIframe = (show) =>{
      this.modalIframe.current.show(show)
    }

  /**
   * Show/Hide Modal
   * @param {bool} show
  */


    changeSelected = (data) => {
      console.log(data)
      this.setState({
        select: data,
      })
    }

    pagarDocumentos = () => {
      this.props.pagar(this.state.select)
    
    }

    componentDidMount() {
      this.props.getDataDTE()
    }
  
  
    render() {
      if (this.props.urlPago) {
        this.showModalIframe(true)
       
      }

      let pdfView = {
        src: this.props.urlPago, 
      }

      
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
              <div className="nbx-radio-image">
                <input type="radio" checked="checked"/>
                <img src="./assets/images/khipu-logo.png" alt="khipu"/>
              </div>
              <Button nbx-normal sm onClick={this.pagarDocumentos}> Pagar</Button>
              <Button nbx-normal sm onClick={()=>{this.showModalIframe(true)}}>Levantar Modal Iframe</Button>
            </Grid.ActionBar> 
  
            <Grid.Total width={20} price={this.state.totalCount} error={this.state.errorCount} />
            
          </Grid.Container>

          <Modal.Create title='Pagar Factura' nbx-width-md nbx-height-md ref={this.modalIframe} >
            <Modal.Body>
              <div className="nbx-iframe-modal">
                <iframe id="pdfViewerDesprendible" src={ pdfView.src}  height="380px" width="100%" />
              </div>   
            </Modal.Body>   
            <Modal.ActionBar>
              <Button nbx-normal nbx-sm navegable onClick={() => { this.showModalIframe(false) } }>aceptar</Button>
            </Modal.ActionBar>
          </Modal.Create>

        </Fragment>
      )
    }
}
  
export default GridPago
  
