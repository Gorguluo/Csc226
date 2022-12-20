//js
import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar';

class App extends Component {
  render() {
    return (

      <div className="App">
        <div className="App-header">
          <NavBar/>
        </div>
      </div>
    );
  }
}

export default App;