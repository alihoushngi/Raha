import { useForm, ValidationError } from "@formspree/react";

const ContactUsSection = () => {
  const [state, handleSubmit] = useForm("mzbneqed");
  if (state.succeeded) {
    return (
      <div className="text-center flex justify-center items-center flex-col relative">
        <h3 className="font-bold text-3xl text-primary">Work with us</h3>
        <p className="mt-3 mb-[38px] w-[754px] font-normal text-[23px] text-secondary text-center">
          Ready to forge a collaborative path with Raha Commerce Group in your
          homeland? Just drop us a message and let's create something
          extraordinary together!
        </p>
        <div className="bg-cardColor py-8 px-14 min-w-[847px] mb-[38px]">
          <h3 className="font-bold text-primary text-[20px] leading-[22.5px] text-center">
            Message sent successful
          </h3>
          <div className="mt-2 flex justify-center items-center">
            <svg
              width="100"
              height="100"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="100" height="100" rx="50" fill="#212121" />
              <path
                d="M44.3331 58.9873L70.3771 32.9404L74.3863 36.9468L44.3331 66.9999L26.3018 48.9686L30.3081 44.9623L44.3331 58.9873Z"
                fill="url(#paint0_linear_505_1586)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_505_1586"
                  x1="50.344"
                  y1="32.9404"
                  x2="50.344"
                  y2="111"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#BEA76B" />
                  <stop offset="1" stop-color="#BEA76B" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
        <div className="mb-7">
          <div className="text-center mb-7">
            <p className="flex text-secondary font-normal text-[22px] leading-[25.17px] gap-2">
              <svg
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_445_828)">
                  <path
                    d="M10.5 20.2734L5.19667 14.97C4.14779 13.9211 3.43349 12.5847 3.14411 11.1299C2.85473 9.67504 3.00326 8.16704 3.57092 6.7966C4.13858 5.42616 5.09987 4.25483 6.33324 3.43072C7.5666 2.60661 9.01665 2.16675 10.5 2.16675C11.9834 2.16675 13.4334 2.60661 14.6668 3.43072C15.9001 4.25483 16.8614 5.42616 17.4291 6.7966C17.9968 8.16704 18.1453 9.67504 17.8559 11.1299C17.5665 12.5847 16.8522 13.9211 15.8033 14.97L10.5 20.2734ZM14.625 13.7917C15.4408 12.9759 15.9963 11.9365 16.2213 10.8049C16.4463 9.67337 16.3308 8.50051 15.8892 7.43465C15.4477 6.36878 14.7 5.45777 13.7408 4.81682C12.7815 4.17587 11.6537 3.83377 10.5 3.83377C9.3463 3.83377 8.21851 4.17587 7.25924 4.81682C6.29997 5.45777 5.55229 6.36878 5.11076 7.43465C4.66923 8.50051 4.55368 9.67337 4.77871 10.8049C5.00374 11.9365 5.55926 12.9759 6.375 13.7917L10.5 17.9167L14.625 13.7917ZM10.5 11.3334C10.058 11.3334 9.63405 11.1578 9.32149 10.8452C9.00893 10.5326 8.83334 10.1087 8.83334 9.66668C8.83334 9.22466 9.00893 8.80073 9.32149 8.48817C9.63405 8.17561 10.058 8.00002 10.5 8.00002C10.942 8.00002 11.366 8.17561 11.6785 8.48817C11.9911 8.80073 12.1667 9.22466 12.1667 9.66668C12.1667 10.1087 11.9911 10.5326 11.6785 10.8452C11.366 11.1578 10.942 11.3334 10.5 11.3334Z"
                    fill="#BEBEBE"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_445_828">
                    <rect
                      width="20"
                      height="20"
                      fill="white"
                      transform="translate(0.5 0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
              Innovation Center of Isfahan University, Azadi Square, Isfahan,
              Iran, Raha Commercial Group
            </p>
          </div>
          <div className="flex justify-between">
            <div>
              <p className="flex text-secondary font-normal text-[22px] leading-[25.17px] gap-2">
                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.305 9.40167C9.08695 10.7754 10.2246 11.9131 11.5983 12.695L12.335 11.6633C12.4535 11.4974 12.6286 11.3807 12.8273 11.3353C13.026 11.2898 13.2345 11.3188 13.4133 11.4167C14.5919 12.0608 15.8935 12.4481 17.2325 12.5533C17.4415 12.5699 17.6365 12.6646 17.7788 12.8186C17.921 12.9726 18 13.1745 18 13.3842V17.1025C18 17.3088 17.9235 17.5078 17.7853 17.661C17.6471 17.8142 17.4569 17.9106 17.2517 17.9317C16.81 17.9775 16.365 18 15.9167 18C8.78333 18 3 12.2167 3 5.08333C3 4.635 3.0225 4.19 3.06833 3.74833C3.08938 3.54308 3.18582 3.35293 3.33899 3.21469C3.49216 3.07646 3.69117 2.99996 3.8975 3H7.61583C7.82547 2.99997 8.02741 3.07896 8.1814 3.22121C8.33539 3.36346 8.43011 3.55852 8.44667 3.7675C8.55185 5.10649 8.93923 6.40807 9.58333 7.58667C9.68122 7.76547 9.71018 7.97395 9.66472 8.17266C9.61927 8.37137 9.50255 8.54654 9.33667 8.665L8.305 9.40167ZM6.20333 8.85417L7.78667 7.72333C7.33732 6.75341 7.02946 5.72403 6.8725 4.66667H4.675C4.67 4.805 4.6675 4.94417 4.6675 5.08333C4.66667 11.2967 9.70333 16.3333 15.9167 16.3333C16.0558 16.3333 16.195 16.3308 16.3333 16.325V14.1275C15.276 13.9705 14.2466 13.6627 13.2767 13.2133L12.1458 14.7967C11.6906 14.6198 11.2483 14.4109 10.8225 14.1717L10.7742 14.1442C9.13965 13.2139 7.78607 11.8604 6.85583 10.2258L6.82833 10.1775C6.58909 9.75166 6.38024 9.30945 6.20333 8.85417Z"
                    fill="#BEBEBE"
                  />
                </svg>
                Phone Number: +98 313 793 7062
              </p>
            </div>
            <div>
              <p className="flex text-secondary font-normal text-[22px] leading-[25.17px] gap-2">
                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.33366 3.83341V17.1667H14.667V3.83341H6.33366ZM5.50033 2.16675H15.5003C15.7213 2.16675 15.9333 2.25455 16.0896 2.41083C16.2459 2.56711 16.3337 2.77907 16.3337 3.00008V18.0001C16.3337 18.2211 16.2459 18.4331 16.0896 18.5893C15.9333 18.7456 15.7213 18.8334 15.5003 18.8334H5.50033C5.27931 18.8334 5.06735 18.7456 4.91107 18.5893C4.75479 18.4331 4.66699 18.2211 4.66699 18.0001V3.00008C4.66699 2.77907 4.75479 2.56711 4.91107 2.41083C5.06735 2.25455 5.27931 2.16675 5.50033 2.16675ZM10.5003 14.6667C10.7213 14.6667 10.9333 14.7545 11.0896 14.9108C11.2459 15.0671 11.3337 15.2791 11.3337 15.5001C11.3337 15.7211 11.2459 15.9331 11.0896 16.0893C10.9333 16.2456 10.7213 16.3334 10.5003 16.3334C10.2793 16.3334 10.0674 16.2456 9.91107 16.0893C9.75479 15.9331 9.66699 15.7211 9.66699 15.5001C9.66699 15.2791 9.75479 15.0671 9.91107 14.9108C10.0674 14.7545 10.2793 14.6667 10.5003 14.6667Z"
                    fill="#BEBEBE"
                  />
                </svg>
                Mobile Number: +98 9100 77 9898
              </p>
            </div>
          </div>
        </div>
        <div>
          <p className="text-secondary font-normal text-[22px] leading-[25.17px] mb-2">
            Send message for us:
          </p>
          <div className="flex gap-4 justify-center items-center">
            <div>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.00401338 20L1.35601 15.032C0.465151 13.5049 -0.00289063 11.768 1.34322e-05 10C1.34322e-05 4.477 4.47701 0 10 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 10 20C8.23279 20.0029 6.49667 19.5352 4.97001 18.645L0.00401338 20ZM6.39101 5.308C6.26188 5.31602 6.13569 5.35003 6.02001 5.408C5.91153 5.46943 5.81251 5.54622 5.72601 5.636C5.60601 5.749 5.53801 5.847 5.46501 5.942C5.09542 6.423 4.89662 7.01342 4.90001 7.62C4.90201 8.11 5.03001 8.587 5.23001 9.033C5.63901 9.935 6.31201 10.89 7.20101 11.775C7.41501 11.988 7.62401 12.202 7.84901 12.401C8.9524 13.3725 10.2673 14.073 11.689 14.447L12.258 14.534C12.443 14.544 12.628 14.53 12.814 14.521C13.1053 14.506 13.3896 14.4271 13.647 14.29C13.813 14.202 13.891 14.158 14.03 14.07C14.03 14.07 14.073 14.042 14.155 13.98C14.29 13.88 14.373 13.809 14.485 13.692C14.568 13.606 14.64 13.505 14.695 13.39C14.773 13.227 14.851 12.916 14.883 12.657C14.907 12.459 14.9 12.351 14.897 12.284C14.893 12.177 14.804 12.066 14.707 12.019L14.125 11.758C14.125 11.758 13.255 11.379 12.724 11.137C12.668 11.1126 12.608 11.0987 12.547 11.096C12.4786 11.089 12.4095 11.0967 12.3443 11.1186C12.2791 11.1405 12.2193 11.1761 12.169 11.223V11.221C12.164 11.221 12.097 11.278 11.374 12.154C11.3325 12.2098 11.2754 12.2519 11.2098 12.2751C11.1443 12.2982 11.0733 12.3013 11.006 12.284C10.9409 12.2666 10.877 12.2445 10.815 12.218C10.691 12.166 10.648 12.146 10.563 12.109L10.558 12.107C9.98592 11.8572 9.45624 11.5198 8.98801 11.107C8.86201 10.997 8.74501 10.877 8.62501 10.761C8.23159 10.3842 7.88873 9.95801 7.60501 9.493L7.54601 9.398C7.50364 9.33416 7.46937 9.2653 7.44401 9.193C7.40601 9.046 7.50501 8.928 7.50501 8.928C7.50501 8.928 7.74801 8.662 7.86101 8.518C7.9551 8.39832 8.04289 8.27382 8.12401 8.145C8.24201 7.955 8.27901 7.76 8.21701 7.609C7.93701 6.925 7.64701 6.244 7.34901 5.568C7.29001 5.434 7.11501 5.338 6.95601 5.319C6.90201 5.313 6.84801 5.307 6.79401 5.303C6.65972 5.29633 6.52515 5.29866 6.39101 5.308Z"
                  fill="#BEBEBE"
                />
              </svg>
            </div>
            <div>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10ZM10.3583 7.38244C9.3857 7.787 7.44177 8.6243 4.52657 9.8944C4.05318 10.0827 3.8052 10.2669 3.78263 10.4469C3.74448 10.7513 4.12559 10.8711 4.64455 11.0343C4.71515 11.0565 4.78829 11.0795 4.86327 11.1038C5.37385 11.2698 6.06068 11.464 6.41773 11.4717C6.74161 11.4787 7.1031 11.3452 7.50219 11.0711C10.226 9.2325 11.632 8.3032 11.7202 8.2831C11.7825 8.269 11.8688 8.2512 11.9273 8.3032C11.9858 8.3552 11.98 8.4536 11.9738 8.48C11.9361 8.641 10.4401 10.0318 9.6659 10.7515C9.4246 10.9759 9.2534 11.135 9.2184 11.1714C9.14 11.2528 9.0601 11.3298 8.9833 11.4038C8.509 11.8611 8.1532 12.204 9.003 12.764C9.4114 13.0331 9.7381 13.2556 10.0641 13.4776C10.4201 13.7201 10.7752 13.9619 11.2347 14.2631C11.3517 14.3398 11.4635 14.4195 11.5724 14.4971C11.9867 14.7925 12.3589 15.0579 12.8188 15.0155C13.086 14.991 13.362 14.7397 13.5022 13.9903C13.8335 12.2193 14.4847 8.382 14.6352 6.80081C14.6484 6.66228 14.6318 6.48498 14.6185 6.40715C14.6051 6.32932 14.5773 6.21842 14.4761 6.13633C14.3563 6.03911 14.1714 6.01861 14.0886 6.02C13.7125 6.0267 13.1354 6.22735 10.3583 7.38244Z"
                  fill="#BEBEBE"
                />
              </svg>
            </div>
            <div>
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.99977 20.02C15.5171 20.02 19.9898 15.5474 19.9898 10.03C19.9898 4.51271 15.5171 0.0400391 9.99977 0.0400391C4.48244 0.0400391 0.00976562 4.51271 0.00976562 10.03C0.00976562 15.5474 4.48244 20.02 9.99977 20.02ZM15.0098 11.2379C15.0098 9.71492 13.5029 8.47342 11.8098 8.47342C10.0171 8.47342 8.60517 9.71492 8.60517 11.2379C8.60517 12.7633 10.0171 14.0024 11.8098 14.0024C12.1848 14.0024 12.5644 13.9074 12.9394 13.8112L13.9728 14.3838L13.6904 13.4322C14.4462 12.8584 15.0098 12.0969 15.0098 11.2379ZM11.9332 8.29177C11.607 6.75553 9.98385 5.61629 8.13176 5.61629C6.06018 5.61629 4.36352 7.04425 4.36352 8.85598C4.36352 9.90259 4.92828 10.7615 5.87153 11.428L5.49423 12.5733L6.81122 11.9056C6.8831 11.9201 6.95281 11.9346 7.02101 11.9487C7.40078 12.0277 7.73344 12.0969 8.13176 12.0969C8.25041 12.0969 8.36669 12.0909 8.48296 12.0824C8.4094 11.8274 8.36669 11.5603 8.36669 11.2836C8.36669 9.61989 9.78096 8.26891 11.5702 8.26891C11.6924 8.26891 11.8134 8.27733 11.9332 8.29177ZM10.3932 10.3802C10.3932 10.1901 10.583 9.99883 10.7705 9.99883C11.0552 9.99883 11.2415 10.1901 11.2415 10.3802C11.2415 10.5727 11.0552 10.7615 10.7705 10.7615C10.583 10.7615 10.3932 10.5727 10.3932 10.3802ZM12.4695 10.3802C12.4695 10.1901 12.657 9.99883 12.8433 9.99883C13.1256 9.99883 13.3143 10.1901 13.3143 10.3802C13.3143 10.5727 13.1256 10.7615 12.8433 10.7615C12.657 10.7615 12.4695 10.5727 12.4695 10.3802ZM8.97891 7.71192C8.97891 7.42561 9.26129 7.23673 9.54486 7.23673C9.82842 7.23673 10.0159 7.42561 10.0159 7.71192C10.0159 7.99703 9.82842 8.18831 9.54486 8.18831C9.26248 8.18831 8.97891 7.99703 8.97891 7.71192ZM6.339 7.71192C6.339 7.42561 6.62375 7.23673 6.90732 7.23673C7.1897 7.23673 7.37717 7.42561 7.37717 7.71192C7.37835 7.99583 7.19089 8.18831 6.90732 8.18831C6.62494 8.18831 6.339 7.99703 6.339 7.71192Z"
                  fill="#BEBEBE"
                />
              </svg>
            </div>
            <div>
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.99977 20.02C15.5171 20.02 19.9898 15.5474 19.9898 10.03C19.9898 4.51271 15.5171 0.0400391 9.99977 0.0400391C4.48244 0.0400391 0.00976562 4.51271 0.00976562 10.03C0.00976562 15.5474 4.48244 20.02 9.99977 20.02ZM15.0098 11.2379C15.0098 9.71492 13.5029 8.47342 11.8098 8.47342C10.0171 8.47342 8.60517 9.71492 8.60517 11.2379C8.60517 12.7633 10.0171 14.0024 11.8098 14.0024C12.1848 14.0024 12.5644 13.9074 12.9394 13.8112L13.9728 14.3838L13.6904 13.4322C14.4462 12.8584 15.0098 12.0969 15.0098 11.2379ZM11.9332 8.29177C11.607 6.75553 9.98385 5.61629 8.13176 5.61629C6.06018 5.61629 4.36352 7.04425 4.36352 8.85598C4.36352 9.90259 4.92828 10.7615 5.87153 11.428L5.49423 12.5733L6.81122 11.9056C6.8831 11.9201 6.95281 11.9346 7.02101 11.9487C7.40078 12.0277 7.73344 12.0969 8.13176 12.0969C8.25041 12.0969 8.36669 12.0909 8.48296 12.0824C8.4094 11.8274 8.36669 11.5603 8.36669 11.2836C8.36669 9.61989 9.78096 8.26891 11.5702 8.26891C11.6924 8.26891 11.8134 8.27733 11.9332 8.29177ZM10.3932 10.3802C10.3932 10.1901 10.583 9.99883 10.7705 9.99883C11.0552 9.99883 11.2415 10.1901 11.2415 10.3802C11.2415 10.5727 11.0552 10.7615 10.7705 10.7615C10.583 10.7615 10.3932 10.5727 10.3932 10.3802ZM12.4695 10.3802C12.4695 10.1901 12.657 9.99883 12.8433 9.99883C13.1256 9.99883 13.3143 10.1901 13.3143 10.3802C13.3143 10.5727 13.1256 10.7615 12.8433 10.7615C12.657 10.7615 12.4695 10.5727 12.4695 10.3802ZM8.97891 7.71192C8.97891 7.42561 9.26129 7.23673 9.54486 7.23673C9.82842 7.23673 10.0159 7.42561 10.0159 7.71192C10.0159 7.99703 9.82842 8.18831 9.54486 8.18831C9.26248 8.18831 8.97891 7.99703 8.97891 7.71192ZM6.339 7.71192C6.339 7.42561 6.62375 7.23673 6.90732 7.23673C7.1897 7.23673 7.37717 7.42561 7.37717 7.71192C7.37835 7.99583 7.19089 8.18831 6.90732 8.18831C6.62494 8.18831 6.339 7.99703 6.339 7.71192Z"
                  fill="#BEBEBE"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="text-center flex justify-center items-center flex-col relative">
      <h3 className="font-bold text-3xl text-primary">Work with us</h3>
      <p className="mt-3 mb-[38px] w-[754px] font-normal text-[23px] text-secondary text-center">
        Ready to forge a collaborative path with Raha Commerce Group in your
        homeland? Just drop us a message and let's create something
        extraordinary together!
      </p>
      <div className="bg-cardColor py-8 px-14 min-w-[847px] mb-[38px]">
        <form className="flex flex-col My-form" onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-10 mb-8">
            <label htmlFor="name" className="flex flex-col text-left gap-1">
              Full Name *
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter Full Name"
              />
              <ValidationError
                prefix="name"
                field="name"
                errors={state.errors}
              />
            </label>
            <label htmlFor="number" className="flex flex-col text-left gap-1">
              Mobile Number *
              <input
                type="text"
                id="number"
                name="number"
                placeholder="Enter mobile number"
              />
              <ValidationError
                prefix="number"
                field="number"
                errors={state.errors}
              />
            </label>
          </div>
          <div className="grid grid-cols-2 gap-10 mb-8">
            <label htmlFor="industry" className="flex flex-col text-left gap-1">
              Industry Field *
              <input
                type="text"
                id="industry"
                name="industry"
                placeholder="Enter Industry Field"
              />
              <ValidationError
                prefix="industry"
                field="industry"
                errors={state.errors}
              />
            </label>
            <label htmlFor="email" className="flex flex-col text-left gap-1">
              Email
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Enter Email"
              />
              <ValidationError
                prefix="email"
                field="email"
                errors={state.errors}
              />
            </label>
          </div>
          <label
            htmlFor="description"
            className="flex flex-col text-left gap-1"
          >
            Description
            <textarea
              name="description"
              id="description"
              placeholder="Description"
              className="min-h-[80px]"
            ></textarea>
          </label>
          <div className="flex flex-col items-center">
            <button
              type="submit"
              disabled={state.submitting}
              className="mt-8 bg-primary text-white py-2 px-[34px] text-[20px] font-bold leading-[32px] w-fit text-center"
            >
              Send
            </button>
          </div>
        </form>
      </div>
      <div className="mb-7">
        <div className="text-center mb-7">
          <p className="flex text-secondary font-normal text-[22px] leading-[25.17px] gap-2">
            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_445_828)">
                <path
                  d="M10.5 20.2734L5.19667 14.97C4.14779 13.9211 3.43349 12.5847 3.14411 11.1299C2.85473 9.67504 3.00326 8.16704 3.57092 6.7966C4.13858 5.42616 5.09987 4.25483 6.33324 3.43072C7.5666 2.60661 9.01665 2.16675 10.5 2.16675C11.9834 2.16675 13.4334 2.60661 14.6668 3.43072C15.9001 4.25483 16.8614 5.42616 17.4291 6.7966C17.9968 8.16704 18.1453 9.67504 17.8559 11.1299C17.5665 12.5847 16.8522 13.9211 15.8033 14.97L10.5 20.2734ZM14.625 13.7917C15.4408 12.9759 15.9963 11.9365 16.2213 10.8049C16.4463 9.67337 16.3308 8.50051 15.8892 7.43465C15.4477 6.36878 14.7 5.45777 13.7408 4.81682C12.7815 4.17587 11.6537 3.83377 10.5 3.83377C9.3463 3.83377 8.21851 4.17587 7.25924 4.81682C6.29997 5.45777 5.55229 6.36878 5.11076 7.43465C4.66923 8.50051 4.55368 9.67337 4.77871 10.8049C5.00374 11.9365 5.55926 12.9759 6.375 13.7917L10.5 17.9167L14.625 13.7917ZM10.5 11.3334C10.058 11.3334 9.63405 11.1578 9.32149 10.8452C9.00893 10.5326 8.83334 10.1087 8.83334 9.66668C8.83334 9.22466 9.00893 8.80073 9.32149 8.48817C9.63405 8.17561 10.058 8.00002 10.5 8.00002C10.942 8.00002 11.366 8.17561 11.6785 8.48817C11.9911 8.80073 12.1667 9.22466 12.1667 9.66668C12.1667 10.1087 11.9911 10.5326 11.6785 10.8452C11.366 11.1578 10.942 11.3334 10.5 11.3334Z"
                  fill="#BEBEBE"
                />
              </g>
              <defs>
                <clipPath id="clip0_445_828">
                  <rect
                    width="20"
                    height="20"
                    fill="white"
                    transform="translate(0.5 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
            Innovation Center of Isfahan University, Azadi Square, Isfahan,
            Iran, Raha Commercial Group
          </p>
        </div>
        <div className="flex justify-between">
          <div>
            <p className="flex text-secondary font-normal text-[22px] leading-[25.17px] gap-2">
              <svg
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.305 9.40167C9.08695 10.7754 10.2246 11.9131 11.5983 12.695L12.335 11.6633C12.4535 11.4974 12.6286 11.3807 12.8273 11.3353C13.026 11.2898 13.2345 11.3188 13.4133 11.4167C14.5919 12.0608 15.8935 12.4481 17.2325 12.5533C17.4415 12.5699 17.6365 12.6646 17.7788 12.8186C17.921 12.9726 18 13.1745 18 13.3842V17.1025C18 17.3088 17.9235 17.5078 17.7853 17.661C17.6471 17.8142 17.4569 17.9106 17.2517 17.9317C16.81 17.9775 16.365 18 15.9167 18C8.78333 18 3 12.2167 3 5.08333C3 4.635 3.0225 4.19 3.06833 3.74833C3.08938 3.54308 3.18582 3.35293 3.33899 3.21469C3.49216 3.07646 3.69117 2.99996 3.8975 3H7.61583C7.82547 2.99997 8.02741 3.07896 8.1814 3.22121C8.33539 3.36346 8.43011 3.55852 8.44667 3.7675C8.55185 5.10649 8.93923 6.40807 9.58333 7.58667C9.68122 7.76547 9.71018 7.97395 9.66472 8.17266C9.61927 8.37137 9.50255 8.54654 9.33667 8.665L8.305 9.40167ZM6.20333 8.85417L7.78667 7.72333C7.33732 6.75341 7.02946 5.72403 6.8725 4.66667H4.675C4.67 4.805 4.6675 4.94417 4.6675 5.08333C4.66667 11.2967 9.70333 16.3333 15.9167 16.3333C16.0558 16.3333 16.195 16.3308 16.3333 16.325V14.1275C15.276 13.9705 14.2466 13.6627 13.2767 13.2133L12.1458 14.7967C11.6906 14.6198 11.2483 14.4109 10.8225 14.1717L10.7742 14.1442C9.13965 13.2139 7.78607 11.8604 6.85583 10.2258L6.82833 10.1775C6.58909 9.75166 6.38024 9.30945 6.20333 8.85417Z"
                  fill="#BEBEBE"
                />
              </svg>
              Phone Number: +98 313 793 7062
            </p>
          </div>
          <div>
            <p className="flex text-secondary font-normal text-[22px] leading-[25.17px] gap-2">
              <svg
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.33366 3.83341V17.1667H14.667V3.83341H6.33366ZM5.50033 2.16675H15.5003C15.7213 2.16675 15.9333 2.25455 16.0896 2.41083C16.2459 2.56711 16.3337 2.77907 16.3337 3.00008V18.0001C16.3337 18.2211 16.2459 18.4331 16.0896 18.5893C15.9333 18.7456 15.7213 18.8334 15.5003 18.8334H5.50033C5.27931 18.8334 5.06735 18.7456 4.91107 18.5893C4.75479 18.4331 4.66699 18.2211 4.66699 18.0001V3.00008C4.66699 2.77907 4.75479 2.56711 4.91107 2.41083C5.06735 2.25455 5.27931 2.16675 5.50033 2.16675ZM10.5003 14.6667C10.7213 14.6667 10.9333 14.7545 11.0896 14.9108C11.2459 15.0671 11.3337 15.2791 11.3337 15.5001C11.3337 15.7211 11.2459 15.9331 11.0896 16.0893C10.9333 16.2456 10.7213 16.3334 10.5003 16.3334C10.2793 16.3334 10.0674 16.2456 9.91107 16.0893C9.75479 15.9331 9.66699 15.7211 9.66699 15.5001C9.66699 15.2791 9.75479 15.0671 9.91107 14.9108C10.0674 14.7545 10.2793 14.6667 10.5003 14.6667Z"
                  fill="#BEBEBE"
                />
              </svg>
              Mobile Number: +98 9100 77 9898
            </p>
          </div>
        </div>
      </div>
      <div>
        <p className="text-secondary font-normal text-[22px] leading-[25.17px] mb-2">
          Send message for us:
        </p>
        <div className="flex gap-4 justify-center items-center">
          <div>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.00401338 20L1.35601 15.032C0.465151 13.5049 -0.00289063 11.768 1.34322e-05 10C1.34322e-05 4.477 4.47701 0 10 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 10 20C8.23279 20.0029 6.49667 19.5352 4.97001 18.645L0.00401338 20ZM6.39101 5.308C6.26188 5.31602 6.13569 5.35003 6.02001 5.408C5.91153 5.46943 5.81251 5.54622 5.72601 5.636C5.60601 5.749 5.53801 5.847 5.46501 5.942C5.09542 6.423 4.89662 7.01342 4.90001 7.62C4.90201 8.11 5.03001 8.587 5.23001 9.033C5.63901 9.935 6.31201 10.89 7.20101 11.775C7.41501 11.988 7.62401 12.202 7.84901 12.401C8.9524 13.3725 10.2673 14.073 11.689 14.447L12.258 14.534C12.443 14.544 12.628 14.53 12.814 14.521C13.1053 14.506 13.3896 14.4271 13.647 14.29C13.813 14.202 13.891 14.158 14.03 14.07C14.03 14.07 14.073 14.042 14.155 13.98C14.29 13.88 14.373 13.809 14.485 13.692C14.568 13.606 14.64 13.505 14.695 13.39C14.773 13.227 14.851 12.916 14.883 12.657C14.907 12.459 14.9 12.351 14.897 12.284C14.893 12.177 14.804 12.066 14.707 12.019L14.125 11.758C14.125 11.758 13.255 11.379 12.724 11.137C12.668 11.1126 12.608 11.0987 12.547 11.096C12.4786 11.089 12.4095 11.0967 12.3443 11.1186C12.2791 11.1405 12.2193 11.1761 12.169 11.223V11.221C12.164 11.221 12.097 11.278 11.374 12.154C11.3325 12.2098 11.2754 12.2519 11.2098 12.2751C11.1443 12.2982 11.0733 12.3013 11.006 12.284C10.9409 12.2666 10.877 12.2445 10.815 12.218C10.691 12.166 10.648 12.146 10.563 12.109L10.558 12.107C9.98592 11.8572 9.45624 11.5198 8.98801 11.107C8.86201 10.997 8.74501 10.877 8.62501 10.761C8.23159 10.3842 7.88873 9.95801 7.60501 9.493L7.54601 9.398C7.50364 9.33416 7.46937 9.2653 7.44401 9.193C7.40601 9.046 7.50501 8.928 7.50501 8.928C7.50501 8.928 7.74801 8.662 7.86101 8.518C7.9551 8.39832 8.04289 8.27382 8.12401 8.145C8.24201 7.955 8.27901 7.76 8.21701 7.609C7.93701 6.925 7.64701 6.244 7.34901 5.568C7.29001 5.434 7.11501 5.338 6.95601 5.319C6.90201 5.313 6.84801 5.307 6.79401 5.303C6.65972 5.29633 6.52515 5.29866 6.39101 5.308Z"
                fill="#BEBEBE"
              />
            </svg>
          </div>
          <div>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10ZM10.3583 7.38244C9.3857 7.787 7.44177 8.6243 4.52657 9.8944C4.05318 10.0827 3.8052 10.2669 3.78263 10.4469C3.74448 10.7513 4.12559 10.8711 4.64455 11.0343C4.71515 11.0565 4.78829 11.0795 4.86327 11.1038C5.37385 11.2698 6.06068 11.464 6.41773 11.4717C6.74161 11.4787 7.1031 11.3452 7.50219 11.0711C10.226 9.2325 11.632 8.3032 11.7202 8.2831C11.7825 8.269 11.8688 8.2512 11.9273 8.3032C11.9858 8.3552 11.98 8.4536 11.9738 8.48C11.9361 8.641 10.4401 10.0318 9.6659 10.7515C9.4246 10.9759 9.2534 11.135 9.2184 11.1714C9.14 11.2528 9.0601 11.3298 8.9833 11.4038C8.509 11.8611 8.1532 12.204 9.003 12.764C9.4114 13.0331 9.7381 13.2556 10.0641 13.4776C10.4201 13.7201 10.7752 13.9619 11.2347 14.2631C11.3517 14.3398 11.4635 14.4195 11.5724 14.4971C11.9867 14.7925 12.3589 15.0579 12.8188 15.0155C13.086 14.991 13.362 14.7397 13.5022 13.9903C13.8335 12.2193 14.4847 8.382 14.6352 6.80081C14.6484 6.66228 14.6318 6.48498 14.6185 6.40715C14.6051 6.32932 14.5773 6.21842 14.4761 6.13633C14.3563 6.03911 14.1714 6.01861 14.0886 6.02C13.7125 6.0267 13.1354 6.22735 10.3583 7.38244Z"
                fill="#BEBEBE"
              />
            </svg>
          </div>
          <div>
            <svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.99977 20.02C15.5171 20.02 19.9898 15.5474 19.9898 10.03C19.9898 4.51271 15.5171 0.0400391 9.99977 0.0400391C4.48244 0.0400391 0.00976562 4.51271 0.00976562 10.03C0.00976562 15.5474 4.48244 20.02 9.99977 20.02ZM15.0098 11.2379C15.0098 9.71492 13.5029 8.47342 11.8098 8.47342C10.0171 8.47342 8.60517 9.71492 8.60517 11.2379C8.60517 12.7633 10.0171 14.0024 11.8098 14.0024C12.1848 14.0024 12.5644 13.9074 12.9394 13.8112L13.9728 14.3838L13.6904 13.4322C14.4462 12.8584 15.0098 12.0969 15.0098 11.2379ZM11.9332 8.29177C11.607 6.75553 9.98385 5.61629 8.13176 5.61629C6.06018 5.61629 4.36352 7.04425 4.36352 8.85598C4.36352 9.90259 4.92828 10.7615 5.87153 11.428L5.49423 12.5733L6.81122 11.9056C6.8831 11.9201 6.95281 11.9346 7.02101 11.9487C7.40078 12.0277 7.73344 12.0969 8.13176 12.0969C8.25041 12.0969 8.36669 12.0909 8.48296 12.0824C8.4094 11.8274 8.36669 11.5603 8.36669 11.2836C8.36669 9.61989 9.78096 8.26891 11.5702 8.26891C11.6924 8.26891 11.8134 8.27733 11.9332 8.29177ZM10.3932 10.3802C10.3932 10.1901 10.583 9.99883 10.7705 9.99883C11.0552 9.99883 11.2415 10.1901 11.2415 10.3802C11.2415 10.5727 11.0552 10.7615 10.7705 10.7615C10.583 10.7615 10.3932 10.5727 10.3932 10.3802ZM12.4695 10.3802C12.4695 10.1901 12.657 9.99883 12.8433 9.99883C13.1256 9.99883 13.3143 10.1901 13.3143 10.3802C13.3143 10.5727 13.1256 10.7615 12.8433 10.7615C12.657 10.7615 12.4695 10.5727 12.4695 10.3802ZM8.97891 7.71192C8.97891 7.42561 9.26129 7.23673 9.54486 7.23673C9.82842 7.23673 10.0159 7.42561 10.0159 7.71192C10.0159 7.99703 9.82842 8.18831 9.54486 8.18831C9.26248 8.18831 8.97891 7.99703 8.97891 7.71192ZM6.339 7.71192C6.339 7.42561 6.62375 7.23673 6.90732 7.23673C7.1897 7.23673 7.37717 7.42561 7.37717 7.71192C7.37835 7.99583 7.19089 8.18831 6.90732 8.18831C6.62494 8.18831 6.339 7.99703 6.339 7.71192Z"
                fill="#BEBEBE"
              />
            </svg>
          </div>
          <div>
            <svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.99977 20.02C15.5171 20.02 19.9898 15.5474 19.9898 10.03C19.9898 4.51271 15.5171 0.0400391 9.99977 0.0400391C4.48244 0.0400391 0.00976562 4.51271 0.00976562 10.03C0.00976562 15.5474 4.48244 20.02 9.99977 20.02ZM15.0098 11.2379C15.0098 9.71492 13.5029 8.47342 11.8098 8.47342C10.0171 8.47342 8.60517 9.71492 8.60517 11.2379C8.60517 12.7633 10.0171 14.0024 11.8098 14.0024C12.1848 14.0024 12.5644 13.9074 12.9394 13.8112L13.9728 14.3838L13.6904 13.4322C14.4462 12.8584 15.0098 12.0969 15.0098 11.2379ZM11.9332 8.29177C11.607 6.75553 9.98385 5.61629 8.13176 5.61629C6.06018 5.61629 4.36352 7.04425 4.36352 8.85598C4.36352 9.90259 4.92828 10.7615 5.87153 11.428L5.49423 12.5733L6.81122 11.9056C6.8831 11.9201 6.95281 11.9346 7.02101 11.9487C7.40078 12.0277 7.73344 12.0969 8.13176 12.0969C8.25041 12.0969 8.36669 12.0909 8.48296 12.0824C8.4094 11.8274 8.36669 11.5603 8.36669 11.2836C8.36669 9.61989 9.78096 8.26891 11.5702 8.26891C11.6924 8.26891 11.8134 8.27733 11.9332 8.29177ZM10.3932 10.3802C10.3932 10.1901 10.583 9.99883 10.7705 9.99883C11.0552 9.99883 11.2415 10.1901 11.2415 10.3802C11.2415 10.5727 11.0552 10.7615 10.7705 10.7615C10.583 10.7615 10.3932 10.5727 10.3932 10.3802ZM12.4695 10.3802C12.4695 10.1901 12.657 9.99883 12.8433 9.99883C13.1256 9.99883 13.3143 10.1901 13.3143 10.3802C13.3143 10.5727 13.1256 10.7615 12.8433 10.7615C12.657 10.7615 12.4695 10.5727 12.4695 10.3802ZM8.97891 7.71192C8.97891 7.42561 9.26129 7.23673 9.54486 7.23673C9.82842 7.23673 10.0159 7.42561 10.0159 7.71192C10.0159 7.99703 9.82842 8.18831 9.54486 8.18831C9.26248 8.18831 8.97891 7.99703 8.97891 7.71192ZM6.339 7.71192C6.339 7.42561 6.62375 7.23673 6.90732 7.23673C7.1897 7.23673 7.37717 7.42561 7.37717 7.71192C7.37835 7.99583 7.19089 8.18831 6.90732 8.18831C6.62494 8.18831 6.339 7.99703 6.339 7.71192Z"
                fill="#BEBEBE"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsSection;
