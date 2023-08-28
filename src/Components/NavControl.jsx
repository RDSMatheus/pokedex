import React from 'react';
import styles from './NavControl.module.css';

const NavControl = ({ setValue, value }) => {
  return (
    <div className={styles.container}>
      {value > 10 ? (
        <button
          className={styles.voltar}
          onClick={() => setValue(value - 20)}
        ></button>
      ) : (
        <div></div>
      )}
      <button className={styles.avancar} onClick={() => setValue(value + 20)}>
      </button>
    </div>
  );
};

export default NavControl;
