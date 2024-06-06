import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import axios from "axios";
import Cookies from 'js-cookie';
const authToken = Cookies.get('token');

const InventoryStock = () => {
  const [categories, setCategories] = useState([]);
  const [amount, setAmount] = useState([]);
  const [chartColors, setChartColors] = useState([]);

  useEffect(() => {
    axios
      .get("https://eshiksh-mitra-project.vercel.app/api/v1/adminRoute/getAllItems", {
        withCredentials: true,
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
      })
      .then((response) => {
        if (Array.isArray(response.data.listOfAllItems)) {
          const aggregatedSellAmounts = {};

          response.data.listOfAllItems.forEach((item) => {
            const category = capitalize(item.category);
            const sellAmount = parseFloat(item.quantity);

            if (aggregatedSellAmounts[category] === undefined) {
              aggregatedSellAmounts[category] = sellAmount;
            } else {
              aggregatedSellAmounts[category] += sellAmount;
            }
          });

          const extractedCategories = Object.keys(aggregatedSellAmounts);
          const extractedAmount = Object.values(aggregatedSellAmounts);

          setCategories(extractedCategories);
          setAmount(extractedAmount);

          // Update chart colors dynamically based on the new categories
          const newChartColors = extractedCategories.map(() => getRandomColor());
          setChartColors(newChartColors);

          const predefinedColors = ["#FF5733", "#4CAF50", "#2196F3", "#FFC107", "#9C27B0"];
          setChartColors(predefinedColors);

          

        }
      })
      .catch((error) => {
        console.error("Error fetching item list:", error);
      });
  }, []);

  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const getRandomColor = () => {
    // Generate a random hex color code
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  };

  const options = {
    chart: {
      width: 380,
      type: "pie",
      colors: chartColors, // Use the dynamically generated colors
    },
    labels: categories,
    plotOptions: {
      pie: {
        startAngle: -90,
        endAngle: 270,
      },
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      type: "gradient",
    },
    legend: {
      formatter: function (val, opts) {
        return val + " - " + opts.w.globals.series[opts.seriesIndex];
      },
    },
    // title: {
    //   text: "Inventory Items",
    //   className: "text-2xl font-bold text-sky-800",
    // },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };
  options.series = amount;

          console.log("Categories:", categories);
          console.log("Chart Colors:", chartColors);
  return (
    <div id="chart">
      <h1 className="text-cyan-700 text-2xl font-bold">Inventory Items</h1>
      <ReactApexChart options={options} series={options.series} type="pie" width={380} />
    </div>
  );
};

export default InventoryStock;
