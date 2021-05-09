function BurgerMenu({ email, onSignOut }) {
  return (
    <div className="burger-menu">
      <ul className="burger-menu__content">
        <li className="burger-menu__item">
          <p className="burger__element">{email}</p>
        </li>
        <li className="burger-menu__item">
          <button
            onClick={() => {
              onSignOut();
            }}
            className="burger__element burger__element_button"
          >
            Выйти
          </button>
        </li>
      </ul>
    </div>
  );
}

export default BurgerMenu;
