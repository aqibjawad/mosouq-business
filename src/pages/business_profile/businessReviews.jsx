import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const BusinessReviews = () => {
  const [timeframe, setTimeframe] = useState("daily");

  const chartData = {
    daily: {
      labels: ["", "", "", "", "", "", "", "", "", "", "", ""],
      data: [58, 72, 59, 74, 91, 55, 72, 38, 60, 72, 58, 65],
    },
    weekly: {
      labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
      data: [65, 75, 60, 80],
    },
    monthly: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      data: [70, 68, 73, 78, 75, 82],
    },
  };

  const data = {
    labels: chartData[timeframe].labels,
    datasets: [
      {
        fill: true,
        data: chartData[timeframe].data,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.2)",
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "Your Total Reviews",
        align: "start",
        font: {
          size: 20,
          weight: "bold",
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          callback: function (value) {
            return value + "%";
          },
        },
      },
    },
    elements: {
      point: {
        radius: 0,
        hitRadius: 10,
        hoverRadius: 5,
      },
    },
  };

  const handleTimeframeChange = (event) => {
    setTimeframe(event.target.value);
  };

  return (
    <div style={{ width: "100%", maxWidth: "800px", marginTop: "7rem" }}>
      <Line data={data} options={options} />

      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          marginTop: "10px",
        }}
      >
        <label style={{ marginRight: "10px" }}>
          <input
            type="radio"
            name="timeframe"
            value="daily"
            checked={timeframe === "daily"}
            onChange={handleTimeframeChange}
          />{" "}
          Daily
        </label>
        <label style={{ marginRight: "10px" }}>
          <input
            type="radio"
            name="timeframe"
            value="weekly"
            checked={timeframe === "weekly"}
            onChange={handleTimeframeChange}
          />{" "}
          Weekly
        </label>
        <label>
          <input
            type="radio"
            name="timeframe"
            value="monthly"
            checked={timeframe === "monthly"}
            onChange={handleTimeframeChange}
          />{" "}
          Monthly
        </label>
      </div>
    </div>
  );
};

export default BusinessReviews;
