import { FC, useState, useEffect } from 'react';

import UpArrow from '@/app/icons/UpArrow';
import DownArrow from '@/app/icons/DownArrow';

import useResize from '@/app/hooks/utils/useResize';

interface InformationProps {
  hideArrow?: boolean;
  showLine?: boolean;
  transparentButton?: boolean;
  className?: string;
  header: string;
  title: string;
  subtitle: string;
  textButton: string;
}

const Information: FC<InformationProps> = ({
  hideArrow = false,
  showLine = false,
  transparentButton = false,
  className,
  header,
  title,
  subtitle,
  textButton,
}) => {
  const [hideInformation, setHideInformation] = useState<boolean>(false);
  const { device } = useResize();

  useEffect(() => {
    if (device === 'mobile') setHideInformation(true);
  }, [device]);

  return (
    <div
      className={`bg-white lg:pl-48 min-h-44 flex flex-col gap-4 rounded-tr-lg ${className}`}
    >
      <div className='flex flex-row justify-between w-full text-ellipsis'>
        <p className='font-medium text-xs text-slate-400'>{header}</p>
        {!hideArrow && (
          <button
            className='hidden lg:block'
            onClick={() => setHideInformation(!hideInformation)}
          >
            {hideInformation ? <DownArrow /> : <UpArrow />}
          </button>
        )}
      </div>
      <p className='text-3xl lg:text-4xl font-bold overflow-hidden'>{title}</p>
      {(showLine || hideInformation) && (
        <>
          <hr className='border-t-1 border-blue-700 w-1/4' />
          <p className='text-base text-gray-500 font-light'>{subtitle}</p>

          <button
            className={`${
              transparentButton
                ? 'bg-transparent  text-blue-700 border border-blue-500 font-semibold'
                : 'bg-blue-700 text-white font-bold'
            } w-full lg:w-40 p-3 text-base`}
          >
            {textButton}
          </button>
        </>
      )}
    </div>
  );
};

export default Information;
