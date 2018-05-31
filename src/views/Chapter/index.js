import React, { Component } from 'react'
import { Container, Header, InnerContainer, TextArea, ButtonContainer } from './styles'
import Button from 'material-ui/Button'
import TextField from 'material-ui/TextField'
import Grid from 'material-ui/Grid'

class Chapter extends Component {
  constructor (props) {
    super(props)
    this.state = {
      title: '',
      chapterContent: ''
    }
  }

  handleInputChange = ({ target: { value, name } }) => {
    this.setState(state => ({...state, [name]: value }))
  }
  

  render () {
    const { title, chapterContent } = this.state
    return (
      <Container>
        <Header>Escrevendo capítulo...</Header>
        <InnerContainer>
          <Grid container spacing={ 24 }> 
            <Grid item xs={ 12 }>
              <TextField name='title' value={ title } label='Título' fullWidth  onChange={ this.handleInputChange }/>
            </Grid>
          </Grid>
          <Grid container spacing={ 24 }>
            <Grid item xs={ 12 }>  
              <TextArea
                name='chapterContent'
                value={ chapterContent }
                rows='20'
                placeholder='Escreva aqui sua história...'
                onChange={ this.handleInputChange }  
              >
              </TextArea>
            </Grid>
          </Grid>
          <ButtonContainer>
            <Button type='submit' className='btn-custom' variant='flat'>Salvar</Button>
            <Button className='btn-custom' variant='flat'>Cancelar</Button>
        </ButtonContainer>
        </InnerContainer>
      </Container>
    )
  }
}
export default Chapter