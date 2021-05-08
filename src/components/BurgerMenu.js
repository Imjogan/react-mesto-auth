import { useHistory } from 'react-router-dom';

function BurgerMenu({ email, onSignOut }) {
  let history = useHistory();

  const handleOutClick = () => {
    onSignOut();
    localStorage.removeItem('token');
    history.push('/sign-in');
  };

  return (
    <div className="burger-menu">
      <ul className="burger-menu__content">
        <li className="burger-menu__item">
          <p className="burger__element">{email}</p>
        </li>
        <li className="burger-menu__item">
          <button
            onClick={handleOutClick}
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
