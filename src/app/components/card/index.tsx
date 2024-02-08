import React, { FC } from 'react';

import Image from 'next/image';

import useResize from '@/app/hooks/utils/useResize';

interface CardProps {
  src_image: string;
  alt: string;
  title: string;
  subtitle: string;
  action: string;
}

const Card: FC<CardProps> = ({ src_image, alt, title, subtitle, action }) => {
  const { device } = useResize();

  return (
    <div className={`${device === 'mobile' ? 'w-full' : 'max-w-sm'}  mr-3`}>
      <Image
        className={`${
          device === 'mobile' && 'w-full'
        } h-72 object-cover rounded mb-3`}
        src={src_image}
        alt={alt}
        width={384}
        height={282}
      />
      <hr className='border-t-2 border-black' />
      <div className='pt-4'>
        <a href='#'>
          <h1 className='mb-2 text-xl font-bold text-gray-900'>{title}</h1>
        </a>
        <p className='mb-3 text-base text-gray-500 font-light'>{subtitle}</p>
        <a
          href='#'
          className='text-blue-700 underline underline-offset-4'
        >
          {action}
        </a>
      </div>
    </div>
  );
};

export default Card;
