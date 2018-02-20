// @flow
import * as React from 'react';
import axios from 'axios';

type Props = {
  pokemon: Object
};

export default class PokemonDetail extends React.Component<Props> {
  constructor (props: Props) {
    super(props);
  }

  componentDidMount () {
    console.log(this.props);
  }

  render (): React.Node {
    return <div>Detail View!</div>;
  }
}
