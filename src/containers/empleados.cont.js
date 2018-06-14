import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import GridEmpleados from '@components/empleados/GridEmpleados.cmp'
import * as empleadosActions from '@actions/empleados.act'

let mapStateToProps = (state) => {
  return {
    config: state.config,
    fileConfig: state.config.fileConfig,
    empleados: state.empleados,
    persons: state.empleados.persons,
    data: state.empleados.persons,
  }
}

let mapDispatchToProps = (dispatch) => {
  return bindActionCreators(empleadosActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(GridEmpleados)
