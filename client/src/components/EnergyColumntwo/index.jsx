import React from "react";

import { CircularProgressbar } from "react-circular-progressbar";

import { Input, Text } from "components";

import "react-circular-progressbar/dist/styles.css";

const EnergyColumntwo = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-end justify-between w-full">
            <div className="flex md:flex-1 flex-col gap-[17px] items-center justify-start mb-[3px] md:mt-0 mt-[206px] w-1/4 md:w-full">
              <div className="flex flex-row gap-[18px] items-center justify-between w-full">
                <div className="bg-light_green-800 h-[45px] rounded-[10px] w-[16%]"></div>
                <Input
                  name="language"
                  placeholder="Renewable "
                  className="font-light font-poppins leading-[normal] p-0 placeholder:text-gray-50 text-base text-left w-full"
                  wrapClassName=""
                  shape="round"
                  color="light_green_800"
                  size="xs"
                  variant="fill"
                ></Input>
              </div>
              <div className="flex flex-row gap-[18px] items-center justify-between w-full">
                <div className="bg-cyan-900 h-[45px] rounded-[10px] w-[16%]"></div>
                <Input
                  name="language_One"
                  placeholder="Non-Renewable "
                  className="font-light font-poppins leading-[normal] p-0 placeholder:text-blue_gray-700 text-base text-left w-full"
                  wrapClassName=""
                  shape="round"
                  color="gray_200"
                  size="xs"
                  variant="fill"
                ></Input>
              </div>
            </div>
            <div className="bg-light_green-100 flex md:flex-1 flex-col items-center justify-end p-[25px] sm:px-5 w-[53%] md:w-full">
              <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between mt-[7px] w-[86%] md:w-full">
                <div className="flex flex-col items-start justify-start sm:mt-0 mt-[13px] w-[32%] sm:w-full">
                  <div className="flex flex-row gap-2 items-center justify-start w-[78%] md:w-full">
                    <div className="bg-light_green-800 h-[31px] rounded-[5px] w-[17%]"></div>
                    <Text
                      className="text-base text-green-400"
                      size="txtPoppinsLight16Green400"
                    >
                      {props?.languageTwo}
                    </Text>
                  </div>
                  <Text
                    className="bg-clip-text bg-gradient  mt-[89px] md:text-5xl text-[75px] text-transparent"
                    size="txtPoppinsExtraBold75"
                  >
                    {props?.zipcodeOne}
                  </Text>
                  <Text
                    className="text-2xl md:text-[22px] text-light_green-800 sm:text-xl"
                    size="txtPoppinsRegular24"
                  >
                    {props?.mwhone}
                  </Text>
                </div>
                <div className="h-[251px] md:h-[257px] mb-1.5 relative w-[251px]">
                  <div className="!w-[251px] h-[251px] m-auto overflow-visible">
                    <CircularProgressbar
                      className="!w-[251px] h-[251px] m-auto overflow-visible"
                      value={81}
                      counterClockwise
                      strokeWidth={18}
                      styles={{
                        trail: { strokeWidth: 18, stroke: "#ffffff" },
                        path: {
                          strokeLinecap: "square",
                          height: "100%",
                          transformOrigin: "center",
                          transform: "rotate(246deg)",
                        },
                      }}
                    ></CircularProgressbar>
                  </div>
                  <Text
                    className="absolute h-max inset-[0] justify-center m-auto text-5xl sm:text-[38px] md:text-[44px] text-black-900 w-max"
                    size="txtPoppinsLight48"
                  >
                    {props?.eightytwo}
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

EnergyColumntwo.defaultProps = {
  languageTwo: "Renewable ",
  zipcodeOne: "1123",
  mwhone: "Mwh",
  eightytwo: "82%",
};

export default EnergyColumntwo;
