import { IconProps } from '@/types/props';

const KakaoIcon = ({ width = 21, height = 20, color = '#0D0D0D' }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 24 25`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.5 2.5C17.299 2.5 22 6.10725 22 10.5582C22 15.0082 17.299 18.6155 11.5 18.6155C10.9226 18.6158 10.3457 18.5796 9.773 18.5072L5.365 21.3455C4.864 21.6064 4.687 21.5779 4.893 20.9389L5.785 17.3179C2.905 15.8805 1 13.3897 1 10.5582C1 6.10824 5.701 2.5 11.5 2.5ZM17.407 10.4352L18.877 9.03322C18.9618 8.94649 19.0091 8.83074 19.009 8.71034C19.0088 8.58995 18.9612 8.47431 18.8762 8.38778C18.7912 8.30126 18.6753 8.2506 18.5531 8.24649C18.4309 8.24237 18.3118 8.28512 18.221 8.36572L16.293 10.2028V8.6847C16.293 8.56146 16.2433 8.44326 16.1548 8.35612C16.0662 8.26897 15.9462 8.22001 15.821 8.22001C15.6958 8.22001 15.5758 8.26897 15.4872 8.35612C15.3987 8.44326 15.349 8.56146 15.349 8.6847V11.2021C15.3313 11.2739 15.3313 11.3488 15.349 11.4207V12.8374C15.349 12.9606 15.3987 13.0788 15.4872 13.166C15.5758 13.2531 15.6958 13.3021 15.821 13.3021C15.9462 13.3021 16.0662 13.2531 16.1548 13.166C16.2433 13.0788 16.293 12.9606 16.293 12.8374V11.4955L16.72 11.0889L18.148 13.0904C18.1837 13.1404 18.229 13.1829 18.2813 13.2157C18.3337 13.2484 18.3921 13.2707 18.4532 13.2812C18.5143 13.2917 18.5769 13.2902 18.6374 13.2769C18.698 13.2636 18.7552 13.2387 18.806 13.2036C18.8568 13.1685 18.9 13.1239 18.9332 13.0724C18.9665 13.0208 18.9891 12.9633 18.9998 12.9032C19.0105 12.843 19.009 12.7814 18.9955 12.7218C18.982 12.6622 18.9567 12.6058 18.921 12.5558L17.407 10.4352ZM14.449 12.3294H12.989V8.69947C12.9834 8.58006 12.9313 8.46735 12.8435 8.38479C12.7557 8.30223 12.6389 8.25616 12.5175 8.25616C12.3961 8.25616 12.2793 8.30223 12.1915 8.38479C12.1037 8.46735 12.0516 8.58006 12.046 8.69947V12.7941C12.046 13.05 12.256 13.2587 12.517 13.2587H14.449C14.5742 13.2587 14.6942 13.2098 14.7828 13.1226C14.8713 13.0355 14.921 12.9173 14.921 12.7941C14.921 12.6708 14.8713 12.5526 14.7828 12.4655C14.6942 12.3783 14.5742 12.3294 14.449 12.3294ZM8.592 11.2543L9.288 9.57372L9.926 11.2543H8.592ZM11.115 11.7347L11.117 11.719C11.1168 11.6019 11.0714 11.4893 10.99 11.4039L9.944 8.64729C9.90015 8.51593 9.81663 8.40086 9.70459 8.31747C9.59255 8.23409 9.45733 8.18635 9.317 8.18063C9.17564 8.18002 9.03744 8.2218 8.92079 8.30041C8.80414 8.37903 8.71457 8.49075 8.664 8.62071L7.003 12.6326C6.97956 12.6891 6.96765 12.7496 6.96796 12.8106C6.96826 12.8716 6.98077 12.932 7.00478 12.9883C7.02878 13.0446 7.06381 13.0956 7.10785 13.1386C7.1519 13.1815 7.20411 13.2155 7.2615 13.2386C7.31889 13.2616 7.38033 13.2734 7.44232 13.2731C7.50431 13.2728 7.56563 13.2604 7.62279 13.2368C7.67994 13.2132 7.73181 13.1787 7.77543 13.1353C7.81904 13.092 7.85356 13.0406 7.877 12.9841L8.207 12.1837H10.277L10.576 12.9713C10.5963 13.0301 10.6285 13.0844 10.6705 13.1308C10.7125 13.1773 10.7635 13.2149 10.8206 13.2416C10.8777 13.2682 10.9396 13.2833 11.0027 13.286C11.0658 13.2886 11.1288 13.2788 11.188 13.257C11.2471 13.2353 11.3013 13.2021 11.3472 13.1594C11.3931 13.1166 11.4298 13.0653 11.4551 13.0083C11.4805 12.9514 11.494 12.89 11.4948 12.8278C11.4957 12.7657 11.4838 12.704 11.46 12.6464L11.115 11.7347ZM7.793 8.70439C7.793 8.58132 7.74341 8.46327 7.65511 8.37616C7.56681 8.28904 7.44701 8.23996 7.322 8.2397H4.077C3.95182 8.2397 3.83176 8.28866 3.74325 8.37581C3.65473 8.46295 3.605 8.58115 3.605 8.70439C3.605 8.82764 3.65473 8.94583 3.74325 9.03298C3.83176 9.12012 3.95182 9.16908 4.077 9.16908H5.237V12.8472C5.237 12.9705 5.28673 13.0887 5.37525 13.1758C5.46376 13.2629 5.58382 13.3119 5.709 13.3119C5.83418 13.3119 5.95424 13.2629 6.04275 13.1758C6.13127 13.0887 6.181 12.9705 6.181 12.8472V9.16908H7.321C7.582 9.16908 7.793 8.96037 7.793 8.70439Z"
        fill={color}
      />
    </svg>
  );
};

export default KakaoIcon;