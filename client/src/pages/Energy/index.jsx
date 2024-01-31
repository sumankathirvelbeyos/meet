import React from "react";

import { CircularProgressbar } from "react-circular-progressbar";
import { useNavigate } from "react-router-dom";

import { Button, Img, Input, List, Text } from "components";
import EnergyColumntwo from "components/EnergyColumntwo";

import "react-circular-progressbar/dist/styles.css";

const EnergyPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-start mx-auto p-[49px] md:px-10 sm:px-5 w-full">
        <div className="flex flex-col md:gap-10 gap-[92px] items-center justify-start max-w-[1303px] mb-[78px] mx-auto w-full">
          <div className="flex flex-row md:gap-10 items-center justify-between w-full">
            <Img
              className="common-pointer h-[58px] md:h-auto object-cover"
              src="images/img_whitevariation.png"
              alt="whitevariation"
              onClick={() => navigate("/dashboard")}
            />
            <Img
              className="h-[42px] md:h-auto object-cover w-[42px]"
              src="images/img_user51.png"
              alt="userfiftyone"
            />
          </div>
          <div className="flex flex-col items-start justify-start w-[88%] md:w-full">
            <Text
              className="ml-0.5 md:ml-[0] text-5xl sm:text-[38px] md:text-[44px] text-cyan-900"
              size="txtPoppinsBold48"
            >
              ENERGY
            </Text>
            <div className="h-[323px] sm:h-[360px] md:h-[508px] mt-11 relative w-full">
              <div className="absolute flex flex-col items-center justify-start left-[0] top-[0] w-[33%]">
                <div className="flex flex-row gap-[38px] items-center justify-between w-full">
                  <div className="bg-gradient  flex flex-col items-center justify-start p-6 sm:px-5 w-[44%]">
                    <Img
                      className="h-[93px] md:h-auto object-cover w-[93px]"
                      src="images/img_thunderbolt1.png"
                      alt="thunderboltone"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start">
                    <Text
                      className="bg-clip-text bg-gradient  md:text-5xl text-[75px] text-transparent"
                      size="txtPoppinsExtraBold75"
                    >
                      1423
                    </Text>
                    <Text
                      className="text-2xl md:text-[22px] text-light_green-800 sm:text-xl"
                      size="txtPoppinsRegular24"
                    >
                      Mwh
                    </Text>
                  </div>
                </div>
              </div>
              <EnergyColumntwo className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-full" />
            </div>
            <div className="bg-gradient  flex sm:flex-col flex-row md:gap-10 items-start justify-between ml-0.5 md:ml-[0] mt-[68px] p-[13px] w-full">
              <Text
                className="sm:ml-[0] ml-[23px] sm:mt-0 mt-[9px] md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                size="txtPoppinsBold32"
              >
                Energy Intensity
              </Text>
              <Text
                className="mr-9 sm:mt-0 mt-[7px] md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                size="txtPoppinsBold32"
              >
                <span className="text-white-A700 font-poppins text-left font-bold">
                  750{" "}
                </span>
                <span className="text-white-A700 font-poppins text-left text-xl font-light">
                  GJ/million INR
                </span>
              </Text>
            </div>
            <div className="flex md:flex-col flex-row md:gap-[52px] items-center justify-between ml-0.5 md:ml-[0] mt-[34px] w-full">
              <div className="bg-light_green-100 flex md:flex-1 flex-col h-[125px] items-center justify-end p-[25px] w-[235px] md:w-full">
                <Text
                  className="mt-[9px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                  size="txtPoppinsLight24Black900"
                >
                  Base Year
                </Text>
                <Text
                  className="text-4xl sm:text-[32px] md:text-[34px] text-light_green-800"
                  size="txtPoppinsExtraBold36"
                >
                  2020
                </Text>
              </div>
              <List
                className="md:flex-1 sm:flex-col flex-row gap-[50px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 w-[74%] md:w-full"
                orientation="horizontal"
              >
                <div className="bg-light_green-100 h-[124px] md:h-[54px] sm:ml-[0] p-4 relative w-full">
                  <Text
                    className="absolute inset-x-[0] mx-auto text-2xl md:text-[22px] text-black-900 sm:text-xl top-[19%] w-max"
                    size="txtPoppinsLight24Black900"
                  >
                    Baseline{" "}
                  </Text>
                  <Text
                    className="absolute bottom-[13%] inset-x-[0] mx-auto text-4xl sm:text-[32px] md:text-[34px] text-light_green-800 w-max"
                    size="txtPoppinsExtraBold36"
                  >
                    <span className="text-light_green-800 font-poppins text-left font-extrabold">
                      1800
                    </span>
                    <span className="md:text-3xl sm:text-[28px] text-light_green-800 font-poppins text-left text-[32px] font-light">
                      {" "}
                    </span>
                    <span className="md:text-[22px] sm:text-xl text-light_green-800 font-poppins text-left text-2xl font-light">
                      Mwh
                    </span>
                  </Text>
                </div>
                <div className="bg-light_green-100 h-[124px] md:h-[54px] sm:ml-[0] p-4 relative w-full">
                  <Text
                    className="absolute left-[31%] text-2xl md:text-[22px] text-black-900 sm:text-xl top-[23%]"
                    size="txtPoppinsLight24Black900"
                  >
                    Target
                  </Text>
                  <Text
                    className="absolute bottom-[13%] right-[17%] text-4xl sm:text-[32px] md:text-[34px] text-light_green-800"
                    size="txtPoppinsExtraBold36"
                  >
                    <span className="text-light_green-800 font-poppins text-left font-extrabold">
                      1500
                    </span>
                    <span className="md:text-[22px] sm:text-xl text-light_green-800 font-poppins text-left text-2xl font-light">
                      {" "}
                    </span>
                    <span className="md:text-[22px] sm:text-xl text-light_green-800 font-poppins text-left text-2xl font-light">
                      Mwh
                    </span>
                  </Text>
                </div>
                <div className="bg-light_green-100 h-[124px] md:h-[54px] sm:ml-[0] p-[15px] relative w-full">
                  <Text
                    className="absolute inset-x-[0] mx-auto text-2xl md:text-[22px] text-black-900 sm:text-xl top-[19%] w-max"
                    size="txtPoppinsLight24Black900"
                  >
                    Status
                  </Text>
                  <Text
                    className="absolute bottom-[12%] left-[31%] text-4xl sm:text-[32px] md:text-[34px] text-light_green-800"
                    size="txtPoppinsExtraBold36"
                  >
                    +5%
                  </Text>
                </div>
              </List>
            </div>
            <Text
              className="mt-[69px] text-2xl md:text-[22px] text-cyan-900 sm:text-xl"
              size="txtPoppinsSemiBold24Cyan900"
            >
              Total Energy Consumption by Facility
            </Text>
            <div className="flex sm:flex-col flex-row gap-[27px] items-center justify-start md:ml-[0] ml-[29px] mt-[68px] w-[46%] md:w-full">
              <Button
                className="border border-light_green-800 border-solid cursor-pointer font-medium leading-[normal] min-w-[120px] text-[13px] text-center"
                shape="round"
                color="white_A700"
                size="xs"
                variant="fill"
              >
                FACILITY 1
              </Button>
              <Button
                className="border border-light_green-800 border-solid cursor-pointer font-medium leading-[normal] min-w-[120px] text-[13px] text-center"
                shape="round"
                color="white_A700"
                size="xs"
                variant="fill"
              >
                FACILITY 2
              </Button>
              <Button
                className="border border-light_green-800 border-solid cursor-pointer font-medium leading-[normal] min-w-[120px] text-[13px] text-center"
                shape="round"
                color="white_A700"
                size="xs"
                variant="fill"
              >
                FACILITY 3
              </Button>
              <Button
                className="cursor-pointer font-medium leading-[normal] min-w-[77px] text-[13px] text-center"
                shape="round"
                size="xs"
                variant="gradient"
                color="cyan_900_light_green_800"
              >
                ALL
              </Button>
            </div>
            <Img
              className="h-[564px] sm:h-auto mt-[35px] object-cover w-full"
              src="images/img_graph1.png"
              alt="graphone"
            />
            <Text
              className="mt-[67px] text-2xl md:text-[22px] text-cyan-900 sm:text-xl"
              size="txtPoppinsSemiBold24Cyan900"
            >
              Total Renewable Energy Consumption by Facility
            </Text>
            <div className="flex sm:flex-col flex-row gap-[27px] items-center justify-start md:ml-[0] ml-[29px] mt-[63px] w-[46%] md:w-full">
              <Button
                className="border border-light_green-800 border-solid cursor-pointer font-medium leading-[normal] min-w-[120px] text-[13px] text-center"
                shape="round"
                color="white_A700"
                size="xs"
                variant="fill"
              >
                FACILITY 1
              </Button>
              <Button
                className="border border-light_green-800 border-solid cursor-pointer font-medium leading-[normal] min-w-[120px] text-[13px] text-center"
                shape="round"
                color="white_A700"
                size="xs"
                variant="fill"
              >
                FACILITY 2
              </Button>
              <Button
                className="border border-light_green-800 border-solid cursor-pointer font-medium leading-[normal] min-w-[120px] text-[13px] text-center"
                shape="round"
                color="white_A700"
                size="xs"
                variant="fill"
              >
                FACILITY 3
              </Button>
              <Button
                className="cursor-pointer font-medium leading-[normal] min-w-[77px] text-[13px] text-center"
                shape="round"
                size="xs"
                variant="gradient"
                color="cyan_900_light_green_800"
              >
                ALL
              </Button>
            </div>
            <Img
              className="h-[564px] sm:h-auto mt-10 object-cover w-full"
              src="images/img_graph1.png"
              alt="graphtwo"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default EnergyPage;
