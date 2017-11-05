import React, { Component } from 'react';
import { render }  from 'react-dom';

import './styles/main.scss';

import NavBar from './components/NavBar';


class App extends Component {
  constructor(props) {
    super(props);
    this.appTitle = 'React Pokedex';
  }

  render () {
    return (
      <div>
        <NavBar appTitle={this.appTitle} />
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
