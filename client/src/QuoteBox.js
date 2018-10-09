import React, { Component } from 'react';
import QuoteList from './QuoteList';
import DATA from './data';
import './QuoteBox.css';
import QuoteForm from './QuoteForm';

class QuoteBox extends Component {

	 constructor(props) {
    super(props);
    this.state = {
      data: [],
      error: null,
      author: '',
      text: ''
    };
  }

  // componentDidMount() {
  //   this.loadQuotesFromServer();

  //   if (!this.pollInterval) {
  //     this.pollInterval = setInterval(this.loadQuotesFromServer, 2000);
  //   }
  // }

  componentDidMount() {
    fetch('/api/quotes')
      .then(res => res.json())
      .then(quotes => this.setState({ data : quotes }));
  }
  
  render() {
    return (
      <div className="container">
          <h2>Community Quotes</h2>
             <div className="quotes">
                <h3>Quotes:</h3>
                <QuoteList data={this.state.data} />
             </div>

             <div className="form">
                <QuoteForm />
             </div>
      </div>
    );
  }
}

export default QuoteBox;
