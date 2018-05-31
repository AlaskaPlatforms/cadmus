import React, { Component } from 'react'
import { Container, Header } from './styles'
import List, { ListItem, ListItemText } from 'material-ui/List'
import Avatar from 'material-ui/Avatar'
import { connect } from 'react-redux'

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
const mapSateToProps = ({ auth }) => ({
  user: auth.user
})
export default connect(mapSateToProps)(Books)