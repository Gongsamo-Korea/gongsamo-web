import { IconProps } from '@/types/props';

const SymbolRedIcon = ({ width = 40, height = 40 }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 40 40`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_734_3885)">
        <path
          d="M11.582 1.76621L31.582 36.4072L28.4167 38.2347L8.41668 3.59373L11.582 1.76621Z"
          fill="#FF5555"
        />
        <path
          d="M3.59336 8.41748L38.2344 28.4175L36.4069 31.5828L1.76584 11.5828L3.59336 8.41748Z"
          fill="#FF5555"
        />
        <path d="M0 18.1719H40V21.8269H0V18.1719Z" fill="#FF5555" />
        <path
          d="M36.4069 8.41815L38.2344 11.5835L3.59336 31.5835L1.76584 28.4181L36.4069 8.41815Z"
          fill="#FF5555"
        />
        <path
          d="M28.4167 1.76623L31.582 3.59375L11.582 38.2348L8.41668 36.4072L28.4167 1.76623Z"
          fill="#FF5555"
        />
        <path d="M18.1731 0H21.8281V40H18.1731V0Z" fill="#FF5555" />
      </g>
      <defs>
        <clipPath id="clip0_734_3885">
          <rect width="40" height="40" fill="white" transform="matrix(-1 0 0 1 40 0)" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default SymbolRedIcon;
