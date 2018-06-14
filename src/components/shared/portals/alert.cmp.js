import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const modalRoot = document.getElementById('alert-root')


/**
 * Ejemplo para Portales
 */

class Alert extends Component   {
  render(){
    return ReactDOM.createPortal(this.props.children, modalRoot)
  }
}

class AlertWrapper extends Component {

  state = {
    show : false,
  }

  onShow = () =>{
    this.setState({ show: !this.state.show })
  }

  render() {
    return (
      <div>
        <a onClick={this.onShow} > dsasda</a>
        {this.state.show ? (<Alert> <div>Este es el Div</div></Alert>): null }
      </div>
    )
  }
}

export default AlertWrapper
