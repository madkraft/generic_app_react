import React from 'react'
import Nav from './Navigation'

const Main = props =>
  <div>
    <Nav />
    {React.cloneElement(props.children, ...props)}
  </div>

export default Main
