import React, { Component } from 'react';

class Signup extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        username: '',
        password: ''
      };
  
      this.handleUsernameChange = this.handleUsernameChange.bind(this);
      this.handlePasswordChange = this.handlePasswordChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleUsernameChange(event) {
      this.setState({username: event.target.value});
    }

    handlePasswordChange(event) {
        this.setState({password: event.target.value});
      }
  
    handleSubmit(event) {
      alert('An essay was submitted: ' + this.state.username + " " + this.state.password);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
         
            <input type="text" name="username" value={this.state.username} onChange={this.handleUsernameChange} />
            <input type="text" name="password" value={this.state.password} onChange={this.handlePasswordChange} />
            <input type="submit" value="Submit" />
        </form>
      );
    }
  }

  export default Signup;