import { useRef, useEffect } from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup({
  isOpen,
  onClose,
  onUpdateAvatar,
  isLoading,
  isSubmitting,
}) {
  const avatarValue = useRef();

  useEffect(() => {
    avatarValue.current.value = '';
  }, [isOpen]);

  function handleSubmit(evt) {
    evt.preventDefault();

    onUpdateAvatar({
      avatar: avatarValue.current.value,
    });
  }

  return (
    <PopupWithForm
      name="update-avatar"
      title="Обновить аватар"
      submitButtonText={isLoading ? 'Сохранение...' : 'Сохранить'}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isSubmitting={isSubmitting}
    >
      <fieldset className="form__fields">
        <label className="label">
          <input
            type="url"
            placeholder="Ссылка на фотографию"
            className="form__input form__input_field_avatar-link"
            name="avatarLink"
            required
            id="avatar-link-input"
            ref={avatarValue}
          />
          <span className="form__error avatar-link-input-error" />
        </label>
      </fieldset>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
