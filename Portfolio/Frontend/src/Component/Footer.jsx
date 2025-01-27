import { FaGithub, FaFacebook, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <div className="bg-black text-gray-300 px-6 py-10">
      {/* Contact Section */}
      <div className="text-center md:text-left">
        <h1 className=" text-center text-4xl font-bold mb-2">Get In Touch</h1>
        <p className=" text-center mb-6">Let's Work Together</p>
      </div>

      {/* Form Section */}
      <div className="flex justify-center">
        <form className="w-full max-w-lg space-y-4">
          <div>
            <label htmlFor="name" className="block text-lg">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full rounded-md p-2 border border-gray-500 bg-black text-white"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-lg">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full rounded-md p-2 border border-gray-500 bg-black text-white"
            />
          </div>

          <div>
            <label htmlFor="service" className="block text-lg">Service</label>
            <input
              type="text"
              id="service"
              name="service"
              className="w-full rounded-md p-2 border border-gray-500 bg-black text-white"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-lg">Message</label>
            <textarea
              id="message"
              name="message"
              className="w-full rounded-md p-2 border border-gray-500 bg-black text-white"
              rows="4"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-white border border-gray-300 text-black hover:bg-gray-700 hover:text-white text-xl mt-2 py-2 transition duration-300"
          >
            Get In Touch
          </button>
        </form>
      </div>

      {/* Contact Info Section */}
      <div className="mt-10">
        <div className="text-center md:flex md:justify-between md:items-center">
          <p className="text-3xl font-bold mb-4 md:mb-0">
            Let's <br className="md:hidden" />
            Work Together -
          </p>

          <div className="mt-4 md:mt-0">
            <p className="rounded-md border border-gray-500 p-2 md:p-3 text-sm md:text-sm hover:bg-gray-700 transition duration-300 cursor-pointer">
              roopeshkumarbxr2017@gmail.com
            </p>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <hr className="border-t-2 border-gray-300 my-6" />

      <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <p>2025 All rights reserved</p>
        <div className="mt-2 md:mt-0"><div className="flex gap-6">
      <a href="https://github.com/roopeshkumar11/" target="_blank" rel="noopener noreferrer">
        <FaGithub className="text-2xl text-gray-300 hover:text-gray-500 transition duration-300" />
      </a>
      <a href="https://www.linkedin.com/in/roopeshkumar11/" target="_blank" rel="noopener noreferrer">
        <FaFacebook className="text-2xl text-gray-300 hover:text-blue-600 transition duration-300" />
      </a>
      <a href="https://www.linkedin.com/in/roopeshkumar11/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="text-2xl text-gray-300 hover:text-blue-700 transition duration-300" />
      </a>
    </div></div>
      </div>
    </div>
  );
}

export default Footer;
