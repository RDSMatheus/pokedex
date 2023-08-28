import React from 'react';

const NavControl = ({ setValue, value }) => {
  return (
    <div>
      {value > 10 ? (
        <button onClick={() => setValue(value - 20)}>Anterior</button>
      ) : (
        <button disabled>Anterior</button>
      )}
      <button onClick={() => setValue(value + 20)}>Próximo</button>
    </div>
  );
};

export default NavControl;
