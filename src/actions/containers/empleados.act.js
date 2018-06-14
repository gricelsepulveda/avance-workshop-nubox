import { EMPLEADOS } from '@constants/containers/empleados.const'

/**
 * Carga lista persons desde api
 */
export const getListPersons = () => {
  return async (dispatch, getState) => {
    try {
      //Obtiene todos los estados en redux
      const state = getState()
      let response = await fetch(state.config.fileConfig.url + 'api/people/')      
      let json = await response.json()
      dispatch({ type: EMPLEADOS.ACTIONS.SET_DATA_PERSONS, persons: json.results })
      return    
    } catch (error) {
      console.error(error)
      return
    }
  }
}

export const setListPersons = (persons) => {
  return async (dispatch) => {
    try {
      dispatch({ type: EMPLEADOS.ACTIONS.SET_DATA_PERSONS, persons: persons })
      return
    } catch (error) {
      console.error(error)
      return
    }
  }
}
