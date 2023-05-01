import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Loader from "../Loader/Loader";
import "./Gallery.css";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
SwiperCore.use([Autoplay]);

const Gallery = () => {
  const [gallery, setGallery] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const getGallery = new Promise((res, rej) => {
      setTimeout(() => {
        res();
      }, 2000);
    });

    getGallery
      .then((res) => {
        setGallery(res);
      })
      .finally(() => setLoading(false));
  }, []);

  return loading ? (
    <h2 className="p-5 text-center">
      <Loader />
    </h2>
  ) : (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img
          className="gallery-img"
          src="https://raw.githubusercontent.com/thisFlora/lifeartco/main/src/img-home/1.Br%C3%BAjula.jpg"
          alt="Brújula"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="gallery-img"
          src="https://raw.githubusercontent.com/thisFlora/lifeartco/main/src/img-home/2.Plan.jpg"
          alt="Plan"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="gallery-img"
          src="https://raw.githubusercontent.com/thisFlora/lifeartco/main/src/img-home/3.Estrategia.jpg"
          alt="Estrategia"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="gallery-img"
          src="https://raw.githubusercontent.com/thisFlora/lifeartco/main/src/img-home/4.Equipo.JPG"
          alt="Equipo"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Gallery;
