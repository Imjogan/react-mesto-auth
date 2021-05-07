function PopupWithForm({
  name,
  title,
  submitButtonText,
  isOpen,
  onClose,
  onSubmit,
  children,
  isValidity,
  isSubmitting,
}) {
  const isAnyParamsOnDisabled = isValidity || isSubmitting;

  return (
    <section className={`popup ${isOpen && 'popup_opened'}`}>
      <div className="popup__container">
        <button
          onClick={onClose}
          type="button"
          className="popup__button-close"
        />
        <h2 className="popup__title">{title}</h2>
        <form
          onSubmit={onSubmit}
          noValidate
          name={`form-${name}`}
          className="form"
        >
          {children}
          <button
            disabled={isAnyParamsOnDisabled}
            type="submit"
            className={`form__button ${
              isAnyParamsOnDisabled && 'form__button_disabled'
            }`}
          >
            {submitButtonText}
          </button>
        </form>
      </div>
    </section>
  );
}

export default PopupWithForm;
