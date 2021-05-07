import { useState, useEffect } from 'react';
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ConfirmPopup from './ConfirmPopup';
import ImagePopup from './ImagePopup';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import api from '../utils/api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import RenderLoading from './RenderLoading';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isConfirmPopupOpen, setIsConfirmPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);
  const [dataLoading, setDataLoading] = useState(true);
  const [isLoadingProfileInfo, setIsLoadingProfileInfo] = useState(false);
  const [isLoadingCardAdd, setIsLoadingCardAdd] = useState(false);
  const [isLoadingProfileAvatar, setIsLoadingProfileAvatar] = useState(false);
  const [isLoadingConfirm, setIsLoadingConfirm] = useState(false);
  const [currentDeletionCard, setCurrentDeletionCard] = useState(null);
  const [isSubmittingProfileInfo, setIsSubmittingProfileInfo] = useState(false);
  const [isSubmittingCardAdd, setIsSubmittingCardAdd] = useState(false);
  const [isSubmittingDeleteConfirm, setIsSubmittingDeleteConfirm] = useState(false);
  const [isSubmittingProfileAvatar, setIsSubmittingProfileAvatar] = useState(false);

  // загружаем данные пользователя и карточек
  useEffect(() => {
    api
      .getInitialData()
      .then((data) => {
        const [cards, userInfo] = data;
        setDataLoading(false);
        setCards(cards);
        setCurrentUser(userInfo);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function handleCardLike(card) {
    const isLiked = card.likes.some(
      (likeOnCard) => likeOnCard._id === currentUser._id
    );

    api
      .toggleCardLike(card._id, isLiked)
      .then((newCard) => {
        setCards((state) =>
          state.map((oldCard) => (oldCard._id === card._id ? newCard : oldCard))
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function handleCardDelete(card) {
    setCurrentDeletionCard(card);
    setIsConfirmPopupOpen(true);
  }

  function handleDeleteConfirm(card) {
    setIsSubmittingDeleteConfirm(true);
    setIsLoadingConfirm(true);
    api
      .deleteCard(card._id)
      .then(() => {
        setCards((oldCards) =>
          oldCards.filter((oldCard) => oldCard._id !== card._id)
        );
        closeAllPopups();
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoadingConfirm(false);
        setIsSubmittingDeleteConfirm(false);
      });
  }

  const handleAddPlaceSubmit = (newCard) => {
    setIsSubmittingCardAdd(true);
    setIsLoadingCardAdd(true);
    api
      .createCard(newCard.name, newCard.link)
      .then((res) => {
        setCards([res, ...cards]);
        closeAllPopups();
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoadingCardAdd(false);
        setIsSubmittingCardAdd(false);
      });
  };

  const handleUpdateUser = (userObj) => {
    setIsSubmittingProfileInfo(true);
    setIsLoadingProfileInfo(true);
    api
      .setUserInfo(userObj.name, userObj.about)
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoadingProfileInfo(false);
        setIsSubmittingProfileInfo(false);
      });
  };

  const handleUpdateAvatar = (avatarObj) => {
    setIsSubmittingProfileAvatar(true);
    setIsLoadingProfileAvatar(true);
    api
      .updateAvatar(avatarObj.avatar)
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoadingProfileAvatar(false);
        setIsSubmittingProfileAvatar(false);
      });
  };

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(selectedCard) {
    setSelectedCard(selectedCard);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsConfirmPopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <div className="page">
      {dataLoading ? (
        <RenderLoading />
      ) : (
        <CurrentUserContext.Provider value={currentUser}>
          <Header />
          <Main
            cards={cards}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
            onCardClick={handleCardClick}
          />
          <Footer />
          <EditProfilePopup
            isLoading={isLoadingProfileInfo}
            onUpdateUser={handleUpdateUser}
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            isSubmitting={isSubmittingProfileInfo}
          />
          <AddPlacePopup
            isLoading={isLoadingCardAdd}
            isOpen={isAddPlacePopupOpen}
            onAddPlace={handleAddPlaceSubmit}
            onClose={closeAllPopups}
            isSubmitting={isSubmittingCardAdd}
          />
          <ConfirmPopup
            isOpen={isConfirmPopupOpen}
            card={currentDeletionCard}
            onDeleteCard={handleDeleteConfirm}
            onClose={closeAllPopups}
            isLoading={isLoadingConfirm}
            isSubmitting={isSubmittingDeleteConfirm}
          />
          <ImagePopup card={selectedCard} onClose={closeAllPopups} />
          <EditAvatarPopup
            isLoading={isLoadingProfileAvatar}
            isOpen={isEditAvatarPopupOpen}
            onUpdateAvatar={handleUpdateAvatar}
            onClose={closeAllPopups}
            isSubmitting={isSubmittingProfileAvatar}
          />
        </CurrentUserContext.Provider>
      )}
    </div>
  );
}

export default App;
