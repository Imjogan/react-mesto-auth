import { Link, useLocation, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Header({ email, onSignOut, onMenuClick }) {
  let location = useLocation();
  let history = useHistory();

  const [isClick, setIsClick] = useState(false);

  useEffect(() => {
    setIsClick(false);
  }, [onSignOut])

  const handleOutClick = () => {
    onSignOut();
    localStorage.removeItem('token');
    history.push('/sign-in');
  };

  const onClick = () => {
    setIsClick(!isClick);
    onMenuClick();
  };

  return (
    <header className="header">
      <figure className="header__logo" />
      {location.pathname === '/sign-in' ? (
        <Link to="/sign-up" className="header__element">
          Регистрация
        </Link>
      ) : location.pathname === '/sign-up' ? (
        <Link to="/sign-in" className="header__element">
          Войти
        </Link>
      ) : (
        <>
          <nav className="header__menu">
            <p className="header__menu-element">{email}</p>
            <button
              onClick={handleOutClick}
              className="header__menu-element header__menu-element_button"
            >
              Выйти
            </button>
          </nav>
          <nav className="burger">
            <figure
              onClick={onClick}
              className={`burger__button burger__button_type_cross ${
                isClick && 'burger__button_active'
              }`}
            >
              <span className="burger__contain" />
            </figure>
          </nav>
        </>
      )}
    </header>
  );
}

export default Header;
