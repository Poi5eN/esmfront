import React from "react";
import Banner from "../Banner/Banner";
import Carousel from "../Carousel/Carousel";
import Community from "../Community/Community";
import Testimonial from "../Testimonial/Testimonial";
import ContactForm from "../ContactForm/ContactForm";
import Card from "../Card/Card";
import Ourwork from "../Gsap/Ourworks/Ourwork";


const Home = () => {
  return (
    <div className="bg-[#1f2937]">
      {/* <Banner /> */}
      <Card />
      <Ourwork />
      
      <Community />
      <Testimonial />
     
      <ContactForm />
    </div>
  );
};

export default Home;
