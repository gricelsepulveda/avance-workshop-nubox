import { EMPLEADOS as EMPLEADOS_CONST } from '@constants/containers/empleados.const'

const initState = {
  grid : {
    cabecera: [],
    data: [],
    cuerpo: [],
  }, 
  aaaa:'',
  persons: [], 
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
