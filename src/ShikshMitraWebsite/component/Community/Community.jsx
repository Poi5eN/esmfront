import React from "react";
import "./Community.css";
import { ScrollSmoother } from "gsap-trial/ScrollSmoother";
import { MorphSVGPlugin } from "gsap-trial/MorphSVGPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap-trial";

const Community = () => {
  gsap.registerPlugin(ScrollTrigger, MorphSVGPlugin);

  React.useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const horizontalSections = gsap.utils.toArray(".horizontal-section");

      gsap.to(horizontalSections, {
        xPercent: -100 * (horizontalSections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: "#container",
          pin: true,
          scrub: 1,
          snap: 1 / (horizontalSections.length - 1),
          end: () => "+=" + document.querySelector("#container").offsetWidth,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className=" bg-[#1f2937]">
        <div className="py-16">
          <div
            id="text"
            class="md:text-2xl text-center uppercase bg-clip-text text-transparent bg-gradient-to-r from-green-300 via-blue-500 to-[#0e7490] text-5xl font-black py-5"
          >
            OUR COMMUNITY!
          </div>
          <div
            id="text"
            class="md:text-sm text-center uppercase bg-clip-text    text-white"
          >
            Nurturing minds, shaping futures, and building a brighter tomorrow
            together.
          </div>
        </div>
      </div>
      <main id="container">
        {/* ---------- section 01 ---------- */}
        <section className="horizontal-section">
          {/* <h1 className="heading">Horizontal Scroll</h1> */}
          <div class="flex flex-wrap items-center mt-32">
            <div class="w-full md:w-5/12 px-4 mr-auto ml-auto">
              <div class="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
                <i class="fas fa-user-friends text-xl"></i>
              </div>
              <h3 class="text-3xl mb-2 font-semibold leading-normal text-white">
                Learning made easy
              </h3>
              <p class="text-lg font-light leading-relaxed mt-4 mb-4 text-white">
                Our eShikshaMitra learning management system will make education
                more accessible by automating administrative processes and
                allowing educators to focus on teaching.
              </p>
              <p class="text-lg font-light leading-relaxed mt-0 mb-4 text-white">
                It will increase communication among teachers, students, and
                parents, resulting in a better learning environment. Its
                user-friendly interfaces and advanced data tracking enable
                personalized learning paths, making education a pleasant and
                enjoyable experience for all.
              </p>
            </div>
            <div class="w-full md:w-4/12 px-4 mr-auto ml-auto">
              <div class="relative flex flex-col min-w-0 break-words  w-full mb-6 shadow-lg rounded-lg bg-pink-600">
                <img
                  alt="..."
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1051&amp;q=80"
                  class="w-full align-middle rounded-t-lg"
                />
                <blockquote class="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    class="absolute left-0 w-full block h-[95px] top-[-94px]"
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      class="text-pink-600 fill-current"
                    ></polygon>
                  </svg>
                  <h4 class="text-xl font-bold text-white">
                    Top Notch Services
                  </h4>
                  <p class="text-md font-light mt-2 text-white">
                    The Arctic Ocean freezes every winter and much of the
                    sea-ice then thaws every summer, and that process will
                    continue whatever happens.
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- section 02 ---------- */}
        <section className="horizontal-section">
          {/* <h1 className="heading">01</h1> */}
          <section class="relative py-20">
            <div class="bottom-auto h-[80px] transform translate-z-0 top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20">
              <svg
                class="absolute bottom-0 overflow-hidden"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  class="text-white fill-current"
                  points="2560 0 2560 100 0 100"
                ></polygon>
              </svg>
            </div>
            <div class="container mx-auto px-4">
              <div class="items-center flex flex-wrap">
                <div class="w-full md:w-4/12 ml-auto mr-auto px-4">
                  <img
                    alt="..."
                    class="max-w-full rounded-lg shadow-lg"
                    src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=634&amp;q=80"
                  />
                </div>
                <div class="w-full md:w-5/12 ml-auto mr-auto px-4">
                  <div class="md:pr-12">
                    <div class="text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-pink-300">
                      <i class="fas fa-rocket text-xl"></i>
                    </div>
                    <h3 class="text-3xl font-semibold">
                      Stay hasslefree with Admin
                    </h3>
                    <p class="mt-4 text-lg leading-relaxed text-gray-600">
                      Stay hassle-free with our management system: Simplifying
                      administrative tasks and providing a user-friendly
                      platform, so you can focus on what truly matters –
                      effective teaching and student success.
                    </p>
                    <ul class="list-none mt-6">
                      <li class="py-2">
                        <div class="flex items-center">
                          <div>
                            <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                              <i class="fas fa-fingerprint"></i>
                            </span>
                          </div>
                          <div>
                            <h4 class="text-gray-600">
                              Carefully crafted components
                            </h4>
                          </div>
                        </div>
                      </li>
                      <li class="py-2">
                        <div class="flex items-center">
                          <div>
                            <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                              <i class="fab fa-html5"></i>
                            </span>
                          </div>
                          <div>
                            <h4 class="text-gray-600">Amazing page examples</h4>
                          </div>
                        </div>
                      </li>
                      <li class="py-2">
                        <div class="flex items-center">
                          <div>
                            <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                              <i class="far fa-paper-plane"></i>
                            </span>
                          </div>
                          <div>
                            <h4 class="text-gray-600">Dynamic components</h4>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>

        {/* ---------- section 02 ---------- */}
        <section className="horizontal-section">
          {/* <h1 className="heading">02</h1> */}
          <div class="flex flex-wrap items-center mt-32">
            <div class="w-full md:w-5/12 px-4 mr-auto ml-auto">
              <div class="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
                <i class="fas fa-user-friends text-xl"></i>
              </div>
              <h3 class="text-3xl mb-2 font-semibold leading-normal text-white">
                Working with us is a pleasure
              </h3>
              <p class="text-lg font-light leading-relaxed mt-4 mb-4  text-white">
                Don't let your uses guess by attaching tooltips and popoves to
                any element. Just make sure you enable them first via
                JavaScript.
              </p>
              <p class="text-lg font-light leading-relaxed mt-0 mb-4 text-white">
                The kit comes with three pre-built pages to help you get started
                faster. You can change the text and images and you're good to
                go. Just make sure you enable them first via JavaScript.
              </p>
            </div>
            <div class="w-full md:w-4/12 px-4 mr-auto ml-auto">
              <div class="relative flex flex-col min-w-0 break-words  w-full mb-6 shadow-lg rounded-lg bg-pink-600">
                <img
                  alt="..."
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1051&amp;q=80"
                  class="w-full align-middle rounded-t-lg"
                />
                <blockquote class="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    class="absolute left-0 w-full block h-[95px] top-[-94px]"
                    // style="height: 95px; top: -94px;"
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      class="text-pink-600 fill-current"
                    ></polygon>
                  </svg>
                  <h4 class="text-xl font-bold text-white">
                    Compatible and Reliable
                  </h4>
                  <p class="text-md font-light mt-2 text-white">
                    Our system's regular updates and adaptability mean you can
                    stay ahead in the ever-evolving field of education,
                    providing your students with the best opportunities for
                    growth and success. Trust in our commitment to keeping your
                    school at the forefront of educational technology.
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- section 03 ---------- */}
        <section className="horizontal-section">
          {/* <h1 className="heading">03</h1> */}
          <section class="relative py-20">
            <div class="bottom-auto h-[80px] transform translate-z-0 top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20">
              <svg
                class="absolute bottom-0 overflow-hidden"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  class="text-white fill-current"
                  points="2560 0 2560 100 0 100"
                ></polygon>
              </svg>
            </div>
            <div class="container mx-auto px-4">
              <div class="items-center flex flex-wrap">
                <div class="w-full md:w-4/12 ml-auto mr-auto px-4">
                  <img
                    alt="..."
                    class="max-w-full rounded-lg shadow-lg"
                    src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=634&amp;q=80"
                  />
                </div>
                <div class="w-full md:w-5/12 ml-auto mr-auto px-4">
                  <div class="md:pr-12">
                    <div class="text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-pink-300">
                      <i class="fas fa-rocket text-xl"></i>
                    </div>
                    <h3 class="text-3xl font-semibold">
                      Submit your Assignments and Homework
                    </h3>
                    <p class="mt-4 text-lg leading-relaxed text-gray-600">
                      With our system, students can easily upload assignments
                      and homework, while teachers can efficiently manage,
                      grade, and provide feedback, creating a seamless and
                      productive learning experience. Say goodbye to paperwork
                      and embrace a digital solution that enhances the
                      educational journey.
                    </p>
                    {/* <ul class="list-none mt-6">
                  <li class="py-2">
                    <div class="flex items-center">
                      <div>
                        <span
                          class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3"
                          ><i class="fas fa-fingerprint"></i
                        ></span>
                      </div>
                      <div>
                        <h4 class="text-gray-600">
                          Carefully crafted components
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li class="py-2">
                    <div class="flex items-center">
                      <div>
                        <span
                          class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3"
                          ><i class="fab fa-html5"></i
                        ></span>
                      </div>
                      <div>
                        <h4 class="text-gray-600">Amazing page examples</h4>
                      </div>
                    </div>
                  </li>
                  <li class="py-2">
                    <div class="flex items-center">
                      <div>
                        <span
                          class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3"
                          ><i class="far fa-paper-plane"></i
                        ></span>
                      </div>
                      <div>
                        <h4 class="text-gray-600">Dynamic components</h4>
                      </div>
                    </div>
                  </li>
                </ul> */}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
      </main>
    </>
  );
};

export default Community;

// import React from "react";
// import commone from "../../assets/image/comm.png";
// import commtwo from "../../assets/image/comm2.png";
// import commthree from "../../assets/image/comm3.png";
// import student from "../../assets/student.png";
// import arrow from "../../assets/image/arrow4.png";
// import arrow2 from "../../assets/image/arrow5.png";
// import arrow3 from "../../assets/image/arrow6.png";

// function Community() {
//   return (
//     <div className=" mt-20 p-7">
//       <div className="grid md:grid-cols-2 sm:grid-cols-1 ">
//         <div>
//           <img src={commone} alt=""></img>
//         </div>
//         <div className="flex justify-center items-center p-12 flex-col">
//           <h1 className="inline-block text-3xl">
//             Learning made easy
//           </h1>
//           <p>
//           Our eShikshaMitra learning management system will make education more accessible by automating administrative processes and allowing educators to focus on teaching. It will increase communication among teachers, students, and parents, resulting in a better learning environment. Its user-friendly interfaces and advanced data tracking enable personalized learning paths, making education a pleasant and enjoyable experience for all.
//           </p>
//         </div>
//       </div>
//       <div className=" flex justify-center h-[200px] relative -z-10">
//         <img src={arrow} alt="" className=" absolute top-0"></img>
//       </div>
//       <div className="grid md:grid-cols-2 sm:grid-cols-1 ">
//         <div className="flex justify-center items-center p-12 flex-col">
//           <h1 className="inline-block text-3xl">
//             Stay hasslefree with Admin
//           </h1>
//           <p>
//             Stay hassle-free with our management system: Simplifying administrative tasks and providing a user-friendly platform, so you can focus on what truly matters – effective teaching and student success.
//           </p>
//         </div>
//         <div>
//           <img src={commtwo} alt=""></img>
//         </div>
//       </div>
//       <div className=" flex justify-center h-[200px] relative -z-10">
//         <img src={arrow2} alt="" className=" absolute top-0"></img>
//       </div>
//       <div className="grid md:grid-cols-2 sm:grid-cols-1 ">
//         <div>
//           <img src={commthree} alt=""></img>
//         </div>
//         <div className="flex justify-center items-center p-12 flex-col">
//           <h1 className="inline-block text-3xl">
//             Submit your Assignments and Homework
//           </h1>
//           <p>
//             With our system, students can easily upload assignments and homework, while teachers can efficiently manage, grade, and provide feedback, creating a seamless and productive learning experience. Say goodbye to paperwork and embrace a digital solution that enhances the educational journey.
//           </p>
//         </div>
//       </div>
//       <div className=" flex justify-center h-[200px] relative -z-10">
//         <img src={arrow3} className=" absolute top-0"></img>
//       </div>
//       <div className="grid md:grid-cols-2 sm:grid-cols-1">
//         <div className="flex justify-center items-center p-12 flex-col">
//           <h1 className="inline-block text-3xl">
//             Compatible and Reliable
//           </h1>
//           <p>
//             Our system's regular updates and adaptability mean you can stay ahead in the ever-evolving field of education, providing your students with the best opportunities for growth and success. Trust in our commitment to keeping your school at the forefront of educational technology.
//           </p>
//         </div>
//         <div>
//           <img src={student} alt=""
//            className="max-h-[400px]"
//            ></img>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Community;
