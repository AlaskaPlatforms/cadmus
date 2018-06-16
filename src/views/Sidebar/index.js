import React, { Component } from 'react'
import { SideBar, Items , Item, Menu } from './styles'
import IconButton from 'material-ui/IconButton'

export default class  UserPanel extends Component {
  constructor (props) {
    super(props)

    this.state = {
      active: true
    }

    this.activeInactive = this.activeInactive.bind(this)
  }

  activeInactive () {
    this.setState(state => ({...state, active: !state.active }))  
  }  

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
    const { active } = this.state
    return (
      <div>
        <SideBar active={ this.state.active }>
          <IconButton onClick={ this.activeInactive }>
            <Menu>
              <i className='material-icons'>menu</i>
            </Menu>
          </IconButton>
          <Items>
            { this.renderItem(active ? 'Escrever' : '', '/new-book', 'create') }
            { this.renderItem(active ? 'Livros' : '', '/books', 'library_books') }
          </Items>
        </SideBar>
      </div>
    )
  }
}