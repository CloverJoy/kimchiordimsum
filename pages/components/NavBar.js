import Image from 'next/image'
import Link from 'next/link'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavbarBrand from 'react-bootstrap/NavbarBrand'
import Style from '@styles/Navbar.module.css'

const NavBar = () => {
  return (
    <Navbar variant="primary" className={Style.bg} expand="lg">
      <NavbarBrand className={Style.brand} href="/">
        <Image
          src="/kndlogo.png"
          alt="Kimchi or DimSum"
          width="70"
          height="30"
        />
      </NavbarBrand>
      <Nav className="mr-auto">
          <Link href="/">
          <Nav.Link href="/" className={Style.link}>
            Home
          </Nav.Link>
          </Link>
          <Link href="/watch">
          <Nav.Link href="/watch" className={Style.link}>
          Watch
          </Nav.Link>
          </Link>
      </Nav>
    </Navbar>
  )
}

export default NavBar;