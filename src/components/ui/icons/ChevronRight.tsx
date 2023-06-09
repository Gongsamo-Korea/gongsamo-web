import { IconProps } from '@/types/props';

const ChevronRight = ({ width = 24, height = 24, color = '#0D0D0D' }: IconProps) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox={`0 0 16 16`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                fill={color}
            />
        </svg>
    );
}

export default ChevronRight;