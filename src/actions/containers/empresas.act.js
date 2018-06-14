import { EMPRESAS } from '@constants/containers/empresas.const'

export const getJsonAwait = () => {
  return async (dispatch, getState) => {  
    try {

      let response = await fetch(getState().config.fileConfig.url+'api/people/1/')
      let json = await response.json()    
      dispatch({ type: EMPRESAS.ACTIONS.SET_DATA_LIST, dataList: json })      
      return 

    } catch (error) {      
      console.error(error)
      return
    }    
  }

}
