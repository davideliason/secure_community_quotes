 import React, { Component } from 'react';

class Quotes extends Component {
 
   constructor(props) {
    super(props);

    this.state = {
    quotes: [] 
    };

    // this.getQuotes = this.getQuotes.bind(this);
  }

  // getQuotes(){
  //    fetch('/api/quotes')
  //     .then(res => res.json())
  //     .then(quotes => this.setState({ quotes }));
  // }

  componentDidMount() {
   // this.getQuotes();
  }

  render() {
    return (
      <div>
         <h1>Quotes</h1>
           {this.state.quotes.map(quote =>
               <div key={quote._id}> "{quote.quote}" - {quote.name}</div>
           )}
           <button onClick={this.getQuotes}>refresh</button>
        </div>
      )}
    }

export default Quotes;