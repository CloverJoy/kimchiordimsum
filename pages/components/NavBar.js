import Image from 'next/image'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavbarBrand from 'react-bootstrap/NavbarBrand'
import Style from '@styles/Navbar.module.css'

const NavBar = () => {
  return (
    <Navbar variant="primary" className={Style.bg} expand="lg">
      <NavbarBrand className={Style.brand}>
        <Image
          src="/kndlogo.png"
          alt="Kimchi or DimSum"
          width="70"
          height="30"
        />
      </NavbarBrand>
      <Nav className="mr-auto">
        <Nav.Link className={Style.link} href="#home">Home</Nav.Link>
        <Nav.Link className={Style.link} href="#watch">Watch</Nav.Link>
      </Nav>
    </Navbar>
  )
}

export default NavBar;