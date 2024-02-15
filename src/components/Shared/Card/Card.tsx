import { ReactComponent } from "../../../types/types";
import { ICardProps } from "./CardTypes";

const Card: ReactComponent<ICardProps> = (props) => {
  const { imageSrc, imageAlt, cardTitle, cardDes } = props;
  return (
    <div className="bg-cardColor max-w-fit text-primary flex flex-col justify-center items-center min-w-[308px] min-h-[272px] max-h-[272px] z-20 transition-all ease-in-out hover:bg-black hover:mb-2">
      <div className="mt-[40px]">
        <img src={imageSrc} alt={imageAlt} />
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
      <h3 className="mt-[28px] text-xl font-bold">{cardTitle}</h3>
      <h4 className="mt-[7px] mb-[31px] p-2 text-[17px] font-normal text-center text-wrap">
        {cardDes}
      </h4>
    </div>
  );
};

export default Card;
