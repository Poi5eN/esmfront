import React from 'react';
// import Header from './component/Navbar/Header';

import Community from './component/Community/Community';
// import Banner from './component/Banner/Banner';
import Card from './component/Card/Card';
import ContactForm from './component/ContactForm/ContactForm';

import Testimonial from './component/Testimonial/Testimonial';
import Carousel from './component/Carousel/Carousel';
// import Header  from './component/Navbar/Header';
import Footer from './component/Footer/Footer'
import Banner from './component/Banner/Banner'
import { Outlet } from 'react-router-dom';
import Nav from './component/Navbar/Nav';
import av from '../ShikshMitraWebsite/component/Gsap/Navbar/Nav'

function LandingPage() {
  return (
    <div className=" overflow-x-hidden">
      
      <Nav/>
     
      <Outlet/>
      <Footer/>
    </div>
  );
}
export default LandingPage;
