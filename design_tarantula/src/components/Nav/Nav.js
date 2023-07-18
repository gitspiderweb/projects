import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Nav.module.css';

const Nav = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const isActivePage = (pathname) => {
        if (pathname === "/") {
            return location.pathname === "/";
        }
        return (
            location.pathname === pathname ||
            location.pathname.startsWith(`${pathname}/`)
        );
    };
    return (
        <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
            <ul className={styles.navbarList}>
                <li>
                    <Link
                        to="/"
                        className={isActivePage('/') ? styles.activeLink : ''}
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        to="/projects"
                        className={isActivePage('/projects') ? styles.activeLink : ''}
                    >
                        Projects
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
