import React from "react";
import { Pie } from "react-chartjs-2";

const WeightGraph = ({ asset }) => {
  const stock = [];
  const total = [];
  let sum = 0;
  asset.forEach((item) => {
    stock.push(item.name);
    total.push(item.total_quantity * item.avg_price);
  });
  total.forEach((item) => {
    sum += item;
  });
  const weight = total.map((item) => {
    return (item / sum).toFixed(3) * 100;
  });
  const data = {
    labels: stock,
    datasets: [
      {
        data: weight,
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };
  const options = {
    maintainAspectRatio: true,
    responsive: false,
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
  return <Pie data={data} width={400} height={400} options={options} />;
};

export default WeightGraph;
