// @flow
import * as React from 'react';
import axios from 'axios';
import PokemonCard from '../PokemonCard';

type Props = {

};

const devUrl = './data/all-pokemon.json';
const prodUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=10000';

export default class PokemonList extends React.Component<Props> {
  constructor (props: Props) {
    super(props);
    this.state = { pokemon: [] };
  }

  componentDidMount () {
    axios.get(devUrl)
      .then(response => this.setState({ pokemon: response.data.results }));
  }

  render (): React.Node {
    return <ul>{
      this.state.pokemon.map(pokemon => {
        return <li key={pokemon.name}><PokemonCard pokemon={pokemon} /></li>;
      })
    }</ul>;
  }
}


