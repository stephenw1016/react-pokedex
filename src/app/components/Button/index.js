// @flow
import * as React from 'react';


type Props = {
  clickAction: Function,
  label: string
};

export default class Button extends React.Component<Props> {
  constructor (props: Props) {
    super(props);
  }

  render (): React.Node {
    return <button onClick={this.props.clickAction}>{this.props.label}</button>;
  }
}
