import React from 'react';
import {Container, Navbar, NavbarBrand } from 'reactstrap';

class TopBar extends React.Component {
  render() {
    return (
      <Navbar color="dark" dark expand="md">
        <Container>
          <NavbarBrand>
            <h2>Evergreen</h2>
          </NavbarBrand>
        </Container>
      </Navbar>
    );
  }
}

export default TopBar;