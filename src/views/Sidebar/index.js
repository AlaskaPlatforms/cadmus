import React, { Component } from 'react'
import { SideBar, Items , Item, Menu } from './styles'
import { connect } from 'react-redux'

import { Creators } from '@redux/actions'

class Sidebar extends Component {
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

  handleSidebar = () => {
    const { isLarge } = this.props
    this.props.changeSidebar(!isLarge)
  }

  render(){
    const { isLarge } = this.props
    return (
      <div>
        <SideBar active={ isLarge }>
          <Menu active={ isLarge } onClick={ this.handleSidebar }>
            <i className='material-icons large'>{ isLarge ? 'close' : 'menu'}</i>
          </Menu>
          <Items>
            { this.renderItem(isLarge ? 'Escrever' : '', '/new-book', 'create') }
            { this.renderItem(isLarge ? 'Livros' : '', '/books', 'library_books') }
            { this.renderItem(isLarge ? 'Seus livros' : '', '/your-books', 'local_library') }
            <Item onClick={ this.props.attemptLogout }>
              <i className='material-icons'>exit_to_app</i> 
              { isLarge ? 'Sair' : '' }
            </Item>
          </Items>
        </SideBar>
      </div>
    )
  }
}
const mapStateToProps = ({ sidebar }) => ({
  isLarge: sidebar.isLarge
})
const mapDispatchToProps = dispatch => ({
  attemptLogout: () => dispatch(Creators.authRemover()),
  changeSidebar: newState => dispatch(Creators.changeSidebar(newState))
})
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)

