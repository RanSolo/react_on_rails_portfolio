import React, { Component } from 'react'
import AppNavbar from './components/AppNavbar';
import ExampleList from './components/ExampleList';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

class App extends Component {
  render () {
    return (
      <div className="App">
        <AppNavbar />
        <ExampleList />
      </div>
    );
  }
}

export default App
