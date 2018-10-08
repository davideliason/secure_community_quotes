import React, { Component } from 'react';

class App extends Component {
 
   constructor(props) {
    super(props);

    this.state = {
    users: [] 
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

         <h1>Users</h1>
           {this.state.users.map(user =>
               <div key={user._id}> {user.email} - {user.password}</div>
           )}
        </div>
      )}
}

export default App;