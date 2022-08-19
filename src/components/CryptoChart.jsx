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
      title: {
        display: true,
        text: "Chart.js Line Chart",
      },
    },
  };

  const labels = history.map(item => new Date(item.timestamp).toLocaleDateString());
  const prices = history.map(item => item.price);

  const data = {
    labels: labels,
    datasets: [{
      label: "Price in USD",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
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
