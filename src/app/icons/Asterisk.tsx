import { FC } from 'react';

interface AsteriskProps {
  className?: string;
}

const Asterisk: FC<AsteriskProps> = ({ className }) => (
  <svg
    className={className}
    width='14'
    height='16'
    viewBox='0 0 14 16'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M14.0001 10.665L9.08006 8L14.0001 5.29399L12.8521 3.32599L8.05506 6.23699L8.21906 0.619995H5.84106L6.00506 6.23699L1.24906 3.32599L0.0600586 5.29399L4.98006 8L0.0600586 10.665L1.24906 12.674L6.00506 9.76299L5.84106 15.38H8.21906L8.05506 9.76299L12.8521 12.674L14.0001 10.665Z'
      fill='#212121'
    />
  </svg>
);

export default Asterisk;
