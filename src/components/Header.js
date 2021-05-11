import { Link, useLocation, Route, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Header({ email, onSignOut, onMobileMenuClick }) {
  let location = useLocation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const handleMobileMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
    onMobileMenuClick();
  };

  return (
    <header className="header">
      <figure className="header__logo" />
      <Switch>
        <Route path="/sign-in">
          <Link to="/sign-up" className="header__element">
            Регистрация
          </Link>
        </Route>
        <Route path="/sign-up">
          <Link to="/sign-in" className="header__element">
            Войти
          </Link>
        </Route>
        <Route path="*">
          <>
            <nav className="header__menu">
              <p className="header__menu-element">{email}</p>
              <button
                onClick={onSignOut}
                className="header__menu-element header__menu-element_button"
              >
                Выйти
              </button>
            </nav>
            <nav className="burger">
              <figure
                onClick={handleMobileMenuClick}
                className={`burger__button burger__button_type_cross ${
                  isMenuOpen && 'burger__button_active'
                }`}
              >
                <span className="burger__contain" />
              </figure>
            </nav>
          </>
        </Route>
      </Switch>
    </header>
  );
}

export default Header;
