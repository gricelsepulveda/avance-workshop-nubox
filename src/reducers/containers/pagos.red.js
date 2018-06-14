import { PAGOS as PAGOS_CONST } from '@constants/containers/pagos.const'

const initState = {
  dtes : [],
}

const PAGOS = (state = initState , action ) => {
  
  switch (action.type){
    case PAGOS_CONST.ACTIONS.SET_DATA_DTE:
      console.log(action)
      return Object.assign({}, state, { dtes: action.dtes } )
    case PAGOS_CONST.ACTIONS.PAGANDO:
      console.log(action)
      return Object.assign({}, state, { urlPago: action.urlPago } )
    default:
      return state

  }
}

export default PAGOS
