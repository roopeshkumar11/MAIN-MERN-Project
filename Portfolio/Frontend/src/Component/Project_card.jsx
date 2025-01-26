import React from 'react';

function Project_card({ imageUrl, title, description }) {
  return (
    <div className="  rounded-lg  shadow-lg hover:scale-105 transition-transform duration-300">
      <img 
        src={imageUrl} 
        alt={title} 
        className="w-96 h-40 object-cover rounded-lg border border-gray-600" 
      />
      <h3 className="mt-4 text-xl font-semibold text-white">{title}</h3>
      <p className="mt-2 text-gray-400">{description}</p>
      <button className="mt-4 md:w-96 px-5 py-2 bg-[#4FC3F7] text-black rounded-full font-medium hover:bg-[#3BAFDA] transition">
        View Project
      </button>
    </div>
  );
}

export default Project_card;
