import React from "react";
import "../style/Gallery.css";

const galleryItems = [
  // Images
   { type: "image", src: "/media/borewell.jpg", alt: "Machine Setup" },
  { type: "image", src: "/media/photo1.jpeg", alt: "Drilling Borewell" },
  { type: "image", src: "/media/photo2.jpeg", alt: "Machine Setup" },
  { type: "image", src: "/media/compressor.jpg", alt: "Machine Setup" },
  { type: "image", src: "/media/truck.jpg", alt: "Machine Setup" },
  

  // Videos
  { type: "video", src: "/media/borewellvideo.mp4", alt: "Drilling in Action" },
   { type: "video", src: "/media/video2.mp4", alt: "Drilling in Action" },
   { type: "video", src: "/media/video3.mp4", alt: "Drilling in Action" },
];

const Gallery = () => {
  return (
    <section className="gallery-section" id="gallery">
      <h2 className="gallery-title">Our Work - Photos & Videos</h2>
      <div className="gallery-grid">
        {galleryItems.map((item, index) => (
          <div className="gallery-item" key={index}>
            {item.type === "image" ? (
              <img src={item.src} alt={item.alt} className="gallery-media" />
            ) : (
              <video controls className="gallery-media">
                <source src={item.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
