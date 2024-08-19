import { FunctionComponent, MouseEventHandler, PropsWithChildren } from "react";
import classNames from "classnames";

type ButtonProps = {
  onClick: MouseEventHandler<HTMLButtonElement>;
  isActive: boolean;
  isDisabled: boolean;
};

export const Button: FunctionComponent<PropsWithChildren<ButtonProps>> = ({
  children,
  onClick,
  isActive,
  isDisabled,
}) => {
  const className = classNames({
    "px-2 py-1 border border-black": true,
    "button-active": isActive,
    "button-disabled": isDisabled,
  });

  return (
    <button
      onClick={onClick}
      type="button"
      className={className}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};
