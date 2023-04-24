import Link from 'next/link';
import { ReactElement } from 'react';
import Logo from 'assets/icons/logo.svg';
import Dashboard from 'assets/icons/dashboard.svg';
import Pencil from 'assets/icons/pencil.svg';
import People from 'assets/icons/people.svg';
import HourGlass from 'assets/icons/hourglass.svg';
import Camera from 'assets/icons/camera.svg';
import Video from 'assets/icons/video.svg';
import Delete from 'assets/icons/delete.svg';
import Pin from 'assets/icons/pin.svg';
import Clock from 'assets/icons/clock.svg';
import Blessing from 'assets/images/image.png';
import Ellips from 'assets/icons/ellips.svg';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function AppLayout(props: { children: ReactElement }) {
  const Navlinks = [
    {
      icon: Dashboard,
      name: 'Dashboard',
      route: '/',
    },
    {
      icon: Pencil,
      name: 'Item 1',
    },
    {
      icon: People,
      name: 'Item 2',
    },
    {
      icon: HourGlass,
      name: 'Item 3',
    },
    {
      name: 'OTHERS 1',
      children: [
        {
          icon: Camera,
          name: 'Item 4',
        },
        {
          icon: Delete,
          name: 'Item 5',
        },
      ],
    },
    {
      name: 'OTHERS 2',
      children: [
        {
          icon: Video,
          name: 'Item 6',
        },
        {
          icon: Pin,
          name: 'Item 7',
        },
        {
          icon: Clock,
          name: 'Item 8',
        },
      ],
    },
  ];

  return (
    <div className=''>
      <nav>
        <h3>Dashboard</h3>
      </nav>
      <div className='bg-white py-[2.375rem] flex flex-col border-r border-primary top-0 fixed overflow-y-auto overflow-x-hidden items-center h-screen duration-100'>
        <div className='w-[19rem] flex flex-col justify-between h-full'>
          <div>
            <div className='px-[3.796rem]'>
              <Image
                src={Logo}
                alt='Picture of the author'
                width={40}
                height={40}
              />
            </div>
            <div className='mt-[3.125rem] space-y-6'>
              {Navlinks.map((item, index) => (
                <Nav item={item} key={index} />
              ))}
            </div>
          </div>

          <div className='flex justify-between pl-[3.796rem] pr-6'>
            <div className='flex items-center space-x-3'>
              <Image src={Blessing} alt='blessing' width={32} height={32} />
              <p className='font-medium text-gray text-[0.938rem]'>
                Blessing Daniels
              </p>
            </div>
            <button>
              <Image src={Ellips} alt='ellips icon' width={20} height={20} />
            </button>
          </div>
        </div>
      </div>
      <main className='ml-[22.75rem] mr-[3.75rem] pb-10'>{props.children}</main>
    </div>
  );
}

function Nav(props: { item: any }) {
  const { item } = props;
  const router = useRouter();

  return (
    <>
      <Link
        href='/'
        className={`${
          router.route === item.route && ' border-red-500 border-l-2'
        } px-[3.796rem] flex space-x-4 `}
        key={item.name}
      >
        {item.icon && (
          <Image src={item.icon} alt='dashboard icon' width={20} height={20} />
        )}
        <span
          className={`${
            router.pathname === item.route ? 'text-orange' : 'text-gray'
          } ${item.children ? 'text-xs' : 'font-medium'}`}
        >
          {item.name}
        </span>
      </Link>
      <div className='mt-6 space-y-6'>
        {item.children?.map((item: any, index: any) => (
          <Nav item={item} key={index} />
        ))}
      </div>
    </>
  );
}
