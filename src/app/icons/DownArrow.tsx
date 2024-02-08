import { FC } from 'react';

interface DownArrowProps {
  className?: string;
}

const DownArrow: FC<DownArrowProps> = ({ className }) => (
  <svg
    className={className}
    width='13'
    height='13'
    viewBox='0 0 13 13'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M10.9497 2.05025L1.05021 11.9497M1.05021 11.9497L8.84376 11.9344M1.05021 11.9497L1.06558 4.1562'
      stroke='#0451DD'
      strokeWidth='2'
      strokeLinecap='square'
    />
  </svg>
);

export default DownArrow;
