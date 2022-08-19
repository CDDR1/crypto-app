import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const CryptoChart = ({ history }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  const timestamps = [];
  const prices = [];
  for (let i = history.length - 1; i >= 0; i--) {
    timestamps.push(new Date(history[i].timestamp * 1000).toLocaleDateString());
    prices.push(history[i].price);
  }


  const data = {
    labels: timestamps,
    datasets: [{
      label: "Price in USD",
      backgroundColor: "#0071bd",
      borderColor: "#0071bd",
      data: prices,
    }]
  };

  return (
    <div className="chart-container">
      <Line options={options} data={data} />
    </div>
  );
};

export default CryptoChart;
