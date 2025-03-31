import { useState } from "react";
import header from "./Header.module.scss";
import logo from "../../../public/Logo.svg";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={header.header}>
      <div className={header.logoContainer}>
        <a href="/">
          <img className={header.logo} src={logo} alt="logo" />
        </a>
      </div>
      
      <div className={header.mobileMenuButton} onClick={toggleMobileMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      
      <nav className={`${mobileMenuOpen ? header.mobileMenuOpen : ""}`}>
        <ul>
          <li><a href="/">Learn</a></li>
          <li><a href="/">Plan</a></li>
          <li><a href="/">Finance</a></li>
          <li><a href="/">Wealth</a></li>
          <li><a href="/">About</a></li>
        </ul>
      </nav>
      
      <div className={header.buttons}>
        <button className={header.login}>Log in</button>
        <button className={header.starter}>Get started</button>
      </div>
    </header>
  );
};

export default Header;