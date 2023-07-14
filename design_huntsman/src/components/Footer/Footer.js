import React from 'react';
import styles from './Footer.module.css';
import RowStandard from '../layouts/RowStandard/RowStandard'

const Footer = () => {
    const today = new Date();
    return (
        <RowStandard colored marginBottom0>
            <footer>
                <ul className={styles.footerList}>
                    <li><a href="https://www.linkedin.com/in/mark-jay-cabatuan-1014111a3/">Linkedin</a></li>
                    <li><a href="https://github.com/gitspiderweb">GitHub</a></li>
                    <li><a href="mailto:cabatuanmarkjay.it@gmail.com">Email</a></li>
                    <li>Call: +63 907 012 2304</li>
                    <li>Copyright &copy; {today.getFullYear()}</li>
                </ul>
            </footer>
        </RowStandard>

    );
};

export default Footer;
