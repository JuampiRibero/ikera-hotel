import React from "react";
import {
  Navbar,
  Container,
  Offcanvas,
  Nav,
  NavDropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/logo-ikera-hotel.png";
import LogoMenu from "../../assets/img/logo-ikera-menu.png";
import "./NavBar.css";

const NavBar = () => {
  return (
    <Navbar bg="light" expand="sm">
      <Container fluid>
        <Navbar.Toggle />
        <Navbar.Brand>
          <Link to="/">
            <img
              src={Logo}
              width="200"
              height=""
              className="d-inline-block align-top logo"
              alt="Logo Ikera Hotel"
              title="Logo Ikera Hotel"
              loading="lazy"
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Collapse>
          <Navbar.Offcanvas>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>
                {" "}
                <img
                  src={LogoMenu}
                  width="100"
                  height=""
                  // className="d-inline-block align-top logo"
                  alt="Logo Ikera Hotel"
                  title="Logo Ikera Hotel"
                  loading="lazy"
                />
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Link className="nav-link" to="/">
                  Home
                </Link>
                <Link className="nav-link" to="/about">
                  About
                </Link>
                <NavDropdown title="Services" id="navbarScrollingDropdown">
                  <NavDropdown.Item>
                    <Link className="nav-link" to="/rooms">
                      Rooms
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link className="nav-link" to="/restaurant">
                      Restaurant
                    </Link>
                  </NavDropdown.Item>
                </NavDropdown>
                {/* <Link className="nav-link" to="/services">Services</Link> */}
                <Link className="nav-link" to="/gallery">
                  Gallery
                </Link>
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
