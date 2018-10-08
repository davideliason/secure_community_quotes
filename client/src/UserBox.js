import React, { Component } from 'react';

class UserBox extends Component {
 
  render() {
    return (
      <div>

         <h1>Users</h1>
           {this.props.data.map(user =>
               <div key={user._id}> {user.email} - {user.password}</div>
           )}
        </div>
      )}
}

export default UserBox;