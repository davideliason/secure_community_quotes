import React, { Component } from 'react';

class SignUpForm extends Component {
 
   constructor(props) {
      super(props);

      this.state = {
        email : "",
        password : ""
      };

      this.handleEmailChange = this.handleEmailChange.bind(this);
      this.handlePasswordChange = this.handlePasswordChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleEmailChange(e){
    console.log('handleEmailChange');
    this.setState({email : e.target.value});
  };

   handlePasswordChange(e){
    console.log('handlePasswordChange');
    this.setState({password : e.target.value});
   };

   handleSubmit(e) {
    e.preventDefault();
    console.log("submitted" + this.state.email)
   };


  render() {
    return (
      <div>
        <h3> Sign Up</h3>
        <form action="/signup" method="POST">
         <input 
            type="text" 
            placeholder="add email" 
            name="email"
            value={this.state.email}
            onChange={this.handleEmailChange} 
         />

         <input 
            type="password" 
            placeholder="add password" 
            name="password"
            value={this.state.password}
            onChange={this.handlePasswordChange} 
         />

         <input type="submit" />
        </form>

        </div>
      )}
}

export default SignUpForm;

