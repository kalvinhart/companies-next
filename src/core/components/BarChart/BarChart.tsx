import { BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip } from 'chart.js';
import { Bar } from 'react-chartjs-2';

type Props = {
  title: string;
  legendLabel?: string;
  labels: string[];
  data: number[];
};

const BarChart: React.FC<Props> = ({ title, legendLabel, labels, data }) => {
  ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

  const options = {
    indexAxis: 'y' as const,
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'right' as const,
      },
      title: {
        display: true,
        text: title,
      },
    },
  };

  const chartData = {
    labels,
    datasets: [
      {
        label: legendLabel ?? '',
        data,
        borderColor: 'rgb(1, 34, 57)',
        backgroundColor: 'rgba(1, 34, 57, 0.5)',
      },
    ],
  };
  return (
    <Bar
      options={options}
      data={chartData}
      title={title}
    />
  );
};

export default BarChart;
