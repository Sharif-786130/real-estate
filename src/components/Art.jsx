// components/Art.jsx

import heroImage from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";
import image5 from "../assets/image5.jpg";
import image6 from "../assets/image6.jpg";
import image7 from "../assets/image7.jpg";
import image8 from "../assets/image8.jpg";
import image9 from "../assets/image9.jpg";
import image10 from "../assets/image10.jpg";
import image11 from "../assets/image11.jpg";

const propertyImages = [image2, image3, image4, image5, image6, image7, image8, image9, image10, image11];

/** Hero image for the homepage — zooms in slightly on hover */
export const HeroArt = () => (
  <div className="overflow-hidden rounded-2xl shadow-md">
    <img
      src={heroImage}
      alt="Modern home exterior"
      className="w-full h-auto max-h-[460px] aspect-[4/5] object-cover transition-transform duration-700 ease-out hover:scale-110"
    />
  </div>
);

/** Property card image — subtle zoom on hover */
export const CardArt = ({ variant = 0 }) => (
  <img
    src={propertyImages[variant % propertyImages.length]}
    alt="Property photo"
    className="w-full h-full object-cover transition-transform duration-500 ease-out hover:scale-105"
    loading="lazy"
  />
);