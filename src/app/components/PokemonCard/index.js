// @flow
import * as React from 'react';
import { Link } from 'react-router-dom';

type Props = {
  pokemon: { id: number, name: string }
};

export default class PokemonCard extends React.Component<Props> {
  constructor (props: Props) {
    super(props);
  }

  render (): React.Node {
    let pokemon = this.props.pokemon;

    return (
      <div className="pokemon-card">
        <div className="card-top">
          <img src={`http://res.cloudinary.com/dwnebujkh/image/upload/v1473910425/pokemon/${pokemon.id}.png`} />
        </div>
        <div className="card-bottom">
          <span>{pokemon.name}</span>
          <Link to={`/pokemon/${pokemon.id}`}>Details</Link>
        </div>
      </div>
    );
  }
}
