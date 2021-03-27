import Image from 'next/image'
import Link from 'next/link'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavbarBrand from 'react-bootstrap/NavbarBrand'
import Style from '@styles/Navbar.module.css'

const NavBar = () => {
  return (
    <Navbar variant="primary" className={Style.bg} expand="lg">
      <NavbarBrand className={Style.brand}>
        <Link href='/'>
        <Image
          src="/kndlogo.png"
          alt="Kimchi or DimSum"
          width="70"
          height="30"
          className={Style.pointer}
        />
        </Link>
      </NavbarBrand>
      <Nav className="mr-auto">
        <Nav.Link className={Style.link}>
          <Link href="/">
          Home
          </Link>
        </Nav.Link>
        <Nav.Link className={Style.link}>
          <Link href="/watch">
          Watch
          </Link>
        </Nav.Link>
      </Nav>
    </Navbar>
  )
}

export default NavBar;