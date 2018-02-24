import { combineReducers } from 'redux';
import {
  REQUEST_PAGE,
  REQUEST_ALL_POKEMON,
  RECEIVE_ALL_POKEMON,
  SEARCH
} from './../actions';

const initialPokemonList = {
  currentPage: 1,
  items: [],
  filteredItems: [],
  isLoading: false,
  pages: {},
  pageSize: 10,
  searchTerm: '',
};

function pokemonList (state = initialPokemonList, action) {
  switch (action.type) {
    case SEARCH: {
      let searchTerm = action.searchTerm.toLocaleLowerCase();
      return Object.assign({}, state, {
        filteredItems: state.items.filter(item => item.name.includes(searchTerm))
      });
    }
    case REQUEST_PAGE: {
      let requestedPage = action.page;
      let isValidPageRange = requestedPage && requestedPage <= state.items.length / state.pageSize;

      return isValidPageRange
        ? Object.assign({}, state, { currentPage: requestedPage })
        : state;
    }
    case REQUEST_ALL_POKEMON: {
      return Object.assign({}, state, { isLoading: true });
    }
    case RECEIVE_ALL_POKEMON: {
      let size = initialPokemonList.pageSize;
      let i = 1;
      let pages = action.items.reduce((pageMap, item, index) => {
        if (index >= size) {
          i++;
          size = size + 10;
        }

        pageMap[i] = pageMap[i] || [];
        pageMap[i].push(item);
        return pageMap;
      }, {});

      return Object.assign({}, state, {
        items: action.items,
        isLoading: false,
        pages: pages
      });
    }
    default: {
      return state;
    }
  }
}

const rootReducer = combineReducers({
  pokemonList
});

export default rootReducer;
