import { useState, useEffect } from 'react';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
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
import Loader from './Loader';
import ProtectedRoute from './ProtectedRoute';
import Login from './Login';
import Register from './Register';
import * as auth from '../utils/auth';
import BurgerMenu from './BurgerMenu';
import InfoTooltip from './InfoTooltip';

function App() {
  let history = useHistory();

  const [isSuccessfulRegistration, setIsSuccessfulRegistration] = useState(false);
  const [isInfoTooltipPopupOpen, setIsInfoTooltipPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isConfirmPopupOpen, setIsConfirmPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);
  const [dataLoading, setDataLoading] = useState(false);
  const [currentDeletionCard, setCurrentDeletionCard] = useState(null);
  const [isSubmittingProfileInfo, setIsSubmittingProfileInfo] = useState(false);
  const [isSubmittingCardAdd, setIsSubmittingCardAdd] = useState(false);
  const [isSubmittingDeleteConfirm, setIsSubmittingDeleteConfirm] = useState(false);
  const [isSubmittingProfileAvatar, setIsSubmittingProfileAvatar] = useState(false);
  const [authState, setAuthState] = useState({
    loggedIn: false,
    email: null,
  });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    handleTokenCheck();
    setDataLoading(true);
    api
      .getInitialData()
      .then((data) => {
        const [cards, userInfo] = data;
        setCards(cards);
        setCurrentUser(userInfo);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setDataLoading(false);
      });
  }, []);

  function handleCardLike(card) {
    const isLiked = card.likes.some((user) => user._id === currentUser._id);

    api
      .toggleCardLike(card._id, isLiked)
      .then((newCard) => {
        setCards((prevCards) =>
          prevCards.map((prevCard) =>
            prevCard._id === card._id ? newCard : prevCard
          )
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
        setIsSubmittingDeleteConfirm(false);
      });
  }

  const handleAddPlaceSubmit = (newCard) => {
    setIsSubmittingCardAdd(true);
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
        setIsSubmittingCardAdd(false);
      });
  };

  const handleUpdateUser = (userObj) => {
    setIsSubmittingProfileInfo(true);
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
        setIsSubmittingProfileInfo(false);
      });
  };

  const handleUpdateAvatar = (avatarObj) => {
    setIsSubmittingProfileAvatar(true);
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
    setIsInfoTooltipPopupOpen(false);
    setSelectedCard(null);
  }

  const handleTokenCheck = () => {
    const token = localStorage.getItem('token');
    if (token) {
      auth
        .checkToken(token)
        .then((res) => {
          if (res) {
            setAuthState({
              loggedIn: true,
              email: res.data.email,
            });
            history.push('/');
          }
        })
        .catch((res) => console.log(res));
    }
  };

  const handleLogin = () => {
    handleTokenCheck();
    setAuthState((prevState) => ({
      ...prevState,
      loggedIn: true,
    }));
  };

  const onSignOut = () => {
    setAuthState({
      loggedIn: false,
      email: null,
    });
    localStorage.removeItem('token');
    history.push('/sign-in');
    setIsMobileMenuOpen(false);
  };

  const onMobileMenuClick = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div
      className={`page ${isMobileMenuOpen && 'page_mobile-menu_opened'} ${
        !authState.loggedIn && 'page_mobile-menu_disabled'
      }`}
    >
      {dataLoading ? (
        <Loader />
      ) : (
        <CurrentUserContext.Provider value={currentUser}>
          <BurgerMenu onSignOut={onSignOut} email={authState.email} />
          <Header
            onMobileMenuClick={onMobileMenuClick}
            onSignOut={onSignOut}
            email={authState.email}
          />
          <Switch>
            <ProtectedRoute
              exact path="/"
              loggedIn={authState.loggedIn}
              component={Main}
              cards={cards}
              onCardLike={handleCardLike}
              onCardDelete={handleCardDelete}
              onEditProfile={handleEditProfileClick}
              onAddPlace={handleAddPlaceClick}
              onEditAvatar={handleEditAvatarClick}
              onCardClick={handleCardClick}
            />
            <Route path="/sign-in">
              <Login handleLogin={handleLogin} />
            </Route>
            <Route path="/sign-up">
              <Register
                onRegistrationResolve={setIsSuccessfulRegistration}
                onShowPopup={setIsInfoTooltipPopupOpen}
              />
            </Route>
            <Route path="/">
              {authState.loggedIn ? (
                <Redirect to="/" />
              ) : (
                <Redirect to="/sign-in" />
              )}
            </Route>
          </Switch>
          {authState.loggedIn && <Footer />}
          <EditProfilePopup
            onUpdateUser={handleUpdateUser}
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            isSubmitting={isSubmittingProfileInfo}
          />
          <AddPlacePopup
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
            isSubmitting={isSubmittingDeleteConfirm}
          />
          <ImagePopup card={selectedCard} onClose={closeAllPopups} />
          <EditAvatarPopup
            isOpen={isEditAvatarPopupOpen}
            onUpdateAvatar={handleUpdateAvatar}
            onClose={closeAllPopups}
            isSubmitting={isSubmittingProfileAvatar}
          />
          <InfoTooltip
            onClose={closeAllPopups}
            isOpen={isInfoTooltipPopupOpen}
            isSuccessfulRegistration={isSuccessfulRegistration}
            onRegistrationResolve={setIsSuccessfulRegistration}
          />
        </CurrentUserContext.Provider>
      )}
    </div>
  );
}

export default App;
