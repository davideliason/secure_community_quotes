import React, { Component } from 'react';
import Quote from './Quote.js'

const QuoteList = (props) => {
  const quoteNodes = props.quotes.map(quote => (
    <Quote
        author={quote.author} 
        key={quote._id} 
        id={quote._id}
        handleUpdateQuote = {props.handleUpdateQuote}
        handleDeleteQuote = {props.handleDeleteQuote}
    >
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


