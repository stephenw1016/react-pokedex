// @flow
import * as React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

type Props = {
  pokemon: number
};

export default class PokemonCard extends React.Component<Props> {
  constructor (props: Props) {
    super(props);
  }

  render (): React.Node {
    let pokemon = this.props.pokemon;
    return <Link to={`/pokemon/${pokemon.name}`}>{pokemon.name}</Link>;
  }
}
