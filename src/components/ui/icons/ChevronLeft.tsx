import { IconProps } from '@/types/props';

const ChevronLeft = ({ width = 24, height = 24, color = '#0D0D0D' }: IconProps) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox={`0 0 16 16`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path 
                fill={color}
                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
            />
        </svg>
    );
}

export default ChevronLeft;