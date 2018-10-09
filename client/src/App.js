import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import ExampleList from './components/ExampleList';
import ExampleModal from './components/ExampleModal';
import { Container } from 'reactstrap';

import { Provider } from 'react-redux';
import store from './Store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavbar />
          <Container>
            <ExampleModal />
            <ExampleList />
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App
