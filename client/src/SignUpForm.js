import React, { Component } from 'react';

class SignUpForm extends Component {
 
   constructor(props) {
    super(props);

    this.state = {
    email : "",
    password : ""
    };

  }

  render() {
    return (
      <div>
        <h3> Sign Up</h3>
        <form action="/signup" method="POST">
         <input type="text" placeholder="new email" name="email" />
         <input type="password" placeholder="new password" name="password" />
         <input type="submit" />
        </form>

        </div>
      )}
}

export default SignUpForm;