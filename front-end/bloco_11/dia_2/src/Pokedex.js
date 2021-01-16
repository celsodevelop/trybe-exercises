import React from 'react';
import Row from 'react-bootstrap/Row'

import Pokemon from './Pokemon';
import pokemons from './data';

class Pokedex extends React.Component {
  render () {
    return (
      <Row className="align-itens-center justify-content-center">
        {pokemons.map((pokemon) => <Pokemon key={pokemon.id} pokemon={pokemon} />)}
      </Row>
    )
  }
}

export default Pokedex;
