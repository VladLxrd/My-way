import React from "react";
import { Navbar,Container, Nav,  Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Styles = styled.div `
  a,  .navbar-brand, .navbar-nav .nav-link {
      color: #adb1b8;
      &:hover{
        color: white;
      }
  }
`
const Header =()=>{
    return(

<>
<Styles>
<Navbar collapseOnSelect bg="dark" expand="lg" variant="dark" style={{padding:15}}>
  <Container>
    <Navbar.Brand href="#home">VladLxrd</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link ><Link to="/">Main page</Link></Nav.Link>
        <Nav.Link><Link to="/link1">Second page</Link></Nav.Link>
      </Nav>
      <Nav>
          <Button variant="primary" >Sign in</Button>
      
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
</Styles>
</>  
    );
}
export default Header;