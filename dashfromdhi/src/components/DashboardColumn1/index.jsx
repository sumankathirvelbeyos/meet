import React from "react";

import { Img, Text } from "components";

const DashboardColumn1 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-white-A700 border border-light_green-800 border-solid flex flex-col gap-2 items-center justify-end p-[33px] sm:px-5 w-full">
          <Img
            className="h-[90px] md:h-auto mt-3.5 object-cover w-[90px]"
            src="images/img_thunderbolt1_90x90.png"
            alt="thunderboltOne"
          />
          <Text
            className="sm:text-2xl md:text-[26px] text-[28px] text-light_green-800"
            size="txtPoppinsLight28"
          >
            {props?.emissionstext}
          </Text>
        </div>
      </div>
    </>
  );
};

DashboardColumn1.defaultProps = { emissionstext: "EMISSIONS" };

export default DashboardColumn1;
