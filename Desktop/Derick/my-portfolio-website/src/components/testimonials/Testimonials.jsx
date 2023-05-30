import React from 'react'
import './testimonials.css'
import IMG1 from "../../assets/default.png";

// import Swiper core and required modules
import {Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
    {
        avatar: IMG1,
        name: "Unknown",
        review: "No reviews posted yet...........................",
    },
    {
        avatar: IMG1,
        name: "Unknown",
        review: "No reviews posted yet...........................",
    },
];

const Testimonials = () => {
  return (
      <section id="testimonials">
          <h5>Review from Clients</h5>
          <h2>Testimonials</h2>

          <Swiper
              className="container testimonials_container" // install Swiper modules
              modules={[Pagination]}
              spaceBetween={40}
              slidesPerView={1}
              pagination={{ clickable: true }}
          >
              {data.map(({ avatar, name, review }, index) => {
                  return (
                      <SwiperSlide key={index} className="testimonial">
                          <div className="client_avatar">
                              <img src={avatar} alt="Avatar" />
                          </div>
                          <h5>{name}</h5>
                          <small className="client_review">{review}</small>
                      </SwiperSlide>
                  );
              })}
          </Swiper>
      </section>
  );
}

export default Testimonials