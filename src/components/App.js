import React, { Component } from 'react';
import { connect } from 'react-redux'
import { flashCardsRequest } from '../actions'
import Button from './Button'
import Error from './Error'
import Cards from './Cards'
import Input from './Input'

class App extends Component {
  state = {
    tags: '',
  }

  handleInputChange = (event) => {
    this.setState({ tags: event.target.value })
  }

  handleLoadClick = (event) => {
    const tags = this.state.tags.split(',')
      .map(x => x.trim())
      .filter(x => !!x)
    this.props.flashCardsRequest(tags)
  }

  render() {
    return (
      <div className="container mx-auto my-8">
        <Input
          label="Tags"
          type="text"
          placeholder="spanish, french, redux-saga"
          onChange={this.handleInputChange}
          value={this.state.tags}
        />
        <Button onClick={this.handleLoadClick} disabled={this.props.loadingFlashCards}>load cards</Button>
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
