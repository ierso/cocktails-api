import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../button/button';
import styles from './header.css';

export default function() {
    return (
        <nav className={styles.nav}>
            <div className={styles.brand}>
                <Link to="/" className={styles.name}>Nights Drink</Link>
            </div>
            <div className={styles.navigation}>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to="/favorites" className={styles.link}>Favorites</Link>
                    </li>
                    <li className={styles.item}>
                        <Button
                            path="/auth/google"
                            message="Log in">
                        </Button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}