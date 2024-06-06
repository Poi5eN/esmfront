import React, { useState, useEffect } from "react";

import axios from "axios";
import "../../../Dynamic/Form/FormStyle.css";
import DynamicDataTable from "./DataTable";
import Cookies from 'js-cookie';
import { useStateContext } from "../../../contexts/ContextProvider";
const authToken = Cookies.get('token');

function IssueBookCreate() {
  const { currentColor } = useStateContext();
  const modalStyle = {
    content: {
      width: "80%",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      zIndex: 1000,
      background:currentColor
    },
  };
  const [submittedData, setSubmittedData] = useState([]);
  const [issueDependency, setIssueDependency] = useState(false);

  const updateIssueDependency = () => {
    setIssueDependency(!issueDependency);
  };


  useEffect(() => {
    axios
      .get("https://eshiksh-mitra-project.vercel.app/api/v1/adminRoute/getAllBooks", {
        withCredentials: true,
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
      })
      .then((response) => {

        console.log("response message", response.data.message);
        if (Array.isArray(response.data.listOfAllBooks)) {
          setSubmittedData(response.data.listOfAllBooks);
        } else {
          console.error("Data format is not as expected:", response.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error.message);
      });
  }, [issueDependency]);
  
  return (
    <div className=" mt-12 md:mt-1  mx-auto p-3 ">
    <h1 
    className="text-4xl font-bold mb-4 uppercase text-center  hover-text "
    style={{color:currentColor}}
      > Book Issue</h1>
     

      <DynamicDataTable data={submittedData} updateIssueDependency={updateIssueDependency} />
    </div>
  );
}

export default IssueBookCreate;
