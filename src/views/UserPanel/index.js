import React, { Component } from 'react'
import { SideBar, Items , Item, Container, Panel, Header, UserIcon } from './styles'
import Input from '@utils/form/Input'
import TextArea from '@utils/form/TextArea'

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

        <UserIcon>
            <i class="medium material-icons">account_box</i>
        </UserIcon>
        <Container className="blue-grey lighten-5">
          
        <Header>Informacoes do usuario</Header>
          <Panel>
            <form action="">
              <Input type="text" placeholder="Nome de usuario" name="usernickname" />
              <Input type="text" placeholder="Nome" name = "username"/>
              <Input type="date" placeholder="Data de nascimento" name ="userbirth"/>
            </form>
          </Panel>
        </Container>
      </div>
    )
  }
}