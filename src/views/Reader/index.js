import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Creators } from '@redux/actions'

import Sidebar from '@views/Sidebar'

import { Container, Header, Title, ChapterWrapper, ButtonContainer } from './styles'

import Button from 'material-ui/Button'

import './styles.css'

class Reader extends Component {
  constructor (props) {
    super(props)
    this.state = {
      hasNext: false,
      hasPrevious: false
    }
  }

  componentWillMount () {
    const { params: { chapterId, bookId } } = this.props.match
    this.props.attemptGetChapter(chapterId)
    this.props.attemptGetBook(bookId)
  }
  
  componentWillReceiveProps (nextProps) {
    const { chapter, book } = nextProps
    if (book.chapters) this.setState({
      hasNext: book.chapters.indexOf(chapter._id) + 1 > book.chapters.length - 1 ? false : true,
      hasPrevious: book.chapters.indexOf(chapter._id) - 1 < 0  ? false : true
    })
  }

  handleNextBook = () => {
    const { chapter, book } = this.props
    const index = book.chapters.indexOf(chapter._id)
    const next = book.chapters[index + 1]
    this.props.history.push(`/book/${book._id}/chapter/${next}`)
    this.props.history.go()
  }

  handlePreviousBook = () => {
    const { chapter, book } = this.props
    const index = book.chapters.indexOf(chapter._id)
    const next = book.chapters[index - 1]
    this.props.history.push(`/book/${book._id}/chapter/${next}`)
    this.props.history.go()
  }

  render () {
    const { chapter, book, isLarge } = this.props
    const { hasNext, hasPrevious } = this.state
    if (book && chapter.index) {
      return (
        <div>
          <Sidebar/>
          <Container active={ isLarge }>
            <Header active={ isLarge }>{ book.title }</Header>
            <Title>{ `Capítulo ${chapter.index}` }</Title>
            <div>
              <ChapterWrapper>{ chapter.text }</ChapterWrapper>
              <ButtonContainer hasNext={ hasNext } hasPrevious={ hasPrevious }>
                <Button type='submit' className='btn-left' variant='flat' onClick={ this.handlePreviousBook }>Anterior</Button>
                <Button type='submit' className='btn-right' variant='flat' onClick={ this.handleNextBook }>Proximo</Button>
              </ButtonContainer>
            </div>
          </Container>
        </div>
      )
    } else {
      return <div>Carregando...</div>
    }
  }
}

const mapSateToProps = ({ book, sidebar }) => ({
  chapter: book.chapter,
  book: book.book,
  isLarge: sidebar.isLarge
})

const mapDispatchToProps = dispatch => ({
  attemptGetChapter: chapterId => dispatch(Creators.getChapterRequest(chapterId)),
  attemptGetBook: book => dispatch(Creators.getBookRequest(book))
})

export default connect(mapSateToProps, mapDispatchToProps)(Reader)
