import React, { Component } from 'react';
import UserBox from './UserBox.js';

class App extends Component {
 
   constructor(props) {
    super(props);

    this.state = {
      users: [],
      quotes: []
    };

    this.getUsers = this.getUsers.bind(this);

  }

  getUsers(){
     fetch('/users/')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }

  componentDidMount() {
    this.getUsers();
  }

  render() {
    return (
      <div>
        <UserBox data={this.state.users} verb={this.getUsers} />
        </div>
      )}
}

export default App;