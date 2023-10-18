import React, { memo } from "react";
import { IButton } from "../../interfaces";

export const Button = memo(({ title, variant, onClick, icon }: IButton) => (
  <button
    className={variant}
    onClick={onClick}
  >
    {icon && (
      <span id="input-icon">
        {icon}
      </span>
    )}
    {title}
  </button>
));
