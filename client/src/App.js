import React, { Component } from 'react';
import QuoteBox from './QuoteBox.js';
import UserBox from './UserBox.js';


class App extends Component {
 
   constructor(props) {
    super(props);

    this.state = {
      users: [],
      quotes: []
    };

    this.getUsers = this.getUsers.bind(this);
    // this.getQuotes = this.getQuotes.bind(this);

  }

  getUsers(){
     fetch('/users/')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }

  // getQuotes(){
  //    fetch('/quotes/')
  //     .then(res => res.json())
  //     .then(quotes => this.setState({ quotes }));
  // }

  componentDidMount() {
   this.getUsers();
   // this.getQuotes();
  }

  render() {
    return (
      <div>
        <UserBox data={this.state.users} />
        // <QuoteBox data={this.state.quotes} />
        </div>
      )}
}

export default App;