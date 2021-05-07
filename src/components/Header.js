import { Link, useLocation, useHistory } from 'react-router-dom';

function Header() {
  let location = useLocation();
  let history = useHistory();

  const handleClick = () => {
    history.push('/main');
  };

  return (
    <header className="header">
      <figure onClick={handleClick} className="header__logo" />
      {location.pathname === '/sign-in' ? (
        <Link to="/sign-up" className="header__auth">
          Регистрация
        </Link>
      ) : location.pathname === '/sign-up' ? (
        <Link to="/sign-in" className="header__auth">
          Войти
        </Link>
      ) : (
        ''
      )}
    </header>
  );
}

export default Header;
