 
import React, { Component } from 'react';

class LoginForm extends Component {

  constructor(props) {
    super(props);
  }

  render(){
  	return (
  		<div>
		  	 <form action="/login" method="POST">
		  		 <input type="text" placeholder="email" name="email" />
		  		 <input type="password" placeholder="password" name="password" />
		  		 <input type="submit" />
		     </form>
		</div>     
	)}
}

export default LoginForm; 