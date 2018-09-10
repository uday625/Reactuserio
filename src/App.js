import React, { Component } from 'react';
import Userioexercise from './Userioexercise/Userioexercise';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {


  state = {
    Username: [
      {username: 'Uday'},
      {username: 'Hema'},
      {username: 'Ani'}
    ]
  }

  usernameChangedHandler = (event) => {
      this.setState({
        Username: [
          {username: event.target.value},
          {username: event.target.value},
          {username: 'Aakash'}
        ]
      })
  }

  render() {
    return (
        <div className="App">
          <h2> Welcome to React IO</h2>
          <Userioexercise/>
          <UserInput  
            changed = { this.usernameChangedHandler}
            currentName= {this.state.Username[0].username}
            />
          <UserOutput username= {this.state.Username[0].username}/>
          <UserOutput username= {this.state.Username[1].username}/>
          <UserOutput username= {this.state.Username[2].username}/>
        </div>
    );
  }
}

export default App;
