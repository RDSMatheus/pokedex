import React from 'react';
import styles from './PokemonType.module.css';
import { Context } from '../../Context';

const PokemonType = (props) => {
  const { TypeSvg } = React.useContext(Context);
  return (
    <section className={styles.typesWrapper}>
      {props.data.map((type, index) => (
        <div
          key={type}
          className={styles.types}
          style={{
            backgroundColor: TypeSvg[type].color,
            boxShadow: `0 0 10px 0 ${TypeSvg[type].color}`,
          }}
        >
          <img
            className={styles.svgContainer}
            src={TypeSvg[type].type}
            alt={`${type} type `}
          />
        </div>
      ))}
    </section>
  );
};

export default PokemonType;
