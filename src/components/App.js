import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import PopupWithForm from './PopupWithForm'
import ImagePopup from './ImagePopup'

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState (false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState (false)
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState (false)
  const [selectedCard,setSelectedCard] = useState(null)
  function handleEditAvatarClick () {
    setIsEditAvatarPopupOpen (true)
  }
  function handleEditProfileClick () {
    setIsAddPlacePopupOpen(true)
  }
  function handleAddPlaceClick () {
    setIsEditProfilePopupOpen (true)
  }

  function handleCardClick (card) {
    setSelectedCard(card)
  }

  function closeAllPopups () {
    setIsEditAvatarPopupOpen (false)
    setIsAddPlacePopupOpen(false)
    setIsEditProfilePopupOpen (false)
    setSelectedCard(null)
  }
  
  return (
<>

<Header/>
<Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar = {handleEditAvatarClick} onCardClick = {handleCardClick}/>
<PopupWithForm name='edit' title='Редактировать профиль' isOpen={isEditProfilePopupOpen} onClose = {closeAllPopups}>
            <div className="popup__input-span">
              <input id="input-name" name="name" type="text" className="popup__input-name popup__input" placeholder="Имя" minLength={2} maxLength={40} required />
              <span id="input-name-error" className="error" />
            </div>
            <div className="popup__input-span">
              <input id="input-about" name="about" type="text" className="popup__input-about popup__input" placeholder="О себе" minLength={2} maxLength={200} required />
              <span id="input-about-error" className="error" />
            </div>
      </PopupWithForm>

      <PopupWithForm name='add' title='Новое место' isOpen={isAddPlacePopupOpen} onClose = {closeAllPopups}>
            <div className="popup__input-span">
              <input id="input-title" name="name" type="text" className="popup__input-name popup__input-name_add popup__input" placeholder="Название" minLength={2} maxLength={30} required />
              <span id="input-title-error" className="error" />
            </div>
            <div className="popup__input-span">
              <input id="input-link" name="link" type="url" className="popup__input-about popup__input-about_add popup__input" placeholder="Ссылка на картинку" required />
              <span id="input-link-error" className="error" />
            </div>
      </PopupWithForm>
      <ImagePopup onClose = {closeAllPopups} card = {selectedCard}/>
        <PopupWithForm name='check' title='Вы уверены ?' onClose = {closeAllPopups}>

        </PopupWithForm>
        
        <PopupWithForm name='avatar' title='Обновить аватар' isOpen={isEditAvatarPopupOpen} onClose = {closeAllPopups}>
              <input id="url" name="avatar" type="url" className="popup__input-about popup__input" placeholder="Ссылка на картинку" required />
              <span id="url-error" className="error" />
        </PopupWithForm>
<Footer/>
</>
  );
}

export default App;
