import React, { useEffect, useState } from "react";
import { LoremIpsum } from "react-lorem-ipsum";
import Loader from "../Loader/Loader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AboutImg from "../../assets/img/bg-masthead.jpg";
import "./About.css";
import {
  faBed,
  faMartiniGlass,
  faPeopleGroup,
  faPersonSwimming,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";

const About = () => {
  const [about, setAbout] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const getAbout = new Promise((res, rej) => {
      setTimeout(() => {
        res();
      }, 2000);
    });

    getAbout
      .then((res) => {
        setAbout(res);
      })
      .finally(() => setLoading(false));
  }, []);

  return loading ? (
    <h2 className="p-5 text-center">
      <Loader />
    </h2>
  ) : (
    <>
      {/* About */}
      <section class="page-section about-heading">
        <div class="container">
          <img
            class="img-fluid rounded about-heading-img mb-3 mb-lg-0"
            src={AboutImg}
            alt="..."
          />
          <div class="about-heading-content">
            <div class="row">
              <div class="col-xl-9 col-lg-10 mx-auto">
                <div class="bg-faded rounded p-5">
                  <h2 class="section-heading mb-4">
                    <span class="section-heading-upper">Who we are</span>
                    <span class="section-heading-lower">About Our Hotel</span>
                  </h2>
                  <LoremIpsum p={2} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section class="page-section" id="services">
        <div class="container px-4 px-lg-5">
          <h2 class="text-center mt-0">At Your Service</h2>
          <hr class="divider" />
          <div class="row gx-4 gx-lg-5">
            <div class="col-lg-3 col-md-6 text-center">
              <div class="mt-5">
                <div class="mb-2">
                  <FontAwesomeIcon icon={faBed} className="service-icon" />
                </div>
                <h3 class="h4 mb-2">Alojamiento</h3>
                <LoremIpsum
                  p={1}
                  avgWordsPerSentence={1}
                  className="text-muted mb-0"
                />
              </div>
            </div>
            <div class="col-lg-3 col-md-6 text-center">
              <div class="mt-5">
                <div class="mb-2">
                  <FontAwesomeIcon icon={faUtensils} className="service-icon" />
                </div>
                <h3 class="h4 mb-2">Restaurant</h3>
                <LoremIpsum
                  p={1}
                  avgWordsPerSentence={1}
                  className="text-muted mb-0"
                />
              </div>
            </div>
            <div class="col-lg-3 col-md-6 text-center">
              <div class="mt-5">
                <div class="mb-2">
                  <FontAwesomeIcon
                    icon={faMartiniGlass}
                    className="service-icon"
                  />
                </div>
                <h3 class="h4 mb-2">Bar</h3>
                <LoremIpsum
                  p={1}
                  avgWordsPerSentence={1}
                  className="text-muted mb-0"
                />
              </div>
            </div>
            <div class="col-lg-3 col-md-6 text-center">
              <div class="mt-5">
                <div class="mb-2">
                  <FontAwesomeIcon
                    icon={faPeopleGroup}
                    className="service-icon"
                  />
                </div>
                <h3 class="h4 mb-2">Sala de Reuniones</h3>
                <LoremIpsum
                  p={1}
                  avgWordsPerSentence={1}
                  className="text-muted mb-0"
                />
              </div>
            </div>
            <div class="col-lg-3 col-md-6 text-center">
              <div class="mt-5">
                <div class="mb-2">
                  <FontAwesomeIcon
                    icon={faPersonSwimming}
                    className="service-icon"
                  />
                </div>
                <h3 class="h4 mb-2">Piscina</h3>
                <LoremIpsum
                  p={1}
                  avgWordsPerSentence={1}
                  className="text-muted mb-0"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
