import React from 'react'
import Button from './Button'

class Card extends React.Component {
  state = {
    showFront: true,
  }

  handleClick = () => {
    this.setState((prevState) => ({ showFront: !prevState.showFront }))
  }

  handleDeleteClick = (event) => {
    event.stopPropagation()
  }

  render() {
    const { back, front } = this.props
    const value = this.state.showFront ? front.value : back.value
    return (
      <div className="flex">
        <div className="flex-1 cursor-pointer max-w-sm rounded overflow-hidden shadow-md hover:shadow-lg text-center m-8 p-8" onClick={this.handleClick}>
          <div className="text-xs text-grey">
            {front.tags.join(', ')} / {back.tags.join(', ')}
          </div>
          <div className="text-2xl my-2">
            {value}
          </div>
          <Button onClick={this.handleDeleteClick}>Delete</Button>
        </div>
      </div>
    )
  }
}

const Cards = ({ cards }) => (
  <div>
    { cards.map(card => {
      return (
        <Card key={card._id} front={card.front} back={card.back} />
      )
    })}
  </div>
)

export default Cards
