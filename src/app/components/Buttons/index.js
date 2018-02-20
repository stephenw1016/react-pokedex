// @flow
import React from 'react';

import Button from '../Button';

type Props = {
  buttons: Array<{label: string, clickAction: Function}>
}

export default (props: Props) => {
  return props.buttons.map((button, index) => {
    return (
      <Button key={index} label={button.label} clickAction={button.clickAction}/>
    );
  });
};
