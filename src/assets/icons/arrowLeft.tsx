import { IIcon } from "../../interfaces";
export const ArrowLeftIcon = ({
  fill = "none",
  size = "24",
  stroke = "currentColor",
  viewBox = "0 0 512 512",
  variant
}: IIcon) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill={fill}
    width={`${size}px`}
    height={`${size}px`}
    viewBox={viewBox}
    strokeWidth={1.5}
    stroke={stroke}
    className={variant}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="160,115.4 180.7,96 352,256 180.7,416 160,396.7 310.5,256 " />
  </svg>
);
