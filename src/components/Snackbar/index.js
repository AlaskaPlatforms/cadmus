import React, { Component } from 'react'
import Snackbar from 'material-ui/Snackbar'
import SnackbarContent from 'material-ui/Snackbar/SnackbarContent'
import { connect } from 'react-redux'
import { Creators } from '@redux/actions'

class SnackbarComponent extends Component {
  render () {
    const { open, message, error } = this.props
    const color = error ? '#f44242' : '#5fbf63'
    return (
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        open={ open }
        autoHideDuration={ 3000 }
        onClose={ () => this.props.closeSnackbar() }
      >
        <SnackbarContent style={{ backgroundColor: color }} message={ message }/>
      </Snackbar>
    )
  }
}
const mapStateToProps = ({ snackbar }) => ({
  open: snackbar.open,
  message: snackbar.message,
  error: snackbar.error
})
const mapDispatchToProps = dispatch => ({
  closeSnackbar: () => dispatch(Creators.closeSnackbar())
})
export default connect(mapStateToProps, mapDispatchToProps)(SnackbarComponent)