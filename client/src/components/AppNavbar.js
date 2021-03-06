import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import Background from '../images/ransolo-pencil-logo.jpg';
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
          <Navbar color="dark" dark expand="sm">
            <Container>
              <NavbarBrand href="/">
                <div className={"img-fluid pull-left rounded"}
                  style={{
                    height: "75px",
                    width: "75px",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundImage: "url(" + Background + ")"}}>
                </div >
              </NavbarBrand>
              <h4 className={"pull-right text-white"}>
                Randy Russell's Portfolio
              </h4>
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
