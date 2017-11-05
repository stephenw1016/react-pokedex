import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Buttons from '../Buttons';
import Results from '../Results';
import SearchInput from '../SearchInput';


export default class NavBar extends Component {
  constructor (props) {
    super(props);
  }

  handleSearch (a, e) {
    console.log(a, e);
  }

  render () {
    const buttons = [
      { label: 'Previous', clickAction: () => console.log('going back') },
      { label: 'Next', clickAction: () => console.log('going forward') },
    ];

    return(
      <nav>
        <h1>{this.props.appTitle}</h1>
        <Buttons buttons={buttons}/>
        <SearchInput placeholder="Search for Pokemon..." onSearch={this.handleSearch}/>
        <Results />
      </nav>
    );
  }
}

NavBar.propTypes = {
  appTitle: PropTypes.string.isRequired
};
