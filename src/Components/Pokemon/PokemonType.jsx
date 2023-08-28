import React from 'react';
import styles from './PokemonType.module.css';
import normal from '../../Assets/normal.svg';
import water from '../../Assets/water.svg';
import grass from '../../Assets/grass.svg';
import poison from '../../Assets/poison.svg';
import rock from '../../Assets/rock.svg';
import steel from '../../Assets/steel.svg';
import bug from '../../Assets/bug.svg';
import dark from '../../Assets/dark.svg';
import dragon from '../../Assets/dragon.svg';
import electric from '../../Assets/electric.svg';
import flying from '../../Assets/flying.svg';
import ghost from '../../Assets/ghost.svg';
import ground from '../../Assets/ground.svg';
import fighting from '../../Assets/fighting.svg';
import fire from '../../Assets/fire.svg';
import psychic from '../../Assets/psychic.svg';
import ice from '../../Assets/ice.svg';
import fairy from '../../Assets/fairy.svg';

const TypeSvg = {
  normal: { type: normal, color: '#A1A59F' },
  water: { type: water, color: '#16AAFF' },
  grass: { type: grass, color: '#1ED910' },
  poison: { type: poison, color: '#B763CF' },
  flying: { type: flying, color: '#A1BBEC' },
  rock: { type: rock, color: '#DABE5C' },
  steel: { type: steel, color: '#5695A3' },
  ice: { type: ice, color: '#31E6C8' },
  fighting: { type: fighting, color: '#FF235D' },
  ghost: { type: ghost, color: '#CEDCF0' },
  psychic: { type: psychic, color: '#FF79FF' },
  fire: { type: fire, color: '#FF9B00' },
  ground: { type: ground, color: '#DA7C4D' },
  electric: { type: electric, color: '#F2D94E' },
  dragon: { type: dragon, color: '#0077FF' },
  bug: { type: bug, color: '#7CD000' },
  dark: { type: dark, color: '#5B576B' },
  fairy: { type: fairy, color: '#FF79FF' },
};

const PokemonType = (props) => {
  console.log(props);
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
