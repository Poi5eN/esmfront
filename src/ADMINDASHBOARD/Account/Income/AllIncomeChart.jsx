import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import Cookies from 'js-cookie';
const authToken = Cookies.get('token');

const AllIncomeChart = () => {

  const [dataAll, setDataAll] = useState([]);

  useEffect(() => {

    axios.get('https://eshiksh-mitra-project.vercel.app/api/v1/fees/feeIncomeMonths', 
    {
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${authToken}`,
      }
    }
    )
    .then((response) => {
      setDataAll(response.data.data);
    })
    .catch((error) => {
      console.log("error", error.message);
    })

  }, []);

  useEffect(() => {

    // Update chartData when dataAll changes
    setChartData(prevChartData => ({
      ...prevChartData,
      series: [
        {
          name: 'Income',
          data: dataAll,
        },
      ],
    }));

  }, [dataAll]);


  const [chartData, setChartData] = useState({
    series: [
      {
        name: 'Income',
        data: dataAll,
        // data: [
        //   10, 40, 60, 40, 28, 19, 39, 37, 363, 337, 637, 363
        // ],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: 'area',
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
      },
      xaxis: {
        categories: [
          '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'
        ],
      },
      tooltip: {
        x: {
          format: 'MM',
        },
      },
    },
  });

  console.log("char Data", chartData);

  return (
    <div className="w-full">
      <h2 className="dark:text-white dark:bg-secondary-dark-bg text-xl py-2">Fee IncomeChart According to Months</h2>
      <div id="chart">
        <ReactApexChart
          options={chartData.options}
          series={chartData.series}
          type="area"
          height={350}
        />
      </div>
    </div>
  );
};

export default AllIncomeChart;
