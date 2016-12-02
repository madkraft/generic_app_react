import './styles/main.styl'

import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import Main from './components/Main'
import ProductsPage from './pages/ProductsPage'
import CartPage from './pages/CartPage'
import LoginPage from './pages/LoginPage'
import SingleProductPage from './pages/SingleProductPage'

const router = (
  <Router history={browserHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={ProductsPage} />
      <Route path='/cart' component={CartPage} />
      <Route path='/login' component={LoginPage} />
      <Route path='/product/:prodId' component={SingleProductPage} />
    </Route>
  </Router>
)

render(router, document.getElementById('root'))
