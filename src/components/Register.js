import { useState, useEffect, useCallback } from 'react';
import { validateField } from '../utils/utils';
import { Link } from 'react-router-dom';
import * as auth from '../utils/auth';

const minInputLength = 2;

const validators = {
  password: {
    required: (value) => value === '',
    minLength: (value) => value.length < minInputLength,
  },
  email: {
    required: (value) => value === '',
    email: (value) =>
      !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        value
      ),
  },
};

function Register({ onShowPopup, onRegistrationResolve }) {
  const [isDisabledDefault, setIsDisabledDefault] = useState(true);
  const [isSubmittingRegister, setIsSubmittingRegister] = useState(false);

  const [formValues, setFormValues] = useState({
    password: '',
    email: '',
  });

  const [errors, setErrors] = useState({
    password: {
      required: true,
      minLength: true,
    },
    email: {
      required: true,
      email: true,
    },
  });

  useEffect(() => {
    setIsDisabledDefault(true);
    return () => {
      setFormValues({
        password: '',
        email: '',
      });
    };
  }, []);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setIsSubmittingRegister(true);
    auth
      .register(formValues.password, formValues.email)
      .then((res) => {
        if (!res.error) {
          onRegistrationResolve(true);
          onShowPopup(true);
        } else {
          onShowPopup(true);
        }
      })
      .catch((res) => {
        console.log(res);
      })
      .finally(() => {
        setIsDisabledDefault(true);
        setIsSubmittingRegister(false);
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
      const { password, email } = formValues;
      const passwordValidationResult = validateField(validators.password, password);
      const emailValidationResult = validateField(validators.email, email);
      setErrors({
        password: passwordValidationResult,
        email: emailValidationResult,
      });
    },
    [formValues, setErrors]
  );

  const { password, email } = formValues;
  const isPasswordInvalid = Object.values(errors.password).some(Boolean);
  const isEmailInvalid = Object.values(errors.email).some(Boolean);
  const isSubmitDisabled = isPasswordInvalid || isEmailInvalid;

  const isAnyParamsPasswordValid =
    errors.password.required || errors.password.minLength;
  const isAnyParamsEmailValid = errors.email.required || errors.email.email;

  const isDisabled = isDisabledDefault || isSubmitDisabled || isSubmittingRegister;

  return (
    <section className="login">
      <div className="login__container">
        <h2 className="login__title">Регистрация</h2>
        <form onSubmit={handleSubmit} noValidate name="login" className="form">
          <fieldset className="form__fields">
            <label className="label">
              <input
                type="email"
                placeholder="Email"
                className={`form__input form__input_location_sign ${
                  isDisabledDefault ? '' : isEmailInvalid && 'form__input_type_error'
                }`}
                name="email"
                required
                id="email-input"
                value={email}
                onChange={handleInputChange}
              />
              <span
                className={`form__error ${
                  isDisabledDefault ? '' : isEmailInvalid && 'form__error_visible'
                }`}
              >
                {isAnyParamsEmailValid
                  ? errors.email.required
                    ? 'Поле обязательно для заполнения'
                    : 'Введите Email-адрес'
                  : ''}
              </span>
            </label>
            <label className="label">
              <input
                type="text"
                placeholder="Пароль"
                className={`form__input form__input_location_sign ${
                  isDisabledDefault
                    ? ''
                    : isPasswordInvalid && 'form__input_type_error'
                }`}
                name="password"
                required
                minLength={minInputLength}
                id="password-input"
                value={password}
                onChange={handleInputChange}
              />
              <span
                className={`form__error ${
                  isDisabledDefault ? '' : isPasswordInvalid && 'form__error_visible'
                }`}
              >
                {isAnyParamsPasswordValid
                  ? errors.password.required
                    ? 'Поле обязательно для заполнения'
                    : `Введите фразу не короче ${minInputLength} символов`
                  : ''}
              </span>
            </label>
          </fieldset>
          <button
            disabled={isDisabled}
            type="submit"
            className={`form__button form__button_location_sign ${
              isDisabled && 'form__button_disabled'
            }`}
          >
            {isSubmittingRegister ? 'Регистрация...' : 'Зарегистрироваться'}
          </button>
        </form>
      </div>
      <div className="login__footer">
        <p className="login__sign-text">
          Уже зарегистрированы?{' '}
          <Link to="/sign-in" className="login__auth">
            Войти
          </Link>
        </p>
      </div>
    </section>
  );
}

export default Register;
