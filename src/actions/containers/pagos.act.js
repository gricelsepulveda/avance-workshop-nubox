import { PAGOS } from '@constants/containers/pagos.const'

export const getListDte = () => {
  return async (dispatch, getState) => {
    try {
      //Obtiene todos los estados en redux
    //   const state = getState()
    //   let response = await fetch(state.config.fileConfig.url + 'api/people/')      
    //   let json = await response.json()
      const dataExample = [
        { id: 1, Fecha: '03 May 2017', Factura: '😀', Cliente: '11.111.111-1 Cliente Cliente', FechaVencimiento: '05 Jun 2017', Total: '100000'  },
        { id: 100, Fecha: '03 May 2017', Factura: '🤗', Cliente: '11.111.111-1 Cliente Cliente', FechaVencimiento: '05 Jun 2017', Total: '200000', check: true },
        { id: -100, Fecha: '03 May 2017', Factura: '💩', Cliente: '11.111.111-1 Cliente Cliente', FechaVencimiento: '05 Jun 2017', Total: '300000' },
        { id: -100, Fecha: '03 May 2017', Factura: '💩', Cliente: '11.111.111-1 Cliente Cliente', FechaVencimiento: '05 Jun 2017', Total: '400000' },
        { id: -100, Fecha: '03 May 2017', Factura: '💩', Cliente: '11.111.111-1 Cliente Cliente', FechaVencimiento: '05 Jun 2017', Total: '500000',check: true },
      ]
      dispatch({ type: PAGOS.ACTIONS.SET_DATA_DTE, dtes: dataExample.json() })
      return    
    } catch (error) {
      console.error(error)
      return
    }
  }
}