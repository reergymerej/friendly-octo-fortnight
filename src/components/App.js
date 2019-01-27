import React, { Component } from 'react';
import { connect } from 'react-redux'
import { increment, decrement, flashCardsRequest } from '../actions'
import Button from './Button'

class App extends Component {
  render() {
    return (
      <div className="container mx-auto my-8">
        <div>{this.props.count}</div>
        <Button onClick={this.props.decrement}>decrement</Button>
        <Button onClick={this.props.increment}>increment</Button>
        <Button
          onClick={this.props.flashCardsRequest}
          disabled={this.props.loadingFlashCards}
        >load cards</Button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  count: state.count,
  loadingFlashCards: state.loadingFlashCards,
})

const mapDispatchToProps = {
  increment,
  decrement,
  flashCardsRequest,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
