import React from "react";
export default function BookingForm() {
  return (
    <section className="py-5 bg-white bookingForm">
      <div className="container">
        <div className="container text-center mb-4 heading">
          <h4 className="fs-1">
            Book <span>Your Room</span>
          </h4>
          <img src="/assets/resources/tb2.avif" alt="underline" className="underline-img" />
        </div>
        <form className="row g-4">
          {/* Name */}
          <div className="col-md-6">
            <input
              type="text"
              className="form-control input-data"
              placeholder="Your Name"
              required
            />
          </div>

          {/* Email */}
          <div className="col-md-6">
            <input
              type="email"
              className="form-control input-data"
              placeholder="Your Email"
              required
            />
          </div>

          {/* Phone */}
          <div className="col-md-6">
            <input
              type="tel"
              className="form-control input-data"
              placeholder="Your Phone Number"
              required
            />
          </div>

          {/* Adults */}
          <div className="col-md-3">
            <select className="form-select" required>
              <option value="">Childs</option>
              {[...Array(6)].map((_, i) => (
                <option key={i} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
          </div>

          {/* Children */}
          <div className="col-md-3">
            <select className="form-select">
              <option value="">Adults</option>
              {[...Array(6)].map((_, i) => (
                <option key={i} value={i}>
                  {i}
                </option>
              ))}
            </select>
          </div>

          {/* Check-in */}
          <div className="col-md-6">
            <label htmlFor="check-in">Check In</label>
            <input type="date" className="form-control mt-2 input-data" id="check-in" required />
          </div>

          {/* Check-out */}
          <div className="col-md-6">
            <label htmlFor="check-out">Check Out</label>
            <input type="date" className="form-control mt-2 input-data" id="check-out" required />
          </div>

          {/* Special Requests */}
          <div className="col-12">
            <textarea
              rows="4"
              className="form-control input-data"
              placeholder="Message..."
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="col-12 text-center mt-5">
            <button type="submit" className="globalBtn text-light fw-bold">
              Confirm Booking
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
