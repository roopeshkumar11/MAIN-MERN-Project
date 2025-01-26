import React from 'react';
import Card from '../Component/Card';

function WhatIDo() {
    const cardsData = [
        {
          title: "Frontend developer",
          description: "This card is for Frontend developers, focusing on HTML, CSS, JavaScript, and UI/UX.",
          imageUrl: "https://via.placeholder.com/400x200",
          buttonText: "Learn More",
        },
        {
          title: "Backend developer",
          description: "This card is for Backend developers, specializing in server-side logic, databases, and APIs.",
          imageUrl: "https://via.placeholder.com/400x200",
          buttonText: "Read More",
        },
        {
          title: "React js developer",
          description: "This card is for React.js developers, working on building interactive UIs and single-page applications.",
          imageUrl: "https://via.placeholder.com/400x200",
          buttonText: "Explore",
        },
        {
          title: "Card 1",
          description: "This is the first card with dynamic data, highlighting important features.",
          imageUrl: "https://via.placeholder.com/400x200",
          buttonText: "Learn More",
        },
        {
          title: "Card 2",
          description: "This is the second card, showcasing key details about a specific project or feature.",
          imageUrl: "https://via.placeholder.com/400x200",
          buttonText: "Read More",
        },
        {
          title: "Card 3",
          description: "This is the third card, offering insights into a particular aspect or topic.",
          imageUrl: "https://via.placeholder.com/400x200",
          buttonText: "Explore",
        },
      ];
      

  return (
    <div>
      <div className="flex justify-center items-center h-screen bg-black">
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
          {cardsData.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              description={card.description}
              imageUrl={card.imageUrl}
              buttonText={card.buttonText}
             
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default WhatIDo;
