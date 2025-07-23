"use client";
import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const room1 = "/assets/resources/r1.avif";
const room2 = "/assets/resources/r2.avif";
const room3 = "/assets/resources/r3.avif";
const room4 = "/assets/resources/r4.avif";
const tb2 = "/assets/resources/tb2.avif";

import Link from "next/link";

function Hotel() {
  const rooms = [
    {
      id: 1,
      image: room1,
      title: "Green Palace",
      price: 144,
      link: "#",
    },
    {
      id: 2,
      image: room2,
      title: "Sea View Deluxe",
      price: 199,
      link: "#",
    },
    {
      id: 3,
      image: room3,
      title: "Family Room",
      price: 170,
      link: "#",
    },
    {
      id: 4,
      image: room4,
      title: "Family Room",
      price: 170,
      link: "#",
    },
  ];

  return (
    <section className="hotel-room-section position-relative">
      <div className="hotel-bg"></div>

      <div className="container text-center mb-4 heading">
        <h2 className="fs-1 text-light">
          Hotel <span>Room</span>
        </h2>
        <img src={tb2} alt="underline" className="underline-img" />
      </div>

      <div className="slider-wrapper px-3 pb-5">
        <Swiper
          modules={[Autoplay, Pagination]}
          loop={true}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          spaceBetween={20}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {rooms.map((room, index) => (
            <SwiperSlide key={index}>
              <div className="room-card bg-white shadow-sm overflow-hidden">
                <img
                  src={room.image}
                  alt={room.title}
                  className="w-100 room-img"
                  style={{ height: "230px" }}
                />

                <div className="p-3 text-center">
                  <div className="mb-2 d-flex justify-content-center">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className="mx-1"
                        style={{ color: "#77ba00" }}
                      />
                    ))}
                  </div>

                  <h6 className="fw-bold text-uppercase">{room.title}</h6>

                  <div className="d-flex justify-content-between align-items-center mt-3 px-2">
                    <span className="fs-4 fw-bold">${room.price}</span>
                    <Link href={`/booking/${room.id}`} className="text-decoration-none room-link">
                      BOOK NOW
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Hotel