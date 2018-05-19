import React, { Component } from 'react'
import { Container, Header, InnerContainer, TextArea } from './styles'
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

  onChangeTitle = ({ target: { value } }) => {
    this.setState({...this.state, title: value })
  }
  
  onChangeChapterContent = ({ target: { value } }) => {
    this.setState({...this.state, chapterContent: value })
  }

  render () {
    const { title, chapterContent } = this.state
    return (
      <Container>
        <Header>Escrevendo capítulo...</Header>
        <InnerContainer>
          <Grid container spacing={ 24 }> 
            <Grid item xs={ 12 }>
              <TextField value={ title } placeholder='Título' fullWidth  onChange={ this.onChangeTitle }/>
            </Grid>
          </Grid>
          <Grid container spacing={ 24 }>
            <Grid item xs={ 12 }>  
              <TextArea
                value={ chapterContent }
                rows='25'
                placeholder='Escreva aqui sua história...'
                onChange={ this.onChangeChapterContent }  
              >
              </TextArea>
            </Grid>
          </Grid>
          <Grid container spacing={ 24 }>
            <Grid item xs={ 12 }>  
            </Grid>
          </Grid>
        </InnerContainer>
      </Container>
    )
  }
}
export default Chapter