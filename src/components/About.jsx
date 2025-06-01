import React, { useEffect, useRef } from 'react';
import '../style/About.css';
import truckImage from '../images/Truck.png';

const About = () => {
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.2 }
    );

    if (imageRef.current) observer.observe(imageRef.current);
    if (textRef.current) observer.observe(textRef.current);

    return () => {
      if (imageRef.current) observer.unobserve(imageRef.current);
      if (textRef.current) observer.unobserve(textRef.current);
    };
  }, []);

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-image" ref={imageRef}>
          <img src={truckImage} alt="Borewell Truck" />
        </div>
        <div className="about-text" ref={textRef}>
          <h1>About Us</h1>
          <h2>Over 20 Years Leading in Borewell Solutions</h2>
          <p>
            With decades of hands-on experience and a strong reputation across the region, HK Borewell is your trusted partner for all groundwater and borewell solutions.
            We specialize in New Borewell Drilling, Re-bore Services, and Bore Flushing, delivering unmatched precision and reliability.
          </p>
          <p>
            Our team uses state-of-the-art equipment and in-depth geological knowledge to ensure optimal water yield and long-lasting results.
            Whether you're drilling a new borewell or reviving an old one, we provide tailored solutions with professionalism and integrity.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

