import { useState, useContext, useEffect, useCallback } from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

const validators = {
  userName: {
    required: (value) => value === '',
    minLength: (value) => value.length < 3,
    maxLength: (value) => value.length > 40,
  },
  description: {
    required: (value) => value === '',
    minLength: (value) => value.length < 3,
    maxLength: (value) => value.length > 100,
  },
};

function EditProfilePopup({
  isOpen,
  onClose,
  onUpdateUser,
  isLoading,
  isSubmitting,
}) {
  const currentUser = useContext(CurrentUserContext);

  const [formValues, setFormValues] = useState({
    userName: '',
    description: '',
  });

  const [errors, setErrors] = useState({
    userName: {
      required: true,
      minLength: true,
      maxLength: true,
    },
    description: {
      required: true,
      minLength: true,
      maxLength: true,
    },
  });

  useEffect(() => {
    if (currentUser.name !== undefined && currentUser.about !== undefined) {
      setFormValues({
        userName: currentUser.name,
        description: currentUser.about,
      });
    }
  }, [isOpen, currentUser]);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    onUpdateUser({
      name: userName,
      about: description,
    });
  };

  const handleInputChange = useCallback(
    (evt) => {
      const { name, value } = evt.target;
      setFormValues((state) => ({ ...state, [name]: value }));
    },
    [setFormValues]
  );

  useEffect(
    function validateInputs() {
      const { userName, description } = formValues;

      const userNameValidationRusult = Object.keys(validators.userName)
        .map((errorKey) => {
          const errorResult = validators.userName[errorKey](userName);
          return { [errorKey]: errorResult };
        })
        .reduce((acc, element) => ({ ...acc, ...element }), {});

      const descriptionValidationRusult = Object.keys(validators.description)
        .map((errorKey) => {
          const errorResult = validators.description[errorKey](description);
          return { [errorKey]: errorResult };
        })
        .reduce((acc, element) => ({ ...acc, ...element }), {});

      setErrors({
        userName: userNameValidationRusult,
        description: descriptionValidationRusult,
      });
    },
    [formValues, setErrors]
  );

  const { userName, description } = formValues;
  const isUserNameInvalid = Object.values(errors.userName).some(Boolean);
  const isDescriptionInvalid = Object.values(errors.description).some(Boolean);
  const isSubmitDisabled = isUserNameInvalid || isDescriptionInvalid;

  return (
    <PopupWithForm
      name="profile-edit"
      title="Редактировать профиль"
      submitButtonText={isLoading ? 'Сохранение...' : 'Сохранить'}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isValidity={isSubmitDisabled}
      isSubmitting={isSubmitting}
    >
      <fieldset className="form__fields">
        <label className="label">
          <input
            type="text"
            className={`form__input ${
              (errors.userName.required ||
                errors.userName.maxLength ||
                errors.userName.minLength) &&
              'form__input_type_error'
            }`}
            name="userName"
            required
            minLength="2"
            maxLength="40"
            id="profile-name-input"
            value={userName}
            onChange={handleInputChange}
          />
          <span
            className={`form__error ${
              (errors.userName.required ||
                errors.userName.maxLength ||
                errors.userName.minLength) &&
              'form__error_visible'
            }`}
          >
            {errors.userName.required || errors.userName.minLength
              ? errors.userName.required
                ? 'Поле обязательно для заполнения'
                : 'Введите фразу не короче 2 символов'
              : ''}
            {errors.userName.maxLength && 'Превышел лимит в 40 символов'}
          </span>
        </label>
        <label className="label">
          <input
            type="text"
            className={`form__input ${
              (errors.description.required ||
                errors.description.maxLength ||
                errors.description.minLength) &&
              'form__input_type_error'
            }`}
            name="description"
            required
            minLength="2"
            maxLength="100"
            id="profile-status-input"
            value={description}
            onChange={handleInputChange}
          />
          <span
            className={`form__error ${
              (errors.description.required ||
                errors.description.maxLength ||
                errors.description.minLength) &&
              'form__error_visible'
            }`}
          >
            {errors.description.required || errors.description.minLength
              ? errors.description.required
                ? 'Поле обязательно для заполнения'
                : 'Введите фразу не короче 2 символов'
              : ''}
            {errors.description.maxLength && 'Превышел лимит в 100 символов'}
          </span>
        </label>
      </fieldset>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
