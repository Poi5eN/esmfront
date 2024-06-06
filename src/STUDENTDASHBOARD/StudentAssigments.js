import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useStateContext } from '../contexts/ContextProvider';
const authToken = Cookies.get('token');

const StudentAssigments = () => {

  const {currentColor} = useStateContext();
  const[assignmentData, setAssignmentsData] = useState([]);
  const[studentData, setStudentData] = useState([]);
  const email = localStorage.getItem("email");
  useEffect(() => {
    // GET Request to fetch existing notices
    axios.get(`https://eshiksh-mitra-project.vercel.app/api/v1/adminRoute/getAllStudents?email=${email}`,
      {
        withCredentials: true,
      headers: {
        Authorization: `Bearer ${authToken}`,
      }, // Set withCredentials to true
      })
      .then((response) => {
        console.log('Yes---->', response.data.allStudent)
        setStudentData(response.data.allStudent[0]);
        console.log("StudentDashBoard--->", response.data.allStudent[0])
      })
      .catch((error) => {
        console.error('Error fetching notices:', error);
      });

  }, []);


  

  useEffect(() => {
    if (studentData.class) {
      axios
        .get(
          `https://eshiksh-mitra-project.vercel.app/api/v1/adminRoute/getAllAssignment?className=${studentData.class}&section=${studentData.section}`,
          {
            withCredentials: true,
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
          }
        )
        .then((response) => {
             console.log("DATA-->", response.data)
              const { allAssignment } = response.data;
             console.log("GetALLCLASS--->", allAssignment)
             setAssignmentsData(allAssignment);
           })
        .catch((error) => {
          console.log(error.message);
        });
    }
  }, [studentData.class]);

  console.log("CurriculumData--->", assignmentData)

  return (
    // <div className="mt-12 p-2">
    //   <h2 className="text-lg font-semibold  text-indigo-600 mb-2">
    //          Assignment
    //       </h2>
      
      
    //     <div className="mt-4">
    //     {/* <h2 className="text-lg font-semibold text-indigo-600">Assignments</h2> */}
    //     <ul>
    //       {assignmentData.map((item, index) => (
    //         <li key={index} className="mt-2">
    //           <div className="bg-white p-4 rounded-md shadow-md">
    //             <h3 className="text-xl font-semibold">Title: {item.title}</h3>
    //             <p className="text-gray-600">Description: {item.description}</p>
    //             <p className="text-gray-600">Due Date: {item.dueDate ? item.dueDate.split('T')[0] : ''}</p>
    //             <p className="text-gray-600">Class: {item.className}</p>
    //             <p className="text-gray-600">Section: {item.section}</p>
    //             <p className="text-gray-600">Subject: {item.subject}</p>
    //           {item.file && (
    //               <div className="mb-4">
    //                 <label className="text-lg  mb-2">View PDF:</label>
    //                 <a  href={item.file.url} target="_blank" rel="noopener noreferrer"  className="text-blue-500 hover:underline">
    //                 View Image
    //                 </a>
    //               </div>
    //             )}
    //           </div>
              
    //         </li>
    //       ))}
    //     </ul>
    //   </div>
    
    // </div>
    <div className="mt-4 p-3">
    <h2 
    className="text-4xl font-bold mb-4 uppercase text-center dark:text-white  hover-text "
    style={{color:currentColor}}
    >Created Assignments</h2>
  
  <div className="overflow-x-auto">
  <table className="min-w-full  rounded-md border-collapse">
    <thead className=" bg-cyan-600 text-white ">
      <tr className='border'
        style={{background : currentColor}}
      >
        <th className="p-4 border">Title</th>
        <th className="p-4 border">Description</th>
        <th className="p-4 border">Due Date</th>
        <th className="p-4 border">Class</th>
        <th className="p-4 border">Section</th>
        <th className="p-4 border">Subject</th>
        <th className="border border-blue-500 px-4 py-2">File</th>


      </tr>
    </thead>
    <tbody>
      {assignmentData.map((item, index) => (
        <tr key={index} className="border text-center">
          <td className="p-4 border">{item.title}</td>
          <td className="p-4 border">{item.description}</td>
          <td className="p-4 border">{item.dueDate ? item.dueDate.split('T')[0] : ''}</td>
          <td className="p-4 border">{item.className}</td>
          <td className="p-4 border">{item.section}</td>
          <td className="p-4 border">{item.subject}</td>
          <td className="border border-blue-500 px-4 py-2">
                <a
                  href={item.file.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline text-lg"
                >
                  View PDF
                </a>
            </td>
        
        </tr>
      ))}
    </tbody>
  </table>
</div>


  </div>
  );
};

export default StudentAssigments;