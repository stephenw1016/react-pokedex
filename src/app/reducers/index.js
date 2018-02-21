import { combineReducers } from 'redux';
import { REQUEST_ALL_POKEMON, RECEIVE_ALL_POKEMON} from './../actions';

const initialPokemonList = {
  items: [],
  isLoading: false
};

function pokemonList (state = initialPokemonList, action) {
  switch (action.type) {
    case REQUEST_ALL_POKEMON: {
      return Object.assign({}, state, { isLoading: true });
    }
    case RECEIVE_ALL_POKEMON: {
      return Object.assign({}, state, {
        items: action.items,
        isLoading: false
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
