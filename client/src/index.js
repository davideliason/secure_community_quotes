import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import SignupForm from './components/SignUpForm.js';
import LoginForm from './components/LoginForm.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';

ReactDOM.render( 
	<Router>
      <div>
        <Route path="/signup" component={SignupForm} />
        <Route path="/login" component={LoginForm} />
      </div>
    </Router>, document.getElementById('root'));
