import React from 'react';

const QuoteForm = props => (
  <form onSubmit={props.handleSubmit}>
    <input
      type="text"
      name="author"
      placeholder="Your name…"
      value={props.author}
      onChange={props.handleTextChange}
    />
    <input
      type="text"
      name="text"
      placeholder="give a quote.."
      value={props.text}
      onChange={props.handleChangeText}  
    />
    <button type="submit">Submit</button>
  </form>
);

export default QuoteForm