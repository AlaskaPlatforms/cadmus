import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Creators } from '@redux/actions'

import List, { ListItem, ListItemText } from 'material-ui/List'
import IconButton from 'material-ui/IconButton'
import Tooltip from 'material-ui/Tooltip'
import Avatar from 'material-ui/Avatar'
import ListItemSecondaryAction from 'material-ui/List/ListItemSecondaryAction'

import { Container, Header } from './styles'

import Sidebar from '@views/Sidebar'

import './styles.css'

class Books extends Component {
  componentWillMount () {
    const { user: {_id } } = this.props
    this.props.attemptGetBooks(_id)
  }

  handleDeleteBook = (id) => {
    const { user } = this.props
    const book = { bookId: id, userId: user._id }
    this.props.attemptDeleteBook(book)
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
              <ListItem key={book._id} divider button onClick={ () => this.props.history.push(`/book/${book._id}`) }>
                <Avatar></Avatar>
                <ListItemText primary={ book.title } secondary={ book.description } />
                <ListItemSecondaryAction>
                  <Tooltip title="Apagar">
                    <IconButton aria-label='Delete' onClick={ () => this.handleDeleteBook(book._id) }>
                      <i className='material-icons'>delete</i>
                    </IconButton>
                  </Tooltip>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
        </Container>
      </div>
    )
  }
}
const mapSateToProps = ({ user, book, sidebar }) => ({
  user: user.user,
  books: book.books,
  isLarge: sidebar.isLarge
})
const mapDispatchToProps = dispatch => ({
  attemptGetBooks: userId => dispatch(Creators.getBooksRequest(userId)),
  attemptDeleteBook: (book) => dispatch(Creators.deleteBookRequest(book))
})
export default connect(mapSateToProps, mapDispatchToProps)(Books)