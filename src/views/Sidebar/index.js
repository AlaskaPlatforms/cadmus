import React, { Component } from 'react'
import { SideBar, Items , Item, Container, Panel, Header, UserIcon } from './styles'

export default class  UserPanel extends Component {
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
            { this.renderItem('Livros', '/books', 'library_books') }
          </Items>
        </SideBar>
      </div>
    )
  }
}