import React from 'react'

const ShoppingCart = () =>
  <div id='shopping-cart'>
    <a id='clearCart' className='button button-large button-warn clear-cart'>Clear cart</a>
    <ul id='cartList' className='list-unstyled' />
  </div>

export default ShoppingCart
