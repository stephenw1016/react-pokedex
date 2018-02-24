// @flow
import * as React from 'react';

import Buttons from '../Buttons';
import Results from '../Results';
import SearchInput from '../SearchInput';
import {requestPage, search} from "../../actions";
import {connect} from "react-redux";

type Props = {
  appTitle: string,
  currentPage: number,
  requestPage: Function,
  search: Function,
  searchTerm?: string,
  totalItems: number
};

const mapStateToProps = ({pokemonList}) => {
  return {
    currentPage: pokemonList.currentPage,
    totalItems: pokemonList.items.length,
    searchTerm: pokemonList.searchTerm
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestPage: (page: number ) => dispatch(requestPage(page)),
    search: (searchTerm: string ) => dispatch(search(searchTerm))
  };
};

class NavBar extends React.Component<Props> {
  constructor (props: Props) {
    super(props);
  }

  handleSearch (searchTerm: string) {
    this.props.search(searchTerm);
  }

  handlePreviousClick () {
    this.props.requestPage(this.props.currentPage - 1);
  };

  handleNextClick () {
    this.props.requestPage(this.props.currentPage + 1);
  }

  render (): React.Node {
    const buttons = [
      { label: 'Previous', clickAction: this.handlePreviousClick.bind(this) },
      { label: 'Next', clickAction: this.handleNextClick.bind(this) },
    ];

    return (
      <nav>
        <h1>{this.props.appTitle}</h1>
        <Buttons buttons={buttons} />
        <SearchInput criteria={this.props.searchTerm} placeholder="Search for Pokemon..." onSearch={this.handleSearch.bind(this)} />
        <Results count={this.props.totalItems}/>
      </nav>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
