import React, { Component } from 'react'
import { SideBar, Items , Item } from './styles'
import { connect } from 'react-redux'
import { Creators } from '@redux/actions'

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
    return (
      <div>
        <SideBar>
          <Items>
            { this.renderItem('Escrever', '/new-book', 'create') }
            { this.renderItem('Seus livros', '/books', 'library_books') }
            { this.renderItem('Livros', '/books', 'library_books') }
            <Item onClick={ this.props.attemptLogout }>
              <i className='material-icons'>exit_to_app</i> 
              Sair
            </Item>
          </Items>
        </SideBar>
      </div>
    )
  }
}
const mapDispatchToProps = dispatch => ({
  attemptLogout: () => dispatch(Creators.authRemover())
})
export default connect(null, mapDispatchToProps)(UserPanel)