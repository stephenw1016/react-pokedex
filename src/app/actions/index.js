import axios from 'axios';

export const REQUEST_ALL_POKEMON = 'REQUEST_ALL_POKEMON';
function requestAllPokemon () {
  return {
    type: REQUEST_ALL_POKEMON
  };
}

export const RECEIVE_ALL_POKEMON = 'RECEIVE_ALL_POKEMON';
function receiveAllPokemon (items) {
  return {
    type: RECEIVE_ALL_POKEMON,
    items
  };
}

export function loadAllPokemon () {
  const devUrl = './data/all-pokemon.json';
  const prodUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=10000';

  return function (dispatch) {
    dispatch(requestAllPokemon());

    return axios.get(devUrl)
      .then(response => (response.data || {}).results)
      .then(allPokemon => dispatch(receiveAllPokemon(allPokemon)));
  };
}
