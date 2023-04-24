import { ApexOptions } from 'apexcharts';
import dynamic from 'next/dynamic'
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });


export default function AreaChart(props: {
  series: number[];
  categories: string[];
}) {
  const series = [
    {
      name: 'series1',
      data: props.series,
    },
  ];

  const chartOptions: ApexOptions = {
    chart: {
      height: 350,
      type: 'area',
      fontFamily: '"DM Sans", sans-serif',
      foreColor: '#56616B',
      toolbar: {
        show: false,
      },
    },
    colors: ['#FF5403'],
    fill: {
      colors: ['#FF5403'],
    },
    markers: {
      colors: ['red'],
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'straight',
    },
    xaxis: {
      type: 'datetime',
      categories: props.categories,
    },
    tooltip: {
      enabled: false,
      x: {
        format: 'dd/MM/yy HH:mm',
      },
    },
  };

  return (
    <Chart options={chartOptions} series={series} type='area' height={500} />
  );
}
