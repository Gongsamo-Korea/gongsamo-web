import { IconProps } from '@/types/props';

const SymbolYellowIcon = ({ width = 40, height = 40 }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 40 40`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_734_3883)">
        <path
          d="M24.8864 30.6338C30.6258 43.1234 9.37472 43.1234 15.1141 30.6338C2.47257 43.1234 -3.12239 37.5284 9.36717 24.8869C-3.12239 30.6262 -3.12239 9.37521 9.36717 15.1146C-3.12239 2.47306 2.47257 -3.1219 15.1141 9.36766C9.37472 -3.1219 30.6258 -3.1219 24.8864 9.36766C37.5279 -3.1219 43.1229 2.47306 30.6333 15.1146C43.1229 9.37521 43.1229 30.6262 30.6333 24.8869C43.1229 37.5284 37.5279 43.1234 24.8864 30.6338Z"
          fill="#FFCE00"
        />
      </g>
      <defs>
        <clipPath id="clip0_734_3883">
          <rect width="40" height="40" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default SymbolYellowIcon;
