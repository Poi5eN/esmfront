
import React, { useState } from 'react';
import v1 from './demo.mp4';

const App = () => {
  const VIDEOS = {
    ITS: v1,
    landing: 'https://www.youtube.com/embed/4jEz03Z8azc',
    grassHopper: 'https://www.youtube.com/embed/ZwwS4YOTbbw',
    story: 'https://www.youtube.com/embed/tU1b1H2EWU4',
  };

  const [src, setSrc] = useState(VIDEOS.ITS);

  const handleMenuClick = (newSrc) => {
    setSrc(newSrc);
  };

  return (
    <div className="bg-[#19212c] min-h-screen flex flex-col justify-center items-center md:pt-24">
     
      <div className="w-full  lg:w-1/2 relative mb-8">
        <div className="relative overflow-hidden" 
        style={{ paddingTop: '56.25%' }}
        >
          <iframe
            title="video"
            src={src}
            className="absolute top-0 left-0 w-full h-full"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
          />
        </div>
      </div>

      {/* Radio Inputs Section */}
      <form className="w-full md:flex gap-5 lg:w-1/2" onChange={(e) => handleMenuClick(e.target.value)}>
        <label className="block text-white mb-2">
          <input type="radio" name="src" value={VIDEOS.ITS} defaultChecked /> ADMIN
        </label>
        <label className="block text-white mb-2">
          <input type="radio" name="src" value={VIDEOS.landing} /> TEACHER
        </label>
        <label className="block text-white mb-2">
          <input type="radio" name="src" value={VIDEOS.grassHopper} /> STUDENT
        </label>
        <label className="block text-white mb-2">
          <input type="radio" name="src" value={VIDEOS.story} /> PARENT
        </label>
      </form>
    </div>
  );
};

export default App;


// import React, { useState } from 'react';
// import v1 from './demo.mp4';

// const App = () => {
//   const VIDEOS = {
//     ITS: v1,
//     landing: 'https://www.youtube.com/embed/4jEz03Z8azc',
//     grassHopper: 'https://www.youtube.com/embed/ZwwS4YOTbbw',
//     story: 'https://www.youtube.com/embed/tU1b1H2EWU4',
//   };

//   const [src, setSrc] = useState(VIDEOS.ITS);

//   const changeVid = (newVid) => {
//     setSrc(VIDEOS[newVid]);
//   };

//   const handleMenuClick = (e) => {
//     const menuValue = e.target.value;
//     changeVid(menuValue);
//   };

//   return (
//     <div className="grid grid-cols-1 bg-[#19212c] md:grid-cols-2 gap-2 w-full">
//       <div className="flex items-center">
//         <div className="rounded p-5 md:col-start-1 md:col-span-2">
//           <div className="lg:flex-grow md:w-full lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
//             <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
//               Before they sold out
//               <br className="hidden lg:inline-block" />
//               readymade gluten
//             </h1>
//             <p className="mb-8 text-gray-200">
//               Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard
//               tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon
//               try-hard chambray.
//             </p>
//           </div>
//         </div>
//       </div>
//       <div className="w-full bg-green-400">
//         <div className="relative overflow-hidden" style={{ paddingTop: '56.25%' }}>
//           <iframe
//             title="video"
//             src={src}
//             className="absolute top-0 left-0 w-full h-full"
//             frameBorder="0"
//             allow="autoplay; fullscreen"
//             allowFullScreen
//           />
//           <form onClick={handleMenuClick}>
//             <label>
//               <input type="radio" name="src" value="ITS" defaultChecked /> ITS
//             </label>
//             <label>
//               <input type="radio" name="src" value="landing" /> First Landing
//             </label>
//             <label>
//               <input type="radio" name="src" value="grassHopper" /> Grass Hopper
//             </label>
//             <label>
//               <input type="radio" name="src" value="story" /> Story of SpaceX
//             </label>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;



// import React, { useState } from 'react';
// import v1 from './demo.mp4'
// const MenuComponent = ({ onClick }) => {
//   const handleClick = (e) => {
//     const menuValue = e.target.value;
//     onClick(menuValue);
//   };

//   return (
//     <form onClick={handleClick}>
//       <label>
//         <input type="radio" name="src" value="ITS" defaultChecked /> ITS
//       </label>
//       <label>
//         <input type="radio" name="src" value="landing" /> First Landing
//       </label>
//       <label>
//         <input type="radio" name="src" value="grassHopper" /> Grass Hopper
//       </label>
//       <label>
//         <input type="radio" name="src" value="story" /> Story of SpaceX
//       </label>
//     </form>
//   );
// };

// const VideoComponent = ({ src }) => {
//   return (
 
//   <div className='grid grid-cols-1 bg-[#19212c] md:grid-cols-2 gap-2 w-full '>
//     <div className='flex items-center'>
//     <div className="  rounded p-5 md:col-start-1 md:col-span-2">
//               <div className="lg:flex-grow md:w-full lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
//                 <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
//                   Before they sold out
//                   <br className="hidden lg:inline-block" />
//                   readymade gluten
//                 </h1>
//                 <p className="mb-8 text-gray-200 ">
//                   Copper mug try-hard pitchfork pour-over freegan heirloom
//                   neutra air plant cold-pressed tacos poke beard tote bag.
//                   Heirloom echo park mlkshk tote bag selvage hot chicken
//                   authentic tumeric truffaut hexagon try-hard chambray.
//                 </p>
//               </div>
//             </div>

//   </div>
//     <div className='w-full  bg-green-400 '>
//     <div className="relative   overflow-hidden "
//      style={{ paddingTop: '56.25%' }}
//     >
//     <iframe
//       title="video"
//       src={src}
//       className="absolute top-0 left-0 w-full h-full"
//       frameBorder="0"
//       allow="autoplay; fullscreen"
//       allowFullScreen
//     />
//     <button
//       style={{ zIndex: 10 }}
//     >
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         className="h-8 w-8"
//         fill="none"
//         viewBox="0 0 24 24"
//         stroke="currentColor"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth={2}
//           d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
//         />
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth={2}
//           d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
//         />
//         <path d="M10 8v8l4-4-4-4z" />
//       </svg>
//     </button>
//   </div>
//   </div>
//   </div>
//   );
// };

// const App = () => {
//   const VIDEOS = {
//     ITS: v1,
//     landing: 'https://www.youtube.com/embed/4jEz03Z8azc',
//     grassHopper: 'https://www.youtube.com/embed/ZwwS4YOTbbw',
//     story: 'https://www.youtube.com/embed/tU1b1H2EWU4',
//   };

//   const [src, setSrc] = useState(VIDEOS.ITS);

//   const changeVid = (newVid) => {
//     setSrc(VIDEOS[newVid]);
//   };

//   return (
//     <div>
     
//       <VideoComponent src={src} />
//     </div>
//   );
// };

// export default App;


// import React from 'react';
// import demo from "./demo.mp4";

// const Demo = () => {
//   return (
//     <div className="min-h-screen pt-20 bg-gradient-to-br from-yellow-600 via-purple-600 to-pink-600 p-8 md:flex">
//       <div className="md:w-1/2 mb-4 md:mb-0 relative">
//         <div className="w-full h-0 pb-56 md:h-full md:w-full">
//           <iframe
//             className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-md"
//             src={demo}
//             title="School Video"
//             allowFullScreen
//           />
//         </div>
//       </div>
//       <div className="md:w-1/2 md:ml-4 text-white flex flex-col justify-center">
//         <h2 className="text-4xl font-extrabold mb-4">Book Your Demo</h2>
//         <p className="text-lg mb-6">
//           Transforming education with innovative school management software. Empowering administrators, teachers, and students for a brighter future. Our platform offers a range of features and dashboards that empower educational institutions to manage their operations efficiently.
//         </p>

//         <button
//           className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-700 hover:to-blue-900 text-white font-bold py-2 px-3 md:py-2 md:px-4 rounded-md focus:outline-none focus:shadow-outline"
//           onClick={() => window.location.href='/contact'}
//         >
//           Book Demo
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Demo;
