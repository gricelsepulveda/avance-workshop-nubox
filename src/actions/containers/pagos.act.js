import { PAGOS } from '@constants/containers/pagos.const'

export const getListDte = () => {
  return async (dispatch, getState) => {
    try {
      //Obtiene todos los estados en redux
    //   const state = getState()
      let response = await fetch('http://anemoi/WebApi/DocumentosElectronicos/ObtenerPorEmisorReceptorDocumento',{ method : 'post' })      
      let json = await response.json()
      console.log(json.documentosElectronicos)
      dispatch({ type: PAGOS.ACTIONS.SET_DATA_DTE, dtes: json.documentosElectronicos })
      return    
    } catch (error) {
      console.error(error)
      return
    }
  }
}

export const pagar = (documentos) => {
  return async (dispatch, getState) => {
    try {
      
      //Obtiene todos los estados en redux
      //   const state = getState()
      let response = await fetch('http://aura/WebApi/PagoKhipu/RealizarPago',{ method : 'post',  headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },body:JSON.stringify( {  numeroDocumento:1,documentosElectronicos:documentos })})      
      let json = await response.json()
      console.log("caquin",json)
      dispatch({ type: PAGOS.ACTIONS.PAGANDO, urlPago: 'https://khipu.com/payment/info/qrsnqgwshnqx' })
      return    
    } catch (error) { 
      console.error(error)
      return
    }
  }
}