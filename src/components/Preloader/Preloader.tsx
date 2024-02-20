import { ReactComponent } from "../../types/types";

interface IPreloaderProps {
  isLoading: boolean;
  onClick: () => void;
}

const Preloader: ReactComponent<IPreloaderProps> = ({ isLoading, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`opacity-0 transition-opacity duration-1000 ease-out fixed top-0 left-0 w-full h-full bg-backgroundMe flex justify-center items-center ${
        isLoading ? "visibleLoader" : "hiddenLoader"
      }`}
    >
      <div className="absolute top-0 left-0">
        <svg
          width="357"
          height="469"
          viewBox="0 0 357 469"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_409_586" fill="white">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M-45.699 55.3163C-44.6108 64.4937 -40.7921 72.5855 -34.349 79.367C-30.35 83.5765 -27.6141 85.7154 -23.7194 87.6783L-21.0736 89.0122L-24.7161 89.0113C-28.685 89.01 -32.6243 88.2412 -35.9758 86.8136L-38.1212 85.8995L-40.3304 87.6348C-47.705 93.428 -54.4186 105.792 -57.2902 118.867L-58.1812 122.925L-28.9276 177.911C-12.8384 208.153 0.482513 232.849 0.673737 232.79C0.865448 232.732 7.23706 221.712 14.833 208.302L28.6443 183.919L24.0466 179.324C16.8436 172.126 11.6112 164.197 8.31201 155.48C0.318604 134.36 7.91544 114.545 26.4624 108.138C29.4766 107.096 30.6522 106.942 35.6123 106.933C42.3199 106.922 45.2444 107.586 51.3273 110.502C55.8836 112.686 59.4842 115.173 63.6689 119.026L66.4559 121.592L66.7372 119.9C67.1761 117.261 67.0755 110.919 66.5237 106.444C63.8269 84.5724 49.4646 71.2086 24.2296 67.0901C21.8506 66.7018 14.8844 66.1815 8.74911 65.934C-19.7723 64.7824 -28.1068 63.1204 -40.319 56.1493C-42.7558 54.7579 -45.0356 53.3914 -45.3853 53.1122C-45.9211 52.6837 -45.9703 53.0281 -45.699 55.3163ZM-290.23 122.409C-290.068 123.415 -289.235 126.657 -288.379 129.612C-280.681 156.191 -260.784 176.245 -234.601 183.815C-226.838 186.06 -220.807 186.865 -211.62 186.882C-202.522 186.9 -197.708 186.314 -189.538 184.193C-165.882 178.051 -145.414 161.646 -132.902 138.797C-131.88 136.931 -131.041 135.265 -131.037 135.096C-131.033 134.927 -133.746 135.701 -137.063 136.817C-153.145 142.226 -173.765 146.393 -191.814 147.882C-200.196 148.573 -220.977 148.176 -228.011 147.191C-251.807 143.858 -270.814 136.192 -286.928 123.428L-290.524 120.58L-290.23 122.409ZM-124.512 174.306C-149.342 199.071 -178.686 214.803 -208.043 219.087C-214.624 220.048 -225.442 220.422 -230.971 219.88C-233.475 219.635 -235.615 219.521 -235.727 219.627C-236.017 219.901 -234.561 222.332 -232.455 225.095C-224.372 235.697 -202.509 242.592 -181.911 241.034C-156.079 239.081 -135.905 226.599 -125.805 206.321C-120.855 196.382 -118.006 183.402 -118.372 172.45L-118.51 168.319L-124.512 174.306ZM-102.801 207.872C-105.01 213.277 -110.382 223.01 -114.876 229.747C-124.609 244.338 -136.619 256.506 -149.966 265.298C-158.493 270.915 -170.823 276.227 -182.176 279.176L-184.375 279.747L-181.265 282.089C-171.569 289.391 -162.15 292.625 -150.545 292.637C-143.96 292.644 -139.145 291.866 -133.392 289.864C-116.278 283.909 -102.445 269.748 -96.8674 252.473C-93.184 241.065 -93.0492 228.125 -96.4845 215.72C-97.5213 211.976 -100.579 203.951 -100.964 203.963C-101.098 203.968 -101.925 205.727 -102.801 207.872ZM-75.8773 248.347C-79.1077 278.249 -93.622 304.494 -114.879 318.874L-119.764 322.179L-118.226 322.821C-113.715 324.707 -109.452 325.44 -103.029 325.436C-95.6927 325.43 -92.4505 324.765 -86.5838 322.062C-74.2204 316.367 -65.3287 305.696 -61.5045 291.965C-60.3558 287.84 -60.2443 286.759 -60.2443 279.747C-60.2443 272.746 -60.3571 271.649 -61.5004 267.53C-63.6354 259.836 -68.0227 251.894 -74.2218 244.501L-75.3204 243.191L-75.8773 248.347ZM-42.607 298.008C-58.4899 317.337 -67.7404 337.916 -71.2131 361.648C-72.2084 368.448 -72.3391 384.963 -71.448 391.286C-68.8805 409.506 -63.1928 424.829 -54.0821 438.068C-41.3102 456.625 -24.2066 467.295 -4.6825 468.878C-2.01074 469.096 -1.63373 469.041 -2.3504 468.557C-2.82074 468.24 -5.58673 466.43 -8.49704 464.53C-32.1317 449.122 -44.9891 424.451 -44.9736 394.543C-44.9695 386.684 -44.5161 381.701 -43.1492 374.482C-39.7608 356.59 -31.2124 338.71 -20.7886 327.711L-19.073 325.901L-25.7091 314.589C-29.3589 308.367 -33.5663 300.986 -35.0589 298.186C-36.5518 295.387 -37.9523 293.096 -38.1718 293.096C-38.3908 293.096 -40.3869 295.306 -42.607 298.008ZM-1.71799 349.422C-14.427 370.333 -16.7017 395.273 -8.19745 420.471C-6.10849 426.662 -0.156708 439.277 0.814453 439.574C1.08356 439.657 2.34338 437.734 3.61417 435.301C11.853 419.534 16.0573 400.16 14.6763 384.326C13.799 374.27 11.4637 365.27 7.58853 357.011C5.3985 352.343 1.47327 345.584 0.952393 345.584C0.766632 345.584 -0.434937 347.312 -1.71799 349.422Z"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M292.229 122.409C292.069 123.415 291.236 126.657 290.38 129.612C282.681 156.191 262.784 176.245 236.599 183.815C228.836 186.06 222.808 186.865 213.62 186.882C204.523 186.9 199.71 186.314 191.537 184.193C167.884 178.051 147.413 161.646 134.901 138.797C133.882 136.931 133.039 135.265 133.039 135.096C133.035 134.927 135.744 135.701 139.063 136.817C155.144 142.226 175.765 146.393 193.814 147.882C202.196 148.573 222.976 148.176 230.011 147.191C253.805 143.858 272.814 136.192 288.928 123.428L292.525 120.58L292.229 122.409ZM126.51 174.306C151.343 199.071 180.687 214.803 210.046 219.087C216.625 220.048 227.443 220.422 232.97 219.88C235.475 219.635 237.615 219.521 237.728 219.627C238.015 219.901 236.563 222.332 234.455 225.095C226.373 235.697 204.509 242.592 183.911 241.034C158.081 239.081 137.907 226.598 127.803 206.321C122.854 196.382 120.008 183.402 120.373 172.45L120.509 168.319L126.51 174.306ZM104.801 207.872C107.009 213.277 112.382 223.01 116.876 229.747C126.61 244.338 138.621 256.506 151.966 265.298C160.494 270.915 172.824 276.227 184.175 279.176L186.374 279.747L183.264 282.089C173.571 289.391 164.151 292.625 152.545 292.637C145.961 292.644 141.144 291.866 135.393 289.864C118.278 283.909 104.446 269.748 98.8679 252.473C95.1844 241.065 95.0497 228.125 98.485 215.72C99.5217 211.976 102.579 203.951 102.966 203.963C103.098 203.968 103.927 205.727 104.801 207.872ZM77.8777 248.347C81.1081 278.249 95.6225 304.494 116.88 318.874L121.766 322.179L120.227 322.821C115.715 324.707 111.453 325.44 105.029 325.436C97.6932 325.43 94.451 324.765 88.5843 322.062C76.2209 316.367 67.3291 305.696 63.505 291.965C62.3562 287.84 62.2447 286.759 62.2447 279.747C62.2447 272.746 62.3576 271.649 63.5009 267.53C65.6358 259.836 70.0232 251.894 76.2223 244.501L77.3209 243.191L77.8777 248.347ZM44.6074 298.008C60.4904 317.337 69.7409 337.917 73.2135 361.648C74.2088 368.448 74.3395 384.963 73.4485 391.286C70.881 409.506 65.1933 424.829 56.0826 438.068C43.3107 456.625 26.207 467.295 6.68292 468.878C4.01117 469.096 3.63419 469.041 4.35086 468.557C4.8212 468.24 7.58719 466.43 10.4975 464.53C34.1321 449.122 46.9896 424.451 46.9741 394.543C46.97 386.684 46.5165 381.701 45.1497 374.482C41.7613 356.59 33.2128 338.71 22.789 327.711L21.0734 325.901L27.7095 314.589C31.3593 308.367 35.5668 300.986 37.0593 298.186C38.5523 295.387 39.9528 293.096 40.1722 293.096C40.3913 293.096 42.3873 295.306 44.6074 298.008Z"
            />
            <path d="M-354.362 4.13027C-355.001 7.65922 -355.1 10.2968 -354.92 18.9714C-354.727 28.2411 -354.561 30.0977 -353.547 34.2723C-344.161 72.9398 -309.263 99.7421 -256.696 108.656C-240.566 111.391 -229.187 112.095 -200.921 112.105C-171.003 112.117 -159.327 112.856 -146.326 115.561C-135.658 117.781 -125.555 121.809 -118.008 126.85C-110.907 131.595 -103.434 139.429 -98.8453 146.942C-95.4396 152.517 -77.9535 184.674 -31.7957 270.245C-14.2098 302.847 0.33136 329.681 0.518036 329.876C0.704712 329.681 16.2102 302.847 33.7961 270.245C79.9539 184.674 97.44 152.517 100.844 146.942C105.434 139.429 112.905 131.595 120.008 126.85C127.553 121.809 137.661 117.781 148.324 115.561C161.328 112.856 173.002 112.117 202.92 112.105C231.185 112.095 242.568 111.391 258.695 108.656C311.265 99.7421 346.16 72.9398 355.549 34.2723C356.559 30.0977 356.728 28.2411 356.919 18.9714C357.101 10.2968 357.001 7.65922 356.364 4.13027C355.863 1.37959 355.398 -0.101389 355.061 0.00539875C354.774 0.0977063 353.24 2.60177 351.656 5.57098C336.462 34.0158 319.06 51.915 295.348 63.486C278.692 71.6136 261.186 75.9914 236.613 78.1742C233.608 78.4412 219.78 78.8439 205.879 79.0692C181.999 79.4566 172.51 79.8529 161.942 80.9036C130.03 84.0769 110.21 92.2547 92.9393 109.374C82.2805 119.94 75.0439 130.162 63.5296 150.917C42.4957 188.831 21.4977 228.164 0.611816 265.946C-20.846 225.449 -40.4953 188.831 -61.5292 150.917C-73.0435 130.162 -80.2801 119.94 -90.9389 109.374C-108.208 92.2547 -128.029 84.0769 -159.943 80.9036C-170.511 79.8529 -179.998 79.4566 -203.88 79.0692C-217.778 78.8439 -231.608 78.4412 -234.613 78.1742C-259.188 75.9914 -276.693 71.6136 -293.348 63.486C-317.06 51.915 -334.462 34.0158 -349.655 5.57098C-351.241 2.60177 -352.774 0.0977063 -353.061 0.00539875C-353.397 -0.101389 -353.864 1.37959 -354.362 4.13027Z" />
          </mask>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M-45.699 55.3163C-44.6108 64.4937 -40.7921 72.5855 -34.349 79.367C-30.35 83.5765 -27.6141 85.7154 -23.7194 87.6783L-21.0736 89.0122L-24.7161 89.0113C-28.685 89.01 -32.6243 88.2412 -35.9758 86.8136L-38.1212 85.8995L-40.3304 87.6348C-47.705 93.428 -54.4186 105.792 -57.2902 118.867L-58.1812 122.925L-28.9276 177.911C-12.8384 208.153 0.482513 232.849 0.673737 232.79C0.865448 232.732 7.23706 221.712 14.833 208.302L28.6443 183.919L24.0466 179.324C16.8436 172.126 11.6112 164.197 8.31201 155.48C0.318604 134.36 7.91544 114.545 26.4624 108.138C29.4766 107.096 30.6522 106.942 35.6123 106.933C42.3199 106.922 45.2444 107.586 51.3273 110.502C55.8836 112.686 59.4842 115.173 63.6689 119.026L66.4559 121.592L66.7372 119.9C67.1761 117.261 67.0755 110.919 66.5237 106.444C63.8269 84.5724 49.4646 71.2086 24.2296 67.0901C21.8506 66.7018 14.8844 66.1815 8.74911 65.934C-19.7723 64.7824 -28.1068 63.1204 -40.319 56.1493C-42.7558 54.7579 -45.0356 53.3914 -45.3853 53.1122C-45.9211 52.6837 -45.9703 53.0281 -45.699 55.3163ZM-290.23 122.409C-290.068 123.415 -289.235 126.657 -288.379 129.612C-280.681 156.191 -260.784 176.245 -234.601 183.815C-226.838 186.06 -220.807 186.865 -211.62 186.882C-202.522 186.9 -197.708 186.314 -189.538 184.193C-165.882 178.051 -145.414 161.646 -132.902 138.797C-131.88 136.931 -131.041 135.265 -131.037 135.096C-131.033 134.927 -133.746 135.701 -137.063 136.817C-153.145 142.226 -173.765 146.393 -191.814 147.882C-200.196 148.573 -220.977 148.176 -228.011 147.191C-251.807 143.858 -270.814 136.192 -286.928 123.428L-290.524 120.58L-290.23 122.409ZM-124.512 174.306C-149.342 199.071 -178.686 214.803 -208.043 219.087C-214.624 220.048 -225.442 220.422 -230.971 219.88C-233.475 219.635 -235.615 219.521 -235.727 219.627C-236.017 219.901 -234.561 222.332 -232.455 225.095C-224.372 235.697 -202.509 242.592 -181.911 241.034C-156.079 239.081 -135.905 226.599 -125.805 206.321C-120.855 196.382 -118.006 183.402 -118.372 172.45L-118.51 168.319L-124.512 174.306ZM-102.801 207.872C-105.01 213.277 -110.382 223.01 -114.876 229.747C-124.609 244.338 -136.619 256.506 -149.966 265.298C-158.493 270.915 -170.823 276.227 -182.176 279.176L-184.375 279.747L-181.265 282.089C-171.569 289.391 -162.15 292.625 -150.545 292.637C-143.96 292.644 -139.145 291.866 -133.392 289.864C-116.278 283.909 -102.445 269.748 -96.8674 252.473C-93.184 241.065 -93.0492 228.125 -96.4845 215.72C-97.5213 211.976 -100.579 203.951 -100.964 203.963C-101.098 203.968 -101.925 205.727 -102.801 207.872ZM-75.8773 248.347C-79.1077 278.249 -93.622 304.494 -114.879 318.874L-119.764 322.179L-118.226 322.821C-113.715 324.707 -109.452 325.44 -103.029 325.436C-95.6927 325.43 -92.4505 324.765 -86.5838 322.062C-74.2204 316.367 -65.3287 305.696 -61.5045 291.965C-60.3558 287.84 -60.2443 286.759 -60.2443 279.747C-60.2443 272.746 -60.3571 271.649 -61.5004 267.53C-63.6354 259.836 -68.0227 251.894 -74.2218 244.501L-75.3204 243.191L-75.8773 248.347ZM-42.607 298.008C-58.4899 317.337 -67.7404 337.916 -71.2131 361.648C-72.2084 368.448 -72.3391 384.963 -71.448 391.286C-68.8805 409.506 -63.1928 424.829 -54.0821 438.068C-41.3102 456.625 -24.2066 467.295 -4.6825 468.878C-2.01074 469.096 -1.63373 469.041 -2.3504 468.557C-2.82074 468.24 -5.58673 466.43 -8.49704 464.53C-32.1317 449.122 -44.9891 424.451 -44.9736 394.543C-44.9695 386.684 -44.5161 381.701 -43.1492 374.482C-39.7608 356.59 -31.2124 338.71 -20.7886 327.711L-19.073 325.901L-25.7091 314.589C-29.3589 308.367 -33.5663 300.986 -35.0589 298.186C-36.5518 295.387 -37.9523 293.096 -38.1718 293.096C-38.3908 293.096 -40.3869 295.306 -42.607 298.008ZM-1.71799 349.422C-14.427 370.333 -16.7017 395.273 -8.19745 420.471C-6.10849 426.662 -0.156708 439.277 0.814453 439.574C1.08356 439.657 2.34338 437.734 3.61417 435.301C11.853 419.534 16.0573 400.16 14.6763 384.326C13.799 374.27 11.4637 365.27 7.58853 357.011C5.3985 352.343 1.47327 345.584 0.952393 345.584C0.766632 345.584 -0.434937 347.312 -1.71799 349.422Z"
            stroke="url(#paint0_linear_409_586)"
            strokeOpacity="0.2"
            strokeWidth="2"
            mask="url(#path-1-inside-1_409_586)"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M292.229 122.409C292.069 123.415 291.236 126.657 290.38 129.612C282.681 156.191 262.784 176.245 236.599 183.815C228.836 186.06 222.808 186.865 213.62 186.882C204.523 186.9 199.71 186.314 191.537 184.193C167.884 178.051 147.413 161.646 134.901 138.797C133.882 136.931 133.039 135.265 133.039 135.096C133.035 134.927 135.744 135.701 139.063 136.817C155.144 142.226 175.765 146.393 193.814 147.882C202.196 148.573 222.976 148.176 230.011 147.191C253.805 143.858 272.814 136.192 288.928 123.428L292.525 120.58L292.229 122.409ZM126.51 174.306C151.343 199.071 180.687 214.803 210.046 219.087C216.625 220.048 227.443 220.422 232.97 219.88C235.475 219.635 237.615 219.521 237.728 219.627C238.015 219.901 236.563 222.332 234.455 225.095C226.373 235.697 204.509 242.592 183.911 241.034C158.081 239.081 137.907 226.598 127.803 206.321C122.854 196.382 120.008 183.402 120.373 172.45L120.509 168.319L126.51 174.306ZM104.801 207.872C107.009 213.277 112.382 223.01 116.876 229.747C126.61 244.338 138.621 256.506 151.966 265.298C160.494 270.915 172.824 276.227 184.175 279.176L186.374 279.747L183.264 282.089C173.571 289.391 164.151 292.625 152.545 292.637C145.961 292.644 141.144 291.866 135.393 289.864C118.278 283.909 104.446 269.748 98.8679 252.473C95.1844 241.065 95.0497 228.125 98.485 215.72C99.5217 211.976 102.579 203.951 102.966 203.963C103.098 203.968 103.927 205.727 104.801 207.872ZM77.8777 248.347C81.1081 278.249 95.6225 304.494 116.88 318.874L121.766 322.179L120.227 322.821C115.715 324.707 111.453 325.44 105.029 325.436C97.6932 325.43 94.451 324.765 88.5843 322.062C76.2209 316.367 67.3291 305.696 63.505 291.965C62.3562 287.84 62.2447 286.759 62.2447 279.747C62.2447 272.746 62.3576 271.649 63.5009 267.53C65.6358 259.836 70.0232 251.894 76.2223 244.501L77.3209 243.191L77.8777 248.347ZM44.6074 298.008C60.4904 317.337 69.7409 337.917 73.2135 361.648C74.2088 368.448 74.3395 384.963 73.4485 391.286C70.881 409.506 65.1933 424.829 56.0826 438.068C43.3107 456.625 26.207 467.295 6.68292 468.878C4.01117 469.096 3.63419 469.041 4.35086 468.557C4.8212 468.24 7.58719 466.43 10.4975 464.53C34.1321 449.122 46.9896 424.451 46.9741 394.543C46.97 386.684 46.5165 381.701 45.1497 374.482C41.7613 356.59 33.2128 338.71 22.789 327.711L21.0734 325.901L27.7095 314.589C31.3593 308.367 35.5668 300.986 37.0593 298.186C38.5523 295.387 39.9528 293.096 40.1722 293.096C40.3913 293.096 42.3873 295.306 44.6074 298.008Z"
            stroke="url(#paint1_linear_409_586)"
            strokeOpacity="0.2"
            strokeWidth="2"
            mask="url(#path-1-inside-1_409_586)"
          />
          <path
            d="M-354.362 4.13027C-355.001 7.65922 -355.1 10.2968 -354.92 18.9714C-354.727 28.2411 -354.561 30.0977 -353.547 34.2723C-344.161 72.9398 -309.263 99.7421 -256.696 108.656C-240.566 111.391 -229.187 112.095 -200.921 112.105C-171.003 112.117 -159.327 112.856 -146.326 115.561C-135.658 117.781 -125.555 121.809 -118.008 126.85C-110.907 131.595 -103.434 139.429 -98.8453 146.942C-95.4396 152.517 -77.9535 184.674 -31.7957 270.245C-14.2098 302.847 0.33136 329.681 0.518036 329.876C0.704712 329.681 16.2102 302.847 33.7961 270.245C79.9539 184.674 97.44 152.517 100.844 146.942C105.434 139.429 112.905 131.595 120.008 126.85C127.553 121.809 137.661 117.781 148.324 115.561C161.328 112.856 173.002 112.117 202.92 112.105C231.185 112.095 242.568 111.391 258.695 108.656C311.265 99.7421 346.16 72.9398 355.549 34.2723C356.559 30.0977 356.728 28.2411 356.919 18.9714C357.101 10.2968 357.001 7.65922 356.364 4.13027C355.863 1.37959 355.398 -0.101389 355.061 0.00539875C354.774 0.0977063 353.24 2.60177 351.656 5.57098C336.462 34.0158 319.06 51.915 295.348 63.486C278.692 71.6136 261.186 75.9914 236.613 78.1742C233.608 78.4412 219.78 78.8439 205.879 79.0692C181.999 79.4566 172.51 79.8529 161.942 80.9036C130.03 84.0769 110.21 92.2547 92.9393 109.374C82.2805 119.94 75.0439 130.162 63.5296 150.917C42.4957 188.831 21.4977 228.164 0.611816 265.946C-20.846 225.449 -40.4953 188.831 -61.5292 150.917C-73.0435 130.162 -80.2801 119.94 -90.9389 109.374C-108.208 92.2547 -128.029 84.0769 -159.943 80.9036C-170.511 79.8529 -179.998 79.4566 -203.88 79.0692C-217.778 78.8439 -231.608 78.4412 -234.613 78.1742C-259.188 75.9914 -276.693 71.6136 -293.348 63.486C-317.06 51.915 -334.462 34.0158 -349.655 5.57098C-351.241 2.60177 -352.774 0.0977063 -353.061 0.00539875C-353.397 -0.101389 -353.864 1.37959 -354.362 4.13027Z"
            stroke="url(#paint2_linear_409_586)"
            strokeOpacity="0.2"
            strokeWidth="2"
            mask="url(#path-1-inside-1_409_586)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_409_586"
              x1="357.06"
              y1="-21.3145"
              x2="1.44601"
              y2="427.424"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#85693C" />
              <stop offset="1" stopColor="#E4D28B" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_409_586"
              x1="357.06"
              y1="-21.3145"
              x2="1.44601"
              y2="427.424"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#85693C" />
              <stop offset="1" stopColor="#E4D28B" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_409_586"
              x1="357.06"
              y1="-21.3145"
              x2="1.44601"
              y2="427.424"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#85693C" />
              <stop offset="1" stopColor="#E4D28B" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div>
          <svg
            width="273"
            height="181"
            viewBox="0 0 273 181"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M118.597 21.7643C119.014 25.2848 120.478 28.3889 122.947 30.9903C124.48 32.6051 125.529 33.4256 127.022 34.1786L128.036 34.6903L126.64 34.69C125.118 34.6895 123.608 34.3945 122.324 33.8469L121.501 33.4963L120.655 34.162C117.828 36.3843 115.255 41.1271 114.154 46.143L113.813 47.6994L125.025 68.7924C131.192 80.3935 136.298 89.867 136.371 89.8446C136.445 89.8222 138.887 85.5949 141.798 80.4506L147.092 71.0972L145.33 69.3347C142.569 66.5734 140.563 63.5318 139.299 60.1877C136.235 52.0859 139.147 44.4848 146.256 42.0269C147.411 41.6275 147.862 41.5682 149.763 41.565C152.334 41.5607 153.455 41.8155 155.786 42.934C157.532 43.7717 158.913 44.7257 160.516 46.2039L161.585 47.1883L161.693 46.5393C161.861 45.5268 161.822 43.0939 161.611 41.3774C160.577 32.9872 155.072 27.8607 145.4 26.2808C144.488 26.1319 141.818 25.9323 139.466 25.8373C128.534 25.3956 125.34 24.758 120.659 22.0839C119.725 21.5502 118.851 21.0259 118.717 20.9188C118.512 20.7545 118.493 20.8866 118.597 21.7643ZM24.871 47.5016C24.9332 47.8876 25.2524 49.1309 25.5804 50.2647C28.531 60.4607 36.1571 68.1535 46.1931 71.0574C49.1686 71.9184 51.4798 72.2272 55.0012 72.234C58.4885 72.2407 60.3335 72.0159 63.4652 71.2022C72.5321 68.8464 80.3772 62.5532 85.1731 53.7882C85.5648 53.0722 85.8865 52.4333 85.8879 52.3683C85.8893 52.3034 84.8497 52.6006 83.578 53.0286C77.4141 55.1034 69.5105 56.702 62.5926 57.2731C59.3799 57.5382 51.4147 57.3861 48.7187 57.0082C39.598 55.7295 32.3129 52.7887 26.1366 47.8926L24.7583 46.8L24.871 47.5016ZM88.3888 67.4095C78.8718 76.9098 67.6247 82.9444 56.3722 84.588C53.8497 84.9565 49.7036 85.1001 47.5843 84.8923C46.6245 84.7982 45.8041 84.7545 45.7612 84.7952C45.6503 84.9003 46.2081 85.8329 47.0156 86.8928C50.1137 90.9597 58.4936 93.6045 66.3883 93.007C76.2894 92.2577 84.0221 87.4694 87.8932 79.6907C89.7905 75.8782 90.8825 70.8988 90.7423 66.6975L90.6895 65.1129L88.3888 67.4095ZM96.7102 80.2857C95.8638 82.3591 93.8047 86.0927 92.0821 88.6773C88.3518 94.2745 83.7483 98.9422 78.6324 102.315C75.3645 104.469 70.6382 106.507 66.2869 107.638L65.4438 107.858L66.6359 108.756C70.3522 111.557 73.9624 112.798 78.4106 112.802C80.9348 112.805 82.7801 112.506 84.9853 111.738C91.5448 109.454 96.8467 104.022 98.9847 97.3951C100.397 93.0187 100.448 88.0549 99.1315 83.2964C98.7341 81.8601 97.5622 78.7817 97.4146 78.7863C97.3631 78.7881 97.0462 79.4628 96.7102 80.2857ZM107.03 95.8122C105.792 107.283 100.229 117.351 92.0812 122.867L90.2088 124.135L90.7982 124.381C92.5271 125.105 94.1613 125.386 96.623 125.384C99.4349 125.382 100.678 125.127 102.926 124.09C107.665 121.905 111.073 117.812 112.539 112.544C112.979 110.962 113.022 110.547 113.022 107.858C113.022 105.172 112.979 104.751 112.54 103.171C111.722 100.219 110.041 97.1729 107.665 94.3368L107.243 93.8345L107.03 95.8122ZM119.782 114.863C113.694 122.277 110.149 130.172 108.818 139.275C108.436 141.884 108.386 148.219 108.728 150.645C109.712 157.634 111.892 163.512 115.384 168.591C120.279 175.709 126.835 179.802 134.318 180.41C135.342 180.493 135.487 180.472 135.212 180.286C135.032 180.165 133.972 179.471 132.856 178.742C123.797 172.831 118.869 163.367 118.875 151.894C118.877 148.879 119.05 146.968 119.574 144.198C120.873 137.335 124.15 130.476 128.145 126.257L128.802 125.563L126.259 121.223C124.86 118.836 123.247 116.005 122.675 114.931C122.103 113.857 121.566 112.978 121.482 112.978C121.398 112.978 120.633 113.826 119.782 114.863ZM135.454 134.585C130.583 142.607 129.711 152.174 132.971 161.84C133.772 164.215 136.053 169.054 136.425 169.168C136.528 169.2 137.011 168.462 137.498 167.529C140.656 161.481 142.267 154.049 141.738 147.975C141.402 144.117 140.507 140.665 139.022 137.496C138.182 135.706 136.678 133.113 136.478 133.113C136.407 133.113 135.946 133.776 135.454 134.585Z"
              fill="url(#paint0_linear_409_593)"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M248.121 47.5019C248.06 47.8879 247.741 49.1313 247.413 50.2651C244.462 60.461 236.835 68.1538 226.799 71.0578C223.824 71.9187 221.513 72.2275 217.991 72.2343C214.504 72.241 212.66 72.0163 209.527 71.2025C200.461 68.8467 192.615 62.5535 187.819 53.7885C187.428 53.0725 187.106 52.4336 187.106 52.3687C187.104 52.3037 188.142 52.6009 189.414 53.029C195.578 55.1037 203.482 56.7024 210.4 57.2734C213.613 57.5385 221.578 57.3864 224.274 57.0086C233.394 55.7298 240.68 52.7891 246.856 47.893L248.235 46.8003L248.121 47.5019ZM184.603 67.4099C194.121 76.9101 205.369 82.9447 216.621 84.5883C219.143 84.9568 223.29 85.1004 225.408 84.8926C226.368 84.7985 227.188 84.7548 227.232 84.7956C227.342 84.9006 226.785 85.8332 225.977 86.8931C222.879 90.96 214.499 93.6048 206.604 93.0074C196.704 92.258 188.971 87.4697 185.099 79.691C183.202 75.8785 182.111 70.8991 182.251 66.6978L182.303 65.1133L184.603 67.4099ZM176.282 80.286C177.129 82.3594 179.188 86.0931 180.91 88.6776C184.641 94.2748 189.245 98.9425 194.36 102.315C197.629 104.47 202.355 106.508 206.705 107.639L207.548 107.858L206.356 108.756C202.641 111.557 199.03 112.798 194.582 112.803C192.058 112.805 190.212 112.507 188.008 111.739C181.448 109.455 176.146 104.022 174.008 97.3954C172.596 93.019 172.545 88.0552 173.861 83.2967C174.259 81.8604 175.431 78.782 175.579 78.7867C175.63 78.7884 175.947 79.4631 176.282 80.286ZM165.963 95.8125C167.201 107.283 172.764 117.351 180.912 122.867L182.785 124.135L182.195 124.382C180.465 125.105 178.832 125.386 176.369 125.384C173.558 125.382 172.315 125.127 170.067 124.09C165.328 121.905 161.92 117.812 160.454 112.545C160.014 110.962 159.971 110.548 159.971 107.858C159.971 105.172 160.014 104.751 160.452 103.171C161.271 100.22 162.952 97.1732 165.328 94.3371L165.749 93.8348L165.963 95.8125ZM153.211 114.863C159.298 122.278 162.844 130.172 164.175 139.276C164.557 141.884 164.607 148.219 164.265 150.645C163.281 157.634 161.101 163.512 157.609 168.591C152.714 175.709 146.158 179.802 138.675 180.41C137.651 180.493 137.506 180.472 137.781 180.287C137.961 180.165 139.021 179.471 140.137 178.742C149.196 172.831 154.124 163.367 154.118 151.894C154.116 148.88 153.942 146.968 153.418 144.199C152.12 137.335 148.843 130.476 144.848 126.257L144.19 125.563L146.734 121.223C148.133 118.837 149.745 116.005 150.318 114.931C150.89 113.857 151.427 112.979 151.511 112.979C151.595 112.979 152.36 113.826 153.211 114.863Z"
              fill="url(#paint1_linear_409_593)"
            />
            <path
              d="M0.290032 2.12932C0.0450145 3.48305 0.00696804 4.49483 0.0760759 7.82249C0.149896 11.3784 0.213771 12.0906 0.602241 13.692C4.20004 28.5251 17.5759 38.8067 37.7243 42.226C43.9067 43.2752 48.2683 43.5453 59.1024 43.5493C70.5694 43.5537 75.0449 43.8371 80.0279 44.8748C84.1167 45.7263 87.9893 47.2715 90.8817 49.2054C93.6036 51.0255 96.4678 54.031 98.2267 56.9129C99.5321 59.0515 106.234 71.3872 123.926 104.213C130.667 116.719 136.24 127.013 136.312 127.088C136.383 127.013 142.326 116.719 149.067 104.213C166.758 71.3872 173.461 59.0515 174.766 56.9129C176.525 54.031 179.388 51.0255 182.111 49.2054C185.003 47.2715 188.877 45.7263 192.964 44.8748C197.948 43.8371 202.423 43.5537 213.89 43.5493C224.724 43.5453 229.087 43.2752 235.268 42.226C255.418 38.8067 268.792 28.5251 272.391 13.692C272.778 12.0906 272.843 11.3784 272.916 7.82249C272.986 4.49483 272.948 3.48305 272.703 2.12932C272.511 1.07414 272.333 0.506029 272.204 0.546993C272.094 0.582403 271.506 1.54298 270.899 2.68199C265.075 13.5936 258.405 20.4599 249.317 24.8986C242.933 28.0164 236.223 29.6958 226.804 30.5331C225.652 30.6355 220.352 30.79 215.024 30.8764C205.871 31.025 202.234 31.1771 198.184 31.5801C185.952 32.7974 178.355 35.9345 171.736 42.5016C167.65 46.5547 164.877 50.4759 160.463 58.4376C152.401 72.9817 144.353 88.0701 136.348 102.564C128.123 87.0286 120.592 72.9817 112.53 58.4376C108.116 50.4759 105.343 46.5547 101.257 42.5016C94.638 35.9345 87.0408 32.7974 74.8087 31.5801C70.7579 31.1771 67.1219 31.025 57.9681 30.8764C52.641 30.79 47.3401 30.6355 46.1883 30.5331C36.7692 29.6958 30.0596 28.0164 23.6759 24.8986C14.5873 20.4599 7.91738 13.5936 2.09417 2.68199C1.48634 1.54298 0.898744 0.582403 0.78845 0.546993C0.660007 0.506029 0.480952 1.07414 0.290032 2.12932Z"
              fill="url(#paint2_linear_409_593)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_409_593"
                x1="0.0290313"
                y1="0.499879"
                x2="288.851"
                y2="0.499871"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#85693C" />
                <stop offset="1" stopColor="#E4D28B" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_409_593"
                x1="0.0292282"
                y1="0.500195"
                x2="288.851"
                y2="0.500187"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#85693C" />
                <stop offset="1" stopColor="#E4D28B" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_409_593"
                x1="0.0291372"
                y1="0.50018"
                x2="288.851"
                y2="0.500173"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#85693C" />
                <stop offset="1" stopColor="#E4D28B" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div>
          <h1 className="text-[30px] font-normal leading-[40.35px] text-center text-primary">
            Raha
          </h1>
          <h2 className="text-[42px] font-normal leading-[56.49px] text-center text-primary">
            Commercial Group
          </h2>
        </div>
      </div>
      <div className="absolute bottom-0 right-0">
        <svg
          width="287"
          height="266"
          viewBox="0 0 287 266"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M225.495 58.3358L225.495 58.3357C239.728 43.3363 248.155 25.4537 250.558 5.16262C250.709 3.88686 250.814 2.89888 250.868 2.14663C250.885 1.91713 250.896 1.71594 250.903 1.54019C250.177 2.02282 248.947 2.78066 247.459 3.67376C245.403 4.90799 242.765 6.45231 240.041 8.00986L240.04 8.00993C226.339 15.841 214.773 20.7089 198.634 23.9313C182.534 27.1458 161.898 28.7191 130.072 30.0057L130.032 29.0065L130.072 30.0057C116.377 30.5589 100.885 31.7203 95.6431 32.5769C67.6178 37.1565 45.7263 46.8605 30.1035 61.4154C14.4922 75.9595 5.06543 95.4167 2.08072 119.654C0.854004 129.613 0.641388 143.676 1.59814 149.437L1.92279 151.391L6.78189 146.912C16.1855 138.242 24.3026 132.625 34.5715 127.698C41.3855 124.427 46.4892 122.391 51.7962 121.184C57.1036 119.977 62.5645 119.612 70.0791 119.624C75.61 119.633 79.0941 119.724 82.0473 120.113C85.0246 120.505 87.435 121.197 90.8254 122.37L90.4985 123.315L90.8254 122.37C111.802 129.625 126.611 144.489 133.9 163.524C141.183 182.546 140.935 205.67 131.943 229.46C124.525 249.085 112.764 266.921 96.5976 283.097L86.8737 292.826L117.324 346.65C125.799 361.632 133.591 375.278 139.317 385.193C142.18 390.151 144.525 394.174 146.181 396.964C147.009 398.36 147.661 399.442 148.119 400.178C148.174 400.267 148.227 400.351 148.276 400.43C148.343 400.376 148.414 400.319 148.489 400.259C149.163 399.714 150.154 398.915 151.436 397.916C153.999 395.917 157.723 393.115 162.426 389.916C171.827 383.522 185.151 375.536 200.93 369.217C232.146 356.718 273.112 350.699 312.29 376.631C345.999 190.167 277.297 100.076 239.076 78.3691L239.01 78.332L238.951 78.2855L234.487 74.774L230.243 76.5841L230.243 76.5841C222.629 79.8317 213.702 81.5723 204.721 81.5754L196.592 81.5774L196.141 79.6847L202.046 76.7039L202.046 76.7038C210.608 72.3833 216.624 67.6848 225.495 58.3358ZM251.723 0.963332C251.723 0.963128 251.72 0.964416 251.714 0.967826C251.72 0.965247 251.723 0.963538 251.723 0.963332Z"
            stroke="url(#paint0_linear_409_623)"
            strokeOpacity="0.2"
            strokeWidth="2"
          />
          <defs>
            <linearGradient
              id="paint0_linear_409_623"
              x1="-647.343"
              y1="-165.96"
              x2="147.54"
              y2="835.835"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#85693C" />
              <stop offset="1" stopColor="#E4D28B" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default Preloader;
