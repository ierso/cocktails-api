import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../button/button';
import styles from './header.css';

export default function(props) {

const renderLogin = () => {
  switch(props.auth) {
    case null:
      return (
        <Button
          path="/auth/google"
          message="Log in">
        </Button>
      )
    case false:
      return (
        <Button
          path="/auth/google"
          message="Log in">
        </Button>
      )  
    default:
      return (
        <Button
          path="/auth/logout"
          message="Log out">
        </Button>
      )
  }
}

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
            { renderLogin() }
          </li>
        </ul>
      </div>
    </nav>
  )
}