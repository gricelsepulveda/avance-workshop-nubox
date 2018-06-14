import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import GridEmpresas from '@components/empresas/gridEmpresas.cmp'
import * as empresasActions from '@actions/empresas.act'

let mapStateToProps = (state) => {
  return {
    baseParameters: state.config.baseParameters,
    empresas: state.empresas,
  }
}

let mapDispatchToProps = (dispatch) => {
  return bindActionCreators(empresasActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(GridEmpresas)
