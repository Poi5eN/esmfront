import React, { useEffect, useState } from "react";
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";
import { dropdownData } from "../../../data/dummy";
// import logo from '../../../ShikshMitraWebsite/assets/logo/download-removebg-preview.png'

import {
  FcConferenceCall,
  FcBusinesswoman,
  FcCurrencyExchange,
} from "react-icons/fc";
import { BiMaleFemale, BiSolidStoreAlt } from "react-icons/bi";
import { useLocation, useNavigate } from "react-router-dom";

import axios from "axios";
import EarningChart from "../../../CHART/EarningChart";

import IncomeChart from "../IncomeChart";
import FeeChart from "../FeeChart";
import InventoryStock from "./InventoryStock";
import EmployeeChart from "./EmployeeChart";
import ExpensesChart from "./ExpensesChart";
import Cookies from "js-cookie";
const authToken = Cookies.get("token");

const DropDown = ({ currentMode }) => (
  <div className="w-28 border-1 border-color px-2 py-1 rounded-md">
    <DropDownListComponent
      id="time"
      fields={{ text: "Time", value: "Id" }}
      style={{ border: "none", color: currentMode === "Dark" && "white" }}
      value="1"
      dataSource={dropdownData}
      popupHeight="220px"
      popupWidth="120px"
    />
  </div>
);
const Create_Expenditure = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [teacherCount, setTeacherCount] = useState([]);
  const [studentCount, setStudentCount] = useState([]);
  const [parentCount, setParentCount] = useState([]);
  const [earningData, setEarningData] = useState([]);
  const [schoolInfo, setSchoolInfo] = useState({
    schoolImage: "",
    schoolName: "",
  });

  // Fetch Admin Info
  useEffect(() => {
    axios
      .get(
        "https://eshiksh-mitra-project.vercel.app/api/v1/adminRoute/getAdminInfo",
        {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${authToken}`,
          }, // Set withCredentials to true
        }
      )
      .then((response) => {
        console.log("Response Success", response);
        const schoolImage = response.data.admin.image.url;
        const schoolName = response.data.admin.fullName;
        setSchoolInfo({
          schoolImage,
          schoolName,
        });
      })
      .catch((error) => {
        // Handle any errors that occur during the logout process
        console.error(" Here Response error", error);
      });
  }, []);

  // Fetch teacher count
  useEffect(() => {
    axios
      .get(
        "https://eshiksh-mitra-project.vercel.app/api/v1/adminRoute/getTeachers",
        {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      )
      .then((response) => {
        if (Array.isArray(response.data.data)) {
          console.log(response.data.data[0]);
          setTeacherCount(response.data.data.length);
        } else {
          console.error("Data format is not as expected:", response.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching teacher count:", error);
      });
  }, []);

  // Fetch student count
  useEffect(() => {
    axios
      .get(
        "https://eshiksh-mitra-project.vercel.app/api/v1/adminRoute/getAllStudents",
        {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      )
      .then((response) => {
        if (Array.isArray(response.data.allStudent)) {
          setStudentCount(response.data.allStudent.length);
        } else {
          console.error("Data format is not as expected:", response.allStudent);
        }
      })
      .catch((error) => {
        console.error("Error fetching student count:", error);
      });
  }, []);

  useEffect(() => {
    // Fetch data from the server when the component mounts
    axios
      .get(
        "https://eshiksh-mitra-project.vercel.app/api/v1/adminRoute/getAllParents",
        {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${authToken}`,
          }, // Set withCredentials to true
        }
      )
      .then((response) => {
        setParentCount(response.data.allParent.length);
        console.log(response.data.allParent);
      })
      .catch((error) => {
        console.error("Error  int fetching data:", error);
      });
  }, []);

  useEffect(() => {
    const newEarningData = [
      {
        icon: <FcConferenceCall />,
        amount: `${studentCount}`,
        percentage: "-4%",
        title: "Students",
        iconColor: "#03C9D7",
        iconBg: "#E5FAFB",
        pcColor: "red-600",
      },
      {
        icon: <FcBusinesswoman />,
        amount: `${teacherCount}`,
        percentage: "+23%",
        title: "Teachers",
        iconColor: "rgb(255, 244, 229)",
        iconBg: "rgb(254, 201, 15)",
        pcColor: "green-600",
      },
      {
        icon: <FcCurrencyExchange />,
        amount: "423,39",
        percentage: "+38%",
        title: "Earning",
        iconColor: "rgb(228, 106, 118)",
        iconBg: "rgb(255, 244, 229)",
        pcColor: "green-600",
      },
      {
        icon: <BiMaleFemale />,
        amount: `${parentCount}`,
        percentage: "-12%",
        title: "Parents",
        iconColor: "rgb(0, 194, 146)",
        iconBg: "rgb(235, 250, 242)",
        pcColor: "red-600",
      },
    ];
    setEarningData(newEarningData);
  }, [teacherCount, studentCount, parentCount]);

  // Prevent navigation using arrow keys and back button
  // useEffect(() => {
  //   window.addEventListener("keydown", function (event) {
  //     if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
  //       event.preventDefault();
  //     }
  //   });

  //   navigate.pushState(null, null, location.href);
  //   window.addEventListener("popstate", function (event) {
  //     navigate.pushState(null, null, location.href);
  //   });
  // }, []);

  return (
    <div className="mt-12">
      <div className="grid gap-3 xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1  p-3">
        <div
          className={`p-2 rounded-md  bg-white w-full flex flex-col justify-center col-span-2`}
        >
          <div className="flex justify-center items-center  w-full h-[150px]">
            <div className="w-[150px] h-[150px] rounded-full overflow-hidden ">
              {schoolInfo.schoolImage ? (
                <img
                  src={schoolInfo.schoolImage}
                  alt="no img"
                  className="w-full h-full object-cover"
                />
              ) : (
                <span>No Image Available</span>
              )}
            </div>
          </div>
          <h2 className="text-center mt-4 border-b-4 border-cyan-700 text-2xl font-bold text-sky-800">
            {schoolInfo.schoolName}
          </h2>
        </div>
        <div className=" p-2  rounded-md sm:w-full text-center bg-white col-span-2">
          <InventoryStock />
        </div>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-2 p-3">
        <div className="bg-white  dark:text-gray-200 dark:bg-secondary-dark-bg  rounded-2xl p-3">
          {/* <EarningChart /> */}
          <ExpensesChart />
        </div>
        <div className="bg-white  dark:text-gray-200 dark:bg-secondary-dark-bg   rounded-2xl p-3">
          <EmployeeChart />
          {/* <TeacherNotice/> */}
          {/* <FeeChart/> */}
        </div>
        {/* <Calendar /> */}

        {/* <div className="bg-white  dark:text-gray-200 dark:bg-secondary-dark-bg   rounded-2xl p-3">
        </div> */}
      </div>
    </div>
  );
};

export default Create_Expenditure;
