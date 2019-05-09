import React, { Component } from 'react';
import './App.css';
import PostsPage from './components/PostsContainer/PostsPage';
import Authenticate from './components/Authentication/Authenticate';
import Login from './components/Login/Login';

class App extends Component {
  state = {};
  

  render() {
    return (
      <div className="App">
        <PostsPage />
        <Login />
      </div>
    );
  }
}



export default Authenticate(App);
