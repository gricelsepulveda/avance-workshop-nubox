import React, { Component } from 'react'
import { Button, Modal, Tab, Grid, SplitButton } from 'react-nubox'


const headerStarWars = new Grid.Header()
headerStarWars.addHeader({ text: 'name', propertyName: 'name', width: 10, align: 'left' })
headerStarWars.addHeader({ text: 'Birth Year', propertyName: 'birth_year', width: 10, align: 'left' })
headerStarWars.addHeader({ text: 'Gender', propertyName: 'gender', width: 30, align: 'left' })
headerStarWars.addHeader({ text: 'Hair Color', propertyName: 'hair_color', width: 20, align: 'left' })
headerStarWars.addHeader({ text: 'height', propertyName: 'height', width: 20, align: 'left' })

class GridEmpleados extends Component {

  /**
   * Initializing state
   */
  constructor(props) {
    super(props)
    this.state = {
      loaderShow: true,
      select: {},
      header: headerStarWars,
    }
    this.modalEjemplo = React.createRef()
    this.modalDos = React.createRef()
  }

  /**
  * React - LifeCycle
  */
  componentDidMount = () => {
    //Carga lista desde action 
    this.props.getListPersons(this.modalEjemplo.current)
  }

  /**
  * React - LifeCycle
  */
  static getDerivedStateFromProps(nextProps) {
    //valida que se carguen datos iniciales para ocultar loader
    return nextProps.persons.length > 0 ? { loaderShow: false } : null
  }

  /**
  * React - LifeCycle
  */
  getSnapshotBeforeUpdate() {
    //valida si se eliminan todos los registros pra cargar loader
    return this.props.persons.length === 0 ? true : false
  }

  /**
  * React - LifeCycle
  */
  componentDidUpdate(prevProps, prevState, snapshot) {
    //console.log('componentDidUpdate',snapshot)
  }

  /**
   * setState persons
   * @param name
   */
  onClickPerson = (name) => {
    //copia el estado actual
    let personsList = [...this.props.persons]
    //busca el index de name en estado actual
    let personIndex = this.props.persons.findIndex((value) => value.name === name)
    //elimina por indice
    personsList.splice(personIndex, 1)
    //action para cambiar state
    this.props.setListPersons(personsList)
  }

  changeSelected = (data) => {
    this.setState({ select: data })
  }

  openModal = (open, data) => {
    open ?
      this.setState({ select: data }, () => {
        this.modalEjemplo.current.show(true)
      }) : this.modalEjemplo.current.show(false)
  }


  render() {
    console.log(this.state.select)
    return (
      <div>

        <Grid.Container
          structure={this.state.header}
          data={this.props.data}
          checks
          sort
          onChange={(data) => { this.changeSelected(data) }}
          onDoubleClick={(data) => { this.openModal(true, data) }}
        >

        </Grid.Container>


        <Modal.Create title='Título de Modal' nbx-width-md nbx-height-md ref={this.modalEjemplo} >
          <Modal.Body>
            {/*EJEMPLO TAB*/}
            <Tab.Create nbx-full-height horizontal>
              <Tab.Panel title='Comprobantes' icon='4' note='bla bla bla' >
                <div>
                  {this.state.select ? (<div>{this.state.select.name}</div>) : null}
                  <div>Contenido 1</div>
                  <div>Contenido 1</div>
                  <div>Contenido 1</div>
                  <div>Contenido 1</div>
                  <div>Contenido 1</div>
                  <div>Contenido 1</div>
                  <div>Contenido 1</div>
                </div>
              </Tab.Panel >
              <Tab.Panel title='Impuestos'>
                <div>Contenido 2</div>
              </Tab.Panel>
              <Tab.Panel title='Integración factura'>
                <div>Contenido 3</div>
              </Tab.Panel>
            </Tab.Create>
          </Modal.Body>
          <Modal.ActionBar>
            <Button nbx-highlight nbx-sm navegable onClick={() => { this.openModal(false, null) }}>aceptar</Button>
            <Button nbx-normal nbx-sm navegable onClick={() => { this.openModal(false, null) }}>cancelar</Button>
          </Modal.ActionBar>
        </Modal.Create>



        {/*         {this.state.loaderShow ? (<Loader/>):(
          this.props.persons.length > 0 ? (
            <Items persons={this.props.persons} onClickPerson={this.onClickPerson} />
          ):(<div><p>No hay registros <a onClick={this.props.getListPersons} >volver a cargar</a></p></div>)        
        )} */}
      </div>)
  }
}

export default GridEmpleados
