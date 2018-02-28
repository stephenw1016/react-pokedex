// @flow
import * as React from 'react';
import { connect } from 'react-redux';

import PokemonCard from '../PokemonCard';

type Props = {
  loadAllPokemon: Function,
  pokemon: Array<{id: number, name: string}>
};

export function PokemonList ({pokemon}: Props) {
  return (
    <ul>
      {pokemon.map(pokemonListItem =>
        <li key={pokemonListItem.id}>
          <PokemonCard pokemon={pokemonListItem} />
        </li>)}
    </ul>
  );
}

const mapStateToProps = ({pokemon: {pokemonList}}) => {
  return {
    pokemon: pokemonList.pages[pokemonList.currentPage] || []
  };
};

export default connect(mapStateToProps)(PokemonList);

