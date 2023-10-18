export interface IButton {
  title?: string;
  variant?: string | undefined;
  onClick: (event: any) => void;
  disabled?: boolean;
  icon?: JSX.Element;
}

export interface IIcon {
  fill?: string;
  stroke?: string;
  size?: string;
  viewBox?: string;
  variant?: string
}