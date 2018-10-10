import React, { Component } from 'react';
import './QuoteBox.css';
import QuoteList from './QuoteList.js';



class QuoteBox extends Component {
  constructor(){
    super();
    this.state = {
      quotes : [
        {id: 5, "author" : "me", "text" : "ok"},
        {id: 6, "author" : "you", "text" : "alrighty"}
      ],
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
            <QuoteList quotes={this.state.quotes} />
          </div>
        </div>
      );
  }
}

export default QuoteBox;
