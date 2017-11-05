import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';


export default class SearchInput extends Component {
  constructor (props) {
    super(props);

    const initialCriteria = this.props.criteria || '';
    this.state = { criteria: initialCriteria };
  }

  handleChange (event) {
    this.setState({ criteria: event.target.value });
  }

  handleSearch (event) {
    this.props.onSearch(this.state.criteria, event);
  }

  render () {
    return (
      <div className="search-controls">
        <input type="search" placeholder={this.props.placeholder} autoComplete="off"
          value={this.state.criteria} onChange={(e) => this.handleChange(e)} />
        <Button label="Go!" clickAction={(e) => this.handleSearch(e)} />
      </div>
    );
  }
};

SearchInput.propTypes = {
  criteria: PropTypes.string,
  placeholder: PropTypes.string,
  onSearch: PropTypes.func.isRequired
};
