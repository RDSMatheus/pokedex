import React from 'react';
import Progress from '../Progress';
import styles from './PokemonStats.module.css';

const PokemonStats = ({ data }) => {
  return (
    <ul>
      {data.map((stat) => (
        <li className={styles.stats}>
          <span>{stat.stat.name}</span>
          <Progress completed={stat.base_stat.toString()} />
        </li>
      ))}
    </ul>
  );
};

export default PokemonStats;
