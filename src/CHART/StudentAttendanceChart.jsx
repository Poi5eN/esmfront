import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import axios from "axios";
import Cookies from "js-cookie";

const authToken = Cookies.get("token");

const StudentAttendanceChart = () => {
  // Initialize state variables at the top of the component
  const [data, setData] = useState({
    boys: null,
    girls: null,
  });
  const [loading, setLoading] = useState(true);
  const [series, setSeries] = useState([]);
  const [options, setOptions] = useState({
    chart: {
      width: 280,
      type: "pie",
    },
    labels: ["Present", "Absent"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 400,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  });

  // Use useEffect for side effects like data fetching
  useEffect(() => {
    const fetchData = async () => {
      try {
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        const currentMonth = currentDate.getMonth() + 1; // Months are 0-indexed, so add 1

        const response = await axios.get(
          `https://eshiksh-mitra-project.vercel.app/api/v1/teacher/getAttendanceForStudent?year=${currentYear}&month=${currentMonth}`,
          {
            withCredentials: true,
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          }
        );

        console.log(response.data.data[0].attendanceData);
        // Process the response data to get counts of present and absent
        const presentCount = response.data.data[0].attendanceData.filter(
          (item) => item.present
        ).length;
        console.log(presentCount);
        const absentCount = response.data.data[0].attendanceData.filter(
          (item) => !item.present
        ).length;
        console.log(absentCount);

        setSeries([presentCount, absentCount]);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching student data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div id="chart">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <h1 className="text-[#4f6583]">
            My Attendance
            {/* {series[1]+series[0]}  */}
          </h1>
          <ReactApexChart
            options={options}
            series={series}
            type="pie"
            width={220}
          />
        </>
      )}
    </div>
  );
};

export default StudentAttendanceChart;
