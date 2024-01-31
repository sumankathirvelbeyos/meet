import React from "react";
import PropTypes from "prop-types";

const shapes = { square: "rounded-none", round: "rounded-[19px]" };
const variants = {
  outline: {
    light_green_800:
      "border border-light_green-800 border-solid text-light_green-800",
  },
  gradient: { cyan_900_light_green_800: "bg-gradient  text-white-A700" },
  fill: { white_A700: "bg-white-A700 text-light_green-800" },
};
const sizes = { xs: "p-[9px]", sm: "p-[18px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["square", "round"]),
  size: PropTypes.oneOf(["xs", "sm"]),
  variant: PropTypes.oneOf(["outline", "gradient", "fill"]),
  color: PropTypes.oneOf([
    "light_green_800",
    "cyan_900_light_green_800",
    "white_A700",
  ]),
};

export { Button };
