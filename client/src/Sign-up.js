import React, { Component } from 'react';
import axios from 'axios'

class Signup extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        username: '',
        password: '',
        redirectTo: ''
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
      event.preventDefault();
      console.log('An new user signup was submitted: ' + this.state.username + " " + this.state.password);
      axios.post('/addUser', {
        username : this.state.username,
        password : this.state.password
      })
        .then(response => {
          console.log(response);
          if(response.data) {
            console.log("successful signup")
            this.setState({
              redirectTo: '/login'
            })
          }
          else{
            console.log('sign up error');
          }
        }).catch(error => {
          console.log("sign up server error");
          console.log(error);
        })
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
           <label>Signup</label>
            <input type="text" name="username" value={this.state.username} placeholder="username/email" onChange={this.handleUsernameChange} />
            <input type="text" name="password" value={this.state.password} placeholder="password" onChange={this.handlePasswordChange} />
            <input type="submit" value="Submit" />
        </form>
      );
    }
  }

  export default Signup;