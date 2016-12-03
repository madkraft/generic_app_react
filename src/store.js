import { createStore } from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router'

import products from './data/products'
import rootReducer from './reducers/index'

const defaultState = {
  products
}

const store = createStore(rootReducer, defaultState)
const history = syncHistoryWithStore(browserHistory, store)

export default store
export { history }
