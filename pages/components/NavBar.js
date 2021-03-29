import Image from 'next/image'
import Link from 'next/link'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
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
        <Nav.Item>
          <Link href="/">
          <Nav.Link href="/" className={Style.link}>
            Home
          </Nav.Link>
          </Link>
        </Nav.Item>
          <NavDropdown title="Watch" className={Style.link}>
            <NavDropdown.Item>
              <Link href="/watchizone" style={{textDecoration: 'none'}}>
                IZ*ONE
              </Link>
          </NavDropdown.Item>
          <NavDropdown.Item>
              <Link href="/watchbg">
                Boygroup
              </Link>
          </NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar>
  )
}

export default NavBar;