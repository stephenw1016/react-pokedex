// @flow
import * as React from 'react';

type Props = {
  current: number,
  total: number
}

const Results = ({current, total}: Props) => {
  return (
    <span className="search-results-count">
      <span className="count">showing {current} of {total}</span>
    </span>
  )
};

export default Results;
