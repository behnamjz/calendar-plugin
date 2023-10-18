import { IIcon } from "../../interfaces";
export const ArrowRightIcon = ({
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
    <polygon points="352,115.4 331.3,96 160,256 331.3,416 352,396.7 201.5,256 " />
  </svg>
);
