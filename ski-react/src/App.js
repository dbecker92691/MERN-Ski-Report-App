import React, { Component } from 'react';
import './App.css';
import SkiPost from './SkiPostContainer/SkiPostContainer';
//import Login from './loginContainer/login'


class App extends Component {
  render() {
    return (
      <div className="App">
        <SkiPost />
      </div>
    );
  }
}

export default App;
