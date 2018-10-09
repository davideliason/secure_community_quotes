import React from 'react';

const Quote = props => (
  <div className="singleQuote">
    <p>{props.author} </p>
    <i>{props.children}</i>
  </div>
);

export default Quote;