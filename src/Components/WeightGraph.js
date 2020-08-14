import React from "react";
import { Pie } from "react-chartjs-2";

const WeightGraph = ({ asset }) => {
  const code = [];
  const total = [];
  let sum = 0;
  asset.forEach((stock) => {
    code.push(stock.stock);
    total.push(stock.total_quantity * stock.avg_price);
  });
  total.forEach((item) => {
    sum += item;
  });
  const weight = total.map((item) => {
    return (item / sum).toFixed(3) * 100;
  });
  const data = {
    labels: code,
    datasets: [
      {
        data: weight,
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };
  const options = {
    tooltips: {
      callbacks: {
        label: (tooltipItem, data) => {
          var label = data.labels[tooltipItem.index] || "";
          var value =
            data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
          if (label) {
            label += ": ";
          }
          label = label + value + "%";
          return label;
        },
      },
    },
  };
  return <Pie data={data} width={500} height={500} options={options} />;
};

export default WeightGraph;
