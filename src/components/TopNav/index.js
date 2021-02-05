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
        <NavbarBrand href="/">
          <Font> Qua Nguyen</Font>
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/projects"><Font>My Project</Font></NavLink>
              </NavItem>
              <NavItem>
                <NavLink  href="/contact"><Font>Contact Me</Font></NavLink>
              </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                <Font><i className="fas fa-users"></i></Font>
              </DropdownToggle>
              <DropdownMenu >   
                  <>     
                <DropdownItem>
                    <NavLink href="https://github.com/nguyenmqua"><i className="fab fa-github-square"></i></NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="https://www.linkedin.com/in/qua-nguyen-3250891a3/"><i className="fab fa-linkedin"></i></NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="mailto:nguyenmqua@gmail.com"><i className="fa fa-envelope" ></i></NavLink>
                </DropdownItem>
                    </>
                </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
      </div>
  );
};
export default Navigation;
