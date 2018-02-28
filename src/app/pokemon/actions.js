// @flow
import axios from 'axios';
import {
  RECEIVE_ALL_POKEMON,
  RECEIVE_POKEMON,
  REQUEST_PAGE,
  REQUEST_ALL_POKEMON,
  REQUEST_POKEMON,
  SEARCH,
} from "./types";


export function search (searchTerm: string) {
  return {
    type: SEARCH,
    searchTerm
  };
}

export function requestPage (page: number) {
  return {
    type: REQUEST_PAGE,
    page
  };
}

function requestAllPokemon () {
  return {
    type: REQUEST_ALL_POKEMON
  };
}

function requestPokemon () {
  return {
    type: REQUEST_POKEMON
  };
}

function receiveAllPokemon (items) {
  return {
    type: RECEIVE_ALL_POKEMON,
    items
  };
}

function receivePokemon (pokemon) {
  return {
    type: RECEIVE_POKEMON,
    pokemon
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

export function loadPokemon (id: number) {
  const url = `./data/pokemon-${id}.json`;

  return function (dispatch: Function) {
    dispatch(requestPokemon());

    let convertPokemon = pokemon => {
      return {
        id: pokemon.id,
        name: pokemon.name,
        height: pokemon.height,
        weight: pokemon.weight,
        stats: pokemon.stats.map(stat => {
          return { name: stat.stat.name, value: stat.base_stat };
        })
      };
    };

    return axios.get(url)
      .then(response => response.data)
      .then(convertPokemon)
      .then(allPokemon => dispatch(receivePokemon(allPokemon)));
  };
}

