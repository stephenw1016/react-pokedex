import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';


const Buttons = (props) => {
  return props.buttons.map((button, index) => {
    return (
      <Button key={index} label={button.label} clickAction={button.clickAction}/>
    );
  });
};

Buttons.propTypes = {
  buttons: PropTypes.arrayOf(PropTypes.shape(Button.propTypes))
};

export default Buttons;
