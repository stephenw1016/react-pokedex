import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Button extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return <button onClick={this.props.clickAction}>{this.props.label}</button>;
  }
}

Button.propTypes = {
  clickAction: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired
};
