import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

class Header extends React.Component {
  render () {
    return (
      <Navbar as="footer" style={{height: '60px'}} className="d-flex justify-content-between fixed-bottom bg-dark"><a className="text-white" href="https://github.com/celsodevelop">Celso</a><span className="d-inline-block text-white">&nbsp;© 2021</span></Navbar>
    )
  }
}

export default Header;
