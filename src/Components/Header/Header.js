import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav'
const Header = () => {
  return (
    <Navbar className="cor-primaria">
      <Navbar.Brand href="#home">Ria</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="mr-auto">
        <Nav className="justify-content-end">
          <Nav>
            <Nav.Link href="/ria-you">Ria&you</Nav.Link>
            <Nav.Link href="/news">News</Nav.Link>
            <Nav.Link href="/blog">Blog</Nav.Link>
          </Nav>
          <Nav className="mx-3">
            <Nav.Link href="/sig-in">sign in</Nav.Link>
            <span className=" nav-link separador"></span>
            <Nav.Link href="/register">Register</Nav.Link>
          </Nav>
          <Nav className="mx-3 text-center">
            <svg width="20px" height="100%" viewBox="0 0 512 512">
              <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
            </svg>
          </Nav>
        </Nav>
        
    </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
