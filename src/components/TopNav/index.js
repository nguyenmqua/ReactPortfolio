import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import styled from "styled-components"
import { Link } from 'react-router-dom';

const Font = styled.div`
  color: white;
  font-size: 20px;
`;

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);


  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
      <div>
       <Navbar className="navbar" expand="md">
        <NavbarBrand className="navbar" href="/">
          <Font> Qua Nguyen</Font>
         </NavbarBrand>
          <NavbarToggler color="primary" onClick={toggle}><i className="fas fa-tasks"></i>
          </NavbarToggler>
        <Collapse  isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
              <NavItem className="navLink">
                <Link  color="light" to="/projects"><Font>My Projects</Font></Link>
              </NavItem>
              <NavItem className="navLink">
                <Link  color="light" to="/contact"><Font>Contact Me</Font></Link>
              </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                <Font><i className="fas fa-users "></i></Font>
              </DropdownToggle>
              <DropdownMenu >   
     
                <DropdownItem>
                    <NavLink href="https://github.com/nguyenmqua"><i className="fab fa-github-square link "></i></NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="https://www.linkedin.com/in/qua-nguyen-3250891a3/"><i className="fab fa-linkedin link "></i></NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="mailto:nguyenmqua@gmail.com"><i className="fas fa-envelope-square link " ></i></NavLink>
                </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
      </div>
  );
};
export default Navigation;
