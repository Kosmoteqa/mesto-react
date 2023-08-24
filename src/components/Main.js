import React, { useEffect, useState } from 'react'
import avatar from '../images/Avatar.png'
import edit from '../images/edit.svg'
import add from '../images/add.svg'
import union from '../images/Union.svg'
import { api } from '../utils/Api'
import Card from './Card'
export default function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick}) {

  const [cards,setCards] = useState([])
  const [userName,setUserName] = useState('')
  const [userDescription,setUserDescription] = useState('')
  const [userAvatar,setUserAvatar] = useState('')
  useEffect(()=> {
    Promise.all([
      api.getUserInfo(),
      api.getAllCards()
    ])
      .then(([data, initialCards]) => {
        setUserName(data.name)
      setUserDescription(data.about)
      setUserAvatar(data.avatar)
      setCards(initialCards)
      })
      .catch((err) => {
        console.log(err);
      });

  },[])

  return (
    <>
      <section className="profile">
        <div className="profile__info">
          <div className="profile__overlay" onClick = {onEditAvatar}>
            <img src={userAvatar} alt="аватар" className="profile__avatar" />
          </div>
          <div className="profile__info-text">
            <div className="profile__title-edit-button">
              <h1 className="profile__name">{userName}</h1>
              <button onClick = {onEditProfile} type="button" aria-label="кнопка 'изменить'" className="profile__edit-button">
                <img src={edit} alt="кнопка 'изменить'" className="profile__edit-image" />
              </button>
            </div>
            <p className="profile__about">{userDescription}</p>
          </div>
        </div>
        <button onClick = {onAddPlace} type="button" aria-label="кнопка 'добавить'" className="profile__add-button">
          <img src={add} alt="кнопка 'добавить'" className="profile__add-image" />
        </button>
      </section>


      <section className="elements">
        <ul className="elements__cards-list">
          {
        cards.map ((elem)=> (
          <Card card={elem} onCardClick = {onCardClick}/>
        )) 
      }
        </ul>
      </section>

      


      
      <div>

      </div>
    </>
  )
}
