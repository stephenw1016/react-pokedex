import React, { Component } from 'react';
import { render }  from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import thunkMiddleWare from 'redux-thunk';

import NavBar from './pokemon/components/NavBar';
import PokemonList from './pokemon/components/PokemonList';
import PokemonDetail from './pokemon/components/PokemonDetail';
import rootReducer from './pokemon/reducers';

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
