import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavbarBrand from 'react-bootstrap/NavbarBrand'
import Style from '../../styles/Navbar.module.css'

const NavBar = () => {
  return (
    <Navbar variant="primary" className={Style.bg} expand="lg">
      <NavbarBrand className={Style.brand}>Kimchi or DimSum</NavbarBrand>
      <Nav className="mr-auto">
        <Nav.Link className={Style.link} href="#home">Home</Nav.Link>
        <Nav.Link className={Style.link} href="#features">Features</Nav.Link>
        <Nav.Link className={Style.link} href="#pricing">Pricing</Nav.Link>
      </Nav>
    </Navbar>
  )
}

export default NavBar;