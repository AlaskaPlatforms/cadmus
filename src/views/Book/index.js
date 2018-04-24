import React, { Component } from 'react'
import { Container, Header } from './styles'

class Book extends Component {
  render () {
    return (
      <Container className="blue-grey lighten-5">
        <Header className="left-align flow-text blue darken-4">Livros</Header>
        <ul className="collection">
          <li className="collection-item avatar">
            <i className="material-icons circle green">insert_chart</i>
            <span className="title">Title</span>
            <p>Terror, Suspense, Ação</p>
            <p>Um livro sobre alguma coisa apavorantes...</p>
          </li>
        </ul>
      </Container>
    )
  }
}
export default Book