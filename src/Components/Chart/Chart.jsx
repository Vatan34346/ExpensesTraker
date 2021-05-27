import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (porps) => {

    const dataPointValue = porps.dataPoints.map(item=>item.value)
    const totalMaximum=Math.max(...dataPointValue);
  return (
    <div className="chart">
      {porps.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
