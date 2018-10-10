import React, { Component } from 'react';
import './QuoteBox.css';

class QuoteBox extends Component {
  state = {quotes: []}

  componentDidMount() {
    fetch('/api/quotes')
      .then(res => res.json())
      .then(quotes => this.setState({ quotes }));
  }

  render() {
    return (
      <div className="QuoteBox">
        <h1>Quotes</h1>
        {this.state.quotes.map(quote =>
          <div key={quote.id}>{quote.author} : {quote.text}</div>
        )}
      </div>
    );
  }
}

export default QuoteBox;
