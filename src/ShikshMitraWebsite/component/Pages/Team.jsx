



import React from "react";
import gaurav from "../../assets/images/Gaurav.jpeg";
import chhaya from "../../assets/images/Chhaya.jpeg";
import aman from "../../assets/images/amanimg.jpeg";
import anand from "../../assets/images/annadimg.jpg";
import praveen from "../../assets/images/praveenimg.jpeg";
import ajay from "../../assets/images/ajayimage.jpeg";
import badal from "../../assets/images/Badal.jpeg";
import { FaGithub,FaLinkedin } from "react-icons/fa";


const Team = () => {
  const Team1 = [
    {
      name: "Anand",
      designation: "Frontend",
      img: anand,
      des: " Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
      linkedin: "https://www.linkedin.com/in/anandkumarjaiswal/",
      github: "https://github.com/ANAND2023?tab=repositories",
      email:"anandkumar2022bth@gmail.com",
    },
    {
      name: "chhaya",
      designation: "Frontend",
      img: chhaya,
      des: " Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
      linkedin: "https://www.linkedin.com/in/anandkumarjaiswal/",
      github: "https://github.com/ChhayaSengar",
      email:"",
    },
    {
      name: "badal",
      designation: "Frontend",
      img: badal,
      des: " Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
      linkedin: "https://www.linkedin.com/in/badalkumar-singh-5577781b7",
      github: "https://github.com/BadalkumarSingh11",
      email:"dev.badalsingh@gmail.com",
    },
    
  ];
  const Team2 = [
   
    {
      name: "praveen",
      designation: "Frontend",
      img: praveen,
      des: " Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
      linkedin: "https://www.linkedin.com/in/anandkumarjaiswal/",
      github: "https://github.com/Parveen-Pal",
      email:"",
    },
    {
      name: "ajay",
      designation: "Frontend",
      img: ajay,
      des: " Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
      linkedin: "https://www.linkedin.com/in/anandkumarjaiswal/",
      github: "https://github.com/ajayraj2001",
      email:"",
    },
    {
      name: "gaurav",
      designation: "Frontend",
      img: gaurav,
      des: " Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
      linkedin: "https://www.linkedin.com/in/gourav-kumar-upadhyay-0731b41b4",
      github: "https://github.com/Poi5eN",
      email:"poi5en.here@gmail.com",
    },
    {
      name: "aman",
      designation: "Frontend",
      img: aman,
      des: " Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
      linkedin: "https://www.linkedin.com/in/anandkumarjaiswal/",
      github: "https://github.com/half-1999",
      email:"",
    },
  ];
  return (
    <>
      <div className="w-full space-y-3 pb-5 bg-[#1f2937]">
        <div className="pb-16">
          <div
            id="text"
            class="md:text-2xl text-center uppercase bg-clip-text text-transparent bg-gradient-to-r from-green-300 via-blue-500 to-[#0e7490] text-5xl font-black py-5"
          >
            OUR TEAM
          </div>
        </div>
        <div className=" md:w-[70%] mx-auto grid md:grid-cols-3 grid-cols-1 gap-2">
          {Team1.map((item, index) => (
            <div class="max-w-[280px] rounded-2xl border bg-[#263243]  text-center shadow-lg py-3">
              <img
                class="mx-auto mb-4 h-32 w-32 rounded-full shadow-lg"
                src={item.img}
                alt="profile picture"
              />
              <h1 class="text-xl font-semibold text-white">{item.name}</h1>
              <h2 class="font-semibold text-slate-500">{item.designation}</h2>
              <span class="flex justify-center gap-2">
                <a href={item.linkedin} target="_blank">
                  <FaLinkedin className="text-2xl text-[#0a66c2]"/>
                </a>
                <a href={item.github} target="_blank">
                  <FaGithub className="text-2xl text-[#0a66c2]"/>
                </a>
              </span>
              <p class="mt-5 text-sm font-normal text-white">{item.des}</p>
              <a href={`mailto:${item.email}`} target="_blank">
              <button class="mt-2 rounded-3xl border border-solid border-gray-300 px-8 py-2 font-semibold uppercase tracking-wide text-white hover:bg-cyan-700 hover:text-white">
                Contact
              </button>
              </a>
            </div>
          ))}
        </div>
        <div className=" w-[90%] mx-auto grid md:grid-cols-4 grid-cols-1 gap-4">
          {Team2.map((item, index) => (
            <div class="max-w-[280px] rounded-2xl border bg-[#263243]  text-center shadow-lg py-3">
              <img
                class="mx-auto mb-4 h-32 w-32 rounded-full shadow-lg"
                src={item.img}
                alt="profile picture"
              />
              <h1 class="text-xl font-semibold text-white">{item.name}</h1>
              <h2 class="font-semibold text-white">{item.designation}</h2>
              <span class="flex justify-center gap-2">
                <a href={item.linkedin} target="_blank">
                  <FaLinkedin className="text-2xl text-[#0a66c2]"/>
                </a>
                <a href={item.github} target="_blank">
                  <FaGithub className="text-2xl text-[#0a66c2]"/>
                </a>
              </span>
              <p class="mt-5 text-sm font-normal text-white">{item.des}</p>
              <a href={`mailto:${item.email}`} target="_blank">
             <button class="mt-2 rounded-3xl border border-solid border-gray-300 px-8 py-2 font-semibold uppercase tracking-wide text-white hover:bg-cyan-700 hover:text-white">
               Contact
              </button>
             </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Team;


