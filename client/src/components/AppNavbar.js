import React, { Component } from 'react';
import ExampleList from './ExampleList';
import Example from './Example';
import Home from './Home';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container } from 'reactstrap';
import { BrowserRouter as Router, NavLink, Route, withRouter, Switch} from 'react-router-dom';

class AppNavbar extends Component {
  state = {
    isOpen: false
  }
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
        <div>
          <Navbar color="dark" dark expand="sm" className='mb-5'>
            <Container>
              <NavbarBrand href="/">Randy Russell Portfolio</NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink to="/">Home</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink to="/examples">Examples</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink to="https://github.com/ransolo"
                             target='_blank'>Github</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink to="https://linkedin.com/in/ransolo"
                             target='_blank'>LinkedIn</NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Container>
          </Navbar>
        </div>
    );
  }
}
export default AppNavbar;
