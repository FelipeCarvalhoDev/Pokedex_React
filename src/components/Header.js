import logo from './../assets/images/logo.png';
import './../assets/scss/Header.scss';

function Header() {
  return (
    <header className="header">
      <img src={logo} className="logo" alt="logo" />
    </header>
  );
}

export default Header;
