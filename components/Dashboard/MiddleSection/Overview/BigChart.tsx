import React from "react";
import Chart from "react-apexcharts";

function BigChart() {
  if (window !== undefined) {
    return (
      <Chart
        options={{
          chart: {
            height: 350,
            type: "area",
          },
          dataLabels: {
            enabled: false,
          },
          stroke: {
            curve: "smooth",
            width: 2,
          },
          fill: {
            opacity: 1,
            type: "",
            colors: ["#0085FF", "#FFBF1A"],
            gradient: {
              shadeIntensity: 1,
              opacityFrom: 0.7,
              opacityTo: 0.9,
              stops: [0, 90, 100],
            },
          },
          xaxis: {
            type: "datetime",
            categories: [
              "2018-09-19T00:00:00.000Z",
              "2018-09-19T01:30:00.000Z",
              "2018-09-19T02:30:00.000Z",
              "2018-09-19T03:30:00.000Z",
              "2018-09-19T04:30:00.000Z",
              "2018-09-19T05:30:00.000Z",
              "2018-09-19T06:30:00.000Z",
            ],
          },
          colors: ["#0085FF", "#FFBF1A"],
          tooltip: {
            x: {
              format: "dd/MM/yy HH:mm",
            },
          },
        }}
        series={series}
        height={355}
      />
    );
  }

  return null;
}

export default BigChart;

// dummy data
const series = [
  {
    name: "Income",
    data: [31, 40, 28, 51, 42, 109, 100],
  },
  {
    name: "Expanses",
    data: [11, 32, 45, 32, 34, 52, 41],
  },
];

const options = {
  chart: {
    height: 350,
    type: "area",
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  xaxis: {
    type: "datetime",
    categories: [
      "2018-09-19T00:00:00.000Z",
      "2018-09-19T01:30:00.000Z",
      "2018-09-19T02:30:00.000Z",
      "2018-09-19T03:30:00.000Z",
      "2018-09-19T04:30:00.000Z",
      "2018-09-19T05:30:00.000Z",
      "2018-09-19T06:30:00.000Z",
    ],
  },
  tooltip: {
    x: {
      format: "dd/MM/yy HH:mm",
    },
  },
};
