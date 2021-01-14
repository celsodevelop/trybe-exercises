import React from 'react';

import Pokemon from './Pokemon';
import data from './data';

class Pokedex extends React.Component {
  render () {
    return (
      data.map((pokemon) => <Pokemon pokemon={pokemon}/>)
    );
  }
}

export default Pokedex;
