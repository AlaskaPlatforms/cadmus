import React, { Component } from 'react'
import { Container, Header } from './styles'
import List, { ListItem, ListItemText } from 'material-ui/List'
import Avatar from 'material-ui/Avatar'

class Books extends Component {
  render () {
    return (
      <Container>
        <Header>Livros</Header>
        <List>
          <ListItem divider button>
            <Avatar></Avatar>
            <ListItemText primary="Título" secondary="Descrição" />
          </ListItem>
          <ListItem divider button>
            <Avatar></Avatar>
            <ListItemText primary="Título" secondary="Descrição" />
          </ListItem>
        </List>
      </Container>
    )
  }
}
export default Books