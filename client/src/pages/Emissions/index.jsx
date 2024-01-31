import React from "react";

import { CircularProgressbar } from "react-circular-progressbar";
import { useNavigate } from "react-router-dom";

import { Button, Img, Line, List, Text } from "components";

import "react-circular-progressbar/dist/styles.css";

const EmissionsPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-start mx-auto p-[49px] md:px-10 sm:px-5 w-full">
        <div className="flex flex-col md:gap-10 gap-[70px] items-center justify-start max-w-[1303px] mb-10 mx-auto w-full">
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
          <div className="flex flex-col items-start justify-start w-[90%] md:w-full">
            <Text
              className="ml-1 md:ml-[0] text-5xl sm:text-[38px] md:text-[44px] text-cyan-900"
              size="txtPoppinsBold48"
            >
              EMISSIONS
            </Text>
            <div className="flex sm:flex-col flex-row gap-[38px] items-center justify-start ml-1 md:ml-[0] mt-11 w-[34%] md:w-full">
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[142px] items-center justify-start p-[23px] sm:px-5 w-[42%] sm:w-full"
                style={{ backgroundImage: "url('images/img_group500.png')" }}
              >
                <Img
                  className="h-[90px] md:h-auto mb-1.5 object-cover w-[90px]"
                  src="images/img_thunderbolt1_90x90.png"
                  alt="thunderboltone"
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
            <List
              className="sm:flex-col flex-row md:gap-10 gap-[87px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 h-[369px] justify-start max-w-[1145px] ml-1 md:ml-[0] mt-14 w-full"
              orientation="horizontal"
            >
              <div className="flex flex-1 flex-col items-center justify-start w-full">
                <Button
                  className="cursor-pointer font-bold leading-[normal] min-w-[320px] text-2xl md:text-[22px] text-center sm:text-xl"
                  shape="square"
                  color="light_green_800"
                  size="sm"
                  variant="outline"
                >
                  SCOPE 1 EMISSIONS
                </Button>
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
                <Text
                  className="bg-gradient1  sm:px-5 px-[35px] py-[18px] md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700 w-full"
                  size="txtPoppinsBold32"
                >
                  <span className="md:text-[38px] sm:text-4xl text-light_green-800 font-poppins text-[40px] font-bold">
                    1980
                  </span>
                  <span className="text-light_green-800 font-poppins text-base font-light">
                    {" "}
                    MTCO
                  </span>
                  <span className="text-light_green-800 font-poppins text-base font-light">
                    2
                  </span>
                  <span className="text-light_green-800 font-poppins text-base font-light">
                    e
                  </span>
                </Text>
              </div>
              <div className="flex flex-1 flex-col items-center justify-start w-full">
                <Button
                  className="cursor-pointer font-bold leading-[normal] min-w-[320px] text-2xl md:text-[22px] text-center sm:text-xl"
                  shape="square"
                  color="light_green_800"
                  size="sm"
                  variant="outline"
                >
                  SCOPE 2 EMISSIONS
                </Button>
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
                <Text
                  className="bg-gradient1  sm:px-5 px-[35px] py-[18px] md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700 w-full"
                  size="txtPoppinsBold32"
                >
                  <span className="md:text-[38px] sm:text-4xl text-light_green-800 font-poppins text-[40px] font-bold">
                    1340
                  </span>
                  <span className="text-light_green-800 font-poppins text-base font-light">
                    {" "}
                    MTCO
                  </span>
                  <span className="text-light_green-800 font-poppins text-base font-light">
                    2
                  </span>
                  <span className="text-light_green-800 font-poppins text-base font-light">
                    e
                  </span>
                </Text>
              </div>
              <div className="flex flex-1 flex-col items-center justify-start w-full">
                <Button
                  className="cursor-pointer font-bold leading-[normal] min-w-[320px] md:text-2xl sm:text-[22px] text-[26px] text-center"
                  shape="square"
                  color="light_green_800"
                  size="sm"
                  variant="outline"
                >
                  SCOPE 3 EMISSIONS
                </Button>
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
                <Text
                  className="bg-gradient1  sm:px-5 px-[35px] py-[18px] md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700 w-full"
                  size="txtPoppinsBold32"
                >
                  <span className="md:text-[38px] sm:text-4xl text-light_green-800 font-poppins text-[40px] font-bold">
                    2460
                  </span>
                  <span className="text-light_green-800 font-poppins text-base font-light">
                    {" "}
                    MTCO
                  </span>
                  <span className="text-light_green-800 font-poppins text-base font-light">
                    2
                  </span>
                  <span className="text-light_green-800 font-poppins text-base font-light">
                    e
                  </span>
                </Text>
              </div>
            </List>
            <div className="bg-gradient  flex md:flex-col flex-row md:gap-10 items-start justify-between mt-[50px] p-[13px] w-[99%] md:w-full">
              <Text
                className="sm:ml-[0] ml-[23px] sm:mt-0 mt-2 md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                size="txtPoppinsBold32"
              >
                Emission Intensity
              </Text>
              <Text
                className="mr-[30px] sm:mt-0 mt-[7px] md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
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
            <div className="gap-[52px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 h-[124px] md:h-auto items-start justify-start max-w-[1145px] ml-1 md:ml-[0] mt-[34px] w-full">
              <div className="bg-light_green-100 flex flex-1 flex-col h-[124px] items-center justify-end p-4 w-full">
                <Text
                  className="mt-3.5 text-black-900 text-center text-xl"
                  size="txtPoppinsLight20"
                >
                  Base Year
                </Text>
                <Text
                  className="text-4xl sm:text-[32px] md:text-[34px] text-center text-light_green-800"
                  size="txtPoppinsExtraBold36"
                >
                  2020
                </Text>
              </div>
              <div className="bg-light_green-100 h-[124px] md:h-[54px] p-4 relative w-full">
                <Text
                  className="absolute inset-x-[0] mx-auto text-black-900 text-center text-xl top-[24%] w-max"
                  size="txtPoppinsLight20"
                >
                  Base Emissions
                </Text>
                <Text
                  className="absolute bottom-[13%] inset-x-[0] mx-auto text-4xl sm:text-[32px] md:text-[34px] text-center text-light_green-800 w-max"
                  size="txtPoppinsExtraBold36"
                >
                  <span className="text-light_green-800 font-poppins font-extrabold">
                    6200
                  </span>
                  <span className="md:text-3xl sm:text-[28px] text-light_green-800 font-poppins text-[32px] font-light">
                    {" "}
                  </span>
                  <span className="md:text-[22px] sm:text-xl text-light_green-800 font-poppins text-2xl font-light">
                    Mwh
                  </span>
                </Text>
              </div>
              <div className="bg-light_green-100 flex flex-1 flex-col h-[124px] items-center justify-end p-4 w-full">
                <Text
                  className="mt-4 text-black-900 text-center text-xl"
                  size="txtPoppinsLight20"
                >
                  Target Emissions
                </Text>
                <Text
                  className="text-4xl sm:text-[32px] md:text-[34px] text-center text-light_green-800"
                  size="txtPoppinsExtraBold36"
                >
                  <span className="text-light_green-800 font-poppins font-extrabold">
                    5500
                  </span>
                  <span className="md:text-[22px] sm:text-xl text-light_green-800 font-poppins text-2xl font-light">
                    Mwh
                  </span>
                </Text>
              </div>
              <div className="bg-light_green-100 h-[124px] md:h-[54px] p-[15px] relative w-full">
                <Text
                  className="absolute inset-x-[0] mx-auto text-black-900 text-center text-xl top-[24%] w-max"
                  size="txtPoppinsLight20"
                >
                  Status
                </Text>
                <Text
                  className="absolute bottom-[12%] inset-x-[0] mx-auto text-4xl sm:text-[32px] md:text-[34px] text-center text-red-A700 w-max"
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
            <div className="flex sm:flex-col flex-row gap-[27px] items-center justify-start md:ml-[0] ml-[29px] mt-16 w-[45%] md:w-full">
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
              className="h-[564px] sm:h-auto mt-[35px] object-cover w-[98%] md:w-full"
              src="images/img_graph1.png"
              alt="graphone"
            />
            <Text
              className="md:ml-[0] ml-[3px] mt-[71px] text-2xl md:text-[22px] text-cyan-900 sm:text-xl"
              size="txtPoppinsSemiBold24Cyan900"
            >
              Scope 3 Emissions by Category{" "}
            </Text>
            <List
              className="sm:flex-col flex-row md:gap-10 gap-[91px] grid md:grid-cols-1 grid-cols-2 justify-center mt-24 w-full"
              orientation="horizontal"
            >
              <div className="flex sm:flex-1 flex-col h-[699px] md:h-auto items-start justify-start w-[535px] sm:w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-row items-start justify-between w-[97%] md:w-full">
                      <div className="flex flex-col items-end justify-start mt-[54px]">
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
                      <Img
                        className="h-[108px] mb-[11px]"
                        src="images/img_vector.svg"
                        alt="vector"
                      />
                    </div>
                    <Line className="bg-black-900 h-px mt-[17px] w-full" />
                    <div className="flex sm:flex-col flex-row sm:gap-5 items-end justify-start mt-3 w-[99%] md:w-full">
                      <Img
                        className="h-11 md:h-auto object-cover w-11"
                        src="images/img_cart1.png"
                        alt="cartone"
                      />
                      <Text
                        className="mb-[7px] sm:ml-[0] ml-[69px] sm:mt-0 mt-[13px] text-[15px] text-light_green-800"
                        size="txtPoppinsRegular15"
                      >
                        Purchased Goods & Services
                      </Text>
                      <Text
                        className="sm:ml-[0] ml-[107px] sm:mt-0 mt-[13px] text-light_green-800 text-right text-xl"
                        size="txtPoppinsExtraBold20"
                      >
                        <span className="text-light_green-800 font-poppins font-extrabold">
                          134{" "}
                        </span>
                        <span className="text-light_green-800 font-poppins text-[13px] font-light">
                          MTCO2e
                        </span>
                      </Text>
                    </div>
                    <Line className="bg-black-900 h-px mt-2.5 w-full" />
                    <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start mt-2.5 w-[98%] md:w-full">
                      <Img
                        className="h-12 md:h-auto object-cover w-12"
                        src="images/img_cart2.png"
                        alt="carttwo"
                      />
                      <Text
                        className="sm:ml-[0] ml-[61px] text-[15px] text-light_green-800"
                        size="txtPoppinsRegular15"
                      >
                        Capital Goods
                      </Text>
                      <Text
                        className="sm:ml-[0] ml-[214px] text-light_green-800 text-right text-xl"
                        size="txtPoppinsExtraBold20"
                      >
                        <span className="text-light_green-800 font-poppins font-extrabold">
                          241{" "}
                        </span>
                        <span className="text-light_green-800 font-poppins text-[13px] font-light">
                          MTCO2e
                        </span>
                      </Text>
                    </div>
                    <Line className="bg-black-900 h-px mt-2 w-full" />
                    <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start mt-3 w-[98%] md:w-full">
                      <Img
                        className="h-12 md:h-auto object-cover w-12"
                        src="images/img_cart3.png"
                        alt="cartthree"
                      />
                      <Text
                        className="sm:ml-[0] ml-[61px] text-[15px] text-light_green-800"
                        size="txtPoppinsRegular15"
                      >
                        Fuel & Energy Related
                      </Text>
                      <Text
                        className="sm:ml-[0] ml-[161px] text-light_green-800 text-right text-xl"
                        size="txtPoppinsExtraBold20"
                      >
                        <span className="text-light_green-800 font-poppins font-extrabold">
                          189{" "}
                        </span>
                        <span className="text-light_green-800 font-poppins text-[13px] font-light">
                          MTCO2e
                        </span>
                      </Text>
                    </div>
                    <Line className="bg-black-900 h-px mt-[11px] w-full" />
                    <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start mt-2 w-full">
                      <Img
                        className="h-[63px] md:h-auto object-cover w-[63px]"
                        src="images/img_cart4.png"
                        alt="cartfour"
                      />
                      <Text
                        className="sm:ml-[0] ml-[54px] text-[15px] text-light_green-800"
                        size="txtPoppinsRegular15"
                      >
                        Upstream Transportation & Distribution
                      </Text>
                      <Text
                        className="ml-4 sm:ml-[0] text-light_green-800 text-right text-xl"
                        size="txtPoppinsExtraBold20"
                      >
                        <span className="text-light_green-800 font-poppins font-extrabold">
                          1945{" "}
                        </span>
                        <span className="text-light_green-800 font-poppins text-[13px] font-light">
                          MTCO2e
                        </span>
                      </Text>
                    </div>
                    <Line className="bg-black-900 h-px w-full" />
                    <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start mt-[9px] w-[98%] md:w-full">
                      <Img
                        className="h-12 md:h-auto object-cover w-12"
                        src="images/img_cart5.png"
                        alt="cartfive"
                      />
                      <Text
                        className="sm:ml-[0] ml-[61px] text-[15px] text-light_green-800"
                        size="txtPoppinsRegular15"
                      >
                        Waste from Operations
                      </Text>
                      <Text
                        className="sm:ml-[0] ml-[155px] text-light_green-800 text-right text-xl"
                        size="txtPoppinsExtraBold20"
                      >
                        <span className="text-light_green-800 font-poppins font-extrabold">
                          80{" "}
                        </span>
                        <span className="text-light_green-800 font-poppins text-[13px] font-light">
                          MTCO2e
                        </span>
                      </Text>
                    </div>
                    <Line className="bg-black-900 h-px mt-[9px] w-full" />
                    <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start mt-[19px] w-[98%] md:w-full">
                      <Img
                        className="h-12 md:h-auto sm:mt-0 mt-[3px] object-cover w-12"
                        src="images/img_cart6.png"
                        alt="cartsix"
                      />
                      <Text
                        className="sm:ml-[0] ml-[61px] sm:mt-0 mt-[3px] text-[15px] text-light_green-800"
                        size="txtPoppinsRegular15"
                      >
                        Business Travel
                      </Text>
                      <Text
                        className="ml-52 sm:ml-[0] text-light_green-800 text-right text-xl"
                        size="txtPoppinsExtraBold20"
                      >
                        <span className="text-light_green-800 font-poppins font-extrabold">
                          190{" "}
                        </span>
                        <span className="text-light_green-800 font-poppins text-[13px] font-light">
                          MTCO2e
                        </span>
                      </Text>
                    </div>
                    <Line className="bg-black-900 h-px w-full" />
                    <div className="flex sm:flex-col flex-row sm:gap-5 items-end justify-start mt-[7px] w-[98%] md:w-full">
                      <Img
                        className="h-12 md:h-auto object-cover w-12"
                        src="images/img_cart7.png"
                        alt="cartseven"
                      />
                      <Text
                        className="mb-1.5 sm:ml-[0] ml-[61px] sm:mt-0 mt-[18px] text-[15px] text-light_green-800"
                        size="txtPoppinsRegular15"
                      >
                        Employee Commute
                      </Text>
                      <Text
                        className="sm:ml-[0] ml-[162px] sm:mt-0 mt-4 text-light_green-800 text-right text-xl"
                        size="txtPoppinsExtraBold20"
                      >
                        <span className="text-light_green-800 font-poppins font-extrabold">
                          384{" "}
                        </span>
                        <span className="text-light_green-800 font-poppins text-[13px] font-light">
                          MTCO2e
                        </span>
                      </Text>
                    </div>
                    <Line className="bg-black-900 h-px mt-4 w-full" />
                    <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start mt-[9px] w-[98%] md:w-full">
                      <Img
                        className="h-12 md:h-auto object-cover w-12"
                        src="images/img_cart8.png"
                        alt="carteight"
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
                    <Line className="bg-black-900 h-px mt-3.5 w-full" />
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col items-center justify-start w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between w-[97%] md:w-full">
                    <div className="flex flex-col items-end justify-start sm:mt-0 mt-[54px]">
                      <Text
                        className="bg-clip-text bg-gradient  text-4xl sm:text-[32px] md:text-[34px] text-transparent"
                        size="txtPoppinsRegular36"
                      >
                        DOWNSTREAM
                      </Text>
                      <Text
                        className="text-[15px] text-black-900"
                        size="txtPoppinsExtraLight15"
                      >
                        EMISSIONS
                      </Text>
                    </div>
                    <Img
                      className="h-[108px] mb-2.5"
                      src="images/img_vector.svg"
                      alt="vector"
                    />
                  </div>
                  <Line className="bg-black-900 h-px mt-[18px] w-[99%]" />
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-end justify-start mt-2 w-[98%] md:w-full">
                    <Img
                      className="h-12 md:h-auto object-cover w-12"
                      src="images/img_cart9.png"
                      alt="cartnine"
                    />
                    <Text
                      className="mb-[9px] sm:ml-[0] ml-[60px] sm:mt-0 mt-[17px] text-light_green-800 text-sm"
                      size="txtPoppinsRegular14"
                    >
                      Investments
                    </Text>
                    <Text
                      className="h-[30px] sm:ml-[0] ml-[298px] sm:mt-0 mt-[17px] text-light_green-800 text-right text-xl"
                      size="txtPoppinsExtraBold20"
                    >
                      NA
                    </Text>
                  </div>
                  <Line className="bg-black-900 h-px mt-2.5 w-[99%]" />
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start mt-0.5 w-[98%] md:w-full">
                    <Img
                      className="h-[60px] md:h-auto object-cover w-[60px]"
                      src="images/img_cart2_60x60.png"
                      alt="carttwo"
                    />
                    <Text
                      className="sm:ml-[0] ml-[51px] text-light_green-800 text-sm"
                      size="txtPoppinsRegular14"
                    >
                      Franchises
                    </Text>
                    <Text
                      className="h-[30px] sm:ml-[0] ml-[309px] text-light_green-800 text-right text-xl"
                      size="txtPoppinsExtraBold20"
                    >
                      NA
                    </Text>
                  </div>
                  <Line className="bg-black-900 h-px mt-1 w-[99%]" />
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start mt-3 w-[98%] md:w-full">
                    <Img
                      className="h-12 md:h-auto object-cover w-12"
                      src="images/img_cart8.png"
                      alt="cartten"
                    />
                    <Text
                      className="sm:ml-[0] ml-[60px] text-light_green-800 text-sm"
                      size="txtPoppinsRegular14"
                    >
                      Downstream Leased Assets
                    </Text>
                    <Text
                      className="sm:ml-[0] ml-[127px] text-light_green-800 text-right text-xl"
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
                  <Line className="bg-black-900 h-px mt-[11px] w-[99%]" />
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start mt-1 w-[99%] md:w-full">
                    <Img
                      className="h-[63px] md:h-auto object-cover w-[63px]"
                      src="images/img_cart4.png"
                      alt="cartfour"
                    />
                    <Text
                      className="sm:ml-[0] ml-[52px] text-light_green-800 text-sm"
                      size="txtPoppinsRegular14"
                    >
                      Downstream Transportation & Distribution
                    </Text>
                    <Text
                      className="sm:ml-[0] ml-[30px] text-light_green-800 text-right text-xl"
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
                  <Line className="bg-black-900 h-px mt-1 w-[99%]" />
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start mt-[11px] w-[98%] md:w-full">
                    <Img
                      className="h-12 md:h-auto object-cover w-12"
                      src="images/img_cart5.png"
                      alt="carteleven"
                    />
                    <Text
                      className="sm:ml-[0] ml-[60px] text-light_green-800 text-sm"
                      size="txtPoppinsRegular14"
                    >
                      Use of Sold Products
                    </Text>
                    <Text
                      className="h-[30px] sm:ml-[0] ml-[242px] text-light_green-800 text-right text-xl"
                      size="txtPoppinsExtraBold20"
                    >
                      NA
                    </Text>
                  </div>
                  <Line className="bg-black-900 h-px mt-[7px] w-[99%]" />
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start mt-3 w-[98%] md:w-full">
                    <Img
                      className="h-12 md:h-auto object-cover w-12"
                      src="images/img_cart12.png"
                      alt="carttwelve"
                    />
                    <Text
                      className="sm:ml-[0] ml-[60px] text-light_green-800 text-sm"
                      size="txtPoppinsRegular14"
                    >
                      Processing of Sold Products
                    </Text>
                    <Text
                      className="h-[30px] sm:ml-[0] ml-[191px] text-light_green-800 text-right text-xl"
                      size="txtPoppinsExtraBold20"
                    >
                      NA
                    </Text>
                  </div>
                  <Line className="bg-black-900 h-px mt-[11px] w-[99%]" />
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start mt-2.5 w-[98%] md:w-full">
                    <Img
                      className="h-12 md:h-auto object-cover w-12"
                      src="images/img_cart13.png"
                      alt="cartthirteen"
                    />
                    <Text
                      className="sm:ml-[0] ml-[60px] text-light_green-800 text-sm"
                      size="txtPoppinsRegular14"
                    >
                      End-of-Life Treatment of sold products
                    </Text>
                    <Text
                      className="h-[30px] sm:ml-[0] ml-[113px] text-light_green-800 text-right text-xl"
                      size="txtPoppinsExtraBold20"
                    >
                      NA
                    </Text>
                  </div>
                  <Line className="bg-black-900 h-px mt-[13px] w-[99%]" />
                </div>
              </div>
            </List>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmissionsPage;
