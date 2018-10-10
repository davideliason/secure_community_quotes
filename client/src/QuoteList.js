import React, { Component } from 'react';

class QuoteList extends Component { 

  render() {
  	return (
  		<div>
       		 {this.props.quotes.map(quote =>
               <div key={quote.id}>{quote.author} : {quote.text}</div>
       		 )}
        </div>
      )}
}

export default QuoteList;


