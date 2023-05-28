import { IconProps } from '@/types/props';

const NewsLetterIcon = ({ width = 24, height = 24, color = '#0D0D0D' }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 24 24`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_455_2955)">
        <path
          d="M13.5 2.25V3V5.25H6.75C4.68786 5.25 3 6.93786 3 9V16.5H4.5V9C4.5 7.74864 5.49864 6.75 6.75 6.75C8.00136 6.75 9 7.74864 9 9V9.75H6V16.5H9V17.25H1.5V18.75H12V21.75H13.5V18.75H20.25H21V18V9C21 6.93786 19.3121 5.25 17.25 5.25H15.75V6.75H17.25C18.5014 6.75 19.5 7.74864 19.5 9V17.25H10.5V9C10.5 8.15064 10.2075 7.38058 9.72656 6.75H13.5V9H15V3.75H16.5V2.25H14.25H13.5Z"
          fill={color}
        />
      </g>
    </svg>
  );
};

export default NewsLetterIcon;
