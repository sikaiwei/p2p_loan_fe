import React, { useState } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleMenu = () => {
        setIsActive(!isActive);
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.brandTitle}>P2P Loan Platform</div>
            <button className={styles.toggleButton} onClick={toggleMenu}>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
            </button>
            <div className={`${styles.navbarLinks} ${isActive ? styles.active : ''}`}>
                <ul>
                    <li><Link href="/">首页</Link></li>
                    <li><Link href="/loanform">筹款</Link></li>
                    <li><Link href="/about">关于我们</Link></li>
                    <li><Link href="/contact">联系</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;