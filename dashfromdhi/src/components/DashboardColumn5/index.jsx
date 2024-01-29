import React from "react";

import { Img, Text } from "components";

const DashboardColumn5 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-white-A700 border border-light_green-800 border-solid flex flex-col gap-2.5 items-center justify-end p-9 sm:px-5 w-full">
          <Img
            className="h-[90px] md:h-auto mt-1.5 object-cover w-[90px]"
            src="images/img_thunderbolt1_4.png"
            alt="thunderboltOne"
          />
          <Text
            className="sm:text-2xl md:text-[26px] text-[28px] text-center text-light_green-800"
            size="txtPoppinsLight28"
          >
            {props?.equalitytext}
          </Text>
        </div>
      </div>
    </>
  );
};

DashboardColumn5.defaultProps = { equalitytext: "EQUALITY" };

export default DashboardColumn5;
