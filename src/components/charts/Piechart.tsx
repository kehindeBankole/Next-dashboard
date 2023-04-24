import { ApexOptions } from 'apexcharts';
import { COLORS } from 'constants/index';
import dynamic from 'next/dynamic'
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function PieChart(props: {
  series: number[];
  labels: string[];
}) {
  const series = props.series;
  const chartOptions: ApexOptions = {
    chart: {
      width: 380,
      type: 'donut',
    },
    labels: props.labels,
    colors: COLORS,
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        expandOnClick: false,
        donut: {
          size: '60%',
          labels: {
            show: false,
          },
        },
        customScale: 0.75,
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 400,
          },
          legend: {
            show: false,
          },
        },
      },
    ],
    legend: {
      position: 'left',
      offsetY: 0,
      height: 230,
      show: false,
    },
  };

  return (
    <Chart options={chartOptions} series={series} type='donut' width={300} />
  );
}
