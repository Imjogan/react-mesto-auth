import successfulRegistration from '../images/successful-registration.svg';
import registrationError from '../images/registration-error.svg';
import { useHistory } from 'react-router-dom';

function InfoTooltip({
  isOpen,
  onClose,
  isSuccessfulRegistration,
  onRegistrationResolve,
}) {
  let history = useHistory();

  return (
    <section className={`popup ${isOpen && 'popup_opened'}`}>
      <div className="popup__container popup__container_section_registration">
        <button
          onClick={() => {
            onClose();
            isSuccessfulRegistration && history.push('/sign-in');
            onRegistrationResolve(false);
          }}
          type="button"
          className="popup__button-close popup__button-close_section_registration"
        />
        <img
          className="popup__registration-image"
          src={isSuccessfulRegistration ? successfulRegistration : registrationError}
          alt="Вы успешно зарегистрированы!"
        />
        <h2 className="popup__title popup__title_section_registration">
          {isSuccessfulRegistration
            ? 'Вы успешно зарегистрировались!'
            : 'Что-то пошло не так! Попробуйте ещё раз.'}
        </h2>
      </div>
    </section>
  );
}

export default InfoTooltip;
