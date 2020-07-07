import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Button, Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
          <Navbar bg="primary" variant="dark">
    <Navbar.Brand href="#home">Home</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#Bio">Bio</Nav.Link>
      <Nav.Link href="#features">Projects</Nav.Link>
      <Nav.Link href="#pricing">Resume</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-light">Search</Button>
    </Form>
  </Navbar>
    
  
      <h1>Welcome to Jordans Porfolio</h1>
   <Button variant="primary">Primary</Button>{' '}
    </div>
  );
}

export default App;
