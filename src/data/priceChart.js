// const woolPriceChart = {
//   type: "line",
//   height: 220,
//   series: [
//     {
//       name: "Sales",
//       data: [50, 40, 300, 320, 500, 350, 200, 230, 500],
//     },
//   ],
//   options: {
//     colors: ["#fff"],
//     stroke: {
//       lineCap: "round",
//     },
//     markers: {
//       size: 5,
//     },
//     xaxis: {
//       categories: [
//         "Apr",
//         "May",
//         "Jun",
//         "Jul",
//         "Aug",
//         "Sep",
//         "Oct",
//         "Nov",
//         "Dec",
//       ],
//     },
//   },
// };
export const priceChart = [
  //   {
  //     color: "Blue",
  //     title: "Wool price",
  //     description: "15% increase in today's price",
  //     footer: "updated 4 min ago",
  //     chart: woolPriceChart,
  //   },

  {
    color: "Blue",
    title: "Wool price",
    description: "15% increase in today's price",
    footer: "updated 4 min ago",
    chart: {
      type: "line",
      height: 500,
      series: [
        {
          name: "Rupees",
          data: [50, 40, 300, 320, 500, 350, 200, 230, 500],
        },
      ],
      options: {
        // ... chartsConfig,
        colors: ["#333"],
        stroke: {
          lineCap: "round",
        },
        markers: {
          size: 5,
          colors: ["#333"], // Set the marker color
          strokeColors: ["#333"], // Optional: Set the stroke color for the marker
          strokeWidth: 2,
        },
        xaxis: {
          categories: [
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
        },
      },
    },
  },
];

export default priceChart;
