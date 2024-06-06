import React, { useState, useEffect } from 'react';

import axios from 'axios';
import DynamicDataTable from './DataTable';
import Cookies from 'js-cookie';
import { useStateContext } from "../../contexts/ContextProvider";
const authToken = Cookies.get('token');


const AdmitCard = () => {
  const { currentColor } = useStateContext();
  const modalStyle = {
    content: {
      // width: "80%",
      // top: "50%",
      // left: "50%",
      // right: "auto",
      // bottom: "auto",
      // marginRight: "-50%",
      // transform: "translate(-50%, -50%)",
      zIndex: 1000,
      // background:currentColor
    },
  };
  const [students, setStudents] = useState([]);
  const [submittedData, setSubmittedData] = useState([]);

  useEffect(() => {
    axios.get("https://eshiksh-mitra-project.vercel.app/api/v1/adminRoute/getAllStudents", {

      withCredentials: true,
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    })
      .then((response) => {
        const allStudent = response.data.allStudent;
        // console.log("Students---->", allStudent);
        setSubmittedData(response.data.allStudent);
        setStudents(allStudent);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className=" mt-12 md:mt-1  mx-auto p-3 ">
    <h1 
    className="text-4xl font-bold mb-4 uppercase text-center  hover-text "
    style={{color:currentColor}}
    >admit card</h1>

      <DynamicDataTable data={submittedData} />


    </div>
  );
};

export default AdmitCard;