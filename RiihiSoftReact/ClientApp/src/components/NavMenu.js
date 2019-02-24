import React from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem } from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';
import './styles/NavMenu.css';

export default class NavMenu extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  activeStyle = {
    backgroundColor: 'rgba(0, 115, 230 , 0.15)'
  }
  style = {
    borderRadius: '5px',
    padding: '5px'
  }
  render() {
    return (
      <header>
        <Navbar className="navbar-expand-sm navbar-toggleable-sm border-bottom box-shadow mb-3" light >
          <Container>
            <NavbarBrand tag={Link} className="text-primary" to="/">RiihisoftReact</NavbarBrand>
            <NavbarToggler onClick={this.toggle} className="mr-2" />
            <Collapse className=" d-sm-inline-flex flex-sm-row-reverse" isOpen={this.state.isOpen} navbar>
              <ul className="navbar-nav flex-grow">
                <NavItem>
                  <NavLink style={this.style} activeStyle={this.activeStyle} className="text-dark " exact to="/">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink style={this.style} activeStyle={this.activeStyle} className="text-dark" to="/contact">Contact</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink style={this.style} activeStyle={this.activeStyle} className="text-dark" to="/feedback">Give Feedback</NavLink>
                </NavItem>
              </ul>
            </Collapse>
          </Container>
        </Navbar>
      </header>
    );
  }
}
