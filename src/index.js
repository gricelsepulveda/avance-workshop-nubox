import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import store from './store/store'
import App from './routes/router'
import { getJsonDataConfig, baseParameters } from './actions/base/config.act'
import { Loader } from 'react-nubox'

/**
 * Se importan estilos para react-nubox
 */
import 'react-nubox/dist/react-nubox.css'
/**
 * Se importan estilos para el proyecto
 */

//VIEW STYLES
import './assets/scss/workshop-style.scss'


/**
 * Función para cargar en redux el objeto JSON de configuración.
 * @param BASE_URL.url se carga al compilar por webpack.
 */
getJsonDataConfig(BASE_URL.url )

const ROOT_ELEMENT = document.getElementById('app')
var _baseParameters = true //Variable para ejecutar sólo una vez baseParameters()

/**
 * subscribe() para validar datos iniciales en la aplicación.
 */
const unsubscribe = store.subscribe(() => {  
  //Valida que se cargue el archivo de configuración
  const FILE_CONFIG = store.getState().config.fileConfig ? store.getState().config.fileConfig : null
  //Carga parámetros que se necesiten (desde api, como listas o data inicial)
  FILE_CONFIG && _baseParameters ? (baseParameters(FILE_CONFIG.url), _baseParameters= false ) :  null
  //Lee si ya se cargaron datos iniciales
  const BASE_PARAM = store.getState().config.baseParameters ? true : false
  
  BASE_PARAM ? (renderContainer(), unsubscribe()) : renderLoader()
})

/**
 * Hace render de los módulos.
 */
const renderContainer = () => {
  Loader.hide()
  ReactDOM.render(
    <Provider store={store} >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
    ROOT_ELEMENT
  ) 
}

/**
 * Hace render de loader.
 * Cuando todavía no se ha cargado el store con la data necesaria.
 */
const renderLoader = () => {
  Loader.show()
}

/**
 * Hace primer render de loader.
 */
renderLoader()
