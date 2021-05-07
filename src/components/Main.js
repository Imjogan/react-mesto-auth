import { useContext } from 'react';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main({
  onEditProfile,
  onAddPlace,
  onEditAvatar,
  onCardClick,
  cards,
  onCardLike,
  onCardDelete,
}) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__container">
          <a
            onClick={onEditAvatar}
            target="_self"
            href="#"
            className="profile__cover"
          >
            <img
              alt={`Аватар пользователя ${currentUser.name}`}
              src={currentUser.avatar}
              className="profile__avatar"
            />
          </a>
          <div className="profile__info">
            <h1 className="profile__name">{currentUser.name}</h1>
            <button
              onClick={onEditProfile}
              type="button"
              className="profile__button-edit"
            />
            <p className="profile__status">{currentUser.about}</p>
          </div>
        </div>
        <button
          onClick={onAddPlace}
          type="button"
          className="profile__button-add"
        />
      </section>
      <section>
        <ul className="elements">
          {cards.map((card) => (
            <Card
              onCardDelete={onCardDelete}
              onCardLike={onCardLike}
              getCard={onCardClick}
              card={card}
              key={card._id}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
