import React from "react";

const sizeClasses = {
  txtPoppinsRegular36Black900: "font-normal font-poppins",
  txtPoppinsLight13: "font-light font-poppins",
  txtPoppinsLight16: "font-light font-poppins",
  txtPoppinsSemiBold24Cyan900: "font-poppins font-semibold",
  txtPoppinsLight20WhiteA700: "font-light font-poppins",
  txtPoppinsBold32Lightgreen800: "font-bold font-poppins",
  txtPoppinsBold32: "font-bold font-poppins",
  txtPoppinsRegular48: "font-normal font-poppins",
  txtPoppinsLight32: "font-light font-poppins",
  txtPoppinsLight24Black900: "font-light font-poppins",
  txtPoppinsBold36: "font-bold font-poppins",
  txtPoppinsMedium13: "font-medium font-poppins",
  txtPoppinsBold48Lightgreen800: "font-bold font-poppins",
  txtPoppinsExtraBold36RedA700: "font-extrabold font-poppins",
  txtPoppinsBold32Black900: "font-bold font-poppins",
  txtPoppinsExtraBold75: "font-extrabold font-poppins",
  txtPoppinsExtraBold36: "font-extrabold font-poppins",
  txtPoppinsLight24Lightgreen800: "font-light font-poppins",
  txtPoppinsExtraLight15: "font-light font-poppins",
  txtPoppinsExtraLight16: "font-light font-poppins",
  txtPoppinsBold48: "font-bold font-poppins",
  txtPoppinsLight48: "font-light font-poppins",
  txtPoppinsLight24: "font-light font-poppins",
  txtPoppinsBold28: "font-bold font-poppins",
  txtPoppinsBold40: "font-bold font-poppins",
  txtPoppinsBold20: "font-bold font-poppins",
  txtPoppinsExtraBold36WhiteA700: "font-extrabold font-poppins",
  txtPoppinsRegular36: "font-normal font-poppins",
  txtPoppinsRegular14: "font-normal font-poppins",
  txtPoppinsBold48Black900: "font-bold font-poppins",
  txtPoppinsSemiBold24Black900: "font-poppins font-semibold",
  txtPoppinsRegular15: "font-normal font-poppins",
  txtPoppinsLight20: "font-light font-poppins",
  txtPoppinsBold24: "font-bold font-poppins",
  txtPoppinsSemiBold24: "font-poppins font-semibold",
  txtPoppinsRegular24: "font-normal font-poppins",
  txtPoppinsLight16Green400: "font-light font-poppins",
  txtPoppinsExtraBold20: "font-extrabold font-poppins",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
