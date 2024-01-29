import React from "react";

import { Img, Text } from "components";

const DashboardColumn4 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-white-A700 border border-light_green-800 border-solid flex flex-col gap-2 items-center justify-end p-[33px] sm:px-5 w-full">
          <Img
            className="h-[90px] md:h-auto mt-3.5 object-cover w-[90px]"
            src="images/img_thunderbolt1_3.png"
            alt="thunderboltOne"
          />
          <Text
            className="sm:text-2xl md:text-[26px] text-[28px] text-light_green-800"
            size="txtPoppinsLight28"
          >
            {props?.effluentstext}
          </Text>
        </div>
      </div>
    </>
  );
};

DashboardColumn4.defaultProps = { effluentstext: "EFFLUENTS" };

export default DashboardColumn4;
