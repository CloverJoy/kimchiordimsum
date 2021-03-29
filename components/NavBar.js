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
          <Link href="/watchnew">
            <NavDropdown.Item href="/watchnew">
                Newest video
          </NavDropdown.Item>
          </Link>
          <Link href="/watchizone">
            <NavDropdown.Item href="/watchizone">
                IZ*ONE
          </NavDropdown.Item>
          </Link>
          <Link href="/watchbg">
            <NavDropdown.Item href="/watchbg">
                Boygroup
          </NavDropdown.Item>
          </Link>
          <Link href="/watchgg">
            <NavDropdown.Item href="/watchgg">
                Girlgroup
          </NavDropdown.Item>
          </Link>
          <Link href="/watchtop">
            <NavDropdown.Item href="/watchtop">
                Top 10 Videos
          </NavDropdown.Item>
          </Link>
        </NavDropdown>
      </Nav>
    </Navbar>
  )
}

export default NavBar;