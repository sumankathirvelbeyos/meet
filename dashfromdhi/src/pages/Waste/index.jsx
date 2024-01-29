import React from "react";

import { CircularProgressbar } from "react-circular-progressbar";

import { Button, Img, Input, Line, List, Text } from "components";
import EffluentsColumnThree from "components/EffluentsColumnThree";

import "react-circular-progressbar/dist/styles.css";

const WastePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-end justify-start mx-auto p-14 md:px-10 sm:px-5 w-full">
        <div className="flex flex-col items-start justify-start mb-[33px] mr-2 w-[93%] md:w-full">
          <div className="flex flex-row md:gap-10 items-center justify-between w-full">
            <Img
              className="h-[42px] md:h-auto object-cover"
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
            className="mt-[43px] text-5xl sm:text-[38px] md:text-[44px] text-cyan-900"
            size="txtPoppinsBold48"
          >
            WASTE
          </Text>
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between ml-0.5 md:ml-[0] mt-11 w-[92%] md:w-full">
            <div className="flex flex-col items-start justify-start w-[37%] md:w-full">
              <div className="flex flex-row items-start justify-between w-full">
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[142px] items-center justify-start p-[26px] sm:px-5 w-2/5"
                  style={{ backgroundImage: "url('images/img_group101.png')" }}
                >
                  <Img
                    className="h-[90px] md:h-auto object-cover w-[90px]"
                    src="images/img_thunderbolt1_1.png"
                    alt="thunderboltOne"
                  />
                </div>
                <div className="flex flex-col justify-start mt-[3px]">
                  <Text
                    className="bg-clip-text bg-gradient  md:text-5xl text-[75px] text-transparent"
                    size="txtPoppinsExtraBold75"
                  >
                    3280
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[11px] text-2xl md:text-[22px] text-light_green-800 sm:text-xl"
                    size="txtPoppinsRegular24"
                  >
                    MT
                  </Text>
                </div>
              </div>
              <div className="flex flex-row gap-[34px] items-center justify-start mt-[79px] w-[72%] md:w-full">
                <div className="bg-light_green-800 h-[45px] rounded-[10px] w-[15%]"></div>
                <Input
                  name="group115"
                  placeholder="Non-Hazardous"
                  className="font-light leading-[normal] p-0 placeholder:text-gray-50 text-base text-left w-full"
                  wrapClassName="w-[74%]"
                  shape="round"
                  color="light_green_800"
                  size="xs"
                  variant="fill"
                ></Input>
              </div>
              <div className="flex flex-row gap-[34px] items-center justify-start mt-[43px] w-[72%] md:w-full">
                <div className="bg-cyan-900 h-[45px] rounded-[10px] w-[15%]"></div>
                <Input
                  name="group114"
                  placeholder="Hazardous"
                  className="font-light leading-[normal] p-0 placeholder:text-blue_gray-700 text-base text-left w-full"
                  wrapClassName="w-[74%]"
                  shape="round"
                  color="gray_200"
                  size="xs"
                  variant="fill"
                ></Input>
              </div>
            </div>
            <div className="bg-light_green-100 flex flex-col items-center justify-end mb-[11px] md:mt-0 mt-[27px] p-[25px] sm:px-5 w-[53%] md:w-full">
              <div className="flex sm:flex-col flex-row gap-[29px] items-start justify-start mt-[7px] w-[86%] md:w-full">
                <div className="flex flex-col items-start justify-start sm:mt-0 mt-[13px] w-2/5 sm:w-full">
                  <div className="flex flex-row gap-2 items-center justify-start w-[82%] md:w-full">
                    <div className="bg-light_green-800 h-[31px] rounded-[5px] w-[13%]"></div>
                    <Text
                      className="text-base text-green-400"
                      size="txtPoppinsLight16Green400"
                    >
                      Non-Hazardous
                    </Text>
                  </div>
                  <Text
                    className="bg-clip-text bg-gradient  mt-[89px] md:text-5xl text-[75px] text-transparent"
                    size="txtPoppinsExtraBold75"
                  >
                    2309
                  </Text>
                  <Text
                    className="text-2xl md:text-[22px] text-light_green-800 sm:text-xl"
                    size="txtPoppinsRegular24"
                  >
                    MT
                  </Text>
                </div>
                <div className="h-[251px] md:h-[257px] mb-1.5 relative w-[251px]">
                  <div className="!w-[251px] h-[251px] m-auto overflow-visible">
                    <CircularProgressbar
                      className="!w-[251px] h-[251px] m-auto overflow-visible"
                      value={70}
                      counterClockwise
                      strokeWidth={18}
                      styles={{
                        trail: { strokeWidth: 18, stroke: "#ffffff" },
                        path: {
                          strokeLinecap: "square",
                          height: "100%",
                          transformOrigin: "center",
                          transform: "rotate(252deg)",
                          stroke: "#448e1f",
                        },
                      }}
                    ></CircularProgressbar>
                  </div>
                  <Text
                    className="absolute h-max inset-[0] justify-center m-auto text-5xl sm:text-[38px] md:text-[44px] text-black-900 w-max"
                    size="txtPoppinsLight48"
                  >
                    70%
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gradient  flex md:flex-col flex-row md:gap-10 gap-[321px] items-start justify-start mt-[50px] p-[13px] w-[93%] md:w-full">
            <Text
              className="md:ml-[0] ml-[23px] md:mt-0 mt-2 md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
              size="txtPoppinsBold32"
            >
              Waste Generation Intensity
            </Text>
            <Text
              className="md:mt-0 mt-2 md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
              size="txtPoppinsBold32"
            >
              <span className="text-white-A700 font-poppins text-left font-bold">
                0.21{" "}
              </span>
              <span className="text-white-A700 font-poppins text-left text-xl font-light">
                MT /MT of production
              </span>
            </Text>
          </div>
          <div className="flex md:flex-col flex-row gap-[52px] items-center justify-start mt-[34px] w-[93%] md:w-full">
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
            <List
              className="sm:flex-col flex-row gap-[50px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 w-[74%] md:w-full"
              orientation="horizontal"
            >
              <div className="bg-light_green-100 h-[124px] md:h-[54px] p-4 relative w-full">
                <Text
                  className="absolute left-[19%] text-black-900 text-xl top-[24%]"
                  size="txtPoppinsLight20"
                >
                  Base Waste
                </Text>
                <Text
                  className="absolute bottom-[13%] left-[18%] text-4xl sm:text-[32px] md:text-[34px] text-light_green-800"
                  size="txtPoppinsExtraBold36"
                >
                  <span className="text-light_green-800 font-poppins text-left font-extrabold">
                    3800
                  </span>
                  <span className="md:text-3xl sm:text-[28px] text-light_green-800 font-poppins text-left text-[32px] font-light">
                    {" "}
                  </span>
                  <span className="md:text-[22px] sm:text-xl text-light_green-800 font-poppins text-left text-2xl font-light">
                    MT
                  </span>
                </Text>
              </div>
              <div className="bg-light_green-100 h-[124px] md:h-[54px] p-4 relative w-full">
                <Text
                  className="absolute inset-x-[0] mx-auto text-black-900 text-xl top-[27%] w-max"
                  size="txtPoppinsLight20"
                >
                  Taget
                </Text>
                <Text
                  className="absolute bottom-[13%] inset-x-[0] mx-auto text-4xl sm:text-[32px] md:text-[34px] text-light_green-800 w-max"
                  size="txtPoppinsExtraBold36"
                >
                  <span className="text-light_green-800 font-poppins text-left font-extrabold">
                    3300
                  </span>
                  <span className="md:text-[22px] sm:text-xl text-light_green-800 font-poppins text-left text-2xl font-light">
                    MT
                  </span>
                </Text>
              </div>
              <div className="bg-light_green-100 h-[124px] md:h-[54px] p-4 relative w-full">
                <Text
                  className="absolute inset-x-[0] mx-auto text-black-900 text-xl top-[24%] w-max"
                  size="txtPoppinsLight20"
                >
                  Status
                </Text>
                <Text
                  className="absolute bottom-[13%] left-[31%] text-4xl sm:text-[32px] md:text-[34px] text-light_green-800"
                  size="txtPoppinsExtraBold36"
                >
                  +2%
                </Text>
              </div>
            </List>
          </div>
          <div className="md:gap-5 gap-[60px] grid md:grid-cols-1 grid-cols-2 min-h-[auto] mt-[88px] w-[52%]">
            <div className="bg-gradient  flex flex-col justify-start p-[19px] w-full">
              <Text
                className="md:ml-[0] mx-[22px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                size="txtPoppinsLight24"
              >
                WASTE RECYCLED
              </Text>
              <Text
                className="md:ml-[0] ml-[81px] mt-1 text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                size="txtPoppinsSemiBold24"
              >
                <span className="md:text-[34px] sm:text-[32px] text-white-A700 font-poppins text-left text-4xl font-extrabold">
                  780
                </span>
                <span className="text-white-A700 font-poppins text-left font-semibold">
                  {" "}
                </span>
                <span className="text-white-A700 font-poppins text-left font-light">
                  MT
                </span>
              </Text>
            </div>
            <div className="bg-gradient  flex flex-col justify-start p-5 w-full">
              <Text
                className="md:ml-[0] ml-[9px] mr-[3px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                size="txtPoppinsLight24"
              >
                WASTE INCINERATED
              </Text>
              <Text
                className="md:ml-[0] ml-[73px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                size="txtPoppinsSemiBold24"
              >
                <span className="md:text-[34px] sm:text-[32px] text-white-A700 font-poppins text-left text-4xl font-extrabold">
                  1564
                </span>
                <span className="text-white-A700 font-poppins text-left font-semibold">
                  {" "}
                </span>
                <span className="text-white-A700 font-poppins text-left font-light">
                  MT
                </span>
              </Text>
            </div>
            <div className="bg-gradient  flex flex-col justify-end p-[21px] sm:px-5 w-full">
              <Text
                className="mt-0.5 text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                size="txtPoppinsLight24"
              >
                WASTE TO COMPOST
              </Text>
              <Text
                className="md:ml-[0] ml-[82px] mr-[54px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                size="txtPoppinsSemiBold24"
              >
                <span className="md:text-[34px] sm:text-[32px] text-white-A700 font-poppins text-left text-4xl font-extrabold">
                  536
                </span>
                <span className="text-white-A700 font-poppins text-left font-semibold">
                  {" "}
                </span>
                <span className="text-white-A700 font-poppins text-left font-light">
                  MT
                </span>
              </Text>
            </div>
            <div className="bg-gradient  flex flex-col justify-start p-5 w-full">
              <Text
                className="md:ml-[0] mx-[11px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                size="txtPoppinsLight24"
              >
                WASTE TO LANDFILL
              </Text>
              <Text
                className="mb-0.5 md:ml-[0] ml-[81px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                size="txtPoppinsSemiBold24"
              >
                <span className="md:text-[34px] sm:text-[32px] text-white-A700 font-poppins text-left text-4xl font-extrabold">
                  240
                </span>
                <span className="text-white-A700 font-poppins text-left font-semibold">
                  {" "}
                </span>
                <span className="text-white-A700 font-poppins text-left font-light">
                  MT
                </span>
              </Text>
            </div>
          </div>
          <Text
            className="mt-[97px] text-2xl md:text-[22px] text-cyan-900 sm:text-xl"
            size="txtPoppinsSemiBold24Cyan900"
          >
            Total Waste breakdown by Facility{" "}
          </Text>
          <EffluentsColumnThree
            className="flex flex-col items-center justify-start mt-16 w-[93%] md:w-full"
            mwhcounter={
              <Text className="absolute font-bold h-full inset-y-[0] my-auto right-[0] md:text-3xl sm:text-[28px] text-[32px] text-light_green-800 text-right">
                <span className="text-light_green-800 font-poppins">1846 </span>
                <span className="text-light_green-800 font-poppins text-xl font-light">
                  MT
                </span>
              </Text>
            }
            mwhcounter1={
              <Text className="absolute font-bold h-full inset-y-[0] my-auto right-[7%] md:text-3xl sm:text-[28px] text-[32px] text-light_green-800 text-right">
                <span className="text-light_green-800 font-poppins">456 </span>
                <span className="text-light_green-800 font-poppins text-xl font-light">
                  MT
                </span>
              </Text>
            }
            mwhcounter2={
              <Text className="absolute font-bold h-full inset-y-[0] my-auto right-[5%] md:text-3xl sm:text-[28px] text-[32px] text-light_green-800 text-right">
                <span className="text-light_green-800 font-poppins">1509 </span>
                <span className="text-light_green-800 font-poppins text-xl font-light">
                  MT
                </span>
              </Text>
            }
          />
        </div>
      </div>
    </>
  );
};

export default WastePage;
