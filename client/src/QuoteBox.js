import React, { Component } from 'react';
import './App.css';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import DATA from './data';
import './CommentBox.css';

class CommentBox extends Component {
  render() {
    return (
      <div className="App">
          <h3>Community Quotes</h3>
      </div>
    );
  }
}

export default CommentBox;
