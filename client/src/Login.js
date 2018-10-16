import React, { Component } from 'react';
import axios from 'axios'

class Login extends React.Component {
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
      console.log('An new user login was submitted: ' + this.state.username + " " + this.state.password);
      axios.post('/loginUser', {
        username : this.state.username,
        password : this.state.password
      })
        .then(response => {
          console.log(response);
          if(response.status === 200) {
              this.props.updateUser({
                  loggedIn: true,
                  username: response.data.username
              })
              this.setState({
                  redirectTo: '/'
              })
          }
          else{
            console.log('login error');
          }
        }).catch(error => {
          console.log("login server error");
          console.log(error);
        })
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
           <label>Login</label>
            <input type="text" name="username" value={this.state.username} placeholder="username/email" onChange={this.handleUsernameChange} />
            <input type="text" name="password" value={this.state.password} placeholder="password" onChange={this.handlePasswordChange} />
            <input type="submit" value="Submit" />
        </form>
      );
    }
  }

  export default Login;