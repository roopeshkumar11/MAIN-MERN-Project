// // Card.js
// import React from 'react';

// const Card = ({ title, description, imageUrl, buttonText }) => {
//   return (
//     <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray">
//       <img className="w-full" src={imageUrl} alt="Card" />
//       <div className="px-6 py-4">
//         <div className="font-bold text-xl mb-2">{title}</div>
//         <p className="text-gray-700 text-base">{description}</p>
//       </div>
//       <div className="px-6 pt-4 pb-2">
//         <button className="bg-blue-500 text-white px-4 py-2 rounded">
//           {buttonText}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Card;


import React from 'react';

function Card({ title, description, imageUrl, buttonText }) {
  return (
    <div 
      style={{ backgroundColor: 'rgba(36, 32, 32, 1)' }} // Apply the rgba color directly here
      className="w-96 p-4 rounded-lg shadow-lg text-white" // Decreased width to w-64
    >
      <img src={imageUrl} alt={title} className="w-48 h-28 object-cover rounded-md" />
      <h3 className="mt-4 text-xl font-semibold">{title}</h3>
      <p className="mt-2">{description}</p>
      <button className="mt-4 px-4 py-2 bg-white text-black rounded-md">{buttonText}</button>
    </div>
  );
}

export default Card;
