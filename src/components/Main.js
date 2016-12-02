import React, { Component } from 'react'
import Nav from './Navigation'

export default class Main extends Component {
  render () {
    return (
      <div>
        <Nav />
        {React.cloneElement(this.props.children, this.props)}
      </div>
    )
  }
}
