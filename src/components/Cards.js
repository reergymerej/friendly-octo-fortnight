import React from 'react'

const Card = ({ front, back }) => (
  <div className="flex">
    <div className="flex-1 max-w-sm rounded overflow-hidden shadow-lg text-center m-8 p-8">
      <div className="text-xs text-grey">
        {front.tags.join(', ')}
      </div>
      <div className="text-2xl my-2">
        {front.value}
      </div>
    </div>
  </div>
)

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
