import React, { Component } from 'react';
import { connect } from 'react-redux'
import { flashCardsRequest } from '../actions'
import Button from './Button'
import Error from './Error'
import Cards from './Cards'

class App extends Component {
  render() {
    return (
      <div className="container mx-auto my-8">
        <Button
          onClick={this.props.flashCardsRequest}
          disabled={this.props.loadingFlashCards}
        >load cards</Button>
        { this.props.flashCardLoadError && <Error>There was a problem loading the flash cards.</Error> }
        { this.props.cards.length > 0 && <Cards cards={this.props.cards} /> }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  loadingFlashCards: state.loadingFlashCards,
  flashCardLoadError: state.flashCardLoadError,
  cards: state.cards,
})

const mapDispatchToProps = {
  flashCardsRequest,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
