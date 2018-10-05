import React, { Component } from 'react';
import './App.css'
// import Quotes from './Quotes.js';
import SignUpForm from './SignUpForm.js';
// import LoginForm from './LoginForm.js';
import { Link } from 'react-router-dom';

class App extends Component {
 
   constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App-intro ">
         <Link to="/signup"><button>Signup</button></Link>
         <Link to="/login"><button>Login</button></Link>
         <Link to="/"><button>Home</button></Link>


      </div>
    )}
}

export default App;