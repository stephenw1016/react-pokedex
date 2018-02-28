import { combineReducers } from 'redux';
import {
  RECEIVE_ALL_POKEMON,
  RECEIVE_POKEMON,
  REQUEST_PAGE,
  REQUEST_ALL_POKEMON,
  REQUEST_POKEMON,
  SEARCH,
} from "./types";

const defaultState = {
  allPokemon: [],
  currentPage: 1,
  isLoading: false,
  pages: {},
  pageSize: 10,
  searchTerm: '',
  selectedPokemon: null
};

function pokemonList (state = defaultState, action) {
  switch (action.type) {

    case SEARCH: {
      let searchTerm = action.searchTerm.toLocaleLowerCase();
      let items = searchTerm ? state.allPokemon.filter(item => item.name.includes(searchTerm)) : state.allPokemon;

      return { ...state, pages: createPages(items, state.pageSize) };
    }

    case REQUEST_POKEMON: {
      return { ...state, loading: true };
    }

    case RECEIVE_POKEMON: {
      return {
        ...state,
        loading: false,
        selectedPokemon: action.pokemon
      };
    }

    case REQUEST_PAGE: {
      let requestedPage = action.page;
      let isValidPage = state.pages.hasOwnProperty(requestedPage);

      return isValidPage ? { ...state, currentPage: requestedPage } : state;
    }

    case REQUEST_ALL_POKEMON: {
      return { ...state, isLoading: true };
    }

    case RECEIVE_ALL_POKEMON: {
      return {
        ...state,
        allPokemon: action.items,
        isLoading: false,
        pages: createPages(action.items, state.pageSize)
      };
    }

    default: {
      return state;
    }
  }
}

function createPages (items: Array<{id: number, name: string}>, maxPageSize = 1) {
  let i = 1;

  return items.reduce((pageMap, item, index) => {
    if (index >= maxPageSize) {
      i++;
      maxPageSize = maxPageSize + 10;
    }

    pageMap[i] = pageMap[i] || [];
    pageMap[i].push(item);

    return pageMap;
  }, {});
}

const pokemon = combineReducers({
  pokemonList
});

export default pokemon;
