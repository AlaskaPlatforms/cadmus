import React, { Component } from 'react'
import { Container, Header } from './styles'
import List, { ListItem, ListItemText } from 'material-ui/List'
import Avatar from 'material-ui/Avatar'
import { connect } from 'react-redux'
import { Creators } from '@redux/actions'

class Books extends Component {
  componentWillMount () {
    this.props.attemptGetBooks(this.props.user._id)
  }

  render () {
    return (
      <Container>
        <Header>Livros</Header>
        <List>
          <ListItem divider button>
            <Avatar></Avatar>
            <ListItemText primary="Título" secondary="Descrição" />
          </ListItem>
        </List>
      </Container>
    )
  }
}
const mapSateToProps = ({ user }) => ({
  user: user.user
})
const mapDispatchToProps = dispatch => ({
  attemptGetBooks: userId => dispatch(Creators.getBooksRequest(userId))
})
export default connect(mapSateToProps, mapDispatchToProps)(Books)