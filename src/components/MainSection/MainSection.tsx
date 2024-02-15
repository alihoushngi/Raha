import enjoy from "../../assets/images/enjoy.svg";
import union from "../../assets/images/union.svg";
import iran from "../../assets/images/iran.svg";
import persian from "../../assets/images/persian.svg";

const MainSection = () => {
  return (
    <div className="flex justify-center gap-2 max-sm:flex-col flex-wrap relative z-50 items-stretch">
      {/* card 1 */}
      <div className="w-[23%] max-sm:w-full min-h-full myTransitionSpeed hover:relative hover:bottom-1 hover:transform hover:-translate-2 max-sm:hover:bottom-[unset]">
        <a
          href="https://enjoypersia.com/"
          target="_blank"
          className="min-h-full"
        >
          <div className="bg-cardColor max-w-fit text-primary flex flex-col justify-center items-center min-w-full min-h-full z-20 myTransitionSpeed hover:bg-black">
            <div className="mt-[40px] max-lg:mt-[20px]">
              <img src={enjoy} alt="enjoy persia" />
            </div>
            <div className="mt-[36px]">
              <svg
                width="260"
                height="2"
                viewBox="0 0 260 2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 1H260" stroke="url(#paint0_radial_570_17)" />
                <defs>
                  <radialGradient
                    id="paint0_radial_570_17"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(130 1.5) rotate(90) scale(0.5 130)"
                  >
                    <stop stopColor="#B39C63" />
                    <stop offset="1" stopColor="#B39C63" stopOpacity="0" />
                  </radialGradient>
                </defs>
              </svg>
            </div>
            <h3 className="mt-[28px] text-xl font-bold">Enjoy Persia</h3>
            <h4 className="mt-[7px] mb-[31px] p-2 text-[17px] font-normal text-center text-wrap">
              Comprehensive Travel Platform
            </h4>
          </div>
        </a>
      </div>
      {/* card 2 */}
      <div className="w-[23%] max-sm:w-full min-h-full myTransitionSpeed hover:relative hover:bottom-1 hover:transform hover:-translate-2 max-sm:hover:bottom-[unset]">
        <a href="https://o2lancer.com/" target="_blank" className="min-h-full">
          <div className="bg-cardColor max-w-fit text-primary flex flex-col justify-center items-center min-w-full min-h-full z-20 myTransitionSpeed hover:bg-black">
            <div className="mt-[40px] max-lg:mt-[16px]">
              <img src={union} alt="oxygen digital agency" />
            </div>
            <div className="mt-[36px]">
              <svg
                width="260"
                height="2"
                viewBox="0 0 260 2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 1H260" stroke="url(#paint0_radial_570_17)" />
                <defs>
                  <radialGradient
                    id="paint0_radial_570_17"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(130 1.5) rotate(90) scale(0.5 130)"
                  >
                    <stop stopColor="#B39C63" />
                    <stop offset="1" stopColor="#B39C63" stopOpacity="0" />
                  </radialGradient>
                </defs>
              </svg>
            </div>
            <h3 className="mt-[28px] text-xl font-bold">
              Oxygen Digital Agency
            </h3>
            <h4 className="mt-[7px] mb-[31px] p-2 text-[17px] font-normal text-center text-wrap">
              Digital Design and Development Agency
            </h4>
          </div>
        </a>
      </div>
      {/* card 3 */}
      <div className="w-[23%] max-sm:w-full min-h-full myTransitionSpeed hover:relative hover:bottom-1 hover:transform hover:-translate-2 max-sm:hover:bottom-[unset]">
        <a
          href="https://iranhomemed.com/"
          target="_blank"
          className="min-h-full"
        >
          <div className="bg-cardColor max-w-fit text-primary flex flex-col justify-center items-center min-w-full min-h-full z-20 myTransitionSpeed hover:bg-black">
            <div className="mt-[40px]">
              <img src={iran} alt="iran home med" />
            </div>
            <div className="mt-[36px]">
              <svg
                width="260"
                height="2"
                viewBox="0 0 260 2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 1H260" stroke="url(#paint0_radial_570_17)" />
                <defs>
                  <radialGradient
                    id="paint0_radial_570_17"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(130 1.5) rotate(90) scale(0.5 130)"
                  >
                    <stop stopColor="#B39C63" />
                    <stop offset="1" stopColor="#B39C63" stopOpacity="0" />
                  </radialGradient>
                </defs>
              </svg>
            </div>
            <h3 className="mt-[28px] text-xl font-bold">Iran Home Med</h3>
            <h4 className="mt-[7px] mb-[31px] p-2 text-[17px] font-normal text-center text-wrap">
              Health and Medical Services
            </h4>
          </div>
        </a>
      </div>
      {/* card 4 */}
      <div className="w-[23%] max-sm:w-full min-h-full myTransitionSpeed hover:relative hover:bottom-1 hover:transform hover:-translate-2 max-sm:hover:bottom-[unset]">
        <a
          href="https://persianartstore.com/"
          target="_blank"
          className="min-h-full"
        >
          <div className="bg-cardColor max-w-fit text-primary flex flex-col justify-center items-center min-w-full min-h-full z-20 myTransitionSpeed hover:bg-black">
            <div className="mt-[40px]">
              <img src={persian} alt="persian art store" />
            </div>
            <div className="mt-[36px]">
              <svg
                width="260"
                height="2"
                viewBox="0 0 260 2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 1H260" stroke="url(#paint0_radial_570_17)" />
                <defs>
                  <radialGradient
                    id="paint0_radial_570_17"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(130 1.5) rotate(90) scale(0.5 130)"
                  >
                    <stop stopColor="#B39C63" />
                    <stop offset="1" stopColor="#B39C63" stopOpacity="0" />
                  </radialGradient>
                </defs>
              </svg>
            </div>
            <h3 className="mt-[28px] text-xl font-bold">Persian Art Store</h3>
            <h4 className="mt-[7px] mb-[31px] p-2 text-[17px] font-normal text-center text-wrap">
              Online Sale of Iranian Handicrafts and Artworks
            </h4>
          </div>
        </a>
      </div>
    </div>
  );
};

export default MainSection;
