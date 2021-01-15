import React from 'react';

class Pokemon extends React.Component {

  render () {
    const { pokemon } = this.props;
    const { name, type, averageWeight: { value: weight, measurementUnit }, image, moreInfo } = pokemon;
    return (
      <div className="pokemon__element">
        <h1  className="pokemon__title">Nome do Pokemon: {name}</h1>
        <h2 className="pokemon__type">Tipo do Pokemon: {type}</h2>
        <p className="pokemon__weight">Peso do Pokemon: {weight} {measurementUnit}</p>
        <img className="pokemon__image" src={image} alt={name}/>
        <a className="pokemon__moreinfo" href={moreInfo}>Mais Infos</a>
      </div>
    )
  }
};

export default Pokemon;
