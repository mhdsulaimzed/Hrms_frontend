import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

function NavbarHeader() {
  const [id, setid] = useState('');
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="/">Hamon Technologies</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            
            <NavLink className='nav-link' to="/about">About</NavLink>
            <NavLink className='nav-link' to="/news">Tech Headlines</NavLink>
            <NavDropdown  title="Employees" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/employee">All Employees</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/employee/add">
                Add Employees</NavDropdown.Item>
            </NavDropdown>
            
          </Nav>
          <Form  className="d-flex">
            <Form.Control
              type="search"
              readOnly
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button disabled variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarHeader;
