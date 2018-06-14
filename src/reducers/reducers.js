import { combineReducers } from 'redux'
import { CONFIG as config } from './base/config.red'
import empleados from './containers/empleados.red'
import empresas from './containers/empresas.red'
import pagos from './containers/pagos.red'

const reducers = combineReducers({
  config,
  empleados,
  empresas,
  pagos,

})

export default reducers
