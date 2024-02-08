import { FC, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import MenuIcon from '@/app/icons/menu';
import RightVector from '@/app/icons/RightVector';

import useListItemMenu from '@/app/hooks/navBar/useListItemMenu';

const NavBar: FC = () => {
  const [showList, setShowList] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const { listMenu } = useListItemMenu();

  return (
    <nav className='relative z-10 bg-white border-gray-200'>
      <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto'>
        <div className='flex justify-between w-full border-b-gray-200 border-b-2 h-16 items-center xl:border-none'>
          <Image
            src='/logo.png'
            alt='AeroNex'
            className='w-28 h-8 ml-4'
            width={178}
            height={48}
          />

          <div
            className='flex items-center py-2 pl-2 w-14 justify-center xl:hidden border-l-gray-200 border-l-2 h-full'
            onClick={() => setShowList(!showList)}
          >
            <MenuIcon className='w-5 h-5' />
          </div>
          <div
            className='hidden xl:text-center xl:mx-auto xl:flex flex-row text-base font-light h-full items-center'
            id='navbar-default'
          >
            {listMenu.map((item, index) => (
              <div
                className='flex px-2 cursor-pointer h-full'
                key={item.id}
              >
                <Link
                  key={item.id}
                  href={item.href}
                  className='flex items-center hover:border-b-blue-500 hover:border-b-2 h-full'
                  onClick={() => setCurrentIndex(index)}
                >
                  <h1
                    className={`px-2 ${
                      currentIndex === index && 'text-blue-500'
                    }`}
                  >
                    {item.title}
                  </h1>
                </Link>
                {index >= listMenu.length - 4 && (
                  <div className='h-full w-px bg-gray-300 ml-4' />
                )}
              </div>
            ))}
          </div>
        </div>
        {showList && (
          <div className='w-full xl:hidden'>
            <div className='divide-y divide-gray-200 gap-6 p-3'>
              {listMenu.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className='flex justify-between place-items-center'
                >
                  <div className='flex justify-between place-items-center py-5'>
                    {item.titleMobile || item.title}
                  </div>
                  <RightVector />
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
