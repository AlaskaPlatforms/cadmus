import React, { Component } from 'react'
import { Container, Header } from './styles'
import List, { ListItem, ListItemText } from 'material-ui/List'
import Avatar from 'material-ui/Avatar'
import { connect } from 'react-redux'
import { Creators } from '@redux/actions'
import Sidebar from '@views/Sidebar'

import './styles.css'

class Books extends Component {
  componentWillMount () {
    const { user: {_id } } = this.props
    this.props.attemptGetBooks(_id)
  }

  render () {
    const { books, isLarge } = this.props

    return (
      <div>
        <Sidebar/>
        <Container active={ isLarge }>
          <Header>Livros</Header>
          <List>
            { books.map(book => (
              <a key={ book._id } href={ `/book/${book._id}` }>
                <ListItem divider button>
                  <Avatar></Avatar>
                  <ListItemText primary={ book.title } secondary={ book.description } />
                </ListItem>
              </a>
            ))}
          </List>
        </Container>
      </div>
    )
  }
}

const mapSateToProps = ({ user, book, sideBar }) => ({
  user: user.user,
  books: book.books,
  isLarge: sideBar.isLarge
})

const mapDispatchToProps = dispatch => ({
  attemptGetBooks: userId => dispatch(Creators.getBooksRequest(userId)),
})

export default connect(mapSateToProps, mapDispatchToProps)(Books)