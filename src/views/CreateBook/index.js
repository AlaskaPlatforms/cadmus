import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Creators } from '@redux/actions'

import Grid from 'material-ui/Grid'
import TextField from 'material-ui/TextField'
import Select from 'material-ui/Select'
import Button from 'material-ui/Button'
import { MenuItem } from 'material-ui/Menu'

import Sidebar from '@views/Sidebar'

import { Form, Header, Container, ButtonContainer } from './styles'

import './styles.css'

class CreateBook extends Component {
  constructor (props) {
    super(props)
    this.state = {
      title: '',
      genre: '0',
      description: '',
      errorTitle: false,
      errorDescription: false
    }
  }

  capitalizeFirstLetter = (value) => 
    value.charAt(0).toUpperCase() + value.slice(1)

  handleInputChange = ({ target: { value, name } }) => {
    const error = `error${this.capitalizeFirstLetter(name)}`
    this.setState(state => ({...state, [name]: value, [error]: false }))
  }

  comeBack() {
    return (
      this.props.history.push('books')
    )    
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const { title, description } = this.state
    let valid = true

    if (title.length < 4) {
      valid = false
      this.setState(state => ({...state, errorTitle: true }))
    }

    if (description.length < 6) {
      valid = false
      this.setState(state => ({...state, errorDescription: true }))
    }
    
    if (valid) {
      const newBook = { title, description, userId: this.props.user._id }
      this.props.attemptAddBook(newBook, this.props.history)
    }
  }

  renderInputs () {
    const { genre, errorTitle, errorDescription } = this.state
    return (
      <div>
        <Sidebar/>
        <Form onSubmit={ this.handleSubmit }>
          <Grid container spacing={ 24 }>
            <Grid item xs={ 12 } lg={ 8 }>
              <TextField
                name='title'
                error={ errorTitle }
                fullWidth
                label='Título'
                onChange={ this.handleInputChange }
                helperText={ errorTitle ? 'Obrigatório! Minímo 4 caracteres' : ''}
                />
            </Grid>
            <Grid item xs={ 12 } lg={ 4 } className='select-padding'>
              <Select name='genre' label='Gênero' onChange={ this.handleInputChange } fullWidth value={ genre }>
                <MenuItem value='0'>Selecione uma opção</MenuItem>
                <MenuItem value='1'>Terror</MenuItem>
              </Select>
            </Grid>
          </Grid>
          <Grid container spacing={ 24 }>
            <Grid item xs={ 12 }>
              <TextField
                error={ errorDescription }
                name='description'
                label='Descrição'
                helperText={ errorDescription ? 'Obrigatório! Minímo 6 caracteres!' : '' }
                multiline
                fullWidth
                onChange={ this.handleInputChange }
              />
            </Grid>
          </Grid>
          <ButtonContainer>
            <Button type='submit' className='btn-custom' variant='flat'>Salvar</Button>
            <Button className='btn-custom' variant='flat' onClick = {() => this.comeBack()}>Cancelar</Button>
          </ButtonContainer>
        </Form>
      </div>
    )
  }

  render () {
    const { isLarge } = this.props
    return (
      <Container active={ isLarge }>
        <Header>Novo livro</Header>
        {this.renderInputs()}
      </Container>
    )
  }
}

const mapStateToProps = ({ user, sidebar }) => ({
  user: user.user,
  isLarge: sidebar.isLarge
})

const mapDispatchToProps = dispatch => ({
  attemptAddBook: (book, history) => dispatch(Creators.addBookRequest(book, history))
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateBook)
