import React, { Component } from 'react';

class Signup extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        email: '',
        password: ''
      };
  
      this.handleEmailChange = this.handleEmailChange.bind(this);
      this.handlePasswordChange = this.handlePasswordChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleEmailChange(event) {
      this.setState({email: event.target.value});
    }

    handlePasswordChange(event) {
        this.setState({password: event.target.value});
      }
  
    handleSubmit(event) {
      alert('An essay was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Email:
            <textarea value={this.state.value} onChange={this.handleEmailChange} />
          </label>
          <label>
            Password:
            <textarea value={this.state.value} onChange={this.handlePasswordChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

  export default Signup;