import React, { Component } from 'react'
import { Grid } from 'react-nubox'

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
  constructor(props){
    super(props)
    this.state={
      loaderShow: true,
      select: {},
      header: headerStarWars,
      totalCount: 0,
      errorCount: false,
    }
    this.modalEjemplo = React.createRef()
    this.modalDos = React.createRef()
  }

  /**
  * React - LifeCycle
  */
  componentDidMount = () => {
    //Carga lista desde action 
    this.props.getListPersons()
  }
  
  /**
  * React - LifeCycle
  */
  static getDerivedStateFromProps(nextProps) {
    //valida que se carguen datos iniciales para ocultar loader
    return nextProps.persons.length > 0 ? { loaderShow: false } : null
  }

  /**
   * setState persons
   * @param name
   */
  onClickPerson = (name) => {
    //copia el estado actual
    let personsList = [...this.props.persons]
    //busca el index de name en estado actual
    let personIndex = this.props.persons.findIndex((value) => value.name === name )
    //elimina por indice
    personsList.splice(personIndex,1)
    //action para cambiar state
    this.props.setListPersons(personsList)
  }

  changeSelected = (data) => {
    this.setState({ select: data })
  }

  render() {
    console.log(this.state.data)
    return (     
      <Grid.Container
        structure={this.state.header}
        data={this.props.data}
        checks
        sort
        onChange={(data) => { this.changeSelected(data) }}
        //onDoubleClick={(data) => { this.openModal(true, data) }}
      >
      </Grid.Container>

    )    
  }
}

export default GridEmpleados
