import React, { Component } from 'react';
import './App.css'
import Quotes from './Quotes.js';
import SignUpForm from './SignUpForm.js';
import LoginForm from './LoginForm.js';


class App extends Component {
 
   constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App-intro ">

         
          <SignUpForm />
          <LoginForm />
          <Quotes />
        </div>
      )}
}

export default App;