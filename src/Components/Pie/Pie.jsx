import { useEffect, useState } from "react";
import Chart from "react-apexcharts";

const Donut = () => {
  const [options, setoptions] = useState({
    chart: {
      type: "donut",
    },
    plotOptions: {
      pie: {
        startAngle: -90,
        endAngle: 90,
        offsetY: 10,
        donut: {
          labels: {
            show: false,
            total: {
              showAlways: false,
              show: false,
            },
          },
        },
        track: {
          background: "#e7e7e7",
          strokeWidth: "97%",
          margin: 5, // margin is in pixels
          dropShadow: {
            enabled: true,
            top: 2,
            left: 0,
            color: "#999",
            opacity: 1,
            blur: 2,
          },
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            offsetY: -2,
            fontSize: "22px",
          },
        },
      },
    },
    grid: {
      padding: {
        bottom: -80,
      },
    },
    fill: {
      type: "text",
      value:{
        name:"ssss"
      },
      text: {
        shade: "dark",
        shadeIntensity: 0.15,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 50, 65, 91],
      },
    },
    stroke: {
      dashArray: 4,
    },
    // labels: ["Median Ratio"],
    labels: ["Solved", "Pending", "In-Progress", "Canceled"],
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
  });
  const [series, setseries] = useState([40, 10, 30, 20]);

  return (
    <div className="donut">
      <Chart options={options} series={series} type="donut" width="100%" >
        solved
      </Chart>
    </div>
  );
};

export default Donut;
