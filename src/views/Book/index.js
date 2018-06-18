import React, { Component } from 'react'
import { Container, Header } from './styles'
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import List, { ListItem, ListItemText } from 'material-ui/List'
import IconButton from 'material-ui/IconButton'
import ListItemSecondaryAction from 'material-ui/List/ListItemSecondaryAction'
import Button from 'material-ui/Button'
import Divider from 'material-ui/Divider'
import Tooltip from 'material-ui/Tooltip'
import { connect } from 'react-redux'
import { Creators } from '@redux/actions'
import Sidebar from '@views/Sidebar'

import './styles.css'

class Book extends Component {
  componentWillMount () {
    const { params: { book } } = this.props.match
    this.props.attemptGetBook(book) 
  }

  handleDeleteChapter = (chapter) => {
    const { params: { book } } = this.props.match
    const newChapter = { bookId: book, chapterId: chapter }
    this.props.attemptDeleteChapter(newChapter, this.props.history)
  }

  handleReadChapter = (id) => {
    const { book: { _id } } = this.props
    this.props.history.push(`/book/${_id}/chapter/${id}`)
  }
  
  render () {
    const { book, user, isLarge } = this.props
    if (book) {
      return (
        <div>
          <Sidebar/>
          <Container active={ isLarge }>
            <Header>{ book.title }</Header>
            <Paper className='paper-wrapper'>
              <Typography component="p">
                { book.description }
              </Typography>
            </Paper>
            <Paper className='paper-wrapper'>
              <Typography variant='headline' component='h3'>Capítulos
                <Button style={{ display: user._id === book.userId ? 'block' : 'none' }} color='primary' className='btn-chapter' href={ `/book/${book._id}/chapter` }>Adicionar capítulo</Button>
              </Typography>
            </Paper>
            <Divider/>
            <List>
              { book.chapters ? book.chapters.map((chapter, index) => (
                <ListItem key={ chapter } divider button onClick={ () => this.handleReadChapter(chapter) }>
                  <ListItemText primary={ `Capítulo ${index + 1}`}/>
                  <ListItemSecondaryAction style={{ display: user._id === book.userId ? 'block' : 'none' }}>
                    <Tooltip title="Editar">
                      <IconButton aria-label='Edit' href={ `/book/${book._id}/chapter/${chapter}/edit` }>
                        <i className='material-icons'>edit</i>
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Apagar">
                      <IconButton aria-label='Delete' onClick={ () => this.handleDeleteChapter(chapter) }>
                        <i className='material-icons'>delete</i>
                      </IconButton>
                    </Tooltip>
                    </ListItemSecondaryAction>
                </ListItem>
              )): <div>Nenhum capítulo ainda</div> }
            </List>
          </Container>
        </div>
      )
    }
    return <div>Carregando...</div>
  }
}
const mapSateToProps = ({ user, book, sidebar }) => ({
  user: user.user,
  book: book.book,
  isLarge: sidebar.isLarge
})

const mapDispatchToProps = dispatch => ({
  attemptGetBook: book => dispatch(Creators.getBookRequest(book)),
  attemptDeleteChapter: (chapter, history) => dispatch(Creators.deleteChapterRequest(chapter, history))
})

export default connect(mapSateToProps, mapDispatchToProps)(Book)