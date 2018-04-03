import storage from 'redux-persist/es/storage'
import createHistory from 'history/createBrowserHistory'
import createSagaMiddleware from 'redux-saga'
import { routerMiddleware } from 'react-router-redux'
import { persistStore, persistCombineReducers } from 'redux-persist'
import { createStore, applyMiddleware, compose } from 'redux'

import sagas from './../sagas'
import { reducers } from './../reducers'

const config = {
  key: 'root',
  storage,
  whitelist: [],
  blacklist: []
}

export const history = createHistory()
const reducer = persistCombineReducers(config, reducers)
const middleware = routerMiddleware(history)
const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = compose(
  applyMiddleware(middleware, sagaMiddleware)
)

export function configureStore () {
  const store = createStore(reducer, composeEnhancers)
  const persistor = persistStore(store)
  sagaMiddleware.run(sagas)
  return { store, persistor }
}
