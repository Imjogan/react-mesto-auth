import { useState, useEffect, useCallback } from 'react';
import PopupWithForm from './PopupWithForm';
import { validationResult } from '../utils/constants';

const minInputLength = 2,
  maxInputLength = 30;

const validators = {
  cardName: {
    required: (value) => value === '',
    minLength: (value) => value.length < minInputLength,
    maxLength: (value) => value.length > maxInputLength,
  },
  cardLink: {
    required: (value) => value === '',
    url: (value) => !/^(ftp|http|https):\/\/[^ "]+$/.test(value),
  },
};

function AddPlacePopup({ isOpen, onClose, onAddPlace, isLoading, isSubmitting }) {
  const [formValues, setFormValues] = useState({
    cardName: '',
    cardLink: '',
  });

  const [errors, setErrors] = useState({
    cardName: {
      required: true,
      minLength: true,
      maxLength: true,
    },
    cardLink: {
      required: true,
      url: true,
    },
  });

  useEffect(() => {
    setFormValues({
      cardName: '',
      cardLink: '',
    });
  }, [isOpen]);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    onAddPlace({
      name: cardName,
      link: cardLink,
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
      const { cardName, cardLink } = formValues;
      console.log(validators.cardName)
      const cardNameValidationResult = validationResult(validators, validators.cardName);

      const cardLinkValidationResult = Object.keys(validators.cardLink)
        .map((errorKey) => {
          const errorResult = validators.cardLink[errorKey](cardLink);
          return { [errorKey]: errorResult };
        })
        .reduce((acc, item) => ({ ...acc, ...item }), {});

      setErrors({
        cardName: cardNameValidationResult,
        cardLink: cardLinkValidationResult,
      });
    },
    [formValues, setErrors]
  );

  const { cardName, cardLink } = formValues;
  const isСardNameInvalid = Object.values(errors.cardName).some(Boolean);
  const isСardLinkInvalid = Object.values(errors.cardLink).some(Boolean);
  const isSubmitDisabled = isСardNameInvalid || isСardLinkInvalid;

  const isAnyParamsCardNameValid =
    errors.cardName.required || errors.cardName.minLength;
  const isAnyParamsCardLinkValid =
    errors.cardLink.required || errors.cardLink.url;

  return (
    <PopupWithForm
      name="card-add"
      title="Новое место"
      submitButtonText={isLoading ? 'Добавление...' : 'Добавить'}
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
            placeholder="Название"
            className={`form__input ${
              isСardNameInvalid && 'form__input_type_error'
            }`}
            name="cardName"
            required
            minLength="2"
            maxLength="30"
            id="card-name-input"
            value={cardName}
            onChange={handleInputChange}
          />
          <span
            className={`form__error ${
              isСardNameInvalid && 'form__error_visible'
            }`}
          >
            {isAnyParamsCardNameValid
              ? errors.cardName.required
                ? 'Поле обязательно для заполнения'
                : `Введите фразу не короче ${minInputLength} символов`
              : ''}
            {errors.cardName.maxLength &&
              `Превышел лимит в ${maxInputLength} символов`}
          </span>
        </label>
        <label className="label">
          <input
            type="url"
            placeholder="Ссылка на картинку"
            className={`form__input ${
              isСardLinkInvalid && 'form__input_type_error'
            }`}
            name="cardLink"
            required
            id="card-link-input"
            value={cardLink}
            onChange={handleInputChange}
          />
          <span
            className={`form__error ${
              isСardLinkInvalid && 'form__error_visible'
            }`}
          >
            {' '}
            {isAnyParamsCardLinkValid
              ? errors.cardLink.required
                ? 'Поле обязательно для заполнения'
                : 'Введите URL'
              : ''}
          </span>
        </label>
      </fieldset>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
