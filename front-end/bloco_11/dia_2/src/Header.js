import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

class Header extends React.Component {
  render () {
    return (
      <Navbar style={{height: '80px'}} className="fixed-top bg-dark justify-content-md-center">
        <Navbar.Brand>
          <img style={{height: '60px' }} src="/img/Pokedex_logo.png" alt="Logo Pokedex"/>
        </Navbar.Brand>
      </Navbar>

    )
  }
}

export default Header;
