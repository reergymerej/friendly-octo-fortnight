import React, { Component } from 'react';
import { connect } from 'react-redux'
import { flashCardsRequest } from '../actions'
import Button from './Button'
import Error from './Error'

class App extends Component {
  render() {
    return (
      <div className="container mx-auto my-8">
        <Button
          onClick={this.props.flashCardsRequest}
          disabled={this.props.loadingFlashCards}
        >load cards</Button>
        { this.props.flashCardLoadError && <Error>There was a problem loading the flash cards.</Error> }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  loadingFlashCards: state.loadingFlashCards,
  flashCardLoadError: state.flashCardLoadError,
})

const mapDispatchToProps = {
  flashCardsRequest,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
