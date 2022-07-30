/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-undef */
import React from "react";
import "./Testimonials.css";
import avtr1 from "../../assets/avatar1.jpg";
import avtr2 from "../../assets/avatar2.jpg";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

const data = [
  {
    avatar: avtr1,
    name: "Bodhisatta Banerjee",
    website: "https://www.facebook.com/Baghaislive",
    title: "(FB Partner)",
    review:
      "A great guy with great skills and unique innovative ideas that have helped me a lot during my time working with him. Also a guy with on point work and in time delivery of promised work.",
  },
  {
    avatar: avtr2,
    name: "Atharv Das",
    website: "https://www.facebook.com/Atharvthegamer",
    title: "(FB Partner)",
    review: "Very jolly and energetic teammate with good editing skills.",
  },
];

const testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Reviews</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, website, title, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="" />
              </div>

              <h4 className="client_name">{name}</h4>
              <a href={website} target="_blank" className="client__website">
                <h5 className="client_title">{title}</h5>
              </a>

              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default testimonials;
