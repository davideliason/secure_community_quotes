import React, { Component } from 'react';
import QuoteList from './QuoteList';
import DATA from './data';
import './QuoteBox.css';
import QuoteForm from './QuoteForm';

class QuoteBox extends Component {

	 constructor() {
    super();
    this.state = {
      data: [],
      error: null,
      author: '',
      text: ''
    };
    this.pollInterval = null;
  }
	
  render() {
    return (
      <div className="container">
          <h2>Community Quotes</h2>
             <div className="quotes">
                <h3>Quotes:</h3>
                <QuoteList data={DATA} />
             </div>

             <div className="form">
                <QuoteForm />
             </div>
      </div>
    );
  }
}

export default QuoteBox;
