import React, { Component } from 'react';

class QuoteBox extends Component {

  render() {
    return (
      <div>

         <h1>Quotes</h1>
           {this.props.data.map(quote =>
               <div key={quote._id}> {quote.quote} - {quote.author}</div>
           )}
        </div>
      )}
}

export default QuoteBox;