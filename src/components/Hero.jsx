import React from "react";
import '../style/Hero.css';

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero">
      <div className="button-overlay">
        <button className="btn3" onClick={scrollToContact}>
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default Hero;


