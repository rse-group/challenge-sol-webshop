import React from "react";
import PropTypes from "prop-types";
import { BUTTON_CLASSNAMES, BUTTON_SIZES } from "./variants";
import useAppearance from "@/commons/appearance/useAppearance";
import { Icon } from "@/icons";

// variant: primary, secondary, tertiary
const Button = ({
  id,
  disabled,
  type,
  onClick,
  variant,
  className,
  children,
  kit,
  size = "md",
}) => {
  const interfaceKit = useAppearance();
  const resolvedKit = kit ?? interfaceKit;
  const buttonStyle = resolvedKit?.button?.[variant] ?? "primary";
  const buttonVariant = BUTTON_CLASSNAMES[buttonStyle];
  const buttonSize = BUTTON_SIZES[size];

  return (
    <button
      className={`btn ${buttonVariant} ${className} ${buttonSize}`}
      disabled={disabled}
      onClick={onClick}
      type={type || "button"}
    >
      {id ? <Icon id={id} /> : null}
      {children}
    </button>
  );
};

export default Button;

Button.propTypes = {
  id: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,
  variant: PropTypes.oneOf(["primary", "secondary", "tertiary", "neutral"]),
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  kit: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
};
