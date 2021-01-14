import React from 'react';

class Pokemon extends React.Component {
  render () {
    const { name, averageWeight: { value, measurementUnit } = {}, type, image, moreInfo } = this.props;
    return (
      <div className="pokemon__element">
        <h1  className="pokemon__title">Nome do Pokemon: {name}</h1>
        <h2 className="pokemon__type">Tipo do Pokemon: {type}</h2>
        <p className="pokemon__weight">Peso do Pokemon: {value}{measurementUnit}</p>
        <img className="pokemon__image" src={image} alt={name}/>
        <a className="pokemon__moreinfo" href={moreInfo}>Mais Infos</a>
      </div>
    )
  }
};

export default Pokemon;
