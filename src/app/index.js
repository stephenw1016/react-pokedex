import React, { Component } from 'react';
import { render }  from 'react-dom';

class App extends Component {
  render () {
    return <h1>{this.props.test}</h1>;
  }
}


render(<App test="React Pokedex" />, document.getElementById('app'));