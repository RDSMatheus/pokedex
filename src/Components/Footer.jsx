import React from 'react';
import styles from './Footer.module.css';
import { ReactComponent as PokeBall } from '../Assets/pokeball.svg';

const Footer = () => {
  return (
    <footer className={styles.footerBg}>
      <div className={`${styles.footer} container`}>
        <PokeBall />
        <p>Pokedex desenvolvida por <a href="https://www.linkedin.com/in/matheus-ramos-dos-santos-8ab5ab24a/">Matheus</a></p>
      </div>
    </footer>
  );
};

export default Footer;
