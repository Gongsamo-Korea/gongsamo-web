import { IconProps } from '@/types/props';

const SymbolGreenIcon = ({ width = 40, height = 40 }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 40 40`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_734_3875)">
        <path
          d="M37.2667 9.52653L0 21.8872L2.73323 30.4743L40 18.1136L37.2667 9.52653Z"
          fill="#00D57D"
        />
        <path
          d="M12.0619 1.16604L4.90625 6.47314L27.9383 38.8338L35.094 33.5267L12.0619 1.16604Z"
          fill="#00D57D"
        />
        <path
          d="M27.9383 1.16618L4.90625 33.5269L12.0619 38.834L35.094 6.47328L27.9383 1.16618Z"
          fill="#00D57D"
        />
        <path
          d="M2.73323 9.52572L0 18.1128L37.2667 30.4735L40 21.8864L2.73323 9.52572Z"
          fill="#00D57D"
        />
        <path d="M24.423 0H15.5781V40H24.423V0Z" fill="#00D57D" />
      </g>
      <defs>
        <clipPath id="clip0_734_3875">
          <rect width="40" height="40" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default SymbolGreenIcon;
