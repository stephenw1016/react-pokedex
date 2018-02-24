// @flow
import axios from 'axios';

export const SEARCH = 'SEARCH';
export function search (searchTerm: string) {
  return {
    type: SEARCH,
    searchTerm
  };
}

export const REQUEST_PAGE = 'REQUEST_PAGE';
export function requestPage (page: number) {
  return {
    type: REQUEST_PAGE,
    page
  };
}

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

  return function (dispatch: Function) {
    dispatch(requestAllPokemon());

    return axios.get(devUrl)
      .then(response => (response.data || {}).results)
      .then(results => {
        return results.reduce((allPokemon, pokemon) => {
          pokemon.id = pokemon.url.match(/.*\/(\d+)\//)[1];
          if (pokemon.id < 201) {
            allPokemon.push(pokemon);
          }
          return allPokemon;
        }, []);
      })
      .then(allPokemon => {
        dispatch(receiveAllPokemon(allPokemon));
        dispatch(requestPage(1));
      });
  };
}

