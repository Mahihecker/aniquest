import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";
import logo from "../../../icons/logo.svg";
import menuIcon from "../../../icons/Group.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <img src={logo} alt="Logo" className={styles.logo} />
      <ul className={`${styles.navLinks} ${isOpen ? styles.showMenu : ""}`}>
        <li>
          <Link to="/solutions">Solutions</Link>
        </li>
        <li>
          <Link to="/pricing">Pricing</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li className={styles.loginInDropdown}>
          <Link to="/login" className={styles.loginLink}>Log In</Link>
        </li>
      </ul>
      
      <div className={styles.authLinks}>
        <Link to="/login" className={styles.loginLink}>Log In</Link>
        <Link to="/signup" className={styles.getStartedButton}>Get Started</Link>
      </div>
      <div className={styles.authLinks1}>
        <Link to="/signup" className={styles.getStartedButton}>Get Started</Link>
        <img
          src={menuIcon}
          alt="Menu"
          className={styles.menuIcon}
          onClick={toggleMenu}
        />
      </div>
    </nav>
  );
};

export default Navbar;
