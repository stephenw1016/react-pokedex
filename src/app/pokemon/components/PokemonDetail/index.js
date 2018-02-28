// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { RadarChart, PolarGrid, Radar, PolarAngleAxis, PolarRadiusAxis, Tooltip } from 'recharts';
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
    return <div>Loading Pokemon Info...</div>;
  }

  return (
    <ul className="detailView">
       <li>ID: {pokemon.id}</li>
       <li>Name: {pokemon.name}</li>
       <li>Height: {pokemon.height}</li>
       <li>Weight: {pokemon.weight}</li>
       <li>
         <RadarChart outerRadius={100} width={500} height={250} data={pokemon.stats}>
           <PolarGrid />
           <PolarAngleAxis dataKey="name" />
           <PolarRadiusAxis angle={60} domain={[0, 'auto']} tickCount={4} />
           <Radar name={pokemon.name} dataKey="value" fill="green" fillOpacity={0.5} />
           <Tooltip />
         </RadarChart>
       </li>
     </ul>
  );
}

const mapStateToProps = ({pokemon: {pokemonList}}) => {
  return {
    pokemon: pokemonList.selectedPokemon
  };
};

const mapDispatchToProps = (dispatch, {match: {params}}) => {
  return {
    loadPokemon: dispatch(loadPokemon(params.id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail);
