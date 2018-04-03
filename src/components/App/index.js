import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/es/integration/react'

import { configureStore } from '@redux/config/configureStore'

import Routes from '@components/Routes'

const { store, persistor } = configureStore()

class App extends Component {
  render () {
    return (
      <main>
        <PersistGate persistor={ persistor }>
          <Provider store={ store }>
            <Routes />
          </Provider>
        </PersistGate>
      </main>
    )
  }
}

export default App
