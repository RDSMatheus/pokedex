import React from 'react';
import styles from './NavControl.module.css';
import { POKEMON_GET_ALL, POKEMON_GET_COUNT } from '../api';

const NavControl = ({ setValue, value }) => {
  const [max, setMax] = React.useState(null);
  const [currentValue, setCurrentValue] = React.useState(null);

  React.useEffect(() => {
    async function getMax() {
      const { url, options } = POKEMON_GET_COUNT();
      const response = await fetch(url, options);
      const json = await response.json();
      setMax(json.count);
    }
    getMax();
  }, []);

  return (
    <div className={styles.container}>
      {value > 0 ? (
        <button
          className={styles.voltar}
          onClick={() => {
            setValue(value - 1);
            setCurrentValue(currentValue + 20);
          }}
        ></button>
      ) : (
        <div></div>
      )}
      {currentValue < max ? (
        <button
          className={styles.avancar}
          onClick={() => {
            setValue(value + 1);
            setCurrentValue(currentValue + 20);
          }}
        ></button>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default NavControl;
