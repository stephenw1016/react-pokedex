// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { loadAllPokemon } from '../../actions';

import PokemonCard from '../PokemonCard';

type Props = {
  pokemon: Array<{name: string}>,
  loadAllPokemon: Function
};

type State = {
  pokemon: Array<{name: string}>
};

const mapStateToProps = (state, ownProps) => {
  return { pokemon: state.pokemonList.items };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return { loadAllPokemon: dispatch(loadAllPokemon()) };
};

class PokemonList extends React.Component<Props, State> {
  constructor (props: Props) {
    super(props);
    this.state = { pokemon: [] };
  }

  render (): React.Node {
    return <ul>{
      this.props.pokemon.map(pokemon => {
        return <li key={pokemon.name}><PokemonCard pokemon={pokemon} /></li>;
      })
    }</ul>;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList);

