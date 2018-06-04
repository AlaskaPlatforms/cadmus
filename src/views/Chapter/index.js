import React, { Component } from 'react'
import { Container, Header, InnerContainer, TextArea, ButtonContainer } from './styles'
import Button from 'material-ui/Button'
import TextField from 'material-ui/TextField'
import Grid from 'material-ui/Grid'

import { connect } from 'react-redux'
import { Creators } from '@redux/actions'

import Sidebar from '@views/Sidebar'

class Chapter extends Component {
  constructor (props) {
    super(props)
    this.state = {
      index: '',
      text: ''
    }
  }

  handleInputChange = ({ target: { value, name } }) => {
    this.setState(state => ({...state, [name]: value }))
  }

  handleSubmit = () => {
    const { book } = this.props
    const { index, text } = this.state
    const { bookId } = this.props.match.params
    const newChapter = {
      bookId,
      text: text,
      index: parseInt(index)
    }
    this.props.attemptAddChapter(newChapter, this.props.history)
  }

  render () {
    const { index, text } = this.state
    return (
      <div>
        <Sidebar/>
        <Container>
          <Header>Escrevendo capítulo...</Header>
          <InnerContainer>
          <Grid container spacing={ 24 }> 
              <Grid item xs={ 12 }>
                <TextField type='number' name='index' value={ index } label='Numero do capítulo' fullWidth  onChange={ this.handleInputChange }/>
              </Grid>
            </Grid>
            <Grid container spacing={ 24 }>
              <Grid item xs={ 12 }>  
                <TextArea
                  name='text'
                  value={ text }
                  rows='20'
                  placeholder='Escreva aqui sua história...'
                  onChange={ this.handleInputChange }  
                >
                </TextArea>
              </Grid>
            </Grid>
            <ButtonContainer>
              <Button type='submit' className='btn-custom' variant='flat' onClick={ this.handleSubmit }>Salvar</Button>
              <Button className='btn-custom' variant='flat'>Cancelar</Button>
          </ButtonContainer>
          </InnerContainer>
        </Container>
      </div>
    )
  }
}
const mapSateToProps = ({ user, book }) => ({
  user: user,
  book: book.book
})
const mapDispatchToProps = dispatch => ({
  attemptAddChapter: (chapter, history) => dispatch(Creators.addChapterRequest(chapter, history))
})
export default connect(mapSateToProps, mapDispatchToProps)(Chapter)