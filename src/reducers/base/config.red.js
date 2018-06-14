import { CONFIG as CONFIG_CONST } from '@constants/base/config.const'

/**
 * estructura del objeto inicial 
*/
let config = {
  fileConfig : {},
  baseParameters: null,
}

export const CONFIG = (state = config , action ) => {    
  switch (action.type) {
    case CONFIG_CONST.ACTIONS.SET_URL :
      return Object.assign({}, state, { fileConfig: action.fileConfig })
    case CONFIG_CONST.ACTIONS.SET_BASE_PARAMETERS:
      return Object.assign({}, state, { baseParameters: action.baseParameters })      
    default:
      return state
  }
}
