import "./App.css";
import HeaderSection from "./components/HeaderSection/HeaderSection";
import MainSection from "./components/MainSection/MainSection";

function App() {
  return (
    <div>
      <div className="absolute left-0 top-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="357"
          height="469"
          viewBox="0 0 357 469"
          fill="none"
        >
          <mask id="path-1-inside-1_409_505" fill="white">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M-45.699 55.3163C-44.6108 64.4937 -40.7921 72.5855 -34.349 79.367C-30.35 83.5765 -27.6141 85.7154 -23.7194 87.6783L-21.0736 89.0122L-24.7161 89.0113C-28.685 89.01 -32.6243 88.2412 -35.9758 86.8136L-38.1212 85.8995L-40.3304 87.6348C-47.705 93.428 -54.4186 105.792 -57.2902 118.867L-58.1812 122.925L-28.9276 177.911C-12.8384 208.153 0.482513 232.849 0.673737 232.79C0.865448 232.732 7.23706 221.712 14.833 208.302L28.6443 183.919L24.0466 179.324C16.8436 172.126 11.6112 164.197 8.31201 155.48C0.318604 134.36 7.91544 114.545 26.4624 108.138C29.4766 107.096 30.6522 106.942 35.6123 106.933C42.3199 106.922 45.2444 107.586 51.3273 110.502C55.8836 112.686 59.4842 115.173 63.6689 119.026L66.4559 121.592L66.7372 119.9C67.1761 117.261 67.0755 110.919 66.5237 106.444C63.8269 84.5724 49.4646 71.2086 24.2296 67.0901C21.8506 66.7018 14.8844 66.1815 8.74911 65.934C-19.7723 64.7824 -28.1068 63.1204 -40.319 56.1493C-42.7558 54.7579 -45.0356 53.3914 -45.3853 53.1122C-45.9211 52.6837 -45.9703 53.0281 -45.699 55.3163ZM-290.23 122.409C-290.068 123.415 -289.235 126.657 -288.379 129.612C-280.681 156.191 -260.784 176.245 -234.601 183.815C-226.838 186.06 -220.807 186.865 -211.62 186.882C-202.522 186.9 -197.708 186.314 -189.538 184.193C-165.882 178.051 -145.414 161.646 -132.902 138.797C-131.88 136.931 -131.041 135.265 -131.037 135.096C-131.033 134.927 -133.746 135.701 -137.063 136.817C-153.145 142.226 -173.765 146.393 -191.814 147.882C-200.196 148.573 -220.977 148.176 -228.011 147.191C-251.807 143.858 -270.814 136.192 -286.928 123.428L-290.524 120.58L-290.23 122.409ZM-124.512 174.306C-149.342 199.071 -178.686 214.803 -208.043 219.087C-214.624 220.048 -225.442 220.422 -230.971 219.88C-233.475 219.635 -235.615 219.521 -235.727 219.627C-236.017 219.901 -234.561 222.332 -232.455 225.095C-224.372 235.697 -202.509 242.592 -181.911 241.034C-156.079 239.081 -135.905 226.599 -125.805 206.321C-120.855 196.382 -118.006 183.402 -118.372 172.45L-118.51 168.319L-124.512 174.306ZM-102.801 207.872C-105.01 213.277 -110.382 223.01 -114.876 229.747C-124.609 244.338 -136.619 256.506 -149.966 265.298C-158.493 270.915 -170.823 276.227 -182.176 279.176L-184.375 279.747L-181.265 282.089C-171.569 289.391 -162.15 292.625 -150.545 292.637C-143.96 292.644 -139.145 291.866 -133.392 289.864C-116.278 283.909 -102.445 269.748 -96.8674 252.473C-93.184 241.065 -93.0492 228.125 -96.4845 215.72C-97.5213 211.976 -100.579 203.951 -100.964 203.963C-101.098 203.968 -101.925 205.727 -102.801 207.872ZM-75.8773 248.347C-79.1077 278.249 -93.622 304.494 -114.879 318.874L-119.764 322.179L-118.226 322.821C-113.715 324.707 -109.452 325.44 -103.029 325.436C-95.6927 325.43 -92.4505 324.765 -86.5838 322.062C-74.2204 316.367 -65.3287 305.696 -61.5045 291.965C-60.3558 287.84 -60.2443 286.759 -60.2443 279.747C-60.2443 272.746 -60.3571 271.649 -61.5004 267.53C-63.6354 259.836 -68.0227 251.894 -74.2218 244.501L-75.3204 243.191L-75.8773 248.347ZM-42.607 298.008C-58.4899 317.337 -67.7404 337.916 -71.2131 361.648C-72.2084 368.448 -72.3391 384.963 -71.448 391.286C-68.8805 409.506 -63.1928 424.829 -54.0821 438.068C-41.3102 456.625 -24.2066 467.295 -4.6825 468.878C-2.01074 469.096 -1.63373 469.041 -2.3504 468.557C-2.82074 468.24 -5.58673 466.43 -8.49704 464.53C-32.1317 449.122 -44.9891 424.451 -44.9736 394.543C-44.9695 386.684 -44.5161 381.701 -43.1492 374.482C-39.7608 356.59 -31.2124 338.71 -20.7886 327.711L-19.073 325.901L-25.7091 314.589C-29.3589 308.367 -33.5663 300.986 -35.0589 298.186C-36.5518 295.387 -37.9523 293.096 -38.1718 293.096C-38.3908 293.096 -40.3869 295.306 -42.607 298.008ZM-1.71799 349.422C-14.427 370.333 -16.7017 395.273 -8.19745 420.471C-6.10849 426.662 -0.156708 439.277 0.814453 439.574C1.08356 439.657 2.34338 437.734 3.61417 435.301C11.853 419.534 16.0573 400.16 14.6763 384.326C13.799 374.27 11.4637 365.27 7.58853 357.011C5.3985 352.343 1.47327 345.584 0.952393 345.584C0.766632 345.584 -0.434937 347.312 -1.71799 349.422Z"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M292.229 122.409C292.069 123.415 291.236 126.657 290.38 129.612C282.681 156.191 262.784 176.245 236.599 183.815C228.836 186.06 222.808 186.865 213.62 186.882C204.523 186.9 199.71 186.314 191.537 184.193C167.884 178.051 147.413 161.646 134.901 138.797C133.882 136.931 133.039 135.265 133.039 135.096C133.035 134.927 135.744 135.701 139.063 136.817C155.144 142.226 175.765 146.393 193.814 147.882C202.196 148.573 222.976 148.176 230.011 147.191C253.805 143.858 272.814 136.192 288.928 123.428L292.525 120.58L292.229 122.409ZM126.51 174.306C151.343 199.071 180.687 214.803 210.046 219.087C216.625 220.048 227.443 220.422 232.97 219.88C235.475 219.635 237.615 219.521 237.728 219.627C238.015 219.901 236.563 222.332 234.455 225.095C226.373 235.697 204.509 242.592 183.911 241.034C158.081 239.081 137.907 226.598 127.803 206.321C122.854 196.382 120.008 183.402 120.373 172.45L120.509 168.319L126.51 174.306ZM104.801 207.872C107.009 213.277 112.382 223.01 116.876 229.747C126.61 244.338 138.621 256.506 151.966 265.298C160.494 270.915 172.824 276.227 184.175 279.176L186.374 279.747L183.264 282.089C173.571 289.391 164.151 292.625 152.545 292.637C145.961 292.644 141.144 291.866 135.393 289.864C118.278 283.909 104.446 269.748 98.8679 252.473C95.1844 241.065 95.0497 228.125 98.485 215.72C99.5217 211.976 102.579 203.951 102.966 203.963C103.098 203.968 103.927 205.727 104.801 207.872ZM77.8777 248.347C81.1081 278.249 95.6225 304.494 116.88 318.874L121.766 322.179L120.227 322.821C115.715 324.707 111.453 325.44 105.029 325.436C97.6932 325.43 94.451 324.765 88.5843 322.062C76.2209 316.367 67.3291 305.696 63.505 291.965C62.3562 287.84 62.2447 286.759 62.2447 279.747C62.2447 272.746 62.3576 271.649 63.5009 267.53C65.6358 259.836 70.0232 251.894 76.2223 244.501L77.3209 243.191L77.8777 248.347ZM44.6074 298.008C60.4904 317.337 69.7409 337.917 73.2135 361.648C74.2088 368.448 74.3395 384.963 73.4485 391.286C70.881 409.506 65.1933 424.829 56.0826 438.068C43.3107 456.625 26.207 467.295 6.68292 468.878C4.01117 469.096 3.63419 469.041 4.35086 468.557C4.8212 468.24 7.58719 466.43 10.4975 464.53C34.1321 449.122 46.9896 424.451 46.9741 394.543C46.97 386.684 46.5165 381.701 45.1497 374.482C41.7613 356.59 33.2128 338.71 22.789 327.711L21.0734 325.901L27.7095 314.589C31.3593 308.367 35.5668 300.986 37.0593 298.186C38.5523 295.387 39.9528 293.096 40.1722 293.096C40.3913 293.096 42.3873 295.306 44.6074 298.008Z"
            />
            <path d="M-354.362 4.13027C-355.001 7.65922 -355.1 10.2968 -354.92 18.9714C-354.727 28.2411 -354.561 30.0977 -353.547 34.2723C-344.161 72.9398 -309.263 99.7421 -256.696 108.656C-240.566 111.391 -229.187 112.095 -200.921 112.105C-171.003 112.117 -159.327 112.856 -146.326 115.561C-135.658 117.781 -125.555 121.809 -118.008 126.85C-110.907 131.595 -103.434 139.429 -98.8453 146.942C-95.4396 152.517 -77.9535 184.674 -31.7957 270.245C-14.2098 302.847 0.33136 329.681 0.518036 329.876C0.704712 329.681 16.2102 302.847 33.7961 270.245C79.9539 184.674 97.44 152.517 100.844 146.942C105.434 139.429 112.905 131.595 120.008 126.85C127.553 121.809 137.661 117.781 148.324 115.561C161.328 112.856 173.002 112.117 202.92 112.105C231.185 112.095 242.568 111.391 258.695 108.656C311.265 99.7421 346.16 72.9398 355.549 34.2723C356.559 30.0977 356.728 28.2411 356.919 18.9714C357.101 10.2968 357.001 7.65922 356.364 4.13027C355.863 1.37959 355.398 -0.101389 355.061 0.00539875C354.774 0.0977063 353.24 2.60177 351.656 5.57098C336.462 34.0158 319.06 51.915 295.348 63.486C278.692 71.6136 261.186 75.9914 236.613 78.1742C233.608 78.4412 219.78 78.8439 205.879 79.0692C181.999 79.4566 172.51 79.8529 161.942 80.9036C130.03 84.0769 110.21 92.2547 92.9393 109.374C82.2805 119.94 75.0439 130.162 63.5296 150.917C42.4957 188.831 21.4977 228.164 0.611816 265.946C-20.846 225.449 -40.4953 188.831 -61.5292 150.917C-73.0435 130.162 -80.2801 119.94 -90.9389 109.374C-108.208 92.2547 -128.029 84.0769 -159.943 80.9036C-170.511 79.8529 -179.998 79.4566 -203.88 79.0692C-217.778 78.8439 -231.608 78.4412 -234.613 78.1742C-259.188 75.9914 -276.693 71.6136 -293.348 63.486C-317.06 51.915 -334.462 34.0158 -349.655 5.57098C-351.241 2.60177 -352.774 0.0977063 -353.061 0.00539875C-353.397 -0.101389 -353.864 1.37959 -354.362 4.13027Z" />
          </mask>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M-45.699 55.3163C-44.6108 64.4937 -40.7921 72.5855 -34.349 79.367C-30.35 83.5765 -27.6141 85.7154 -23.7194 87.6783L-21.0736 89.0122L-24.7161 89.0113C-28.685 89.01 -32.6243 88.2412 -35.9758 86.8136L-38.1212 85.8995L-40.3304 87.6348C-47.705 93.428 -54.4186 105.792 -57.2902 118.867L-58.1812 122.925L-28.9276 177.911C-12.8384 208.153 0.482513 232.849 0.673737 232.79C0.865448 232.732 7.23706 221.712 14.833 208.302L28.6443 183.919L24.0466 179.324C16.8436 172.126 11.6112 164.197 8.31201 155.48C0.318604 134.36 7.91544 114.545 26.4624 108.138C29.4766 107.096 30.6522 106.942 35.6123 106.933C42.3199 106.922 45.2444 107.586 51.3273 110.502C55.8836 112.686 59.4842 115.173 63.6689 119.026L66.4559 121.592L66.7372 119.9C67.1761 117.261 67.0755 110.919 66.5237 106.444C63.8269 84.5724 49.4646 71.2086 24.2296 67.0901C21.8506 66.7018 14.8844 66.1815 8.74911 65.934C-19.7723 64.7824 -28.1068 63.1204 -40.319 56.1493C-42.7558 54.7579 -45.0356 53.3914 -45.3853 53.1122C-45.9211 52.6837 -45.9703 53.0281 -45.699 55.3163ZM-290.23 122.409C-290.068 123.415 -289.235 126.657 -288.379 129.612C-280.681 156.191 -260.784 176.245 -234.601 183.815C-226.838 186.06 -220.807 186.865 -211.62 186.882C-202.522 186.9 -197.708 186.314 -189.538 184.193C-165.882 178.051 -145.414 161.646 -132.902 138.797C-131.88 136.931 -131.041 135.265 -131.037 135.096C-131.033 134.927 -133.746 135.701 -137.063 136.817C-153.145 142.226 -173.765 146.393 -191.814 147.882C-200.196 148.573 -220.977 148.176 -228.011 147.191C-251.807 143.858 -270.814 136.192 -286.928 123.428L-290.524 120.58L-290.23 122.409ZM-124.512 174.306C-149.342 199.071 -178.686 214.803 -208.043 219.087C-214.624 220.048 -225.442 220.422 -230.971 219.88C-233.475 219.635 -235.615 219.521 -235.727 219.627C-236.017 219.901 -234.561 222.332 -232.455 225.095C-224.372 235.697 -202.509 242.592 -181.911 241.034C-156.079 239.081 -135.905 226.599 -125.805 206.321C-120.855 196.382 -118.006 183.402 -118.372 172.45L-118.51 168.319L-124.512 174.306ZM-102.801 207.872C-105.01 213.277 -110.382 223.01 -114.876 229.747C-124.609 244.338 -136.619 256.506 -149.966 265.298C-158.493 270.915 -170.823 276.227 -182.176 279.176L-184.375 279.747L-181.265 282.089C-171.569 289.391 -162.15 292.625 -150.545 292.637C-143.96 292.644 -139.145 291.866 -133.392 289.864C-116.278 283.909 -102.445 269.748 -96.8674 252.473C-93.184 241.065 -93.0492 228.125 -96.4845 215.72C-97.5213 211.976 -100.579 203.951 -100.964 203.963C-101.098 203.968 -101.925 205.727 -102.801 207.872ZM-75.8773 248.347C-79.1077 278.249 -93.622 304.494 -114.879 318.874L-119.764 322.179L-118.226 322.821C-113.715 324.707 -109.452 325.44 -103.029 325.436C-95.6927 325.43 -92.4505 324.765 -86.5838 322.062C-74.2204 316.367 -65.3287 305.696 -61.5045 291.965C-60.3558 287.84 -60.2443 286.759 -60.2443 279.747C-60.2443 272.746 -60.3571 271.649 -61.5004 267.53C-63.6354 259.836 -68.0227 251.894 -74.2218 244.501L-75.3204 243.191L-75.8773 248.347ZM-42.607 298.008C-58.4899 317.337 -67.7404 337.916 -71.2131 361.648C-72.2084 368.448 -72.3391 384.963 -71.448 391.286C-68.8805 409.506 -63.1928 424.829 -54.0821 438.068C-41.3102 456.625 -24.2066 467.295 -4.6825 468.878C-2.01074 469.096 -1.63373 469.041 -2.3504 468.557C-2.82074 468.24 -5.58673 466.43 -8.49704 464.53C-32.1317 449.122 -44.9891 424.451 -44.9736 394.543C-44.9695 386.684 -44.5161 381.701 -43.1492 374.482C-39.7608 356.59 -31.2124 338.71 -20.7886 327.711L-19.073 325.901L-25.7091 314.589C-29.3589 308.367 -33.5663 300.986 -35.0589 298.186C-36.5518 295.387 -37.9523 293.096 -38.1718 293.096C-38.3908 293.096 -40.3869 295.306 -42.607 298.008ZM-1.71799 349.422C-14.427 370.333 -16.7017 395.273 -8.19745 420.471C-6.10849 426.662 -0.156708 439.277 0.814453 439.574C1.08356 439.657 2.34338 437.734 3.61417 435.301C11.853 419.534 16.0573 400.16 14.6763 384.326C13.799 374.27 11.4637 365.27 7.58853 357.011C5.3985 352.343 1.47327 345.584 0.952393 345.584C0.766632 345.584 -0.434937 347.312 -1.71799 349.422Z"
            stroke="url(#paint0_linear_409_505)"
            stroke-opacity="0.2"
            stroke-width="2"
            mask="url(#path-1-inside-1_409_505)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M292.229 122.409C292.069 123.415 291.236 126.657 290.38 129.612C282.681 156.191 262.784 176.245 236.599 183.815C228.836 186.06 222.808 186.865 213.62 186.882C204.523 186.9 199.71 186.314 191.537 184.193C167.884 178.051 147.413 161.646 134.901 138.797C133.882 136.931 133.039 135.265 133.039 135.096C133.035 134.927 135.744 135.701 139.063 136.817C155.144 142.226 175.765 146.393 193.814 147.882C202.196 148.573 222.976 148.176 230.011 147.191C253.805 143.858 272.814 136.192 288.928 123.428L292.525 120.58L292.229 122.409ZM126.51 174.306C151.343 199.071 180.687 214.803 210.046 219.087C216.625 220.048 227.443 220.422 232.97 219.88C235.475 219.635 237.615 219.521 237.728 219.627C238.015 219.901 236.563 222.332 234.455 225.095C226.373 235.697 204.509 242.592 183.911 241.034C158.081 239.081 137.907 226.598 127.803 206.321C122.854 196.382 120.008 183.402 120.373 172.45L120.509 168.319L126.51 174.306ZM104.801 207.872C107.009 213.277 112.382 223.01 116.876 229.747C126.61 244.338 138.621 256.506 151.966 265.298C160.494 270.915 172.824 276.227 184.175 279.176L186.374 279.747L183.264 282.089C173.571 289.391 164.151 292.625 152.545 292.637C145.961 292.644 141.144 291.866 135.393 289.864C118.278 283.909 104.446 269.748 98.8679 252.473C95.1844 241.065 95.0497 228.125 98.485 215.72C99.5217 211.976 102.579 203.951 102.966 203.963C103.098 203.968 103.927 205.727 104.801 207.872ZM77.8777 248.347C81.1081 278.249 95.6225 304.494 116.88 318.874L121.766 322.179L120.227 322.821C115.715 324.707 111.453 325.44 105.029 325.436C97.6932 325.43 94.451 324.765 88.5843 322.062C76.2209 316.367 67.3291 305.696 63.505 291.965C62.3562 287.84 62.2447 286.759 62.2447 279.747C62.2447 272.746 62.3576 271.649 63.5009 267.53C65.6358 259.836 70.0232 251.894 76.2223 244.501L77.3209 243.191L77.8777 248.347ZM44.6074 298.008C60.4904 317.337 69.7409 337.917 73.2135 361.648C74.2088 368.448 74.3395 384.963 73.4485 391.286C70.881 409.506 65.1933 424.829 56.0826 438.068C43.3107 456.625 26.207 467.295 6.68292 468.878C4.01117 469.096 3.63419 469.041 4.35086 468.557C4.8212 468.24 7.58719 466.43 10.4975 464.53C34.1321 449.122 46.9896 424.451 46.9741 394.543C46.97 386.684 46.5165 381.701 45.1497 374.482C41.7613 356.59 33.2128 338.71 22.789 327.711L21.0734 325.901L27.7095 314.589C31.3593 308.367 35.5668 300.986 37.0593 298.186C38.5523 295.387 39.9528 293.096 40.1722 293.096C40.3913 293.096 42.3873 295.306 44.6074 298.008Z"
            stroke="url(#paint1_linear_409_505)"
            stroke-opacity="0.2"
            stroke-width="2"
            mask="url(#path-1-inside-1_409_505)"
          />
          <path
            d="M-354.362 4.13027C-355.001 7.65922 -355.1 10.2968 -354.92 18.9714C-354.727 28.2411 -354.561 30.0977 -353.547 34.2723C-344.161 72.9398 -309.263 99.7421 -256.696 108.656C-240.566 111.391 -229.187 112.095 -200.921 112.105C-171.003 112.117 -159.327 112.856 -146.326 115.561C-135.658 117.781 -125.555 121.809 -118.008 126.85C-110.907 131.595 -103.434 139.429 -98.8453 146.942C-95.4396 152.517 -77.9535 184.674 -31.7957 270.245C-14.2098 302.847 0.33136 329.681 0.518036 329.876C0.704712 329.681 16.2102 302.847 33.7961 270.245C79.9539 184.674 97.44 152.517 100.844 146.942C105.434 139.429 112.905 131.595 120.008 126.85C127.553 121.809 137.661 117.781 148.324 115.561C161.328 112.856 173.002 112.117 202.92 112.105C231.185 112.095 242.568 111.391 258.695 108.656C311.265 99.7421 346.16 72.9398 355.549 34.2723C356.559 30.0977 356.728 28.2411 356.919 18.9714C357.101 10.2968 357.001 7.65922 356.364 4.13027C355.863 1.37959 355.398 -0.101389 355.061 0.00539875C354.774 0.0977063 353.24 2.60177 351.656 5.57098C336.462 34.0158 319.06 51.915 295.348 63.486C278.692 71.6136 261.186 75.9914 236.613 78.1742C233.608 78.4412 219.78 78.8439 205.879 79.0692C181.999 79.4566 172.51 79.8529 161.942 80.9036C130.03 84.0769 110.21 92.2547 92.9393 109.374C82.2805 119.94 75.0439 130.162 63.5296 150.917C42.4957 188.831 21.4977 228.164 0.611816 265.946C-20.846 225.449 -40.4953 188.831 -61.5292 150.917C-73.0435 130.162 -80.2801 119.94 -90.9389 109.374C-108.208 92.2547 -128.029 84.0769 -159.943 80.9036C-170.511 79.8529 -179.998 79.4566 -203.88 79.0692C-217.778 78.8439 -231.608 78.4412 -234.613 78.1742C-259.188 75.9914 -276.693 71.6136 -293.348 63.486C-317.06 51.915 -334.462 34.0158 -349.655 5.57098C-351.241 2.60177 -352.774 0.0977063 -353.061 0.00539875C-353.397 -0.101389 -353.864 1.37959 -354.362 4.13027Z"
            stroke="url(#paint2_linear_409_505)"
            stroke-opacity="0.2"
            stroke-width="2"
            mask="url(#path-1-inside-1_409_505)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_409_505"
              x1="357.06"
              y1="-21.3145"
              x2="1.44601"
              y2="427.424"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#85693C" />
              <stop offset="1" stop-color="#E4D28B" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_409_505"
              x1="357.06"
              y1="-21.3145"
              x2="1.44601"
              y2="427.424"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#85693C" />
              <stop offset="1" stop-color="#E4D28B" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_409_505"
              x1="357.06"
              y1="-21.3145"
              x2="1.44601"
              y2="427.424"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#85693C" />
              <stop offset="1" stop-color="#E4D28B" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <HeaderSection />
      <div className="mt-[160px] mx-[80px]">
        <MainSection />
      </div>
      <div className="absolute right-0 bottom-0 z-10">
        <svg
          width="287"
          height="397"
          viewBox="0 0 287 397"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M225.495 58.3358L225.495 58.3357C239.728 43.3363 248.155 25.4537 250.558 5.16262C250.709 3.88686 250.814 2.89888 250.868 2.14663C250.885 1.91713 250.896 1.71594 250.903 1.54019C250.177 2.02282 248.947 2.78066 247.459 3.67376C245.403 4.90799 242.765 6.45231 240.041 8.00986L240.04 8.00993C226.339 15.841 214.773 20.7089 198.634 23.9313C182.534 27.1458 161.898 28.7191 130.072 30.0057L130.032 29.0065L130.072 30.0057C116.377 30.5589 100.885 31.7203 95.6431 32.5769C67.6178 37.1565 45.7263 46.8605 30.1035 61.4154C14.4922 75.9595 5.06543 95.4167 2.08072 119.654C0.854004 129.613 0.641388 143.676 1.59814 149.437L1.92279 151.391L6.78189 146.912C16.1855 138.242 24.3026 132.625 34.5715 127.698C41.3855 124.427 46.4892 122.391 51.7962 121.184C57.1036 119.977 62.5645 119.612 70.0791 119.624C75.61 119.633 79.0941 119.724 82.0473 120.113C85.0246 120.505 87.435 121.197 90.8254 122.37L90.4985 123.315L90.8254 122.37C111.802 129.625 126.611 144.489 133.9 163.524C141.183 182.546 140.935 205.67 131.943 229.46C124.525 249.085 112.764 266.921 96.5976 283.097L86.8737 292.826L117.324 346.65C125.799 361.632 133.591 375.278 139.317 385.193C142.18 390.151 144.525 394.174 146.181 396.964C147.009 398.36 147.661 399.442 148.119 400.178C148.174 400.267 148.227 400.351 148.276 400.43C148.343 400.376 148.414 400.319 148.489 400.259C149.163 399.714 150.154 398.915 151.436 397.916C153.999 395.917 157.723 393.115 162.426 389.916C171.827 383.522 185.151 375.536 200.93 369.217C232.146 356.718 273.112 350.699 312.29 376.631C345.999 190.167 277.297 100.076 239.076 78.3691L239.01 78.332L238.951 78.2855L234.487 74.774L230.243 76.5841L230.243 76.5841C222.629 79.8317 213.702 81.5723 204.721 81.5754L196.592 81.5774L196.141 79.6847L202.046 76.7039L202.046 76.7038C210.608 72.3833 216.624 67.6848 225.495 58.3358ZM251.723 0.963332C251.723 0.963128 251.72 0.964416 251.714 0.967826C251.72 0.965247 251.723 0.963538 251.723 0.963332Z"
            stroke="url(#paint0_linear_409_510)"
            stroke-opacity="0.2"
            stroke-width="2"
          />
          <defs>
            <linearGradient
              id="paint0_linear_409_510"
              x1="-647.343"
              y1="-165.96"
              x2="147.54"
              y2="835.835"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#85693C" />
              <stop offset="1" stop-color="#E4D28B" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

export default App;
