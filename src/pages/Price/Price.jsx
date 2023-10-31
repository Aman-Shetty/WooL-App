import React from "react";
import LineGraph from "./LineGraph";
import priceChart from "../../data/priceChart";

const App = () => {
  return (
    <div>
      {priceChart.map((item, index) => (
        <div key={index}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <LineGraph chartData={item.chart} />
          <p>{item.footer}</p>
        </div>
      ))}
    </div>
  );
};

export default App;
