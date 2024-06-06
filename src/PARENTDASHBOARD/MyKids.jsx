import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useStateContext } from "../contexts/ContextProvider";
const authToken = Cookies.get("token");

const MyKids = () => {
  const { currentColor} = useStateContext();
  const [studentData, setStudentData] = useState({});
  const data = JSON.parse(localStorage.getItem("response"));
  console.log("LocalStorage-->", data);
  const [loading, setLoading] = useState(true);
  const [admindata, setAdminData] = useState({});

  useEffect(() => {
    axios
      .get(
        `https://eshiksh-mitra-project.vercel.app/api/v1/adminRoute/myKids`,
        {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      )
      .then((response) => {
        // console.log("My KIds ", response.data);
        const data = response.data.data[0];
        setStudentData(data);
        // console.log("ParentDashBoard--->", data);
        setLoading(false); // Set loading to false once data is received
      })
      .catch((error) => {
        console.error("Error fetching Student data:", error);
        setLoading(false); // Set loading to false in case of an error
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        `https://eshiksh-mitra-project.vercel.app/api/v1/adminRoute/getAdminInfo`,
        {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      )
      .then((response) => {
        // console.log("Data student ", response.data.admin);
        setAdminData(response.data.admin);
        setLoading(false); // Set loading to false once data is received
      })
      .catch((error) => {
        console.error("Error fetching  data:", error);
        setLoading(false); // Set loading to false in case of an error
      });
  }, []);

  console.log(studentData);
  // console.log(admindata);

  return (
    <div>
      <div className="w-full flex items-center justify-center">
        <div className="bg-white gap-2 rounded-lg mt-5 p-8 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 shadow-[rgba(0,0,_0,_0.25)_0px_25px_50px-12px]">
          <div className="w-[300px] border-1 rounded-md border-[#01a9ac] p-5 hover:shadow-[rgba(6,24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]">
            <div className="flex justify-between">
              <div>
                {admindata.image && (
                  <img
                    className="w-[80px] h-[80px] rounded-full"
                    src={admindata.image.url}
                    alt="school logo"
                  />
                )}
              </div>
              <h2>IDENTITY CARD </h2>
            </div>

            <div>
              <h1 className="text-center text-xl font-semibold"
              style={{color:currentColor}}
              >
                {/* Model School */}
                {admindata.schoolName}
              </h1>
            </div>

            <div className="text-center rounded-sm "
            style={{background:currentColor}}
            >
              <h3 className="text-white">
                {/* Lorem ipsum dolor, sit amet consectetur adipisicing. */}
                {admindata.address}
              </h3>
            </div>

            <div className="flex mt-5">
              {studentData.image && (
                <img
                  className="w-[80px] h-[80px] rounded-full"
                  src={studentData.image.url}
                  alt="Student Image "
                />
              )}
              <div className="ml-3">
                <div className="">
                  <h2 className="w-[100px] text-[13px] leading-3">Name :</h2>
                  <span className="font-semibold text-[14px] ">
                    {studentData && studentData.fullName}
                  </span>
                </div>
                <div className="my-1 py-1">
                  <h2 className="w-[100px] text-[13px] leading-3 ">F/Name :</h2>
                  <span className="font-semibold text-[14px] ">
                    {studentData.fatherName}
                  </span>
                </div>
                <div className="my-1 py-1">
                  <h2 className="w-[100px] text-[13px] leading-3 ">M/Name :</h2>
                  <span className="font-semibold text-[14px] ">
                    {studentData && studentData.motherName}
                  </span>
                </div>

                <div className="flex mt-2  items-center">
                  <h2 className="w-[60px] text-[13px] leading-3 ">Class:</h2>
                  <span className="">
                    {studentData.class !== undefined
                      ? `${studentData.class}th - ${studentData.section}`
                      : "N/A"}
                  </span>
                </div>
                <div className="flex mt-2 items-center">
                  <h2 className="w-[60px] text-[13px] leading-3 ">DOB. :</h2>
                  <span className="">
                    {studentData.dateOfBirth
                      ? studentData.dateOfBirth.split("T")[0]
                      : "N/A"}
                  </span>
                </div>
              </div>
            </div>

            <div className="p-2">
              <h2>Address : </h2>
              <span>{studentData.address}</span>
            </div>
          </div>

          <div className="w-[330px] border-1 rounded-md border-[#01a9ac] hover:shadow-[rgba(6,24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]">
                        <div class="relative overflow-x-auto">
                            <h1 className="text-center mb-3 font-extrabold"> Contact Details</h1>
                            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                <tbody>
                                    <tr class=" dark:bg-gray-800">
                                        <th scope="row" class="px-2 py-2 font-medium text-gray-900  dark:text-white">
                                        Email :
                                        </th>
                                        <td class="px-2 py-2">   {studentData.email}</td>
                                    </tr>
                                    <tr class=" dark:bg-gray-800">
                                        <th scope="row" class="px-2 py-2 font-medium text-gray-900  dark:text-white">
                                        Roll No. :
                                        </th>
                                        <td class="px-2 py-2"> {studentData.rollNo}</td>
                                    </tr>
                                    <tr class=" dark:bg-gray-800">
                                        <th scope="row" class="px-2 py-2 font-medium text-gray-900  dark:text-white">
                                        Joining Date :
                                        </th>
                                        <td class="px-2 py-2"> {studentData.joiningDate
                  ? studentData.joiningDate.split("T")[0]
                  : "N/A"}
                  </td>
                                    </tr>
                                    <tr class=" dark:bg-gray-800">
                                        <th scope="row" class="px-2 py-2 font-medium text-gray-900  dark:text-white">
                                        Gender :
                                        </th>
                                        <td class="px-2 py-2">
                                        {studentData.gender}
                                        </td>
                                    </tr>
                                    <tr class=" dark:bg-gray-800">
                                        <th scope="row" class="px-2 py-2 font-medium text-gray-900  dark:text-white">
                                        Mobile :
                                        </th>
                                        <td class="px-2 py-2">
                                        {studentData.contact}
                                        </td>
                                    </tr>
                                    <tr class=" dark:bg-gray-800">
                                        <th scope="row" class="px-2 py-2 font-medium text-gray-900  dark:text-white">
                                        ParentMobile:
                                        </th>
                                        <td class="px-2 py-2">    +91 {studentData.parentContact}</td>
                                    </tr>
                                   
                                </tbody>
                            </table>
                        </div>
                    </div>
        </div>
      </div>
    </div>
  );
};

export default MyKids;
