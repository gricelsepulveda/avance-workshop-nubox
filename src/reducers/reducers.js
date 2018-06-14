import { combineReducers } from 'redux'
import { CONFIG as config } from './base/config.red'
import empleados from './containers/empleados.red'
import empresas from './containers/empresas.red'

const reducers = combineReducers({
  config,
  empleados,
  empresas,
})

export default reducers
