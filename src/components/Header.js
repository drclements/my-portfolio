import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styled from 'styled-components';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Resume from "../assets/resume/resume.pdf"

const NavUl = styled.ul`

`

const NavLi = styled.li`
`

const Header = () => {
  return (
    <>
      <Navbar width="100vh" collapseOnSelect  variant="dark" bg="dark" expand="lg" sticky="top" className="mb-2">
        <Container fluid>
        <h1 style={{color:"white"}} className="font-face-pr">Daniel Clements</h1>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-lg`}
              aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/">H O M E</Nav.Link>
                  <Nav.Link href="/#nature">N A T U R E</Nav.Link>
                  <Nav.Link href="/#about">A B O U T</Nav.Link>
                  <Nav.Link href="/#projects">P R O J E C T S</Nav.Link>
                  <Nav.Link download="Daniel Clements Technical Resume" href={Resume}>R E S U M E</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
      

        </Container>
      </Navbar>
    </>
  )
}

export default Header

{/* <Nav.Link href="/">H O M E</Nav.Link>
  
  <Nav.Link href="/#about">A B O U T</Nav.Link>
  <Nav.Link href="/#projects">P R O J E C T S</Nav.Link> */}