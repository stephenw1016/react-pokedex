// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { loadPokemon } from "../../actions";

type Props = {
  pokemon: {
    id: number,
    name: string,
    height: number,
    weight: number,
    stats: Array<{name: string, value: number}>
  },
  loadPokemon: Function
};

function PokemonDetail ({pokemon}: Props) {
  if (!pokemon) {
    return <div>No Detail Available</div>;
  }

  return (
    <ul>
       <li>ID: {pokemon.id}</li>
       <li>Name: {pokemon.name}</li>
       <li>Height: {pokemon.height}</li>
       <li>Weight: {pokemon.weight}</li>
     </ul>
  );
}

const mapStateToProps = ({pokemon: {pokemonList}}) => {
  return {
    pokemon: pokemonList.selectedPokemon
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadPokemon: dispatch(loadPokemon(1))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail);
