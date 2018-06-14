import { EMPRESAS as EMPRESAS_CONST } from '@constants/containers/empresas.const'

const initState = {
  grid: {
    cabecera: [],
    data: [],
    cuerpo: [],
  },
  dataList: [],
}

const EMPRESAS = (state = initState, action) => {
  switch (action.type) {
    case EMPRESAS_CONST.ACTIONS.SET_DATA_GRID:
      return Object.assign({}, state, { grid: action.grid })
    case EMPRESAS_CONST.ACTIONS.SET_DATA_LIST:
      return Object.assign({}, state, { dataList: action.dataList })      
    default:
      return state
  }
}

export default EMPRESAS
