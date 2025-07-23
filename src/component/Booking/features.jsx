import React from "react";
import { FaCheck } from "react-icons/fa";

const features = [
  "Master Bed",
  "Sea View Balcony",
  "Air Conditioned",
  "Free Wi-Fi",
  "Car Parking",
  "Private Bathroom",
  "Swimming Pool Access",
];

const rooms = [
  {
    id: "1",
    image: "/assets/resources/r1.avif",
    title: "Green Palace",
    description: "Experience luxury and comfort with our Green Palace room...",
  },
  {
    id: "2",
    image: "/assets/resources/r2.avif",
    title: "Sea View Deluxe",
    description:
      "Experience luxury and comfort with our deluxe sea view rooms...",
  },
  {
    id: "3",
    image: "/assets/resources/r3.avif",
    title: "Family Room",
    description: "Experience luxury and comfort with our Family Room...",
  },
  {
    id: "4",
    image: "/assets/resources/r4.avif",
    title: "Family Room",
    description: "Experience luxury and comfort with our Family Room...",
  },
];

export default function BookingSection({ roomId }) {
 const room = rooms.find((r) => Number(r.id) === Number(roomId));



  if (!room) {
    return <p>Room not found</p>;
  }

  return (
    <section className="py-5 bg-light booking-features">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-6">
            <img src={room.image} alt={room.title} className="img-fluid" />
          </div>

          <div className="col-12 col-md-6">
            <div className="container mb-4 heading">
              <h2 className="fs-1">
                {room.title} <span>Room</span>
              </h2>
              <img
                src="/assets/resources/tb2.avif"
                alt="underline"
                className="underline-img"
              />
            </div>
            <p className="text-muted">{room.description}</p>
            <ul className="list-unstyled mb-4">
              {features.map((item, i) => (
                <li key={i} className="mb-2 d-flex align-items-center">
                  <FaCheck className="me-2 check" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
