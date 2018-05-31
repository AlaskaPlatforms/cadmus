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
      genre: '0',
      description: ''
    }
  }

  handleInputChange = ({ target: { value, name } }) => {
    this.setState(state => ({...state, [name]: value }))
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const { title, description, genre } = this.state
    const newBook = { title, description, userId: this.props.user._id }
    this.props.attemptAddBook(newBook)
  }

  renderInputs () {
    const { title, genre, description } = this.state
    return (
      <Form onSubmit={ this.handleSubmit } className='dark'>
        <Grid container spacing={ 24 }>
          <Grid item xs={ 12 } lg={ 8 }>
            <TextField name='title' fullWidth label='Título' onChange={ this.handleInputChange }/>
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
              name='description'
              label='Descrição'
              multiline
              fullWidth
              onChange={ this.handleInputChange }
            />
          </Grid>
        </Grid>
        <ButtonContainer>
          <Button type='submit' className='btn-custom' variant='primary'>Salvar</Button>
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
const mapStateToProps = ({ user }) => ({
  user: user.user
})
const mapDispatchToProps = dispatch => ({
  attemptAddBook: book => dispatch(Creators.addBookRequest(book))
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateBook)
