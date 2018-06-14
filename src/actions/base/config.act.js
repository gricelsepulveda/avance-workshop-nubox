import { CONFIG } from '@constants/base/config.const'
import store from '../../store/store'

/**
 * Obtiene ruta donde se está montando la aplicación
 * Si no se envía variable (baseUrl) inicial busca en la raiz del proyecto el archivo config.json
 */
export const getJsonDataConfig = async (baseUrl) => {
  try {
    //Obtiene ruta desde la raiz del proyecto (localhost/proyecto/config_react/config.json)
    let pathname = window.location.pathname.split('/')
    let ruta = pathname[1] ? `${window.location.origin}/${pathname[1]}` : `${window.location.origin}`
    let defaultUrlBase = `${ruta}/${CONFIG.URL_LOCAL}`

    let response = null
    let json = null
    if (baseUrl) {
      response = await fetch(baseUrl)
      if (response.status != 200) {
        console.clear()
        response = await fetch(defaultUrlBase)
      }
    } else {
      response = await fetch(defaultUrlBase)
    }
    json = response.ok ? await response.json() : null

    validateParameters(json)

    if (json)
      store.dispatch({ type: CONFIG.ACTIONS.SET_URL, fileConfig: json })
    return
  } catch (error) {
    console.error(error)
  }
}

/**
 * Carga objeto con los parámetros iniciales para la aplicación
 */
export const baseParameters = async (baseUrl) => {
  try {
    let response = await fetch(baseUrl + '/api/people/1')
    let json = response.ok ? await response.json() : null

    if (json)
      store.dispatch({ type: CONFIG.ACTIONS.SET_BASE_PARAMETERS, baseParameters: json })
    return
  } catch (error) {
    console.error(error)
  }
}

/**
 * Validación para el objeto inicial.
 * 
 */
export let validateParameters = (param) => {
  let _validate = null
  for (let [propName, propValue] of Object.entries(param)) {
    if (propValue == '')
      console.warn(`Parametro de entrada vacío en config : ${propName} `)
  }
  return
}
