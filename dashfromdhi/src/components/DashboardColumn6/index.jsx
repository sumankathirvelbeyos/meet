import React from "react";
import { Link } from "react-router-dom";
import { Img, Text } from "components";

const DashboardColumn6 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-white-A700 border border-light_green-800 border-solid flex flex-col gap-3 items-center justify-end p-[35px] sm:px-5 w-full">
        <Link to="/healthsaftey"> <Img
            className="h-[90px] md:h-auto mt-1.5 object-cover w-[90px]"
            src="images/img_thunderbolt1_5.png"
            alt="thunderboltOne"
          /></Link>
          <Text
            className="sm:text-2xl md:text-[26px] text-[28px] text-center text-light_green-800"
            size="txtPoppinsLight28"
          >
            {props?.healthsafety}
          </Text>
        </div>
      </div>
    </>
  );
};

DashboardColumn6.defaultProps = { healthsafety: "HEALTH & SAFETY" };

export default DashboardColumn6;
