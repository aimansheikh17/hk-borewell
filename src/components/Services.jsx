import React, { useEffect, useRef } from 'react';
import drillingImg from '../images/drilling.png';
import reboringImg from '../images/reboring.png';
import flushingImg from '../images/flushing.png';
import '../style/Services.css';

const Services = () => {
  const cardsRef = useRef([]);

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

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <section id="services" className="services-section">
      <h2 className="services-heading">💧 Our Borewell Services</h2>
      <div className="services-container">
        {[drillingImg, reboringImg, flushingImg].map((img, index) => (
          <div
            key={index}
            className={`service-card card-${index + 1}`}
            ref={(el) => (cardsRef.current[index] = el)}
          >
            <img
              src={img}
              alt={
                index === 0
                  ? 'New Borewell Drilling'
                  : index === 1
                  ? 'Reboring'
                  : 'Flushing'
              }
            />
            <h3>
              {index === 0
                ? 'New Borewell Drilling'
                : index === 1
                ? 'Reboring'
                : 'Flushing'}
            </h3>
            <p>
              {index === 0
                ? 'We offer precise and efficient borewell drilling services for homes, farms, and industries using modern, high-performance equipment.'
                : index === 1
                ? 'Revive low-yield borewells with our advanced reboring techniques for improved water output.'
                : 'Enhance your borewell’s flow and water quality with our thorough flushing and cleaning solutions.'}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
