// @flow
import * as React from 'react';

type Props = {
  clickAction: Function,
  label: string
};

export default (props: Props) => {
  return <button onClick={props.clickAction}>{props.label}</button>;
}
