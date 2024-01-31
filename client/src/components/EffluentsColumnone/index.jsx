import React from "react";

import { Button, Img, Line, List, Text } from "components";

const EffluentsColumnone = (props) => {
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
            <div className="bg-light_green-100 flex flex-col items-center justify-end p-[26px] sm:px-5 w-full">
              <div className="flex md:flex-col flex-row gap-[7px] items-center justify-start mt-[27px] w-[97%] md:w-full">
                <div className="flex flex-col gap-8 items-center justify-start w-auto">
                  <Text
                    className="text-[13px] text-light_green-800 text-right w-8"
                    size="txtPoppinsMedium13"
                  >
                    {props?.zipcodeOne}
                  </Text>
                  <Text
                    className="text-[13px] text-light_green-800 text-right w-8"
                    size="txtPoppinsMedium13"
                  >
                    {props?.zipcodeTwo}
                  </Text>
                  <Text
                    className="text-[13px] text-light_green-800 text-right w-8"
                    size="txtPoppinsMedium13"
                  >
                    {props?.zipcodeThree}
                  </Text>
                  <Text
                    className="text-[13px] text-light_green-800 text-right w-8"
                    size="txtPoppinsMedium13"
                  >
                    {props?.zipcodeFour}
                  </Text>
                  <Text
                    className="text-[13px] text-light_green-800 text-right w-[29px]"
                    size="txtPoppinsMedium13"
                  >
                    {props?.zipcodeFive}
                  </Text>
                  <Text
                    className="text-[13px] text-light_green-800 text-right w-[29px]"
                    size="txtPoppinsMedium13"
                  >
                    {props?.zipcodeSix}
                  </Text>
                  <Text
                    className="text-[13px] text-light_green-800 text-right w-[25px]"
                    size="txtPoppinsMedium13"
                  >
                    {props?.fivehundred}
                  </Text>
                  <Text
                    className="text-[13px] text-light_green-800 text-right w-[21px]"
                    size="txtPoppinsMedium13"
                  >
                    {props?.onehundred}
                  </Text>
                </div>
                <Line className="bg-gray-500 h-[370px] md:h-px mb-11 md:mt-0 mt-[69px] md:w-full w-px" />
                <div className="flex flex-col justify-start w-[96%] md:w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-end md:ml-[0] ml-[301px] w-[63%] md:w-full">
                    <Text
                      className="text-base text-black-900 text-center"
                      size="txtPoppinsLight16"
                    >
                      {props?.facilitycounter}
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[226px] text-base text-black-900 text-center"
                      size="txtPoppinsLight16"
                    >
                      {props?.facilitycounterOne}
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[202px] text-base text-black-900 text-center"
                      size="txtPoppinsLight16"
                    >
                      {props?.facilitycounterTwo}
                    </Text>
                  </div>
                  <List
                    className="sm:flex-col flex-row md:gap-10 gap-[136px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 md:ml-[0] ml-[258px] w-[71%]"
                    orientation="horizontal"
                  >
                    <div className="h-12 relative w-full">
                      {props?.klitrescounter}
                      <Line className="absolute bg-light_green-800 h-px inset-x-[0] mx-auto top-[4%] w-full" />
                    </div>
                    <div className="h-12 relative w-full">
                      {props?.measurement}
                      <Line className="absolute bg-light_green-800 h-px inset-x-[0] mx-auto top-[4%] w-full" />
                    </div>
                    <div className="h-12 relative w-full">
                      {props?.measurement1}
                      <Line className="absolute bg-light_green-800 h-px inset-x-[0] mx-auto top-[4%] w-full" />
                    </div>
                  </List>
                  <div className="h-[141px] sm:h-[277px] md:h-[405px] md:ml-[0] ml-[31px] mt-[184px] relative w-[95%] md:w-full">
                    <div className="absolute h-[134px] md:h-[221px] sm:h-[93px] inset-x-[0] mx-auto top-[0] w-full">
                      <div className="absolute h-[121px] md:h-[221px] sm:h-[93px] inset-x-[0] mx-auto top-[0] w-full">
                        <div className="absolute h-[109px] md:h-[221px] sm:h-[93px] inset-[0] justify-center m-auto w-[99%] md:w-full">
                          <Img
                            className="absolute bottom-[0] h-[60px] inset-x-[0] mx-auto"
                            src="images/img_vector18.svg"
                            alt="vectoreighteen"
                          />
                          <div
                            className="absolute bg-cover bg-no-repeat flex flex-col h-[93px] inset-x-[0] items-center justify-start mx-auto pt-[19px] px-[19px] top-[0] w-full"
                            style={{
                              backgroundImage: "url('images/img_group23.svg')",
                            }}
                          >
                            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[87%] md:w-full">
                              <div className="flex flex-col gap-[7px] justify-start w-[24%] md:w-full">
                                <div className="flex flex-row gap-[70px] items-start justify-end md:ml-[0] ml-[87px] w-[53%] md:w-full">
                                  <div className="bg-green-300 h-[13px] mt-[13px] rounded-md w-[13px]"></div>
                                  <div className="bg-green-300 h-[13px] mb-[13px] rounded-md w-[13px]"></div>
                                </div>
                                <div className="flex flex-row gap-[74px] items-start justify-start mr-[83px] w-[55%] md:w-full">
                                  <div className="bg-deep_purple-300 h-[13px] mt-3 rounded-md w-[13px]"></div>
                                  <div className="bg-deep_purple-300 h-[13px] mb-3 rounded-md w-[13px]"></div>
                                </div>
                              </div>
                              <div className="flex flex-col items-center justify-start md:ml-[0] ml-[74px] md:mt-0 mt-[15px] w-[35%] md:w-full">
                                <div className="flex flex-row items-start justify-between w-full">
                                  <div className="bg-green-300 h-[13px] mb-5 rounded-md w-[13px]"></div>
                                  <div className="bg-deep_purple-300 h-[13px] my-2.5 rounded-md w-[13px]"></div>
                                  <div className="bg-green-300 h-[13px] mb-[13px] mt-[7px] rounded-md w-[13px]"></div>
                                  <div className="bg-green-300 h-[13px] mt-5 rounded-md w-[13px]"></div>
                                </div>
                                <div className="flex flex-row items-start justify-between mt-0.5 w-full">
                                  <div className="bg-deep_purple-300 h-[13px] mb-[11px] rounded-md w-[13px]"></div>
                                  <div className="bg-deep_purple-300 h-[13px] mt-[11px] rounded-md w-[13px]"></div>
                                </div>
                              </div>
                              <div className="flex flex-col items-start justify-start md:ml-[0] ml-[66px] md:mt-0 mt-[21px] w-1/4 md:w-full">
                                <div className="bg-green-300 h-[13px] rounded-md w-[13px]"></div>
                                <div className="flex flex-row items-start justify-between mt-[3px] w-full">
                                  <div className="bg-deep_purple-300 h-[13px] mt-4 rounded-md w-[13px]"></div>
                                  <div className="bg-green-300 h-[13px] mb-[11px] mt-[5px] rounded-md w-[13px]"></div>
                                  <div className="bg-green-300 h-[13px] mb-4 rounded-md w-[13px]"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="absolute bg-deep_purple-300 h-[13px] left-[0] rounded-md top-[42%] w-[13px]"></div>
                        <div className="absolute bg-green-300 h-[13px] left-[0] rounded-md top-[20%] w-[13px]"></div>
                        <div className="absolute bg-green-300 h-[13px] left-[8%] rounded-md top-[0] w-[13px]"></div>
                        <div className="absolute bottom-[13%] flex flex-row items-start justify-start right-[18%] w-[38%]">
                          <div className="bg-green-300 h-[13px] mt-1 rounded-md w-[13px]"></div>
                          <div className="bg-deep_purple-300 h-[13px] mb-1 ml-[65px] rounded-md w-[13px]"></div>
                          <div className="bg-deep_purple-300 h-[13px] ml-[246px] my-0.5 rounded-md w-[13px]"></div>
                        </div>
                        <div className="absolute bg-green-300 bottom-[33%] h-[13px] right-[0] rounded-md w-[13px]"></div>
                        <div className="absolute bg-deep_purple-300 bottom-[0] h-[13px] left-[27%] rounded-md w-[13px]"></div>
                        <div className="absolute bg-deep_purple-300 bottom-[0] h-[13px] right-[9%] rounded-md w-[13px]"></div>
                        <div className="absolute bg-deep_purple-300 bottom-[14%] h-[13px] right-[0] rounded-md w-[13px]"></div>
                      </div>
                      <div
                        className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col h-14 inset-x-[0] items-center justify-end mx-auto p-1.5 w-[99%]"
                        style={{
                          backgroundImage: "url('images/img_group24.svg')",
                        }}
                      >
                        <List
                          className="flex flex-col gap-4 items-center w-[85%]"
                          orientation="vertical"
                        >
                          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                            <div className="bg-red-200 h-[13px] rounded-md w-[13px]"></div>
                            <div className="bg-red-200 h-[13px] md:ml-[0] ml-[74px] rounded-md w-[13px]"></div>
                            <div className="bg-red-200 h-[13px] md:ml-[0] ml-[660px] rounded-md w-[13px]"></div>
                          </div>
                          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-end w-[46%] md:w-full">
                            <div className="bg-red-200 h-[13px] rounded-md w-[13px]"></div>
                            <div className="bg-red-200 h-[13px] md:ml-[0] ml-[155px] rounded-md w-[13px]"></div>
                            <div className="bg-red-200 h-[13px] md:ml-[0] ml-[156px] rounded-md w-[13px]"></div>
                          </div>
                        </List>
                      </div>
                    </div>
                    <div className="absolute bg-red-200 bottom-[30%] h-[13px] left-[0] rounded-md w-[13px]"></div>
                    <div className="absolute bg-red-200 bottom-[40%] h-[13px] left-[27%] rounded-md w-[13px]"></div>
                    <div className="absolute bg-red-200 bottom-[1%] h-[13px] left-[36%] rounded-md w-[13px]"></div>
                    <div className="absolute bg-red-200 bottom-[1%] h-[13px] right-[46%] rounded-md w-[13px]"></div>
                    <div className="absolute bg-red-200 bottom-[0] h-[13px] right-[28%] rounded-md w-[13px]"></div>
                    <div className="absolute bg-red-200 bottom-[1%] h-[13px] right-[0] rounded-md w-[13px]"></div>
                  </div>
                  <Line className="bg-gray-500 h-px mr-[7px] mt-[42px] w-full" />
                  <div className="flex md:flex-col flex-row gap-[30px] items-start justify-start md:ml-[0] ml-[27px] mt-[7px] w-auto md:w-full">
                    <Text
                      className="text-[13px] text-light_green-800 w-[25px]"
                      size="txtPoppinsMedium13"
                    >
                      {props?.jan}
                    </Text>
                    <Text
                      className="text-[13px] text-light_green-800"
                      size="txtPoppinsMedium13"
                    >
                      {props?.feb}
                    </Text>
                    <Text
                      className="text-[13px] text-light_green-800 w-7"
                      size="txtPoppinsMedium13"
                    >
                      {props?.mar}
                    </Text>
                    <Text
                      className="text-[13px] text-light_green-800 w-[25px]"
                      size="txtPoppinsMedium13"
                    >
                      {props?.apr}
                    </Text>
                    <Text
                      className="text-[13px] text-light_green-800 w-[29px]"
                      size="txtPoppinsMedium13"
                    >
                      {props?.may}
                    </Text>
                    <Text
                      className="text-[13px] text-light_green-800 w-[25px]"
                      size="txtPoppinsMedium13"
                    >
                      {props?.jun}
                    </Text>
                    <Text
                      className="text-[13px] text-light_green-800 w-[22px]"
                      size="txtPoppinsMedium13"
                    >
                      {props?.jul}
                    </Text>
                    <Text
                      className="text-[13px] text-light_green-800 w-7"
                      size="txtPoppinsMedium13"
                    >
                      {props?.aug}
                    </Text>
                    <Text
                      className="text-[13px] text-light_green-800 w-[22px]"
                      size="txtPoppinsMedium13"
                    >
                      {props?.sep}
                    </Text>
                    <Text
                      className="text-[13px] text-light_green-800 w-[27px]"
                      size="txtPoppinsMedium13"
                    >
                      {props?.oct}
                    </Text>
                    <Text
                      className="text-[13px] text-light_green-800 w-[29px]"
                      size="txtPoppinsMedium13"
                    >
                      {props?.nov}
                    </Text>
                    <Text
                      className="text-[13px] text-light_green-800 w-[26px]"
                      size="txtPoppinsMedium13"
                    >
                      {props?.dec}
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

EffluentsColumnone.defaultProps = {
  facilityOne: "FACILITY 1",
  facilityTwo: "FACILITY 2",
  facilityThree: "FACILITY 3",
  all: "ALL",
  zipcodeOne: "3500",
  zipcodeTwo: "3000",
  zipcodeThree: "2500",
  zipcodeFour: "2000",
  zipcodeFive: "1500",
  zipcodeSix: "1000",
  fivehundred: "500",
  onehundred: "100",
  facilitycounter: "Facility 1",
  facilitycounterOne: "Facility 2",
  facilitycounterTwo: "Facility 3",
  klitrescounter: (
    <Text
      className="absolute h-full inset-y-[0] my-auto right-[0] md:text-3xl sm:text-[28px] text-[32px] text-light_green-800 text-right"
      size="txtPoppinsBold32Lightgreen800"
    >
      <span className="text-light_green-800 font-poppins font-bold">21 K</span>
      <span className="text-light_green-800 font-poppins text-xl font-light">
        Litres
      </span>
    </Text>
  ),
  measurement: (
    <Text
      className="absolute h-full inset-y-[0] my-auto right-[7%] md:text-3xl sm:text-[28px] text-[32px] text-light_green-800 text-right"
      size="txtPoppinsBold32Lightgreen800"
    >
      <span className="text-light_green-800 font-poppins font-bold">12 </span>
      <span className="text-light_green-800 font-poppins text-xl font-light">
        Litres
      </span>
    </Text>
  ),
  measurement1: (
    <Text
      className="absolute h-full inset-y-[0] my-auto right-[5%] md:text-3xl sm:text-[28px] text-[32px] text-light_green-800 text-right"
      size="txtPoppinsBold32Lightgreen800"
    >
      <span className="text-light_green-800 font-poppins font-bold">16 </span>
      <span className="text-light_green-800 font-poppins text-xl font-light">
        Litres
      </span>
    </Text>
  ),
  jan: "JAN",
  feb: "FEB",
  mar: "MAR",
  apr: "APR",
  may: "MAY",
  jun: "JUN",
  jul: "JUL",
  aug: "AUG",
  sep: "SEP",
  oct: "OCT",
  nov: "NOV",
  dec: "DEC",
};

export default EffluentsColumnone;
