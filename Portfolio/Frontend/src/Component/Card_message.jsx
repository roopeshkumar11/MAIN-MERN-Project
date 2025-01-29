

import React from 'react';

function Card_message({ name, email, service, message }) {
  return (
    <div className="max-h-full  w-[100%] md:w-[80%] p-5 text-gray-300">
      <div className="rounded-lg border p-5  border-gray-600">
        <p className="md:text-xl font-bold">Name: {name}</p>
        <p className="md:text-xl font-bold">Email: {email}</p>
        <p className="md:text-xl font-bold">Service: {service}</p>
        <p className="md:text-xl font-bold">Message: {message}</p>

        <div className="mt-4 flex gap-4">
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
         
          >
            Reply Message
          </button>
          <button
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          
          >
            Delete Message
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card_message;
