import React from 'react';
import { Link } from 'react-router-dom';
import styles from './header.css';

export default function() {
    return (
        <nav className={styles.nav}>
            <div className={styles.brand}>
                <Link to="/">Home</Link>
            </div>
            <div className={styles.navigation}>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to="/favorites">Favorites</Link>
                    </li>
                    <li className={styles.item}>
                        <a href="/auth/google">Login</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}