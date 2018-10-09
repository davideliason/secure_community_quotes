import React from 'react';

const Quote = props => (
  <div className="singleQuote">
    <i>"{props.children}"</i>
    <p>- {props.author} </p>
  </div>
);

export default Quote;