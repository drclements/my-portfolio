import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Resume from "../assets/resume/Resume.docx"
import styled from 'styled-components';

const SocialDiv = styled.div`
  display: none;
    @media (max-width: 550px) {
      display: flex;
      position: fixed;
      bottom: 35px;
      padding: 10px;
    }
`

const SocialLinks = styled.a`
    margin: 0 10px;
    color: white;
    padding: 20px;
    border-radius: 5px;
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
                  Portfolio
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
                <SocialDiv>
                  <SocialLinks style={{background:"#1DA1F2"}} href="https://www.linkedin.com/in/daniel-clements-codes/" target="_blank"
                  rel="noreferrer">
                    <i class="fab fa-linkedin-in"></i>
                  </SocialLinks>
                  <SocialLinks style={{background:"#333"}} href="https://github.com/drclements" target="_blank" rel="noreferrer">
                    <i class="fa-brands fa-github"></i>
                  </SocialLinks>
                  <SocialLinks style={{background:"#E1306C"}} href="https://www.instagram.com/drclements/?hl=en" target="_blank" rel="noreferrer">
                    <i class="fab fa-instagram"></i>
                  </SocialLinks>
                  <SocialLinks style={{background:"#2867B2"}} href="mailto:drclementslu@gmail.com" target="_blank" rel="noreferrer">
                    <i class="fa-solid fa-envelope"></i>
                  </SocialLinks>
                </SocialDiv>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  )
}

export default Header

