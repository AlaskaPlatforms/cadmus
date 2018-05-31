import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Creators } from '@redux/actions'

import Grid from 'material-ui/Grid'
import TextField from 'material-ui/TextField'
import Select from 'material-ui/Select'
import Button from 'material-ui/Button'
import { MenuItem } from 'material-ui/Menu'

import { Form, Header, Container, ButtonContainer } from './styles'

import './styles.css'

class CreateBook extends Component {
  constructor (props) {
    super(props)
    this.state = {
      title: '',
      genre: '',
      description: ''
    }
  }

  handleChangeTitle = ({ target: { value } }) => {
    this.setState({ title: value })
  }

  handleChangeGenre = ({ target: { value } }) => {
    this.setState({ genre: value })
  }

  handleChangeDescription = ({ target: { value } }) => {
    this.setState({ description: value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const { title, description, genre } = this.state
    const newBook = { title, description, genre }
    this.props.attemptAddBook(newBook)
  }

  renderInputs () {
    const { title, genre, description } = this.state
    return (
      <Form onSubmit={ this.handleSubmit }>
        <Grid container spacing={ 24 }>
          <Grid item xs={ 12 } lg={ 8 }>
            <TextField fullWidth label='Título' onChange={ this.handleChangeTitle }/>
          </Grid>
          <Grid item xs={ 12 } lg={ 4 } className='select-padding'>
            <Select label='Gênero' onChange={ this.handleChangeGenre } fullWidth value='1'>
              <MenuItem value=''>Selecione uma opção</MenuItem>
              <MenuItem value='1'>Terror</MenuItem>
            </Select>
          </Grid>
        </Grid>
        <Grid container spacing={ 24 }>
          <Grid item xs={ 12 }>
            <TextField
              label='Descrição'
              multiline
              fullWidth
              onChange={ this.handleChangeDescription }
            />
          </Grid>
        </Grid>
        <ButtonContainer>
          <Button type='submit' className='btn-custom' variant='flat'>Salvar</Button>
          <Button className='btn-custom' variant='flat'>Cancelar</Button>
        </ButtonContainer>
      </Form>
    )
  }

  render () {
    return (
      <Container>
        <Header>Novo livro</Header>
        {this.renderInputs()}
      </Container>
    )
  }
}
const mapStateToProps = ({ auth }) => ({
  user: auth.user
})
const mapDispatchToProps = dispatch => ({
  attemptAddBook: book => dispatch(Creators.addBookRequest(book))
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateBook)
