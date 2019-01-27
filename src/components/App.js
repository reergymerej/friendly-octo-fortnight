import React, { Component } from 'react';
import { connect } from 'react-redux'
import { increment, decrement } from '../actions'
import Button from './Button'

class App extends Component {
  render() {
    return (
      <div className="container mx-auto my-8">
        <div>{this.props.count}</div>
        <Button onClick={this.props.decrement}>decrement</Button>
        <Button onClick={this.props.increment}>increment</Button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  count: state.count,
})

const mapDispatchToProps = {
  increment,
  decrement,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
