import React, { Component } from 'react'

/**
 * Validar compatibilidad con react-dom@16.3.0
 */

/**
 * error component :c
 */
class ErrorBoundary extends Component {

  constructor(props) {
    super(props)
    this.state = {
      error: false,
      errorInfo: null,
    }
  }

  componentDidCatch(error, errorInfo) {    
    this.setState({
      error: error,
      errorInfo: errorInfo,
    })
  }

  render() {
    return ( 
      < div >
        {this.state.error ? (<h2>Oh-no! otra vez tú!</h2>):(this.props.children)}
      </div>
    )
  }
}

export default ErrorBoundary
