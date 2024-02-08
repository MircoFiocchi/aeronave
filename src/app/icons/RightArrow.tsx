import { FC } from 'react';

interface RigthArrowProps {
  disabled?: boolean;
}

const RigthArrow: FC<RigthArrowProps> = ({ disabled }) => (
  <svg
    width='30'
    height='22'
    viewBox='0 0 30 22'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M1.75 10.829L27.75 10.829M27.75 10.829L18.7065 1.82898M27.75 10.829L18.7065 19.829'
      stroke={disabled ? '#E0E0E0' : '#0451DD'}
      strokeWidth='2'
      strokeLinecap='square'
    />
  </svg>
);

export default RigthArrow;
