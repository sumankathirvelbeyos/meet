import React from "react";

import { CircularProgressbar } from "react-circular-progressbar";

import { Button, Img, Input, Line, List, Text } from "components";
import EffluentsColumnThree from "components/EffluentsColumnThree";
import EnergyColumnEight from "components/EnergyColumnEight";
import EnergyColumnOne from "components/EnergyColumnOne";

import "react-circular-progressbar/dist/styles.css";

const EnergyPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-end justify-start mx-auto p-14 md:px-10 sm:px-5 w-full">
        <div className="flex flex-col items-start justify-start mb-[57px] mr-2 w-[93%] md:w-full">
          <div className="flex flex-row md:gap-10 items-start justify-between w-full">
            <div className="md:h-[114px] h-[115px] mt-[42px] relative w-[18%]">
              <Text
                className="absolute bottom-[0] left-[0] text-5xl sm:text-[38px] md:text-[44px] text-cyan-900"
                size="txtPoppinsBold48"
              >
                ENERGY
              </Text>
              <Img
                className="absolute h-[45px] inset-x-[0] mx-auto object-cover top-[0] w-full"
                src="images/img_logo1.png"
                alt="logoOne"
              />
            </div>
            <Img
              className="h-[42px] md:h-auto object-cover w-[42px]"
              src="images/img_user51.png"
              alt="userFiftyOne"
            />
          </div>
          <div className="h-[323px] sm:h-[360px] md:h-[508px] mt-11 relative w-[93%] md:w-full">
            <div className="absolute flex flex-row gap-[38px] items-center justify-between left-[0] top-[0] w-[33%]">
              <div className="bg-gradient  flex flex-col items-center justify-start p-6 sm:px-5 w-[44%]">
                <Img
                  className="h-[93px] md:h-auto object-cover w-[93px]"
                  src="images/img_thunderbolt1.png"
                  alt="thunderboltOne"
                />
              </div>
              <div className="flex flex-col relative w-[47%]">
                <Text
                  className="bg-clip-text bg-gradient  mx-auto md:text-5xl text-[75px] text-transparent"
                  size="txtPoppinsExtraBold75"
                >
                  1423
                </Text>
                <Text
                  className="mt-[-0.01px] text-2xl md:text-[22px] text-light_green-800 sm:text-xl z-[1]"
                  size="txtPoppinsRegular24"
                >
                  Mwh
                </Text>
              </div>
            </div>
            <EnergyColumnOne className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-full" />
          </div>
          <div className="bg-gradient  flex sm:flex-col flex-row md:gap-10 gap-[577px] items-start justify-start ml-0.5 md:ml-[0] mt-[68px] p-[13px] w-[93%] md:w-full">
            <Text
              className="sm:ml-[0] ml-[23px] sm:mt-0 mt-[9px] md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
              size="txtPoppinsBold32"
            >
              Energy Intensity
            </Text>
            <Text
              className="sm:mt-0 mt-[7px] md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
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
          <div className="flex md:flex-col flex-row gap-[52px] items-center justify-start ml-0.5 md:ml-[0] mt-[34px] w-[93%] md:w-full">
            <div className="bg-light_green-100 flex flex-col items-center justify-end p-4">
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
              className="sm:flex-col flex-row gap-[50px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 w-[74%] md:w-full"
              orientation="horizontal"
            >
              <div className="bg-light_green-100 h-[124px] md:h-[54px] p-4 relative w-full">
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
              <div className="bg-light_green-100 h-[124px] md:h-[54px] p-4 relative w-full">
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
              <div className="bg-light_green-100 h-[124px] md:h-[54px] p-[15px] relative w-full">
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
          <EffluentsColumnThree
            className="flex flex-col items-center justify-start ml-0.5 md:ml-[0] mt-[63px] w-[93%] md:w-full"
            mwhcounter={
              <Text className="font-bold m-auto md:text-3xl sm:text-[28px] text-[32px] text-light_green-800 text-right">
                <span className="text-light_green-800 font-poppins">1003 </span>
                <span className="text-light_green-800 font-poppins font-light">
                  Mwh
                </span>
              </Text>
            }
            mwhcounter1={
              <Text className="absolute font-bold h-full inset-[0] justify-center m-auto md:text-3xl sm:text-[28px] text-[32px] text-light_green-800 text-right w-max">
                <span className="text-light_green-800 font-poppins">105 </span>
                <span className="text-light_green-800 font-poppins font-light">
                  Mwh
                </span>
              </Text>
            }
            mwhcounter2={
              <Text className="absolute font-bold h-full inset-[0] justify-center m-auto md:text-3xl sm:text-[28px] text-[32px] text-light_green-800 text-right w-max">
                <span className="text-light_green-800 font-poppins">453 </span>
                <span className="text-light_green-800 font-poppins font-light">
                  Mwh
                </span>
              </Text>
            }
          />
          <Text
            className="mt-20 text-2xl md:text-[22px] text-cyan-900 sm:text-xl"
            size="txtPoppinsSemiBold24Cyan900"
          >
            Total Renewable Energy Consumption by Facility
          </Text>
          <EnergyColumnEight className="flex flex-col items-center justify-start ml-0.5 md:ml-[0] mt-[51px] w-[93%] md:w-full" />
        </div>
      </div>
    </>
  );
};

export default EnergyPage;
