import React from "react";
import ReactApexChart from "react-apexcharts";

const LineGraph = ({ chartData }) => {
  return (
    <div className="bg-white border-black border-solid">
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type={chartData.type}
        height={chartData.height}
      />
    </div>
  );
};

export default LineGraph;
