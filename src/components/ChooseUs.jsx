import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../style/ChooseUs.css';

const ChooseUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, // animation happens only once when scrolled into view
    });
  }, []);

  return (
    <section className="choose-us-section">
      <h2 className="choose-title">Why Choose Us</h2>
      <h3 className="choose-subtitle">Three Steps for a Reliable Working Process</h3>

      <div className="choose-us-container">
        <div className="choose-card" data-aos="fade-right">
          <img src="https://cdn-icons-png.flaticon.com/512/1995/1995465.png" alt="Equipment" />
          <h4>CAPABILITIES & EQUIPMENT</h4>
          <p>
            Our rigs and vehicles are well maintained to offer productive service in the most competitive drilling field.
          </p>
        </div>

        <div className="choose-card" data-aos="fade-up">
          <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Services" />
          <h4>GUARANTEE SERVICES</h4>
          <p>
            Delivering expert Borewell Drilling, Reboring, and Flushing services across Shiror. We guarantee precision, quality, and dependable water access with every project.
          </p>
        </div>

        <div className="choose-card" data-aos="fade-left">
          <img src="https://cdn-icons-png.flaticon.com/512/2983/2983067.png" alt="Team" />
          <h4>OUR TEAM</h4>
          <p>
            We value our staff. This is one of the quality measures of our company. Communication with our team ensures clarity and trust.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;

