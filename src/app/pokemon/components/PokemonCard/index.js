// @flow
import * as React from 'react';
import { Link } from 'react-router-dom';

type Props = {
  pokemon: { id: number, name: string }
};

export default ({pokemon}: Props) => {
  let imageUrl = `http://res.cloudinary.com/dwnebujkh/image/upload/v1473910425/pokemon/${pokemon.id}.png`;
  let detailViewRoute = `/pokemon/${pokemon.id}`;

  return (
    <div className="pokemon-card">
      <div className="card-top">
        <img src={imageUrl} />
      </div>
      <div className="card-bottom">
        <span>{pokemon.name}</span>
        <Link to={detailViewRoute}>Details</Link>
      </div>
    </div>
  );
}
