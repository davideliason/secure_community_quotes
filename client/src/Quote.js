import React from 'react';

const Quote = props => (
      <div>
        <h3>{props.author}</h3>
         {props.children}
      </div>
);

export default Quote;
