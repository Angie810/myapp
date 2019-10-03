import React from 'react'
import {Link } from 'react-router-dom'
import icon from '../icon home.png'
import styled from 'styled-components'
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap'

function NavbarMain(){
    return(
      
        <Navbar bg="light" variant="light">
        <Navbar.Brand href="/"><img src={icon} alt="home" width={35} height={30}/></Navbar.Brand>
        <Nav className="mr-auto">
               <Nav.Link href="/CV">CV</Nav.Link>
               <Nav.Link href="/Portfolio">Portfolio</Nav.Link>
               <Nav.Link href="/About">About</Nav.Link>
               <Nav.Link href="/Contact">Contact</Nav.Link>
         </Nav> 
           
        </Navbar>
      
        // <React.Fragment>
        //   <Navbar bg="light" variant="light">
        //   <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        //   <Nav className="mr-auto">
        //     <Nav.Link href="#home">Home</Nav.Link>
        //     <Nav.Link href="#features">Features</Nav.Link>
        //     <Nav.Link href="#pricing">Pricing</Nav.Link>
        //   </Nav>
        //   <Form inline>
        //     <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        //     <Button variant="outline-primary">Search</Button>
        //   </Form>
        // </Navbar>
        // </React.Fragment>
    );
}
export default NavbarMain;

const ButtonContainer = styled.button`
text-transformation:capitalized
`