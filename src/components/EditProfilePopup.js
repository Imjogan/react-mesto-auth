import { useState, useContext, useEffect, useCallback } from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { validateField } from '../utils/utils';

const minUserNameInputLength = 2;
const maxUserNameInputLength = 40;
const minDescriptionInputLength = 2;
const maxDescriptionInputLength = 200;

const validators = {
  userName: {
    required: (value) => value === '',
    minLength: (value) => value.length < minUserNameInputLength,
    maxLength: (value) => value.length > maxUserNameInputLength,
  },
  description: {
    required: (value) => value === '',
    minLength: (value) => value.length < minDescriptionInputLength,
    maxLength: (value) => value.length > maxDescriptionInputLength,
  },
};

function EditProfilePopup({
  isOpen,
  onClose,
  onUpdateUser,
  isLoading,
  isSubmitting,
}) {
  const [isDisabledDefault, setIsDisabledDefault] = useState(true);
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
    setIsDisabledDefault(true);
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
      setIsDisabledDefault(false);
      const { name, value } = evt.target;
      setFormValues((state) => ({ ...state, [name]: value }));
    },
    [setFormValues]
  );

  useEffect(
    function validateInputs() {
      const { userName, description } = formValues;

      const userNameValidationRusult = validateField(
        validators.userName,
        userName
      );

      const descriptionValidationRusult = validateField(
        validators.description,
        description
      );

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

  const isAnyParamsUserNameValid =
    errors.userName.required || errors.userName.minLength;
  const isAnyParamsDescriptionValid =
    errors.description.required || errors.description.minLength;

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
      isDisabledDefault={isDisabledDefault}
    >
      <fieldset className="form__fields">
        <label className="label">
          <input
            type="text"
            className={`form__input ${
              isUserNameInvalid && 'form__input_type_error'
            }`}
            name="userName"
            required
            minLength={minUserNameInputLength}
            maxLength={maxUserNameInputLength}
            id="profile-name-input"
            value={userName}
            onChange={handleInputChange}
          />
          <span
            className={`form__error ${
              isUserNameInvalid && 'form__error_visible'
            }`}
          >
            {isAnyParamsUserNameValid
              ? errors.userName.required
                ? 'Поле обязательно для заполнения'
                : `Введите фразу не короче ${minUserNameInputLength} символов`
              : ''}
            {errors.userName.maxLength &&
              `Превышел лимит в ${maxUserNameInputLength} символов`}
          </span>
        </label>
        <label className="label">
          <input
            type="text"
            className={`form__input ${
              isDescriptionInvalid && 'form__input_type_error'
            }`}
            name="description"
            required
            minLength={minDescriptionInputLength}
            maxLength={maxDescriptionInputLength}
            id="profile-status-input"
            value={description}
            onChange={handleInputChange}
          />
          <span
            className={`form__error ${
              isDescriptionInvalid && 'form__error_visible'
            }`}
          >
            {isAnyParamsDescriptionValid
              ? errors.description.required
                ? 'Поле обязательно для заполнения'
                : `Введите фразу не короче ${minDescriptionInputLength} символов`
              : ''}
            {errors.description.maxLength &&
              `Превышел лимит в ${maxDescriptionInputLength} символов`}
          </span>
        </label>
      </fieldset>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
