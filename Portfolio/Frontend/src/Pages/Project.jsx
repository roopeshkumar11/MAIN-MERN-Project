import React from 'react';
import Project_card from '../Component/Project_card';

function Project() {
  const data = [
    {
      imageUrl: "/pic1.jpeg",
      title: "JustThought",
      description: "A platform to share your random thoughts.",
    },
    {
      imageUrl: "/pic2.jpeg",
      title: "My Second Project",
      description: "This is another cool project I worked on.",
    },

    {
      imageUrl: "/pic2.jpeg",
      title: "My Second Project",
      description: "This is another cool project I worked on.",
    }
  ];

  return (
    <div className="bg-black px-4 ">
      <div className="text-center">
        <p className="text-4xl font-bold mb-4 text-gray-300">Projects</p>
        <p className="text-xl  text-[#4FC3F7]">Some of my work</p>
      </div>
      <div className="flex justify-center items-center min-h-screen">
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 py-10">
        {data.map((project, index) => (
          <Project_card  
            key={index}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
          />
        ))}
      </div>
    </div>
    </div>
  );
}

export default Project;
