import React, { Component } from 'react';

 

class QuoteList extends Component { 

  constructor(props) {
    super(props);

    this.state = {
   	  quotes: [{
        id: 10,
        author: "David",
        text: "coffee"
        }, {
        id: 11,
        author: "John",
        text:"coffee too"
     }]
    };

    // this.handleChange = this.handleChange.bind(this);

}

  // componentDidMount() {
  //   fetch('/api/quotes')
  //     .then(res => res.json())
  //     .then(quotes => this.setState({ quotes }));
  // }

  render() {
  	return (
  		<div>
  			 <h1>Quotes</h1>
       		 {this.state.quotes.map(quote =>
               <div key={quote.id}>{quote.author} : {quote.text}</div>
       		 )}
        </div>
      )}
}

export default QuoteList;


