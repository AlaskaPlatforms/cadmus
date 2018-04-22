import React, { Component } from 'react'
import Input from '@utils/form/Input'
import Grid from 'material-ui/Grid'
import TextField from 'material-ui/TextField'
import Select from 'material-ui/Select'
import Button from 'material-ui/Button'
import { MenuItem } from 'material-ui/Menu'
import { Form, Header, Container, ButtonContainer } from './styles'

class CreateBook extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      genres: '',
      description: ''
    }
  }
  
  handleChangeTitle = ({ target }) => {
    const { value } = target
    this.setState({ title: value })
  }

  handleChangeGenre = ({ target }) => {
    const { value } = target
    console.log(target)
    this.setState({ genres: value })
  }

  handleChangeDescription = ({ target }) => {
    const { value } = target
    this.setState({ description: value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log(this.state)
  }

  renderInputs() {
    const { title, genres, description } = this.state
    return (
      <Form onSubmit={ this.handleSubmit }>
        <Grid container spacing={ 24 }>
        <Grid item xs={ 12 } lg={ 8 }>
          <TextField fullWidth
              label="Titulo" onChange={ this.handleChangeTitle }/>
        </Grid>
          <Grid item style={{ paddingTop: '28px '}} xs={12} lg={4}>
            <Select onChange={ this.handleChangeGenre } fullWidth value='1'>
              <MenuItem value='1'>Terror</MenuItem>
            </Select>
          </Grid>
        </Grid>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <TextField
              label="Descrição"
              multiline
              fullWidth
              onChange={ this.handleChangeDescription }
            />
          </Grid>
        </Grid>
        <ButtonContainer>
          <Button type='submit' style={{ float: 'right', margin: '15px' }} variant="flat">Salvar</Button>
          <Button style={{ float: 'right', margin: '15px' }} variant="flat">Cancelar</Button>
        </ButtonContainer>
      </Form>
    )
  }

  render() {
    return (
      <Container className="blue-grey lighten-5">
        <Header className="left-align flow-text blue darken-4">Novo livro</Header>
        {this.renderInputs()}
      </Container>
    )
  }
}
export default CreateBook