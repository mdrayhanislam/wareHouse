import { signOut } from 'firebase/auth';
import React from 'react';
import { ButtonToolbar, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  }
    return (
        <nav>

 <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
  <Navbar.Brand  as={Link} to="home">Rayhan</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link as={Link} to="home">Home</Nav.Link>
      <Nav.Link as={Link} to="blogs">Blogs</Nav.Link>
      
    </Nav>
    <Nav>
      { user && <>
      <Nav.Link as={Link} to="addservice">Add Item</Nav.Link>
      <Nav.Link as={Link} to="manageitems">Manage Items</Nav.Link>
         </>
      }
     {
        user?
        <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}> Log Out</button>
        :
      <Nav.Link eventKey={2} as={Link} to="login">
       Login
      </Nav.Link>
      }

    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>

        </nav>
    );
};

export default Header;