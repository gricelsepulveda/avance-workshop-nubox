import { PAGOS as PAGOS_CONST } from '@constants/containers/pagos.const'

const initState = {
  dtes : [],
}

const EMPLEADOS = (state = initState , action ) => {
  switch (action.type){
    case EMPLEADOS_CONST.ACTIONS.SET_DATA_GRID:
      return Object.assign({}, state, { grid: action.grid } )
    case EMPLEADOS_CONST.ACTIONS.SET_DATA_PERSONS:
      return Object.assign({}, state, { persons: action.persons })
    default:
      return state
  }
}

export default EMPLEADOS
