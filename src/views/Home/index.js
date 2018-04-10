import React, { Component } from 'react'
import { Card, Text } from './styles'
import Input from '@components/utils/form/Input'

export default class Home extends Component {
  render() {
    return (
      <Card>
        <div>
          <Text className="row center"><i className="material-icons large">book</i>Cadmus</Text>   
        </div>
      </Card>
    )
  }
}