import React, { Component } from 'react';
import { render }  from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import thunkMiddleWare from 'redux-thunk';

import NavBar from './pokemon/components/NavBar';
import PokemonList from './pokemon/components/PokemonList';
import PokemonDetail from './pokemon/components/PokemonDetail';
import pokemon from './pokemon/reducers';
import { loadAllPokemon } from './pokemon/actions';

import './styles/main.scss';

const loggerMiddleware = createLogger({
  collapsed: true,
  duration: true,
  timestamp: false
});

const store = createStore(
  combineReducers({pokemon}),
  applyMiddleware(thunkMiddleWare, loggerMiddleware)
);

class App extends Component {
  constructor (props) {
    super(props);
  }

  componentDidMount () {
    store.dispatch(loadAllPokemon());
  }

  render () {
    return (
      <Provider store={store}>
        <HashRouter>
          <main>
            <NavBar appTitle="React Pokedex" />
            <Switch>
              <Route exact path="/pokemon/:id" component={PokemonDetail} />
              <Route path="*" component={PokemonList} />
            </Switch>
          </main>
        </HashRouter>
      </Provider>
    );
  }
}

render(<App />, document.getElementById('app'));
