import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import axios from "axios";
// import {  } from "react-to-pdf";
import {FcLeft} from "react-icons/fc";
import Cookies from "js-cookie";
import generatePDF, {usePDF, Resolution, Margin} from "react-to-pdf";

const authToken = Cookies.get("token");

// import "../../Dynamic/Form/FormStyle.css";

const ViewStudent = () => {
    const {email} = useParams();
    const [studentData, setStudentData] = useState({});

    const [generatingPDF, setGeneratingPDF] = useState(false);
    const options = {
        // default is `save`
        method: "open",
        // default is Resolution.MEDIUM = 3, which should be enough, higher values
        // increases the image quality but also the size of the PDF, so be careful
        // using values higher than 10 when having multiple pages generated, it
        // might cause the page to crash or hang.
        resolution: Resolution.HIGH,
        page: {
            format: "a4", // Set the format to A4
            // You can also adjust other properties like margin and orientation if needed
            margin: Margin.SMALL,
            orientation: "portrait", // or 'landscape' as per your requirement
        },
        canvas: {
            // default is 'image/jpeg' for better size performance
            mimeType: "image/png",
            qualityRatio: 1,
        },
        // Customize any value passed to the jsPDF instance and html2canvas
        // function. You probably will not need this and things can break,
        // so use with caution.
        overrides: {
            // see https://artskydj.github.io/jsPDF/docs/jsPDF.html for more options
            pdf: {
                compress: true,
            },
            // see https://html2canvas.hertzen.com/configuration for more options
            canvas: {
                useCORS: true,
            },
        },
    };
    const {toPDF, targetRef} = usePDF({
        filename: "page.pdf",
        options: options,
    });
    console.log("How To Display ");

    useEffect(() => {
        // Fetch teacher data based on the email parameter
        axios
        .get(`https://eshiksh-mitra-project.vercel.app/api/v1/adminRoute/getAllStudents?email=${email}`, {
            withCredentials: true,
            headers: {
                Authorization: `Bearer ${authToken}`,
            },
        })
        .then((response) => {
            const data = response.data.allStudent[0];
            setStudentData(data);
        })
        .catch((error) => {
            console.error("Error fetching Student data:", error);
        });
    }, [email]);

    const handlePDFGeneration = () => {
        setGeneratingPDF(true); // Set state to true when PDF generation starts
        setTimeout(() => {
            toPDF();
        }, 100);
        // toPDF(); // Generate the PDF
    };

    const downloadButton = (
        <button
            onClick={handlePDFGeneration}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
        >
            <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
            </svg>
            <span className="">Download</span>
        </button>
    );

    return (
        <>
            <div className="   flex items-center justify-center pt-10 ">
                <div
                    ref={targetRef}
                    className="bg-white    gap-2 sm:p-4 md:p-4 lg:p-4 p-2 pt-16 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 shadow-[rgba(0,0,_0,_0.25)_0px_25px_50px-12px]   overflow-y-auto rounded-sm"
                >
                    <div className="  bg-[#01a9ac]  p-5   hover:shadow-[rgba(6,24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset] rounded-md">
                        {console.log("student")}
                        <div className=" flex justify-center mt-4">
                            {studentData.image && studentData.image.url ? (
                                <img
                                    className="w-[150px] h-[150px] rounded-full border-yellow-400 border-2"
                                    src={studentData.image.url}
                                    alt="Image"
                                />
                            ) : (
                                <p>No image available</p>
                            )}
                        </div>
                        <div className="p-8">
                            <h2 className="text-center text-lg text-white font-bold  "> {studentData.fullName}</h2>

                            <h2 className="text-center text-white font-bold">
                                {"  "}
                                +91{studentData.contact}
                            </h2>
                            <hr />
                            <div className="h-14 ">
                                <p className=" p-2 font-bold">{`Address : ${studentData.address}`}</p>
                            </div>
                            <div className="flex justify-center mt-3 ">{!generatingPDF && downloadButton}</div>
                        </div>
                    </div>

                    <div className="w-[300px]">
                        <div class="relative overflow-x-auto">
                            <h1 className="text-center mb-3 font-extrabold"> {studentData.fullName}'s Details</h1>
                            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                <tbody>
                                    <tr class=" dark:bg-gray-800">
                                        <th scope="row" class="px-2 py-2 font-medium text-gray-900  dark:text-white">
                                            Roll No:
                                        </th>
                                        <td class="px-2 py-2">{studentData.rollNo}</td>
                                    </tr>
                                    <tr class=" dark:bg-gray-800">
                                        <th scope="row" class="px-2 py-2 font-medium text-gray-900  dark:text-white">
                                            Email :
                                        </th>
                                        <td class="px-2 py-2">{studentData.email}</td>
                                    </tr>
                                    <tr class=" dark:bg-gray-800">
                                        <th scope="row" class="px-2 py-2 font-medium text-gray-900  dark:text-white">
                                            Gender :
                                        </th>
                                        <td class="px-2 py-2">{studentData.gender}</td>
                                    </tr>
                                    <tr class=" dark:bg-gray-800">
                                        <th scope="row" class="px-2 py-2 font-medium text-gray-900  dark:text-white">
                                            Joining Date :
                                        </th>
                                        <td class="px-2 py-2">
                                            {new Date(studentData.joiningDate).toLocaleDateString("en-US")}
                                        </td>
                                    </tr>
                                    <tr class=" dark:bg-gray-800">
                                        <th scope="row" class="px-2 py-2 font-medium text-gray-900  dark:text-white">
                                            Class :
                                        </th>
                                        <td class="px-2 py-2">
                                            {studentData.class}-{studentData.section}
                                        </td>
                                    </tr>
                                    <tr class=" dark:bg-gray-800">
                                        <th scope="row" class="px-2 py-2 font-medium text-gray-900  dark:text-white">
                                            Subject :
                                        </th>
                                        <td class="px-2 py-2">{studentData.subject}</td>
                                    </tr>
                                    <tr class=" dark:bg-gray-800">
                                        <th scope="row" class="px-2 py-2 font-medium text-gray-900  dark:text-white">
                                            DOB :
                                        </th>
                                        <td class="px-2 py-2">
                                            {new Date(studentData.dateOfBirth).toLocaleDateString("en-US")}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ViewStudent;
