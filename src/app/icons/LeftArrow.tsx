import { FC } from 'react';

interface LeftArrowProps {
  disabled?: boolean;
}

const LeftArrow: FC<LeftArrowProps> = ({ disabled }) => (
  <svg
    width='29'
    height='22'
    viewBox='0 0 29 22'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M27.75 10.829L1.75 10.829M1.75 10.829L10.7935 19.829M1.75 10.829L10.7935 1.82898'
      stroke={disabled ? '#E0E0E0' : '#0451DD'}
      strokeWidth='2'
      strokeLinecap='square'
    />
  </svg>
);

export default LeftArrow;
