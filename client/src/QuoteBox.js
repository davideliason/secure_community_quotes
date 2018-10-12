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

  onUpdateQuote = (id) => {
    const oldQuote = this.state.quotes.find(c => c._id === id);
    if (!oldQuote) return;
    this.setState({
        author: oldQuote.author,
        text: oldQuote.text,
        updateId: id
    });
  }

  onDeleteQuote = (id) => {
    const i = this.state.quotes.findIndex(c => c._id === id);
    const data = [
      ...this.state.data.slice(0, i),
      ...this.state.data.slice(i + 1),
    ];
    this.setState({ quotes });
    fetch(`api/quotes/${id}`, { method: 'DELETE' })
      .then(res => res.json()).then((res) => {
        if (!res.success) this.setState({ error: res.error });
      });
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
            <QuoteList 
                quotes={this.state.quotes}
                handleUpdateQuote = {this.onUpdateQuote}
                handleDeleteQuote = {this.onDeleteQuote}
            />
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
