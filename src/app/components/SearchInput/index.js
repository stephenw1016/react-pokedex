// @flow
import * as React from 'react';
import Button from '../Button';

type Props = {
  criteria: string,
  placeholder: string,
  onSearch: Function
};

type State = {
  criteria: string
};

export default class SearchInput extends React.Component<Props, State> {
  constructor (props: Props) {
    super(props);
    this.state = { criteria: this.props.criteria || '' };
  }

  handleChange (event: SyntheticInputEvent<HTMLInputElement>) {
    this.setState({ criteria: event.target.value });
  }

  handleSearch (event: SyntheticMouseEvent<HTMLButtonElement>) {
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
