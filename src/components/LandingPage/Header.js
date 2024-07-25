import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css'; // Import the CSS file
import logo from "../../icons/logo.svg"; // Ensure the logo path is correct

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.hamburger} onClick={toggleMenu}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <img src={logo} alt="Logo" className={styles.logo} />
            <ul className={styles.navLinks}>
                <li><Link to="/solutions">Solutions</Link></li>
                <li><Link to="/pricing">Pricing</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/login" className={styles.loginLink}>Log In</Link></li>
            </ul>
            <div className={`${styles.navMenu} ${menuOpen ? styles.active : ''}`}>
                <ul>
                    <li><Link to="/solutions">Solutions</Link></li>
                    <li><Link to="/pricing">Pricing</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/login" className={styles.loginLink}>Log In</Link></li>
                </ul>
                    <li><Link to="/signup" className={styles.navmenugetStartedButton}>Get Started</Link></li>
            </div>
        </nav>
    );
};

export default Header;
