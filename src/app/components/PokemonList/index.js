// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { loadAllPokemon } from '../../actions';

import PokemonCard from '../PokemonCard';

type Props = {
  loadAllPokemon: Function,
  pokemon: Array<{id: number, name: string}>,
  requestPage: Function
};

const mapStateToProps = ({pokemonList}) => {
  return {
    pokemon: pokemonList.pages[pokemonList.currentPage] || []
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadAllPokemon: dispatch(loadAllPokemon())
  };
};

function PokemonList ({pokemon}: Props) {
  return (
    <ul>
      {pokemon.map(pokemonListItem =>
        <li key={pokemonListItem.id}>
          <PokemonCard pokemon={pokemonListItem} />
        </li>)}
    </ul>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList);

