import React from "react";
import '../style/Footer.css';
import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Address */}
        <div className="footer-section">
          <FaMapMarkerAlt className="footer-icon" />
          <h4>Address</h4>
          <p>
            Shiroor, Byndoor Tq,<br />
            Udupi dist, Karnataka - 576228
          </p>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <FaPhoneAlt className="footer-icon" />
          <h4>Contact</h4>
          <p>+91 9148726755</p>
          <p>+91 8277321786</p>
        </div>

        {/* Working Hours */}
        <div className="footer-section">
          <FaClock className="footer-icon" />
          <h4>Working Hours</h4>
          <p>Mon–Sun: 24 Hours</p>
        </div>

        {/* Logo and About */}
        <div className="footer-section about">
          <h2><span className="highlight">HK</span> Borewells</h2>
          <p>
            We're your trusted borewell experts, dedicated to consistently delivering
            exceptional drilling and maintenance services across all categories.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="footer-section links">
          <h4>Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="footer-bottom">
        <p>© 2025 HK Borewell. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
