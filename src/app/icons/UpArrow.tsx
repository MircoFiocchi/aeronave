import { FC } from 'react';

interface UpArrowProps {
  className?: string;
}

const UpArrow: FC<UpArrowProps> = ({ className }) => (
  <svg
    className={className}
    width='13'
    height='14'
    viewBox='0 0 13 14'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M1.7998 11.7787L11.6993 1.87921M11.6993 1.87921L3.90575 1.89458M11.6993 1.87921L11.6839 9.67276'
      stroke='#0451DD'
      strokeWidth='2'
      strokeLinecap='square'
    />
  </svg>
);

export default UpArrow;
