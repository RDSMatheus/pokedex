import React from 'react';

const Head = (props) => {
  React.useEffect(() => {
    document.title = props.title ? `Pokedex || ${props.title}` : 'Pokedex';
    document
      .querySelector("meta[name='description']")
      .setAttribute('content', props.description || '');
  }, [props]);
  return <></>;
};

export default Head;
