function Footer() {
    return (
      <>
        <div className="bg-black text-gray-300">
          <div className="bg-black text-gray-300 text-center py-6">
            <h1 className="text-2xl font-bold mb-4">Get In Touch</h1>
            <p className="mb-6">Let's Work Together</p>
          </div>
  

  <div className="flex flex justify-center  items-center">
          <form className="space-y-4 justify-center">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-lg">Name</label>
              <input 
                type="text"
                id="name"
                name="name"
                className="w-96 rounded-md p-2 border border-gray-500 "
              />
            </div>
  
            <div className="space-y-2">
              <label htmlFor="email" className="block text-lg">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-96 rounded-md p-2 border border-gray-500"
              />
            </div>
  
            <div className="space-y-2">
              <label htmlFor="service" className="block text-lg">Service</label>
              <input
                type="text"
                id="service"
                name="service"
                className="w-96 rounded-md p-2 border border-gray-500"
              />
            </div>
  
            <div className="space-y-2">
              <label htmlFor="message" className="block text-lg ">Message</label>
              <textarea
                id="message"
                name="message"
                className="w-96 rounded-md p-2 border border-gray-500"
                rows="4"
              ></textarea>
            </div>
  
            <button
              type="submit"
              className="w-96 rounded-md bg-white btn-outline border-gray-300 text-black hover:bg-gray-700 text-xl mt-4 py-2"
            >
              Get In Touch
            </button>
          </form></div>




          <div className="text-gray-300 text-center sm:text-left mt-6">
  <div className="flex justify-between items-center">
    <p className="text-4xl font-bold">Let's <br />Work Together -</p>

    <div className="flex justify-end mt-4">
      <p className="rounded-md border border-gray-500 p-3 text-lg sm:text-xl hover:bg-gray-700 transition duration-300">
        roopeshkumarbxr2017@gmail.com
      </p>
    </div>
  </div>
</div>


    
  <hr className="border-t-2 border-gray-300 my-4 " />

  <div className="flex justify-between items-center p-5">
    <p>2025 All rights reserved</p>

    <div className="ml-4"> {/* Add some space to the left of the logo */}
      Logo
    </div>
  </div>


        </div>
       
       

      </>
    );
  }
  
  export default Footer;
  
  