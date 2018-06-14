    import { connect } from 'react-redux'
    import { bindActionCreators } from 'redux'
    import Pagos from '@components/pagos/pagos.cmp'
    import * as pagosActions from '@actions/pagos.act'
// import * as empleadosActions from '@actions/empleados.act'

 let mapStateToProps = (state) => {
     console.log(state)
   return {
    //  config: state.config,
    //  fileConfig: state.config.fileConfig,
    //  empleados: state.empleados,
    //  persons: state.empleados.persons,
     dataDte: state.pagos.dtes,
   }
 }

 let mapDispatchToProps = (dispatch) => {
   return bindActionCreators(pagosActions, dispatch)
 }




export default connect(mapStateToProps, mapDispatchToProps)(Pagos)