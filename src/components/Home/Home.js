import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col, CardGroup, Card, Button } from "react-bootstrap";
import { LoremIpsum } from "react-lorem-ipsum";
import Loader from "../Loader/Loader";
import About from "../../assets/img/about-our-hotel.jpg";
import AboutBg from "../../assets/img/about-our-hotel-bg-2.png";
import Room1 from "../../assets/img/room-1.jpg";
import Room2 from "../../assets/img/room-2.jpg";
import Room3 from "../../assets/img/room-3.jpg";
import Room4 from "../../assets/img/room-4.jpg";
import Restaurant from "../../assets/img/restaurant-1.jpg";
import Restaurant2 from "../../assets/img/restaurant-2.jpg";
import "./Home.css";

const Home = () => {
  const [home, setHome] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const getHome = new Promise((res, rej) => {
      setTimeout(() => {
        res();
      }, 2000);
    });

    getHome
      .then((res) => {
        setHome(res);
      })
      .finally(() => setLoading(false));
  }, []);

  return loading ? (
    <h2 className="p-5 text-center">
      <Loader />
    </h2>
  ) : (
    <>
      {/* Masthead */}
      <header class="masthead mb-5 bg-dark">
        <div class="container px-4 px-lg-5 h-100">
          <div class="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
            <div class="col-lg-8 align-self-end">
              <h1 class="text-white font-weight-bold">ikera Hotel</h1>
              <hr class="divider-masthead" />
            </div>
            <div class="col-lg-8 align-self-baseline">
              <LoremIpsum p={1} />
              <Link to="/about">
                <a class="btn btn-primary btn-xl">Find Out More</a>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Make customer Start */}
      <div class="make-customer-area customar-padding fix mx-4">
        <div class="container-fluid p-0">
          <div class="row mx-3">
            <div class="col-xl-6 col-lg-6">
              <div class="customer-img mb-120">
                <img src={About} class="customar-img1" alt=""></img>
                <img src={AboutBg} class="customar-img2" alt=""></img>
              </div>
            </div>
            <div class=" col-xl-6 col-lg-6">
              <div class="customer-caption">
                <span>About our hotel</span>
                <h2>Lorem ipsum dolor sit amet, consectetur adipisicing</h2>
                <div class="caption-details">
                  <p class="pera-dtails">
                    Lorem ipsum dolor sit amet, consectetur adipisic- ing elit,
                    sed do eiusmod tempor inc.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud.
                  </p>
                  <Link to="/about">
                    <a class="btn btn-primary btn-xl">Find Out More</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Make customer End */}

      {/* Our Rooms Start */}
      <CardGroup>
        <Row xs={1} md={4} className="mx-4 g-4">
          <Col>
            <Card>
              <Card.Img variant="top" src={Room1} />
              <Card.Body>
                <Card.Title>Room Type 1</Card.Title>
                <Card.Text>
                  <LoremIpsum p={1} avgWordsPerSentence={3} />
                </Card.Text>
                <Link to="/rooms">
                  <a class="btn btn-primary btn-xl">Find Out More</a>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={Room2} />
              <Card.Body>
                <Card.Title>Room Type 2</Card.Title>
                <Card.Text>
                  <LoremIpsum p={1} avgWordsPerSentence={3} />
                </Card.Text>
                <Link to="/rooms">
                  <a class="btn btn-primary btn-xl">Find Out More</a>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={Room3} />
              <Card.Body>
                <Card.Title>Room Type 3</Card.Title>
                <Card.Text>
                  <LoremIpsum p={1} avgWordsPerSentence={3} />
                </Card.Text>
                <Link to="/rooms">
                  <a class="btn btn-primary btn-xl">Find Out More</a>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={Room4} />
              <Card.Body>
                <Card.Title>Room Type 4</Card.Title>
                <Card.Text>
                  <LoremIpsum p={1} avgWordsPerSentence={3} />
                </Card.Text>
                <Link to="/rooms">
                  <a class="btn btn-primary btn-xl">Find Out More</a>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </CardGroup>
      {/* Our Rooms End */}

      {/* Our Restaurant Start */}
      <section class="page-section clearfix">
        <div class="container">
          <div class="intro">
            <img
              class="intro-img img-fluid mb-3 mb-lg-0 rounded"
              src={Restaurant}
              alt="..."
            />
            <div class="intro-text left-0 text-center bg-faded p-5 rounded">
              <h2 class="section-heading mb-4">
                <span class="section-heading-upper">OUR RESTURANT</span>
                <span class="section-heading-lower">Worth Drinking</span>
              </h2>
              <LoremIpsum p={1} class="mb-3" />
              <div class="intro-button mx-auto">
                <Link to="/restaurant">
                  <a class="btn btn-primary btn-xl">Find Out More</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="page-section clearfix">
        <div class="container">
          <div class="intro">
            <img
              class="intro-img2 img-fluid mb-3 mb-lg-0 rounded"
              src={Restaurant2}
              alt="..."
            />
            <div class="intro-text2 left-0 text-center bg-faded p-5 rounded">
              <h2 class="section-heading mb-4">
                <span class="section-heading-upper">OUR BAR</span>
                <span class="section-heading-lower">Worth Drinking</span>
              </h2>
              <LoremIpsum p={1} class="mb-3" />
              <div class="intro-button mx-auto">
                <Link to="/restaurant">
                  <a class="btn btn-primary btn-xl">Find Out More</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Our Restaurant End */}
    </>
  );
};

export default Home;
