import React from "react";

import { Button, Img } from "components";

const WaterColumnthree = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-7 justify-start w-full">
          <div className="flex sm:flex-col flex-row gap-[27px] items-center justify-start md:ml-[0] ml-[25px] w-[46%] md:w-full">
            <Button
              className="border border-light_green-800 border-solid cursor-pointer font-medium font-poppins leading-[normal] min-w-[120px] text-[13px] text-center"
              shape="round"
              color="white_A700"
              size="xs"
              variant="fill"
            >
              {props?.facilityOne}
            </Button>
            <Button
              className="border border-light_green-800 border-solid cursor-pointer font-medium font-poppins leading-[normal] min-w-[120px] text-[13px] text-center"
              shape="round"
              color="white_A700"
              size="xs"
              variant="fill"
            >
              {props?.facilityTwo}
            </Button>
            <Button
              className="border border-light_green-800 border-solid cursor-pointer font-medium font-poppins leading-[normal] min-w-[120px] text-[13px] text-center"
              shape="round"
              color="white_A700"
              size="xs"
              variant="fill"
            >
              {props?.facilityThree}
            </Button>
            <Button
              className="cursor-pointer font-medium font-poppins leading-[normal] min-w-[77px] text-[13px] text-center"
              shape="round"
              size="xs"
              variant="gradient"
              color="cyan_900_light_green_800"
            >
              {props?.all}
            </Button>
          </div>
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <Img
                className="h-[563px] sm:h-auto object-cover w-full"
                src="images/img_rectangle664.png"
                alt="rectangle664"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

WaterColumnthree.defaultProps = {
  facilityOne: "FACILITY 1",
  facilityTwo: "FACILITY 2",
  facilityThree: "FACILITY 3",
  all: "ALL",
};

export default WaterColumnthree;
