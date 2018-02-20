import React, { Component } from 'react';
import { render }  from 'react-dom';
import { HashRouter, Route, } from 'react-router-dom';

import './styles/main.scss';

import NavBar from './components/NavBar';
import PokemonList from './components/PokemonList';
import PokemonDetail from "./components/PokemonDetail";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { appTitle: 'React Pokedex' };
  }

  render () {
    return (
      <HashRouter>
        <main>
          <NavBar appTitle={this.state.appTitle} />
          <Route exact path="/" component={PokemonList} />
          <Route exact path="/pokemon" component={PokemonList} />
          <Route exact path="/pokemon/:name" component={PokemonDetail} />
        </main>
      </HashRouter>
    );
  }
}

render(<App />, document.getElementById('app'));
