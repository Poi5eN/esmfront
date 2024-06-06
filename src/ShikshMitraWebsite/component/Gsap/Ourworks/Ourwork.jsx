import React, { useRef } from "react";
import "./Ourwork.css";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import vid1 from '../../../assets/2759477-uhd_3840_2160_30fps.mp4'

gsap.registerPlugin(useGSAP,ScrollTrigger)

const Ourwork = () => {
const box=useRef()

  useGSAP(()=>{

    let t17=gsap.timeline({
      scrollTrigger:{
        trigger:".part-7",
      
        start:"50% 50%",
        end:"300% 50%",
        pin:true,
        scrub:1,

      }
    });
    t17.to("#demo",{
      bottom:"7%"

    });
    t17.to(".our-work-text-div",{
      height:"70vh",
      // height:"60vh",
    },"height")
    t17.to(".our-work-txt",{
      height:"70vh",
      // height:"60vh",

    },"height");

    t17.to("#our",{
      left:"0%",
    },'height');

    t17.to("#work",{
      position:"absolute",
      right:"-130%",
      button:"0%"
    },'height');

    t17.to(".scroll-img",{
      marginTop:"-250%",
      // marginTop:"-300%",
    },'height');

  },{scope:box})

  return (
    <>
      <div className="w-[100%] min-h-[100vh] bg-[#1f2937] " ref={box}
      
      // data-scroll data-scroll-section data-scroll-speed=".3"
      >
      <div className="part-7 bg-[#1f2937] ">
        <div className="our-work-txt">
          <h1 id="our">Our</h1>
          <h1 id="work">Work</h1>
        </div>
        <div className="our-work-text-div">
          <div className="scroll-work">
            <div className="scroll-img">
            <video
          className="absolute inset-0 w-full h-full object-cover object-center"
          autoPlay
          loop
          muted
        >
          <source src={vid1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
              {/* <img src="https://images.unsplash.com/photo-1712839398257-8f7ee9127998?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8" alt="" />
              <img src="https://images.unsplash.com/photo-1712781797301-ec9ee12b52b4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8" alt="" />
              <img src="https://images.unsplash.com/photo-1712277851184-fe23844036ab?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8" alt="" />
              <img src="https://images.unsplash.com/photo-1712277851184-fe23844036ab?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8" alt="" />
              <img src="https://images.unsplash.com/photo-1712277851184-fe23844036ab?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8" alt="" />
              <img src="https://images.unsplash.com/photo-1712277851184-fe23844036ab?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8" alt="" /> */}
             
            </div>
          </div>
        </div>
        <button id="demo"> DEMO</button>
      </div>
        </div>
    </>
  );
};

export default Ourwork;
