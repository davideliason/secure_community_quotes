import React, { Component } from 'react';


class App extends Component {
 
   constructor(props) {
    super(props);

    this.state = {
    quotes: [] 
    };

  }

   refreshPage(){ 
    window.location.reload(); 
   }

  getQuotes(){
     fetch('/api/quotes')
      .then(res => res.json())
      .then(quotes => this.setState({ quotes }));
  }

  componentDidMount() {
   this.getQuotes();
  }

  render() {
    return (
      <div>
         <h1>Quotes</h1>
           {this.state.quotes.map(quote =>
               <div key={quote._id}> "{quote.quote}" - {quote.name}</div>
           )}
        </div>
      )}
}

export default App;