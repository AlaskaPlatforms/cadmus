import React, { Component } from 'react'
import { SideBar, Items , Item, Container, Panel, Header, UserIcon } from './styles'


export default class  UserPanel extends Component {

  render(){

    return (
      <div>
        <SideBar className='z-depth-2'>
          <Items>
            <Item className='nav-link tooltiped'>
              Informacoes de usuario
            </Item>
          </Items>
        </SideBar>

        <UserIcon>
            <i class='medium material-icons'>account_box</i>
        </UserIcon>
        <Container className='blue-grey lighten-5'>
          
        <Header>User Info</Header>
          <Panel>
            <form action=''>
            </form>
          </Panel>
        </Container>
      </div>
    )
  }
}
/*
<Input type="text" class="datepicker" label="birth" name="birth" />
id={props.id}
      type={props.type}
      name={props.name}
      readOnly={props.readOnly}
      value={props.value}
      onChange={props.onChange}
*/ 