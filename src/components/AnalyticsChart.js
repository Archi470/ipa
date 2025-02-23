import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

export default function AnalyticsChart({ data }) {
  const chartData = {
    labels: data.map((d) => new Date(d.timestamp).toLocaleDateString()),
    datasets: [
      {
        label: "Processed Documents",
        data: data.map((d) => d.response.length),
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  return <Bar data={chartData} />;
}