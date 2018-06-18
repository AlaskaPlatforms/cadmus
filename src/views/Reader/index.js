import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Creators } from '@redux/actions'

import Sidebar from '@views/Sidebar'

import { Container, Header, Title, ChapterWrapper } from './styles'

class Reader extends Component {
  componentWillMount () {
    const { params: { chapterId } } = this.props.match
    this.props.attemptGetChapter(chapterId)
  }

  render () {
    const { chapter } = this.props
    return (
      <div>
        <Sidebar/>
        <Container>
          <Header>Livros</Header>
          <Title>{ `Capítulo ${chapter.index}` }</Title>
          <ChapterWrapper>{ chapter.text }</ChapterWrapper>
        </Container>
      </div>
    )
  }
}

const mapSateToProps = ({ book }) => ({
  chapter: book.chapter
})

const mapDispatchToProps = dispatch => ({
  attemptGetChapter: chapterId => dispatch(Creators.getChapterRequest(chapterId))
})

export default connect(mapSateToProps, mapDispatchToProps)(Reader)
