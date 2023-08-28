import React from 'react';
import { Context } from '../Context';
import styles from './Input.module.css';

const Input = ({ id, placeholder, value, setValue }) => {
  return (
    <label htmlFor={id}>
      <input
      className={styles.input}
        id={id}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={({ target }) => setValue(target.value)}
      />
    </label>
  );
};

export default Input;
