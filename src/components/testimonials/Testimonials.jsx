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
    name: "Khanki Magi",
    review:
      "bokachoda chudir bhai chudtey galey magi chai magir garey gondho choda chudi bondho",
  },
  {
    avatar: avtr2,
    name: "Khankir chele",
    review:
      "bokachoda chudir bhai chudtey galey magi chai magir garey gondho choda chudi bondho",
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
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="" />
              </div>
              <h5 className="client_name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default testimonials;
