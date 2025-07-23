'use client'
import React, { useRef } from "react";
import Swal from "sweetalert2";

const AppointmentForm = () => {
  const formRef = useRef(null); // reference for resetting form

  const handleSubmit = (e) => {
    e.preventDefault();

    // SweetAlert success message
    Swal.fire({
      title: "Appointment Booked!",
      text: "Your appointment has been successfully submitted.",
      icon: "success",
      confirmButtonColor: "#77ba00",
      confirmButtonText: "OK",
    }).then(() => {
      formRef.current.reset(); // clear form after confirmation
    });
  };

  return (
    <section className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fs-1 fw-bold">
            Make An <span>Appointment</span>
          </h2>
          <p className="text-muted">
            Please fill out the form to book your appointment with us.
          </p>
        </div>
        <form
          ref={formRef}
          className="row g-4 justify-content-center"
          onSubmit={handleSubmit}
        >
          <div className="col-md-6">
            <input
              type="text"
              className="form-control input-data"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="col-md-6">
            <input
              type="email"
              className="form-control input-data"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Check-in Date</label>
            <input
              type="date"
              className="form-control input-data"
              required
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Check-out Date</label>
            <input
              type="date"
              className="form-control input-data"
              required
            />
          </div>
          <div className="col-12">
            <textarea
              className="form-control input-data"
              rows="5"
              placeholder="Message"
              required
            ></textarea>
          </div>
          <div className="col-12 text-center">
            <button
              type="submit"
              className="btn text-uppercase px-4 fw-bold mt-2 text-light globalBtn"
            >
              Submitt
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AppointmentForm;
