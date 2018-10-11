import React, { Component } from 'react';
import './QuoteBox.css';
import QuoteList from './QuoteList.js';



class QuoteBox extends Component {
  constructor(){
    super();
    this.state = {
      quotes : [],
      error: null,
      author: '',
      text: ''
    };
  }

  

  componentDidMount() {
    fetch('/api/quotes')
      .then(res => res.json())
      .then(quotes => this.setState({ quotes }));
  }

  render(){
    return(
        <div className="container">
          <div className="quotes">
            <h3>Quotes</h3>
            {this.state.quotes.length}
            <QuoteList quotes={this.state.quotes} />
          </div>
        </div>
      );
  }
}

export default QuoteBox;
