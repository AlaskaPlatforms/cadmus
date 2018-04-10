import React, { Component } from 'react'
import { SideBar, Items , Item, Container, Panel, Header } from './styles'

export default class  UserPanel extends Component {

  render(){

    return (
      <div>
        <SideBar className="z-depth-2">
          <Items>
            <Item className="nav-link tooltiped">
              Informacoes de usuario
            </Item>
            <Item>
              Configuracoes de usuario
            </Item>
          </Items>
        </SideBar>

        <Container className="blue-grey lighten-5">
        <Header>Informacoes do usuario</Header>
          <Panel>
           
            <form action="">
              <label htmlFor="username">Nome de usuario:</label>
              <input type="text" placeholder="Nome de usuario" name="username" />
            </form>
          </Panel>
        </Container>
      </div>
    )
  }
}