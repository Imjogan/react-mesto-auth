function Footer() {
  const currentDate = new Date();

  return (
    <footer className="footer">
      <p className="footer__copyright">
        &copy; {currentDate.getFullYear()}. Mesto-React, Russia
      </p>
    </footer>
  );
}

export default Footer;
