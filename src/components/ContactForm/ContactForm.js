import React, { useRef, useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Loader from "../Loader/Loader";
import emailjs from "@emailjs/browser";
import env from "react-dotenv";
import "./ContactForm.css";

const ContactForm = () => {
  const [contactForm, setContactForm] = useState([]);
  const [loading, setLoading] = useState(true);

  const form = useRef();

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        env.SERVICE_ID,
        env.TEMPLATE_ID,
        e.target,
        env.TARGET
      )
      .then(
        () => {
          alert("Gracias por su consulta, nos comunicaremos a la brevedad.");
        },
        (err) => {
          alert(JSON.stringify(err));
        }
      );
    e.target.reset();
  }

  useEffect(() => {
    setLoading(true);
    const getContactForm = new Promise((res, rej) => {
      setTimeout(() => {
        res();
      }, 2000);
    });

    getContactForm
      .then((res) => {
        setContactForm(res);
      })
      .finally(() => setLoading(false));
  }, []);

  return loading ? (
    <h2 className="p-5 text-center">
      <Loader />
    </h2>
  ) : (
    <Container>
      <Row>
        <Col xs={6}>
          <div id={"contact-us"}>
            <div className="background">
              <h1>¡Dejanos tu consulta!</h1>
              <form className="form" ref={form} onSubmit={sendEmail}>
                <input
                  className="name formEntry"
                  type="text"
                  name="user_name"
                  placeholder="Nombre y Apellido"
                />
                <input
                  className="phone formEntry"
                  type="phone"
                  name="user_phone"
                  placeholder="Teléfono"
                  required
                />
                <input
                  className="email formEntry"
                  type="email"
                  name="user_email"
                  placeholder="Email"
                  required
                />
                <textarea
                  className="message formEntry"
                  name="message"
                  placeholder="Tu consulta..."
                />
                <input
                  className="submit formEntry"
                  type="submit"
                  value="Enviar"
                />
              </form>
            </div>
          </div>
        </Col>
        <Col xs={6}>
          <div>
            <iframe
              width="600"
              height="500"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=Ikera&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
            ></iframe>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactForm;
