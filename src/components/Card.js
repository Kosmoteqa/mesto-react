import React from 'react'
import trash from '../images/Trash.svg'

export default function Card({card, onCardClick}) {
  return (
    <div className='card' id="template-card">
<li className="card__item">
          <button className="card__delete-button" type="button" aria-label="удалить">
            <img src={trash} alt="удалить" className="card__delete-image" />
          </button>
          <img src={card.link} alt className="card__image" onClick={() => onCardClick (card)}/>
          <div className="card__info">
            <h2 className="card__title">{card.name}</h2>
            <div className="card__like-count">
              <button type="submit" aria-label="кнопка лайк" className="card__like-button" />
              <p className="card__counter">0</p>
            </div>
          </div>
        </li>
          </div>
  )
}
