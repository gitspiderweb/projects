import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    const today = new Date();
    return (
        <footer className={styles.footer}>
            <ul className={styles.footerList}>
                <li><a href="https://www.linkedin.com/in/mark-jay-cabatuan-1014111a3/">Linkedin</a></li>
                <li><a href="https://github.com/gitspiderweb">GitHub</a></li>
                <li><a href="mailto:cabatuanmarkjay.it@gmail.com">Email</a></li>
                <li><p>Call: +63 907 012 2304</p></li>
                <li><p>Copyright &copy; {today.getFullYear()}</p></li>
            </ul>
        </footer>
    );
};

export default Footer;
