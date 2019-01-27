import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from '../actions'
import Button from './Button'
import Error from './Error'
import Cards from './Cards'
import Input from './Input'
import NewCardForm from './NewCardForm'

const cleanUpTags = (tagsString) =>
  tagsString.split(',')
  .map(x => x.trim())
  .filter(x => !!x)

class App extends Component {
  state = {
    tags: '',
  }

  handleInputChange = (event) => {
    this.setState({ tags: event.target.value })
  }

  handleLoadClick = (event) => {
    this.props.flashCardsRequest(cleanUpTags(this.state.tags))
  }

  handleNewCardSave = (card) => {
    this.props.flashCardCreate({
      front: {
        value: card.front,
        tags: cleanUpTags(card.frontTags),
      },
      back: {
        value: card.back,
        tags: cleanUpTags(card.backTags),
      },
    })
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
        { this.props.cards.length > 0 &&
          <Cards cards={this.props.cards} onCardDelete={this.props.deleteCard} />
        }
        <NewCardForm
          onSave={this.handleNewCardSave}
          disabled={this.props.creatingCard}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  loadingFlashCards: state.loadingFlashCards,
  flashCardLoadError: state.flashCardLoadError,
  cards: state.cards,
  creatingCard: state.creatingCard,
})

const mapDispatchToProps = {
  flashCardsRequest: actions.flashCardsRequest,
  deleteCard: actions.flashCardDeleteRequest,
  flashCardCreate: actions.flashCardCreateRequest,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
