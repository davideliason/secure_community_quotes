import React from 'react';

const QuoteForm = props => (
  <form onSubmit={props.submitQuote}>
    <input
      type="text"
      name="author"
      placeholder="Your name…"
      value={props.author}
      onChange={props.handleChangeText}
    />
    <input
      type="text"
      name="text"
      placeholder="Say something..."
      value={props.text}
      onChange={props.handleTextChange}
    />
    <button type="submit">Submit</button>
  </form>
);

export default QuoteForm;