import React, { Component } from 'react'
import { SideBar, Items , Item, Menu } from './styles'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import IconButton from 'material-ui/IconButton'

import { setState } from '@redux/actions/sideBar'

class UserPanel extends Component {
  renderItem = (name, path, icon) => {
    return (
      <a href={ path }>
        <Item>
          <i className='material-icons'>{ icon }</i> 
          { name }
        </Item>
      </a>
    )
  }

  render(){
    const { setState, isLarge } = this.props
    var newState = isLarge ? false : true

    return (
      <div>
        <SideBar active={ isLarge }>
          <IconButton onClick={ () => setState(newState) }>
            <Menu>
              <i className='material-icons'>menu</i>
            </Menu>
          </IconButton>
          <Items>
            { this.renderItem(isLarge ? 'Escrever' : '', '/new-book', 'create') }
            { this.renderItem(isLarge ? 'Livros' : '', '/books', 'library_books') }
          </Items>
        </SideBar>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  isLarge: state.sideBar.isLarge
})

const mapDispatchToProps = dispatch => bindActionCreators({ setState }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(UserPanel)