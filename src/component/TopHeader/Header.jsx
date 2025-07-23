import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaGoogle,
  FaLinkedinIn,
  FaSkype,
} from "react-icons/fa";

export default function TopHeader() {
  return (
    <div className="top-header-wrapper">
      <div className="container top-header d-flex justify-content-between align-items-center">
        {/* Left: Contact Info */}
        <div className="d-flex flex-column flex-sm-row justify-content-center align-items-center column-gap-3">
          <div className="d-flex align-items-center">
            <FaPhoneAlt className="me-2" />
            <span className="text-light">+92 300 1234567</span>
          </div>
          <div className="d-flex align-items-center">
            <FaEnvelope className="me-2" />
            <span className="text-light">email@example.com</span>
          </div>
        </div>

        {/* Right: Social Media */}
        <div className="d-flex accounts justify-content-center align-items-center gap-3">
          <a href="#" className="text-white"><FaFacebookF /></a>
          <a href="#" className="text-white"><FaTwitter /></a>
          <a href="#" className="text-white"><FaGoogle /></a>
          <a href="#" className="text-white"><FaLinkedinIn /></a>
          <a href="#" className="text-white"><FaSkype /></a>
        </div>
      </div>
    </div>
  );
}
