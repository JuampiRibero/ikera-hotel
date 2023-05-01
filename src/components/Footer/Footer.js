import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import LogoFooter from "../../assets/img/logo-ikera-hotel-footer.png";
import "./Footer.css";

const Footer = () => {
  return (
    <Container fluid className="footer">
      <Row className="text-center py-4 pl-md-3 pr-md-3">
        <Col xs={12} lg={3}>
          <ul>
            <li>
              <Link to="/">
                <img
                  src={LogoFooter}
                  width="125"
                  height=""
                  className="d-inline-block align-top mx-3 mb-3"
                  alt="Logo Ikera Hotel"
                  title="Logo Ikera Hotel"
                  loading="lazy"
                />
              </Link>
            </li>
            <li className="footer-social footer-social2">
              <Link to="/" target="_blank">
                <FontAwesomeIcon icon={faInstagram} />
              </Link>
              <Link to="/" target="_blank">
                <FontAwesomeIcon icon={faFacebook} />
              </Link>
              <Link to="/" target="_blank">
                <FontAwesomeIcon icon={faLinkedin} />
              </Link>
            </li>
          </ul>
        </Col>
        <Col xs={12} lg={3} className="footer-text">
          <h4 className="footer-tittle">Quick Links</h4>
          <ul>
            <li>
              <Link to="/" className="footer-item">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link to="/about" className="footer-item">
                <a>About</a>
              </Link>
            </li>
            <li>
              <Link to="/rooms" className="footer-item">
                <a>Rooms</a>
              </Link>
            </li>
            <li>
              <Link to="/restaurant" className="footer-item">
                <a>Restaurant</a>
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="footer-item">
                <a>Gallery</a>
              </Link>
            </li>
            <li>
              <Link to="/contact" className="footer-item">
                <a>Contact</a>
              </Link>
            </li>
          </ul>
        </Col>
        <Col xs={12} lg={3} className="footer-text">
          <h4 className="footer-tittle">Reservations</h4>
          <ul>
            <li>
              <a>Tel: 3534847240</a>
            </li>
            <li>
              <a>ikerahotel@gmail.com</a>
            </li>
          </ul>
        </Col>
        <Col xs={12} lg={3}>
          <h4 className="footer-tittle">Our Location</h4>
          <ul>
            <li>
              <a>Blvd. Moreno 922,</a>
            </li>
            <li>
              <a>Hernando, Córdoba, Argentina</a>
            </li>
          </ul>
        </Col>
        <Col xs={12} className="mt-4 divider"></Col>
        <Col xs={12} className="mt-4">
          2022 © Ikera Hotel. Todos los derechos reservados.
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
