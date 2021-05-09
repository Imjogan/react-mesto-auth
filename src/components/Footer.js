function Footer() {
  const currentDate = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="footer__copyright">
        &copy; {currentDate}. Mesto-React-Auth, Russia
      </p>
    </footer>
  );
}

export default Footer;
