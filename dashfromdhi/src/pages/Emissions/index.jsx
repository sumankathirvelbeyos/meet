import React from "react";

import { CircularProgressbar } from "react-circular-progressbar";

import { Button, Img, Line, List, Text } from "components";
import EffluentsColumnThree from "components/EffluentsColumnThree";

import "react-circular-progressbar/dist/styles.css";

const EmissionsPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-end justify-start mx-auto p-14 md:px-10 sm:px-5 w-full">
        <div className="flex flex-col items-start justify-start mb-[69px] mr-2 w-[93%] md:w-full">
          <div className="flex flex-row md:gap-10 items-start justify-between w-full">
            <Img
              className="h-[45px] md:h-auto object-cover"
              src="images/img_logo1.png"
              alt="logoOne"
            />
            <Img
              className="h-[42px] md:h-auto object-cover w-[42px]"
              src="images/img_user51.png"
              alt="userFiftyOne"
            />
          </div>
          <Text
            className="ml-1 md:ml-[0] mt-10 text-5xl sm:text-[38px] md:text-[44px] text-cyan-900"
            size="txtPoppinsBold48"
          >
            EMISSIONS
          </Text>
          <div className="flex sm:flex-col flex-row gap-[38px] items-center justify-start ml-1 md:ml-[0] mt-11 w-[32%] md:w-full">
            <div
              className="bg-cover bg-no-repeat flex flex-col h-[142px] items-center justify-start p-[23px] sm:px-5 w-[42%] sm:w-full"
              style={{ backgroundImage: "url('images/img_group101.png')" }}
            >
              <Img
                className="h-[90px] md:h-auto mb-1.5 object-cover w-[90px]"
                src="images/img_thunderbolt1_90x90.png"
                alt="thunderboltOne"
              />
            </div>
            <div className="md:h-[101px] h-[126px] relative w-[49%] sm:w-full">
              <Text
                className="absolute bg-clip-text bg-gradient  inset-x-[0] mx-auto md:text-5xl text-[75px] text-transparent top-[0] w-max"
                size="txtPoppinsExtraBold75"
              >
                5780
              </Text>
              <Text
                className="absolute bottom-[0] left-[0] text-2xl md:text-[22px] text-light_green-800 sm:text-xl"
                size="txtPoppinsRegular24"
              >
                <span className="text-light_green-800 font-poppins text-left font-normal">
                  MTCO
                </span>
                <span className="text-light_green-800 font-poppins text-left font-normal">
                  2
                </span>
                <span className="text-light_green-800 font-poppins text-left font-normal">
                  e
                </span>
              </Text>
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 gap-[87px] items-center justify-start mt-14 w-[93%] md:w-full">
            <List
              className="sm:flex-col flex-row md:gap-10 gap-[87px] grid md:grid-cols-1 grid-cols-2 w-[65%] md:w-full"
              orientation="horizontal"
            >
              <div className="h-[73px] sm:ml-[0] relative w-full">
                <Text
                  className="ml-[29px] my-auto md:text-2xl sm:text-[22px] text-[26px] text-light_green-800"
                  size="txtPoppinsBold26"
                >
                  SCOPE 1 EMISSIONS
                </Text>
                <div className="absolute border border-light_green-800 border-solid h-[73px] inset-[0] justify-center m-auto w-full"></div>
              </div>
              <div className="h-[73px] sm:ml-[0] relative w-full">
                <Text
                  className="m-auto md:text-2xl sm:text-[22px] text-[26px] text-light_green-800"
                  size="txtPoppinsBold26"
                >
                  SCOPE 2 EMISSIONS
                </Text>
                <div className="absolute border border-light_green-800 border-solid h-[73px] inset-[0] justify-center m-auto w-full"></div>
              </div>
            </List>
            <Button
              className="cursor-pointer font-bold leading-[normal] min-w-[320px] md:text-2xl sm:text-[22px] text-[26px] text-center"
              shape="square"
              color="light_green_800"
              size="sm"
              variant="outline"
            >
              SCOPE 3 EMISSIONS
            </Button>
          </div>
          <List
            className="sm:flex-col flex-row md:gap-10 gap-[87px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 mt-4 w-[93%]"
            orientation="horizontal"
          >
            <div className="bg-light_green-100 md:h-[141px] h-[194px] p-[26px] sm:px-5 relative w-full">
              <div className="!w-[141px] h-[141px] m-auto overflow-visible">
                <CircularProgressbar
                  className="!w-[141px] h-[141px] m-auto overflow-visible"
                  value={24}
                  strokeWidth={21}
                  styles={{
                    trail: { strokeWidth: 21, stroke: "#ffffff" },
                    path: {
                      strokeLinecap: "square",
                      height: "100%",
                      transformOrigin: "center",
                      transform: "rotate(0deg)",
                      stroke: "#448e1f",
                    },
                  }}
                ></CircularProgressbar>
              </div>
              <Text
                className="absolute h-max inset-[0] justify-center m-auto text-2xl md:text-[22px] text-black-900 sm:text-xl w-max"
                size="txtPoppinsSemiBold24Black900"
              >
                30%
              </Text>
            </div>
            <div className="bg-light_green-100 md:h-[141px] h-[194px] p-[26px] sm:px-5 relative w-full">
              <div className="!w-[141px] h-[141px] m-auto overflow-visible">
                <CircularProgressbar
                  className="!w-[141px] h-[141px] m-auto overflow-visible"
                  value={37}
                  strokeWidth={21}
                  styles={{
                    trail: { strokeWidth: 21, stroke: "#ffffff" },
                    path: {
                      strokeLinecap: "square",
                      height: "100%",
                      transformOrigin: "center",
                      transform: "rotate(0deg)",
                      stroke: "#014762",
                    },
                  }}
                ></CircularProgressbar>
              </div>
              <Text
                className="absolute h-max inset-[0] justify-center m-auto text-2xl md:text-[22px] text-black-900 sm:text-xl w-max"
                size="txtPoppinsSemiBold24Black900"
              >
                30%
              </Text>
            </div>
            <div className="bg-light_green-100 md:h-[141px] h-[194px] p-[26px] sm:px-5 relative w-full">
              <div className="!w-[141px] h-[141px] m-auto overflow-visible">
                <CircularProgressbar
                  className="!w-[141px] h-[141px] m-auto overflow-visible"
                  value={65}
                  strokeWidth={21}
                  styles={{
                    trail: { strokeWidth: 21, stroke: "#ffffff" },
                    path: {
                      strokeLinecap: "square",
                      height: "100%",
                      transformOrigin: "center",
                      transform: "rotate(0deg)",
                      stroke: "#d3b723",
                    },
                  }}
                ></CircularProgressbar>
              </div>
              <Text
                className="absolute h-max inset-[0] justify-center m-auto text-2xl md:text-[22px] text-black-900 sm:text-xl w-max"
                size="txtPoppinsSemiBold24Black900"
              >
                40%
              </Text>
            </div>
          </List>
          <div className="md:gap-10 gap-[87px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-start w-[93%] md:w-full">
            <Text
              className="bg-gradient  sm:px-5 px-[35px] py-[18px] md:text-3xl sm:text-[28px] text-[32px] text-white-A700 w-full"
              size="txtPoppinsBold32"
            >
              <span className="md:text-[38px] sm:text-4xl text-white-A700 font-poppins text-left text-[40px] font-bold">
                1980
              </span>
              <span className="text-white-A700 font-poppins text-left text-base font-light">
                {" "}
                MTCO
              </span>
              <span className="text-white-A700 font-poppins text-left text-base font-light">
                2
              </span>
              <span className="text-white-A700 font-poppins text-left text-base font-light">
                e
              </span>
            </Text>
            <Text
              className="bg-gradient  sm:px-5 px-[35px] py-[18px] md:text-3xl sm:text-[28px] text-[32px] text-white-A700 w-full"
              size="txtPoppinsBold32"
            >
              <span className="md:text-[38px] sm:text-4xl text-white-A700 font-poppins text-left text-[40px] font-bold">
                1340
              </span>
              <span className="text-white-A700 font-poppins text-left text-base font-light">
                {" "}
                MTCO
              </span>
              <span className="text-white-A700 font-poppins text-left text-base font-light">
                2
              </span>
              <span className="text-white-A700 font-poppins text-left text-base font-light">
                e
              </span>
            </Text>
            <Text
              className="bg-gradient  sm:px-5 px-[35px] py-[18px] md:text-3xl sm:text-[28px] text-[32px] text-white-A700 w-full"
              size="txtPoppinsBold32"
            >
              <span className="md:text-[38px] sm:text-4xl text-white-A700 font-poppins text-left text-[40px] font-bold">
                2460
              </span>
              <span className="text-white-A700 font-poppins text-left text-base font-light">
                {" "}
                MTCO
              </span>
              <span className="text-white-A700 font-poppins text-left text-base font-light">
                2
              </span>
              <span className="text-white-A700 font-poppins text-left text-base font-light">
                e
              </span>
            </Text>
          </div>
          <div className="bg-gradient  flex md:flex-col flex-row md:gap-10 gap-[471px] items-start justify-start ml-1 md:ml-[0] mt-14 p-[13px] w-[93%] md:w-full">
            <Text
              className="md:ml-[0] ml-[23px] md:mt-0 mt-2 md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
              size="txtPoppinsBold32"
            >
              Emission Intensity
            </Text>
            <Text
              className="md:mt-0 mt-[7px] md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
              size="txtPoppinsBold32"
            >
              <span className="text-white-A700 font-poppins text-left font-bold">
                0.56{" "}
              </span>
              <span className="text-white-A700 font-poppins text-left text-xl font-light">
                MT CO2e/million INR
              </span>
            </Text>
          </div>
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start ml-1 md:ml-[0] mt-[34px] w-[93%] md:w-full">
            <div className="bg-light_green-100 flex flex-col items-center justify-end p-4">
              <Text
                className="mt-3.5 text-black-900 text-xl"
                size="txtPoppinsLight20"
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
            <div className="bg-light_green-100 h-[124px] md:h-[50px] md:ml-[0] ml-[52px] p-4 relative w-[22%] md:w-full">
              <Text
                className="absolute left-[17%] text-black-900 text-xl top-[24%]"
                size="txtPoppinsLight20"
              >
                Base Emissions
              </Text>
              <Text
                className="absolute bottom-[13%] inset-x-[0] mx-auto text-4xl sm:text-[32px] md:text-[34px] text-light_green-800 w-max"
                size="txtPoppinsExtraBold36"
              >
                <span className="text-light_green-800 font-poppins text-left font-extrabold">
                  6200
                </span>
                <span className="md:text-3xl sm:text-[28px] text-light_green-800 font-poppins text-left text-[32px] font-light">
                  {" "}
                </span>
                <span className="md:text-[22px] sm:text-xl text-light_green-800 font-poppins text-left text-2xl font-light">
                  Mwh
                </span>
              </Text>
            </div>
            <div className="bg-light_green-100 flex flex-col items-center justify-end md:ml-[0] ml-[50px] p-4">
              <Text
                className="mt-4 text-black-900 text-xl"
                size="txtPoppinsLight20"
              >
                Target Emissions
              </Text>
              <Text
                className="text-4xl sm:text-[32px] md:text-[34px] text-light_green-800"
                size="txtPoppinsExtraBold36"
              >
                <span className="text-light_green-800 font-poppins text-left font-extrabold">
                  5500
                </span>
                <span className="md:text-[22px] sm:text-xl text-light_green-800 font-poppins text-left text-2xl font-light">
                  Mwh
                </span>
              </Text>
            </div>
            <div className="bg-light_green-100 h-[124px] md:h-[54px] md:ml-[0] ml-[55px] p-[15px] relative w-[22%] md:w-full">
              <Text
                className="absolute inset-x-[0] mx-auto text-black-900 text-xl top-[24%] w-max"
                size="txtPoppinsLight20"
              >
                Status
              </Text>
              <Text
                className="absolute bottom-[12%] left-[31%] text-4xl sm:text-[32px] md:text-[34px] text-red-A700"
                size="txtPoppinsExtraBold36RedA700"
              >
                -4%
              </Text>
            </div>
          </div>
          <Text
            className="md:ml-[0] ml-[3px] mt-[68px] text-2xl md:text-[22px] text-cyan-900 sm:text-xl"
            size="txtPoppinsSemiBold24Cyan900"
          >
            Emissions breakdown by Facility (Scope 1 + 2)
          </Text>
          <EffluentsColumnThree
            className="flex flex-col items-center justify-start ml-1 md:ml-[0] mt-16 w-[93%] md:w-full"
            mwhcounter={
              <Text className="absolute font-bold h-full inset-[0] justify-center m-auto md:text-3xl sm:text-[28px] text-[32px] text-light_green-800 text-right w-max">
                <span className="text-light_green-800 font-poppins">1100 </span>
                <span className="text-light_green-800 font-poppins text-xl font-light">
                  MTCO
                </span>
                <span className="text-light_green-800 font-poppins text-xl font-light">
                  2
                </span>
                <span className="text-light_green-800 font-poppins text-xl font-light">
                  e
                </span>
              </Text>
            }
            mwhcounter1={
              <Text className="absolute font-bold h-full inset-y-[0] left-[0] my-auto md:text-3xl sm:text-[28px] text-[32px] text-light_green-800 text-right">
                <span className="text-light_green-800 font-poppins">1205 </span>
                <span className="text-light_green-800 font-poppins text-xl font-light">
                  MTCO
                </span>
                <span className="text-light_green-800 font-poppins text-xl font-light">
                  2
                </span>
                <span className="text-light_green-800 font-poppins text-xl font-light">
                  e
                </span>
              </Text>
            }
            mwhcounter2={
              <Text className="absolute font-bold h-full inset-y-[0] left-[0] my-auto md:text-3xl sm:text-[28px] text-[32px] text-light_green-800 text-right">
                <span className="text-light_green-800 font-poppins">1025 </span>
                <span className="text-light_green-800 font-poppins text-xl font-light">
                  MTCO
                </span>
                <span className="text-light_green-800 font-poppins text-xl font-light">
                  2
                </span>
                <span className="text-light_green-800 font-poppins text-xl font-light">
                  e
                </span>
              </Text>
            }
          />
          <Text
            className="md:ml-[0] ml-[3px] mt-[79px] text-2xl md:text-[22px] text-cyan-900 sm:text-xl"
            size="txtPoppinsSemiBold24Cyan900"
          >
            Scope 3 Emissions by Category{" "}
          </Text>
          <div className="flex md:flex-col flex-row md:gap-10 items-end justify-between ml-1 md:ml-[0] mt-24 w-[92%] md:w-full">
            <div className="flex flex-col items-end justify-start md:mt-0 mt-[54px]">
              <Text
                className="bg-clip-text bg-gradient  text-4xl sm:text-[32px] md:text-[34px] text-transparent"
                size="txtPoppinsRegular36"
              >
                UPSTREAM
              </Text>
              <Text
                className="text-base text-black-900"
                size="txtPoppinsExtraLight16"
              >
                EMISSIONS
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start w-[68%] md:w-full">
              <div className="flex flex-col items-center justify-start w-[64%] md:w-full">
                <div className="flex flex-row items-center justify-between w-full">
                  <div className="bg-green-800 h-2.5 rotate-[180deg] rounded-[5px] w-[9px]"></div>
                  <div className="bg-green-800 h-2.5 rounded-[5px] w-[9px]"></div>
                </div>
                <div className="flex flex-row items-center justify-between mt-1 w-full">
                  <div className="bg-blue_gray-600 h-2.5 rotate-[180deg] rounded-[5px] w-[9px]"></div>
                  <div className="bg-blue_gray-600 h-2.5 rounded-[5px] w-[9px]"></div>
                </div>
              </div>
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-1 w-full">
                <div className="h-20 mb-2.5 relative w-1/5 md:w-full">
                  <div className="bg-green-300_01 h-2.5 mb-[-4px] ml-auto rotate-[180deg] rounded-[5px] w-[9px] z-[1]"></div>
                  <div className="h-[74px] mt-auto mx-auto w-full">
                    <div className="absolute h-[74px] inset-y-[0] left-[0] my-auto w-3/4">
                      <Img
                        className="absolute h-[74px] inset-y-[0] left-[0] my-auto object-cover rounded-lg w-[73px]"
                        src="images/img_vector17.png"
                        alt="vectorSeventeen"
                      />
                      <Img
                        className="absolute h-[74px] inset-y-[0] my-auto object-cover right-[0] rounded-lg w-[73px]"
                        src="images/img_vector17.png"
                        alt="vectorEighteen_One"
                      />
                    </div>
                    <Img
                      className="absolute h-[74px] inset-y-[0] my-auto object-cover right-[0] rounded-lg w-[74px]"
                      src="images/img_vector17.png"
                      alt="vectorNineteen"
                    />
                  </div>
                </div>
                <div className="flex flex-col ml-20 md:ml-[0] md:mt-0 mt-[26px] relative w-[33%] md:w-full">
                  <Text
                    className="bg-clip-text bg-gradient  mx-auto text-4xl sm:text-[32px] md:text-[34px] text-transparent"
                    size="txtPoppinsRegular36"
                  >
                    DOWNSTREAM
                  </Text>
                  <Text
                    className="ml-auto mt-[-0.01px] text-[15px] text-black-900 z-[1]"
                    size="txtPoppinsExtraLight15"
                  >
                    EMISSIONS
                  </Text>
                </div>
                <div className="h-20 mb-2.5 md:ml-[0] ml-[133px] relative w-1/5 md:w-full">
                  <div className="bg-green-300_01 h-2.5 mb-[-4px] rounded-[5px] w-[9px] z-[1]"></div>
                  <div className="h-[74px] mt-auto mx-auto w-full">
                    <div className="absolute h-[74px] inset-y-[0] my-auto right-[0] w-3/4">
                      <Img
                        className="absolute h-[74px] inset-y-[0] my-auto object-cover right-[0] rounded-lg w-[73px]"
                        src="images/img_vector14.png"
                        alt="vectorFourteen"
                      />
                      <Img
                        className="absolute h-[74px] inset-y-[0] left-[0] my-auto object-cover rounded-lg w-[73px]"
                        src="images/img_vector14.png"
                        alt="vectorFifteen"
                      />
                    </div>
                    <Img
                      className="absolute h-[74px] inset-y-[0] left-[0] my-auto object-cover rounded-lg w-[74px]"
                      src="images/img_vector14.png"
                      alt="vectorSixteen"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 gap-[76px] items-center justify-start mt-[17px] w-[93%] md:w-full">
            <Line className="bg-black-900 h-px w-[47%]" />
            <Line className="bg-black-900 h-px w-[47%]" />
          </div>
          <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start ml-1 md:ml-[0] mt-2 w-[93%] md:w-full">
            <Img
              className="h-11 md:h-auto md:mt-0 mt-1 object-cover w-11"
              src="images/img_cart1.png"
              alt="cartOne"
            />
            <Text
              className="mb-[7px] md:ml-[0] ml-[69px] md:mt-0 mt-[17px] text-[15px] text-light_green-800"
              size="txtPoppinsRegular15"
            >
              Purchased Goods & Services
            </Text>
            <Text
              className="md:ml-[0] ml-[107px] md:mt-0 mt-[17px] text-light_green-800 text-right text-xl"
              size="txtPoppinsExtraBold20"
            >
              <span className="text-light_green-800 font-poppins font-extrabold">
                134{" "}
              </span>
              <span className="text-light_green-800 font-poppins text-[13px] font-light">
                MTCO2e
              </span>
            </Text>
            <Img
              className="h-12 md:h-auto md:ml-[0] ml-[79px] object-cover w-12"
              src="images/img_cart1_48x48.png"
              alt="cartOne_One"
            />
            <Text
              className="mb-[9px] md:ml-[0] ml-[60px] md:mt-0 mt-[17px] text-light_green-800 text-sm"
              size="txtPoppinsRegular14"
            >
              Investments
            </Text>
            <Text
              className="h-[30px] md:ml-[0] ml-[298px] md:mt-0 mt-[17px] text-light_green-800 text-right text-xl"
              size="txtPoppinsExtraBold20"
            >
              NA
            </Text>
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 gap-[72px] items-center justify-start ml-1 md:ml-[0] mt-2.5 w-[93%] md:w-full">
            <Line className="bg-black-900 h-px w-[47%]" />
            <Line className="bg-black-900 h-px w-[47%]" />
          </div>
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start ml-2 md:ml-[0] mt-0.5 w-[92%] md:w-full">
            <Img
              className="h-12 md:h-auto object-cover w-12"
              src="images/img_cart2.png"
              alt="cartTwo"
            />
            <Text
              className="md:ml-[0] ml-[61px] text-[15px] text-light_green-800"
              size="txtPoppinsRegular15"
            >
              Capital Goods
            </Text>
            <Text
              className="md:ml-[0] ml-[214px] text-light_green-800 text-right text-xl"
              size="txtPoppinsExtraBold20"
            >
              <span className="text-light_green-800 font-poppins font-extrabold">
                241{" "}
              </span>
              <span className="text-light_green-800 font-poppins text-[13px] font-light">
                MTCO2e
              </span>
            </Text>
            <Img
              className="h-[60px] md:h-auto md:ml-[0] ml-[76px] object-cover w-[60px]"
              src="images/img_cart2_60x60.png"
              alt="cartTwo_One"
            />
            <Text
              className="md:ml-[0] ml-[51px] text-light_green-800 text-sm"
              size="txtPoppinsRegular14"
            >
              Franchises
            </Text>
            <Text
              className="h-[30px] md:ml-[0] ml-[309px] text-light_green-800 text-right text-xl"
              size="txtPoppinsExtraBold20"
            >
              NA
            </Text>
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 gap-[72px] items-center justify-start md:ml-[0] ml-[3px] mt-1 w-[93%] md:w-full">
            <Line className="bg-black-900 h-px w-[47%]" />
            <Line className="bg-black-900 h-px w-[47%]" />
          </div>
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start ml-2 md:ml-[0] mt-3 w-[92%] md:w-full">
            <Img
              className="h-12 md:h-auto object-cover w-12"
              src="images/img_cart3.png"
              alt="cartThree"
            />
            <Text
              className="md:ml-[0] ml-[61px] text-[15px] text-light_green-800"
              size="txtPoppinsRegular15"
            >
              Fuel & Energy Related
            </Text>
            <Text
              className="md:ml-[0] ml-[161px] text-light_green-800 text-right text-xl"
              size="txtPoppinsExtraBold20"
            >
              <span className="text-light_green-800 font-poppins font-extrabold">
                189{" "}
              </span>
              <span className="text-light_green-800 font-poppins text-[13px] font-light">
                MTCO2e
              </span>
            </Text>
            <Img
              className="h-12 md:h-auto md:ml-[0] ml-[79px] object-cover w-12"
              src="images/img_cart8.png"
              alt="cartEight"
            />
            <Text
              className="md:ml-[0] ml-[60px] text-light_green-800 text-sm"
              size="txtPoppinsRegular14"
            >
              Downstream Leased Assets
            </Text>
            <Text
              className="md:ml-[0] ml-[127px] text-light_green-800 text-right text-xl"
              size="txtPoppinsExtraBold20"
            >
              <span className="text-light_green-800 font-poppins font-extrabold">
                234{" "}
              </span>
              <span className="text-light_green-800 font-poppins text-[13px] font-light">
                MTCO2e
              </span>
            </Text>
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 gap-[72px] items-center justify-start md:ml-[0] ml-[3px] mt-[11px] w-[93%] md:w-full">
            <Line className="bg-black-900 h-px w-[47%]" />
            <Line className="bg-black-900 h-px w-[47%]" />
          </div>
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mt-1 w-[93%] md:w-full">
            <Img
              className="h-[63px] md:h-auto md:mt-0 mt-1 object-cover w-[63px]"
              src="images/img_cart4.png"
              alt="cartFour"
            />
            <Text
              className="md:ml-[0] ml-[54px] text-[15px] text-light_green-800"
              size="txtPoppinsRegular15"
            >
              Upstream Transportation & Distribution
            </Text>
            <Text
              className="ml-4 md:ml-[0] text-light_green-800 text-right text-xl"
              size="txtPoppinsExtraBold20"
            >
              <span className="text-light_green-800 font-poppins font-extrabold">
                1945{" "}
              </span>
              <span className="text-light_green-800 font-poppins text-[13px] font-light">
                MTCO2e
              </span>
            </Text>
            <Img
              className="h-[63px] md:h-auto mb-1 md:ml-[0] ml-[69px] object-cover w-[63px]"
              src="images/img_cart4.png"
              alt="cartFour_One"
            />
            <Text
              className="md:ml-[0] ml-[55px] text-light_green-800 text-sm"
              size="txtPoppinsRegular14"
            >
              Downstream Transportation & Distribution
            </Text>
            <Text
              className="md:ml-[0] ml-[30px] text-light_green-800 text-right text-xl"
              size="txtPoppinsExtraBold20"
            >
              <span className="text-light_green-800 font-poppins font-extrabold">
                981{" "}
              </span>
              <span className="text-light_green-800 font-poppins text-[13px] font-light">
                MTCO2e
              </span>
            </Text>
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 gap-[72px] items-center justify-start ml-1 md:ml-[0] w-[93%] md:w-full">
            <Line className="bg-black-900 h-px w-[47%]" />
            <Line className="bg-black-900 h-px w-[47%]" />
          </div>
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start ml-2 md:ml-[0] mt-[9px] w-[92%] md:w-full">
            <Img
              className="h-12 md:h-auto mb-0.5 object-cover w-12"
              src="images/img_cart5.png"
              alt="cartFive"
            />
            <Text
              className="md:ml-[0] ml-[61px] text-[15px] text-light_green-800"
              size="txtPoppinsRegular15"
            >
              Waste from Operations
            </Text>
            <Text
              className="md:ml-[0] ml-[155px] text-light_green-800 text-right text-xl"
              size="txtPoppinsExtraBold20"
            >
              <span className="text-light_green-800 font-poppins font-extrabold">
                80{" "}
              </span>
              <span className="text-light_green-800 font-poppins text-[13px] font-light">
                MTCO2e
              </span>
            </Text>
            <Img
              className="h-12 md:h-auto md:ml-[0] ml-[79px] md:mt-0 mt-0.5 object-cover w-12"
              src="images/img_cart5.png"
              alt="cartFive_One"
            />
            <Text
              className="md:ml-[0] ml-[60px] text-light_green-800 text-sm"
              size="txtPoppinsRegular14"
            >
              Use of Sold Products
            </Text>
            <Text
              className="h-[30px] md:ml-[0] ml-[242px] text-light_green-800 text-right text-xl"
              size="txtPoppinsExtraBold20"
            >
              NA
            </Text>
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 gap-[72px] items-center justify-start md:ml-[0] ml-[3px] mt-[7px] w-[93%] md:w-full">
            <Line className="bg-black-900 h-px w-[47%]" />
            <Line className="bg-black-900 h-px w-[47%]" />
          </div>
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start ml-2 md:ml-[0] mt-3 w-[92%] md:w-full">
            <Img
              className="h-12 md:h-auto md:mt-0 mt-[11px] object-cover w-12"
              src="images/img_cart6.png"
              alt="cartSix"
            />
            <Text
              className="md:ml-[0] ml-[61px] md:mt-0 mt-2.5 text-[15px] text-light_green-800"
              size="txtPoppinsRegular15"
            >
              Business Travel
            </Text>
            <Text
              className="ml-52 md:ml-[0] md:mt-0 mt-[7px] text-light_green-800 text-right text-xl"
              size="txtPoppinsExtraBold20"
            >
              <span className="text-light_green-800 font-poppins font-extrabold">
                190{" "}
              </span>
              <span className="text-light_green-800 font-poppins text-[13px] font-light">
                MTCO2e
              </span>
            </Text>
            <Img
              className="h-12 md:h-auto mb-[11px] md:ml-[0] ml-[79px] object-cover w-12"
              src="images/img_cart6_48x48.png"
              alt="cartSix_One"
            />
            <Text
              className="md:ml-[0] ml-[60px] md:mt-0 mt-3.5 text-light_green-800 text-sm"
              size="txtPoppinsRegular14"
            >
              Processing of Sold Products
            </Text>
            <Text
              className="h-[30px] md:ml-[0] ml-[191px] md:mt-0 mt-[7px] text-light_green-800 text-right text-xl"
              size="txtPoppinsExtraBold20"
            >
              NA
            </Text>
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 gap-[72px] items-center justify-start md:ml-[0] ml-[3px] w-[93%] md:w-full">
            <Line className="bg-black-900 h-px w-[47%]" />
            <Line className="bg-black-900 h-px w-[47%]" />
          </div>
          <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start ml-2 md:ml-[0] mt-[7px] w-[92%] md:w-full">
            <Img
              className="h-12 md:h-auto mb-[3px] object-cover w-12"
              src="images/img_cart7.png"
              alt="cartSeven"
            />
            <Text
              className="mb-[9px] md:ml-[0] ml-[61px] md:mt-0 mt-[18px] text-[15px] text-light_green-800"
              size="txtPoppinsRegular15"
            >
              Employee Commute
            </Text>
            <Text
              className="mb-1 md:ml-[0] ml-[162px] md:mt-0 mt-4 text-light_green-800 text-right text-xl"
              size="txtPoppinsExtraBold20"
            >
              <span className="text-light_green-800 font-poppins font-extrabold">
                384{" "}
              </span>
              <span className="text-light_green-800 font-poppins text-[13px] font-light">
                MTCO2e
              </span>
            </Text>
            <Img
              className="h-12 md:h-auto md:ml-[0] ml-[79px] md:mt-0 mt-[3px] object-cover w-12"
              src="images/img_cart3_48x48.png"
              alt="cartThree_One"
            />
            <Text
              className="mb-3 md:ml-[0] ml-[60px] md:mt-0 mt-[17px] text-light_green-800 text-sm"
              size="txtPoppinsRegular14"
            >
              End-of-Life Treatment of sold products
            </Text>
            <Text
              className="h-[30px] md:ml-[0] ml-[113px] md:mt-0 my-2.5 text-light_green-800 text-right text-xl"
              size="txtPoppinsExtraBold20"
            >
              NA
            </Text>
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 gap-[72px] items-center justify-start ml-1 md:ml-[0] mt-[13px] w-[93%] md:w-full">
            <Line className="bg-black-900 h-px w-[47%]" />
            <Line className="bg-black-900 h-px w-[47%]" />
          </div>
          <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start ml-2 md:ml-[0] mt-[9px] w-[43%] md:w-full">
            <Img
              className="h-12 md:h-auto object-cover w-12"
              src="images/img_cart8.png"
              alt="cartEight_One"
            />
            <Text
              className="sm:ml-[0] ml-[61px] text-[15px] text-light_green-800"
              size="txtPoppinsRegular15"
            >
              Upstream Leased Assets
            </Text>
            <Text
              className="sm:ml-[0] ml-[149px] text-light_green-800 text-right text-xl"
              size="txtPoppinsExtraBold20"
            >
              <span className="text-light_green-800 font-poppins font-extrabold">
                87{" "}
              </span>
              <span className="text-light_green-800 font-poppins text-[13px] font-light">
                MTCO2e
              </span>
            </Text>
          </div>
          <Line className="bg-black-900 h-px ml-1 md:ml-[0] mt-3.5 w-[44%]" />
        </div>
      </div>
    </>
  );
};

export default EmissionsPage;
