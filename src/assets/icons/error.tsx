import { IIcon } from "../../interfaces";
export const ErrorIcon = ({
  fill = "none",
  size = "28",
  stroke = "currentColor",
  viewBox = "0 0 24 24",
}: IIcon) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill={fill}
    width={`${size}px`}
    height={`${size}px`}
    viewBox={viewBox}
    strokeWidth={1.5}
    stroke={stroke}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);
