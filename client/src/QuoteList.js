import React from 'react';
import Quote from './Quote';

const QuoteList = (props) => {
  const quoteNodes = props.data.map(quote => (
    <Quote author={quote.author} key={quote._id} id={quote._id}>
      { quote.text}
    </Quote>
  ));
  return (
    <div>
      { quoteNodes }
    </div>
  );
};

export default QuoteList;