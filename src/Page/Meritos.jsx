import React from "react";

const Meritos = ()=> {
  const goBack = () => {
    window.history.back();
  };

  return (
    <div>
      <button
        className="absolute top-4 left-4 bg-green-500 text-white p-6 shadow-lg rounded-full hover:bg-green-600 hover:scale-105 transition duration-300 ease-in-out"
        onClick={goBack}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>
      <div className="text-center mt-10">
        <h2 className=" bg-green-600 inline-block mt-10 backdrop-blur-lg rounded-lg px-4 py-10 text-white text-5xl font-bold sm:text-5xl m-2 text-center">
          Desarrolladores DeliciousCk
        </h2>
      </div>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-18 mx-auto m-10 py-20">
          <div class="flex flex-wrap -m-4">
           
            <div class="lg:w-1/3 lg:mb-0 p-4">
              <div class="h-full text-center">
              <img
                  alt="testimonial"
                  class="w-40 h-40 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="https://cdn-icons-png.flaticon.com/512/6073/6073873.png" 
                ></img>
                <p class="leading-relaxed">
                <span class="inline-block h-1 w-10 rounded bg-green-500 mt-6 mb-4"></span>  
                </p>
                <h2 class="text-gray-900 font-medium title-font tracking-wider text-xl">
                  Jennifer castaño ledesma
                </h2>
                <p class="text-gray-500">Scrum Master</p>
              </div>
            </div>
            
            <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div class="h-full text-center">
              <img
                  alt="testimonial"
                  class="w-40 h-40 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="https://cdn-icons-png.flaticon.com/512/6073/6073873.png" 
                ></img>
                <p class="leading-relaxed">
                <span class="inline-block h-1 w-10 rounded bg-green-500 mt-6 mb-4"></span>
                </p>
               
                <h2 class="text-gray-900 font-medium title-font tracking-wider text-xl">
                  Kevin andres acosta
                </h2>
                <p class="text-gray-500">Developer Team</p>
              </div>
            </div>
            
            <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div class="h-full text-center">
              <img
                  alt="testimonial"
                  class="w-40 h-40 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="https://cdn-icons-png.flaticon.com/512/6073/6073873.png" 
                ></img>
                <p class="leading-relaxed">
                <span class="inline-block h-1 w-10 rounded bg-green-500 mt-6 mb-4"></span>
                </p>
                <h2 class="text-gray-900 font-medium title-font tracking-wider text-xl">
                  Mónica andrea cifuentes
                </h2>
                <p class="text-gray-500">Product Owner</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Meritos;