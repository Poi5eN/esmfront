
import React from "react";
import gif from '../../assets/E_ShikshaMitra.gif'
function Home() {
  return (
    <>
      <div className="min-h-screen bg-red-400 flex flex-col justify-center items-center relative"
      //  data-scroll data-scroll-section data-scroll-speed="-.2"
      //  data-scroll data-scroll-section data-scroll-speed="-.6"
      //  data-scroll-delay="100"
      >
        {/* <video
          className="absolute inset-0 w-full h-full object-cover object-center"
          autoPlay
          loop
          muted
        >
          <source src={gif} type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
        
      <img
        className="absolute inset-0 w-full h-full object-cover object-center"
        src={gif}
        alt="E_ShikshaMitra"
      />
     
       <div
        //  data-scroll data-scroll-section data-scroll-speed="-.5"
       >
       {/* <div className="flex flex-col justify-center items-center z-10 text-center"
         data-scroll data-scroll-section data-scroll-speed=".2"
      
        >
          <h1 className="text-5xl text-white font-bold mb-8">
            Your Heading Text Here
          </h1>
          <p className="text-white text-lg mb-4">Your paragraph text here.</p>
        
        </div> */}
       </div>
      </div>
    </>
  );
}

export default Home;
