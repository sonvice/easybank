import React from 'react'
import {easaybank} from '../constant'
const Card = () => {
  return (
    <div className="card">
    {easaybank.map((card) => (
      <div key={card.title} className="card__item flow">
        <img src={card.icon} alt={card.title} />
        <h3>{card.title}</h3>
        <p className='text-gray-blue size--1'>{card.description}</p>
      </div>
    ))}
  </div>
  )
}

export default Card