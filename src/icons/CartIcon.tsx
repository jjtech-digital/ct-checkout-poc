import React from 'react';

const CartIcon = () => {
  return (
    <svg
      stroke='currentColor'
      fill='currentColor'
      strokeWidth='0'
      viewBox='0 0 512 512'
      height='24'
      width='24'
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle
        cx='176'
        cy='416'
        r='16'
        fill='none'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='32'
      />
      <circle
        cx='400'
        cy='416'
        r='16'
        fill='none'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='32'
      />
      <path
        fill='none'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='32'
        d='M48 80h64l48 272h256'
      />
      <path
        fill='none'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='32'
        d='M160 288h249.44a8 8 0 0 0 7.85-6.43l28.8-144a8 8 0 0 0-7.85-9.57H128'
      />
    </svg>
  );
};

export default CartIcon;
