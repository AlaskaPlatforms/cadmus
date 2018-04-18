import React, { Component } from 'react'
import Input from '@utils/form/Input'
import Grid from 'material-ui/Grid'
import TextField from 'material-ui/TextField'
import Select from 'material-ui/Select'
import { MenuItem } from 'material-ui/Menu'
import { Form, Header, Container, ButtonContainer, Button } from './styles'

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
    this.setState({ genres: value })
  }

  handleChangeDescription = ({ target }) => {
    const { value } = target
    this.setState({ description: value })
  }

  renderInputs() {
    const { title, genres, description } = this.state
    return (
      <Form>
        <Grid container>
        <Grid item xs={12} l={8}>
          <TextField fullWidth
              label="Titulo" onChange={ this.handleChangeTitle }/>
        </Grid>
          <Grid item item xs={12} l={4}>
            <Select value='1'>
              <MenuItem value='1'>Terror</MenuItem>
            </Select>
          </Grid>
        </Grid>
        <div className="row">
          <div className="col s12 input-field">
            <TextField
              label="Descrição"
              multiline
              onChange={ this.handleChangeDescription }
            />
          </div>
        </div>
        <ButtonContainer>
          <Button className="btn right blue darken-4">Salvar</Button>
          <Button style={{ color: '#0d47a1' }} className="btn-flat right transparent">Cancelar</Button>
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