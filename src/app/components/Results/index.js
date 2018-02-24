// @flow
import * as React from 'react';

type Props = {
  count: number
}

const Results = (props: Props) => {
  return (
    <span className="search-results-count">
      <span className="count">{props.count} results</span>
    </span>
  )
};

export default Results;
