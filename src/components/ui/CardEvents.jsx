import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const CardForEvents = ({ title, description, imageSrc }) => {
  const [isHovered, setHovered] = useState(false);

  return (
    <div
      className="card-container w-65 mx-4 my-8 relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={`card border border-gray-300 shadow-md transition-shadow transform ${isHovered ? 'scale-105 opacity-85' : ''}`}>
        <div className="overflow-hidden relative flex items-center justify-center">
          <div className="inner-card border border-gray-300 p-4">
            <img
              className="w-full h-full"
              src={imageSrc}
              alt="Event"
            />
          </div>
          <div className={`absolute bottom-2 left-3 p-4 transform ${isHovered ? '-translate-y-56' : 'translate-y-0'} transition-transform duration-1000 ease-in-out ${isHovered ? 'hover:shadow-lg' : ''}`}>
            <div className={`text-white text-m font-medium font-azonix `}>
              {title}
            </div>
          </div>
          <div className={`absolute bottom-0 left-3 p-4 transform ${isHovered ? '-translate-y-36 opacity-100' : 'translate-y-0 opacity-0'} transition-transform duration-1000 ease-in-out ${isHovered ? 'hover:shadow-lg' : ''}`}>
            <p className={`text-white mt-2 font-medium text-xs`}>{description}</p>
          </div>
          <div className={`absolute bottom-0 left-3 p-2 transform ${isHovered ? '-translate-y-12 opacity-100' : 'translate-y-0 opacity-0'} transition-transform duration-1000 ease-in-out`}>
            <div className="bg-transparent border border-white transition-colors duration-300 hover:bg-white p-2 hover:text-black text-white">
              <div className="text-xs">Register Now</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

CardForEvents.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
};
