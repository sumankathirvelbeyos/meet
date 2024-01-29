import React from "react";

import { Img, Text } from "components";

const DashboardColumnOne = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-white-A700 border border-light_green-800 border-solid flex flex-col gap-[7px] items-center justify-end p-[34px] sm:px-5 w-full">
          <Img
            className="h-[90px] md:h-auto mt-[13px] object-cover w-[90px]"
            src="images/img_thunderbolt1_6.png"
            alt="thunderboltOne_One"
          />
          <Text
            className="sm:text-2xl md:text-[26px] text-[28px] text-center text-light_green-800"
            size="txtPoppinsLight28"
          >
            {props?.text}
          </Text>
        </div>
      </div>
    </>
  );
};

DashboardColumnOne.defaultProps = { text: "BUSINESS ETHICS & LABOUR RIGHTS" };

export default DashboardColumnOne;
