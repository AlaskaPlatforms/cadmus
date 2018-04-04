import React, { Component } from 'react'
import { Card, Text } from './styles'
import Input from '@components/utils/form/Input'

export default class Home extends Component {
  render() {
    return (
      <Card>
        <div>
          <Text className="row center"><i className="material-icons large">book</i>Cadmus</Text>   
          <Input id='primeiro_nome' type='text' for='primeiro_nome' caption='abc'/>
        </div>
      </Card>
    )
  }
}