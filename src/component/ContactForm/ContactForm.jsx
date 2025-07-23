import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const addressData = [
    {
        icon: <FaMapMarkerAlt size={20} />,
        title: "Address:",
        text: "121 Rain St, Melbourne 3000, Australia.",
    },
    {
        icon: <FaPhoneAlt size={20} />,
        title: "Call Us:",
        text: "+222 4444 88 999",
    },
    {
        icon: <FaEnvelope size={20} />,
        title: "Mail Us:",
        text: "Yourmail@info.com",
    },
];

const ContactForm = () => {
    return (
        <div className="container py-5 my-5">
            <div className="row d-flex justify-content-between g-4">
                {/* Column 1: Contact Form */}
                <div className="col-lg-7 col-md-7 col-12">
                    <div className="container mb-4 heading">
                        <h2 className="fs-1">
                            Contact <span>Us</span>
                        </h2>
                        <img src="/assets/resources/tb2.avif" alt="underline" className="underline-img" />
                    </div>

                    <form className="row">
                        <div className="mb-3 col-md-6 col-12">
                            <input type="text" className="form-control input-data" placeholder="Your Name*" />
                        </div>
                        <div className="mb-3 col-md-6 col-12">
                            <input type="email" className="form-control input-data" placeholder="Your Mail*" />
                        </div>
                        <div className="mb-3 col-md-6 col-12">
                            <input type="tel" className="form-control input-data" placeholder="Phone" />
                        </div>
                        <div className="mb-3 col-md-6 col-12">
                            <input type="text" className="form-control input-data" placeholder="Subject" />
                        </div>
                        <div className="mb-3">
                            <textarea className="form-control input-data" rows="5" placeholder="Your Message..."></textarea>
                        </div>
                        <button
                            className="btn text-uppercase px-5 fw-bold m-2 text-light globalBtn"

                        >
                            Submitt
                        </button>
                    </form>
                </div>

                {/* Column 2: Address Info */}
                <div className="col-lg-4 col-md-5 col-12">
                    <div className="container mb-4 heading">
                        <h2 className="fs-1">
                            Our <span>Address</span>
                        </h2>
                        <img src="/assets/resources/tb2.avif" alt="underline" className="underline-img" />
                    </div>
                    <div className="cont-address mt-5">
                        {addressData.map((item, index) => (
                            <div className="mb-4" key={index}>
                                <div className="address d-flex align-items-start gap-3">
                                    <div className="icons">{item.icon}</div>
                                    <div>
                                        <p className="mb-1 fw-bold">{item.title}</p>
                                        <p className="m-0">{item.text}</p>
                                    </div>
                                </div>
                                <hr />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
