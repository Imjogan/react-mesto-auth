import { useContext } from 'react';
import Image from './Image';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card({ getCard, card, onCardLike, onCardDelete }) {
  const currentUser = useContext(CurrentUserContext);

  // Определяем, являемся ли мы владельцем текущей карточки
  const isOwn = card.owner._id === currentUser._id;
  const isLiked = card.likes.some(
    (likeOnCard) => likeOnCard._id === currentUser._id
  );

  const cardLikeButtonClassName = `element__like
    ${isLiked && 'element__like_active'}`;
  const cardDeleteButtonClassName = `element__trash-button
    ${isOwn && 'element__trash-button_visible'}`;

  function handleClickImage() {
    getCard(card);
  }

  function handleLikeClick() {
    onCardLike(card);
  }

  function handleDeleteClick() {
    onCardDelete(card);
  }

  return (
    <li className="element">
      <button
        onClick={handleDeleteClick}
        type="button"
        className={cardDeleteButtonClassName}
      />
      <Image
        src={card.link}
        alt={card.name}
        className="element__image"
        onClick={handleClickImage}
      />
      <div className="element__container">
        <h2 className="element__title"> {card.name} </h2>
        <div className="element__like-group">
          <button
            onClick={handleLikeClick}
            type="button"
            className={cardLikeButtonClassName}
          />
          <h3 className="element__like-counter"> {card.likes.length} </h3>
        </div>
      </div>
    </li>
  );
}

export default Card;
