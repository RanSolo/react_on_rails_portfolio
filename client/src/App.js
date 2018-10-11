import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import ExampleList from './components/ExampleList';
import Example from './components/Example';
import Home from './components/Home';
import { Container } from 'reactstrap';
import { Provider } from 'react-redux';
import store from './Store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <AppNavbar />
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/examples/:id" component={Example}/>
              <Route exact={true} path="/examples" component={ExampleList}/>
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App
