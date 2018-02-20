import * as React from 'react';

import Buttons from '../Buttons';
import Results from '../Results';
import SearchInput from '../SearchInput';

type Props = {
  appTitle: string,
};

export default class NavBar extends React.Component<Props> {
  constructor (props: Props) {
    super(props);
  }

  handleSearch (a: string, event: SyntheticMouseEvent<HTMLButtonElement>) {
    console.log(a, event);
  }

  render () {
    const buttons = [
      { label: 'Previous', clickAction: () => console.log('going back') },
      { label: 'Next', clickAction: () => console.log('going forward') },
    ];

    return(
      <nav>
        <h1>{this.props.appTitle}</h1>
        <Buttons buttons={buttons} />
        <SearchInput placeholder="Search for Pokemon..." onSearch={this.handleSearch} />
        <Results />
      </nav>
    );
  }
}
