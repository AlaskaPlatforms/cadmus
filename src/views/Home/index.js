import React, { Component } from 'react'
import { Card, Text } from './styles'

export default class Home extends Component {
  render(){
    return(
      <Card>
        <div>
          <Text className="center"><i className="material-icons large">book</i>Cadmus</Text>
        </div>
      </Card>
    )
  }
}