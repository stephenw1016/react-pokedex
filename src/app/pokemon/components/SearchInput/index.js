// @flow
import * as React from 'react';

type Props = {
  criteria?: string,
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
    let searchTerm: string = event.target.value;

    this.setState({ criteria: searchTerm });
    this.props.onSearch(searchTerm);
  }

  render (): React.Node {
    return (
      <div className="search-controls">
        <input type="search"
               autoComplete="off"
               placeholder={this.props.placeholder}
               value={this.state.criteria}
               onChange={(e) => this.handleChange(e)}
        />
      </div>
    );
  }
};
