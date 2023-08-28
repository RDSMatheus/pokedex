import React from 'react';
import Progress from '../Progress';

const PokemonStats = ({ data }) => {
  return (
    <div>
      {data.map((stat) => (
        <Progress
          completed={stat.base_stat.toString()}
          customLabel={stat.stat.name}
        />
      ))}
    </div>
  );
};

export default PokemonStats;
