import React from 'react'
import { Button, Form, Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';



function NavBar() {
  return (
    <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
      <Container>
        <Navbar.Brand href='/'>June Lake Loop</Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='me-5'>
            <Nav.Link className='text-uppercase' href='/lodging'>lodging</Nav.Link>
            <Nav.Link className='text-uppercase' href='/'>Things to do</Nav.Link>
            <Nav.Link className='text-uppercase' href='/'>Shopping</Nav.Link>
            <Nav.Link className='text-uppercase' href='/'>Events</Nav.Link>
            <Nav.Link className='text-uppercase' href='/'>Restaurnts</Nav.Link>
            <Nav.Link className='text-uppercase' href='/'>Special Offers</Nav.Link>
            <Nav.Link className='text-uppercase' href='/'>Blog</Nav.Link>
          </Nav>
          <Form className='d-flex end-0'>
            <Form.Control 
              type='search'
              placeholder='Search'
              className='me-2'
              aria-label='Search'
            />
            <Button variant='outline-success'>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar