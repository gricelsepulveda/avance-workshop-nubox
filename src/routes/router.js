import React, { Component, Fragment } from 'react'
import { Route, Link, Switch } from 'react-router-dom'
import Empleados from '@containers/empleados.cont'
import Empresas from '@containers/empresas.cont'
import Login from '@containers/login.cont'

class App extends Component {

  /**
   * States : Para generar Rutas (navegación)
   */
  state = {
    modules: [
      { 'Empleados': Empleados },
      { 'Empresas': Empresas },
      { 'Login': Login },
    ],
    switch: [],
    listMenu: [],
  }

  /**
  * React - LifeCycle
  */
  componentDidMount = () => {
    const routes = this.routerList(this.state.modules)
    this.setState({ switch: routes.switch, listMenu: routes.list })
  }

  /**
   * Crea Menú y Switch para react-router
  */
  routerList = () => {
    let _list = [], _switch = []
    this.state.modules.forEach((element, index) => {
      Object.entries(element).forEach(([key, value]) => {
        _list.push(<li key={index}><Link to={`/${key}`}>{key}</Link></li>)
        _switch.push(<Route key={index} path={'/' + key} exact component={value} />)
      })
    })
    return { list: _list, switch: _switch }
  }

  render() {
    return (
      <Fragment>
        <Switch>
          {this.state.switch}
        </Switch>
      </Fragment>
    )
  }
}

export default App