import React, { Component } from 'react'
import { Container, Header } from './styles'
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import List, { ListItem, ListItemText } from 'material-ui/List'
import Button from 'material-ui/Button'
import Divider from 'material-ui/Divider'
import { connect } from 'react-redux'

import './styles.css'

class Book extends Component {
  render () {
    return (
      <Container>
        <Header>Título</Header>
        <Paper className='paper-wrapper'>
          <Typography component="p">
            Descição Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Vestibulum quis eros porta, bibendum velit ac, iaculis mi. 
            Suspendisse hendrerit a quam at vestibulum. Proin eget justo ac augue iaculis consequat. 
            Quisque nec mauris vestibulum, consequat tellus in, commodo nunc. 
            Nulla porta tellus eros, ac placerat magna aliquet ultricies.
          </Typography>
        </Paper>
        <Paper className='paper-wrapper'>
          <Typography variant='headline' component='h3'>Capítulos
            <Button color='primary' className='btn-chapter'>Adicionar capítulo</Button>
          </Typography>
        </Paper>
        <Divider/>
        <List>
          <ListItem divider button>
            <ListItemText primary='Capítulo I'/>
          </ListItem>
          <ListItem divider button>
            <ListItemText primary='Capítulo II'/>
          </ListItem>
        </List>
      </Container>
    )
  }
}
const mapSateToProps = ({ user }) => ({
  user: user
})
export default connect(mapSateToProps)(Book)