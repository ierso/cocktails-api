import React from 'react';
import styles from './cocktailGlass.css';

export default function(props)  {
  return (
    <React.Fragment>
      <h4 className={ styles.title }>{ props.glass }</h4>
    </React.Fragment>
  )
}