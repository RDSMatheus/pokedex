import React from 'react';
import Progress from '../Progress';
import styles from './PokemonStats.module.css';

const PokemonStats = ({ data }) => {
  return (
    <ul>
      {data.map((stat) => (
        <li key={stat.stat.name} className={styles.stats}>
          <span>{stat.stat.name}</span>
          <Progress completed={stat.base_stat.toString()} />
        </li>
      ))}
    </ul>
  );
};

export default PokemonStats;
