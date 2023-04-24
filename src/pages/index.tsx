import Image from 'next/image';
import AppLayout from 'components/layout/index';
import useViews from 'data/views';
import InfoIcon from 'assets/icons/info.svg';
import Nigeria from 'assets/icons/nigeria.svg';
import Germany from 'assets/icons/germany.svg';
import Finland from 'assets/icons/finland.svg';
import Ghana from 'assets/icons/ghana.svg';
import UnitedKingdom from 'assets/icons/uk.svg';
import AreaChart from 'components/charts/Area';
import PieChart from 'components/charts/Piechart';
import Facebook from 'assets/icons/facebook.svg';
import Insta from 'assets/icons/insta.svg';
import LinkedIn from 'assets/icons/linkedin.svg';
import Google from 'assets/icons/google.svg';
import { COLORS } from 'constants/index';

export default function Home() {
  const { data, isLoading, isError } = useViews();

  const icons: Record<string, any> = {
    Nigeria,
    Germany,
    Finland,
    Ghana,
    'United Kingdom': UnitedKingdom,
    facebook: Facebook,
    instagram: Insta,
    linkedin: LinkedIn,
    google: Google,
  };

  return (
    <AppLayout>
      {isLoading ? (
        <div className='grid place-items-center h-screen'>
          <span className='relative flex h-10 w-10'>
            <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75'></span>
            <span className='relative inline-flex rounded-full h-10 w-10 bg-sky-500'></span>
          </span>
        </div>
      ) : isError ? (
        <div className='grid place-items-center h-screen'>
          <p>Error fetching data , please reload and try again</p>
        </div>
      ) : (
        <div className='space-y-[2.875rem]'>
          <p className='font-bold text-lg'>Dashboard</p>
          <div className='flex justify-between'>
            <div className='space-y-2'>
              <h1 className='font-bold text-2xl'>
                Good morning, Blessing ⛅️
              </h1>
              <p className='text-sm'>Check out your dashboard summary.</p>
            </div>
            <button className='text-orange text-sm'>View analytics</button>
          </div>
          <div className='space-x-3'>
            {data &&
              [...new Set(Object.values(data?.graph_data?.views))]
                .sort((a, b) => a - b)
                .map((item, index) => (
                  <button
                    key={index}
                    className={`${
                      item === 50
                        ? 'border-orange bg-orange-light text-orange'
                        : 'border-primary text-dark-gray'
                    } border text-sm  font-medium py-3 px-4 rounded-full`}
                  >
                    {item} {item === 1 ? 'Day' : 'Days'}
                  </button>
                ))}
          </div>
          <div className='border border-primary p-4 rounded-2xl'>
            <div className='flex justify-between items-center'>
              <p className='text-lg font-medium'>Page Views</p>
              <button>
                <Image
                  src={InfoIcon}
                  alt='Picture of the author'
                  width={20}
                  height={20}
                />
              </button>
            </div>
            <p className='mt-2 text-sm text-dark-gray'>All time</p>
            <h3 className='font-medium text-5xl mt-6'>
              {data &&
                Object.values(data?.graph_data.views).reduce(
                  (sum, item) => (item += sum),
                  0
                )}
            </h3>
            {data && (
              <AreaChart
                series={Object.values(data?.graph_data.views)}
                categories={Object.keys(data?.graph_data.views).map((item) => {
                  return new Intl.DateTimeFormat('en-US', {
                    day: '2-digit',
                    month: 'short',
                  }).format(new Date(item));
                })}
              />
            )}
          </div>
          <div className='grid grid-cols-2 space-x-10'>
            <div className='border border-primary p-4 rounded-2xl'>
              <div className='flex justify-between items-center'>
                <p className='font-medium text-lg mt-6'>Top Locations</p>
                <button className='text-orange text-sm'>
                  View full reports
                </button>
              </div>
              <div className='flex items-center justify-between mt-4'>
                <div className='space-y-4'>
                  {data?.top_locations.map((item, index) => (
                    <div key={index} className='flex items-center space-x-2'>
                      <Image
                        src={icons[`${item.country}`]}
                        width={21}
                        height={15}
                        alt='country icon'
                      />
                      <p>
                        {`${item.country}`}{' '}
                        <span className='font-medium'>{item.percent}%</span>
                      </p>
                      <div
                        className={`w-3 h-3 bg-[${COLORS[index]}] rounded-full`}
                      ></div>
                    </div>
                  ))}
                </div>
                {data && (
                  <PieChart
                    series={data?.top_locations.map((item) => item.percent)}
                    labels={data?.top_locations.map((item) => item.country)}
                  />
                )}
              </div>
            </div>

            <div className='border border-primary p-4 rounded-2xl'>
              <div className='flex justify-between items-center capitalize'>
                <p className='font-medium text-lg mt-6'>Top Referral source</p>
                <button className='text-orange text-sm'>
                  View full reports
                </button>
              </div>
              <div className='flex items-center justify-between capitalize mt-4'>
                <div className='space-y-4'>
                  {data?.top_sources.map((item, index) => (
                    <div key={index} className='flex items-center space-x-2'>
                      <Image
                        src={icons[`${item.source}`]}
                        width={21}
                        height={15}
                        alt='country icon'
                      />
                      <p>
                        {`${item.source}`}{' '}
                        <span className='font-medium'>{item.percent}%</span>
                      </p>
                      <div
                        className={`w-3 h-3 bg-[${COLORS[index]}] rounded-full`}
                      ></div>
                    </div>
                  ))}
                </div>
                {data && (
                  <PieChart
                    series={data?.top_sources.map((item) => item.percent)}
                    labels={data?.top_sources.map((item) => item.source)}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </AppLayout>
  );
}
