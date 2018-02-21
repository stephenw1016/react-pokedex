import React, { Component } from 'react';
import { render }  from 'react-dom';
import { HashRouter, Route, } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import thunkMiddleWare from 'redux-thunk';

import NavBar from './components/NavBar';
import PokemonList from './components/PokemonList';
import PokemonDetail from './components/PokemonDetail';
import rootReducer from './reducers';

import './styles/main.scss';

const loggerMiddleware = createLogger();

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleWare,
    loggerMiddleware
  )
);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { appTitle: 'React Pokedex' };
  }

  render () {
    return (
      <Provider store={store}>
        <HashRouter>
          <main>
            <NavBar appTitle={this.state.appTitle} />
            <Route exact path="/" component={PokemonList} />
            <Route exact path="/pokemon" component={PokemonList} />
            <Route exact path="/pokemon/:name" component={PokemonDetail} />
          </main>
        </HashRouter>
      </Provider>
    );
  }
}

render(<App />, document.getElementById('app'));
