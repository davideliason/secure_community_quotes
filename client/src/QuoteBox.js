import React, { Component } from 'react';
import './QuoteBox.css';
import QuoteList from './QuoteList.js';
import QuoteForm from './QuoteForm.js';



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

  onChangeText = (e) => {
    const newState = { ...this.state };
    newState[e.target.name] = e.target.value;
    this.setState(newState);
  }

  onChangeAuthorText = (e) => {
    const newState = { ...this.state };
    newState[e.target.name] = e.target.value;
    this.setState(newState);
  }

  submitQuote = (e) => {
    e.preventDefault();
    const { author, text } = this.state;
    if (!author || !text) return;
    fetch('/api/quotes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ author, text }),
    }).then(res => res.json()).then((res) => {
      if (!res.success) this.setState({ error: res.error.message || res.error });
      else this.setState({ author: '', text: '', error: null });
    });
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
           author: {this.state.author} text : {this.state.text}
            <QuoteList quotes={this.state.quotes} />
            <QuoteForm author={this.state.author}
                       text={this.state.text}
                       handleTextChange={this.onChangeAuthorText}
                       handleChangeText={this.onChangeText}
                       handleSubmit={this.submitQuote} 
             />
          </div>
        </div>
      );
  }
}

export default QuoteBox;
