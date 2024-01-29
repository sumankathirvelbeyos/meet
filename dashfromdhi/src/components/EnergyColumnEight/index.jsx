import React from "react";

import { Button, Img, Line, List, Text } from "components";

const EnergyColumnEight = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex flex-col gap-7 justify-start w-full">
            <div className="flex sm:flex-col flex-row gap-[27px] items-center justify-start md:ml-[0] ml-[25px] w-[46%] md:w-full">
              <Button
                className="!text-light_green-800 border border-light_green-800 border-solid cursor-pointer font-medium font-poppins leading-[normal] min-w-[120px] text-[13px] text-center"
                shape="round"
                color="white_A700"
                size="xs"
                variant="fill"
              >
                {props?.facilityonetwobutton}
              </Button>
              <Button
                className="!text-light_green-800 border border-light_green-800 border-solid cursor-pointer font-medium font-poppins leading-[normal] min-w-[120px] text-[13px] text-center"
                shape="round"
                color="white_A700"
                size="xs"
                variant="fill"
              >
                {props?.facilitytwotwobutton}
              </Button>
              <Button
                className="!text-light_green-800 border border-light_green-800 border-solid cursor-pointer font-medium font-poppins leading-[normal] min-w-[120px] text-[13px] text-center"
                shape="round"
                color="white_A700"
                size="xs"
                variant="fill"
              >
                {props?.facilitythreetwobutton}
              </Button>
              <Button
                className="!text-white-A700 cursor-pointer font-medium font-poppins leading-[normal] min-w-[77px] text-[13px] text-center"
                shape="round"
                size="xs"
                variant="gradient"
                color="cyan_900_light_green_800"
              >
                {props?.allonebutton}
              </Button>
            </div>
            <div className="flex flex-col items-center justify-start w-full">
              <div className="bg-light_green-100 flex flex-col items-center justify-end p-7 sm:px-5 rotate-[180deg] w-full">
                <div className="flex flex-col justify-start mt-[93px] w-[98%] md:w-full">
                  <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mr-[31px] w-[98%] md:w-full">
                    <div className="flex flex-col gap-8 items-center justify-start md:mt-0 mt-0.5 rotate-[180deg] w-auto">
                      <Text
                        className="text-[13px] text-light_green-800 text-right w-8"
                        size="txtPoppinsMedium13"
                      >
                        {props?.zipcodeninetext}
                      </Text>
                      <Text
                        className="text-[13px] text-light_green-800 text-right w-8"
                        size="txtPoppinsMedium13"
                      >
                        {props?.zipcodetentext}
                      </Text>
                      <Text
                        className="text-[13px] text-light_green-800 text-right w-8"
                        size="txtPoppinsMedium13"
                      >
                        {props?.zipcodeeleventext}
                      </Text>
                      <Text
                        className="text-[13px] text-light_green-800 text-right w-8"
                        size="txtPoppinsMedium13"
                      >
                        {props?.zipcodetwelvetext}
                      </Text>
                      <Text
                        className="text-[13px] text-light_green-800 text-right w-[29px]"
                        size="txtPoppinsMedium13"
                      >
                        {props?.zipcodethirteentext}
                      </Text>
                      <Text
                        className="text-[13px] text-light_green-800 text-right w-[29px]"
                        size="txtPoppinsMedium13"
                      >
                        {props?.zipcodefourteentext}
                      </Text>
                      <Text
                        className="text-[13px] text-light_green-800 text-right w-[25px]"
                        size="txtPoppinsMedium13"
                      >
                        {props?.fivehundredonetext}
                      </Text>
                      <Text
                        className="text-[13px] text-light_green-800 text-right w-[21px]"
                        size="txtPoppinsMedium13"
                      >
                        {props?.onehundredonetext}
                      </Text>
                    </div>
                    <Line className="bg-gray-500 h-[370px] md:h-px md:w-full w-px" />
                    <div className="h-[141px] md:h-[221px] sm:h-[93px] md:mt-0 mt-[68px] relative w-[93%] md:w-full">
                      <div className="absolute h-[134px] md:h-[221px] sm:h-[93px] inset-x-[0] mx-auto top-[0] w-full">
                        <div className="absolute h-[121px] md:h-[221px] sm:h-[93px] inset-x-[0] mx-auto top-[0] w-full">
                          <div className="absolute h-[109px] md:h-[221px] sm:h-[93px] inset-[0] justify-center m-auto w-[99%] md:w-full">
                            <Img
                              className="absolute bottom-[0] h-[60px] inset-x-[0] mx-auto"
                              src="images/img_vector18_deep_purple_300.svg"
                              alt="vectorEighteen_One"
                            />
                            <div
                              className="absolute bg-cover bg-no-repeat flex flex-col h-[93px] inset-x-[0] items-center justify-start mx-auto pt-[19px] px-[19px] top-[0] w-full"
                              style={{
                                backgroundImage:
                                  "url('images/img_group86.svg')",
                              }}
                            >
                              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[87%] md:w-full">
                                <div className="flex flex-col items-end justify-start w-1/4 md:w-full">
                                  <div className="bg-green-300 h-[13px] rounded-md w-[13px]"></div>
                                  <div className="flex flex-row items-start justify-between mt-[3px] w-full">
                                    <div className="bg-green-300 h-[13px] mb-4 rounded-md w-[13px]"></div>
                                    <div className="bg-green-300 h-[13px] mb-[11px] mt-[5px] rounded-md w-[13px]"></div>
                                    <div className="bg-deep_purple-300 h-[13px] mt-4 rounded-md w-[13px]"></div>
                                  </div>
                                </div>
                                <div className="flex flex-col items-center justify-start md:ml-[0] ml-[66px] md:mt-0 mt-[15px] w-[35%] md:w-full">
                                  <div className="flex flex-row items-start justify-between w-full">
                                    <div className="bg-green-300 h-[13px] mt-5 rounded-md w-[13px]"></div>
                                    <div className="bg-green-300 h-[13px] mb-[13px] mt-[7px] rounded-md w-[13px]"></div>
                                    <div className="bg-deep_purple-300 h-[13px] my-2.5 rounded-md w-[13px]"></div>
                                    <div className="bg-green-300 h-[13px] mb-5 rounded-md w-[13px]"></div>
                                  </div>
                                  <div className="flex flex-row items-start justify-between mt-0.5 w-full">
                                    <div className="bg-deep_purple-300 h-[13px] mt-[11px] rounded-md w-[13px]"></div>
                                    <div className="bg-deep_purple-300 h-[13px] mb-[11px] rounded-md w-[13px]"></div>
                                  </div>
                                </div>
                                <div className="flex flex-col gap-[7px] justify-start md:ml-[0] ml-[74px] w-[24%] md:w-full">
                                  <div className="flex flex-row gap-[70px] items-start justify-start w-[53%] md:w-full">
                                    <div className="bg-green-300 h-[13px] mb-[13px] rounded-md w-[13px]"></div>
                                    <div className="bg-green-300 h-[13px] mt-[13px] rounded-md w-[13px]"></div>
                                  </div>
                                  <div className="flex flex-row gap-[74px] items-start justify-end md:ml-[0] ml-[83px] w-[55%] md:w-full">
                                    <div className="bg-deep_purple-300 h-[13px] mb-3 rounded-md w-[13px]"></div>
                                    <div className="bg-deep_purple-300 h-[13px] mt-3 rounded-md w-[13px]"></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="absolute bg-deep_purple-300 h-[13px] right-[0] rounded-md top-[42%] w-[13px]"></div>
                          <div className="absolute bg-green-300 h-[13px] right-[0] rounded-md top-[20%] w-[13px]"></div>
                          <div className="absolute bg-green-300 h-[13px] right-[8%] rounded-md top-[0] w-[13px]"></div>
                          <div className="absolute bottom-[13%] flex flex-row items-start justify-start left-[18%] w-[38%]">
                            <div className="bg-deep_purple-300 h-[13px] my-0.5 rounded-md w-[13px]"></div>
                            <div className="bg-deep_purple-300 h-[13px] mb-1 ml-[246px] rounded-md w-[13px]"></div>
                            <div className="bg-green-300 h-[13px] ml-[65px] mt-1 rounded-md w-[13px]"></div>
                          </div>
                          <div className="absolute bg-green-300 bottom-[33%] h-[13px] left-[0] rounded-md w-[13px]"></div>
                          <div className="absolute bg-deep_purple-300 bottom-[0] h-[13px] right-[27%] rounded-md w-[13px]"></div>
                          <div className="absolute bg-deep_purple-300 bottom-[0] h-[13px] left-[9%] rounded-md w-[13px]"></div>
                          <div className="absolute bg-deep_purple-300 bottom-[14%] h-[13px] left-[0] rounded-md w-[13px]"></div>
                        </div>
                        <div
                          className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col h-14 inset-x-[0] items-center justify-end mx-auto p-1.5 w-[99%]"
                          style={{
                            backgroundImage: "url('images/img_group87.svg')",
                          }}
                        >
                          <List
                            className="flex flex-col gap-4 items-center w-[85%]"
                            orientation="vertical"
                          >
                            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                              <div className="bg-red-200 h-[13px] rounded-md w-[13px]"></div>
                              <div className="bg-red-200 h-[13px] md:ml-[0] ml-[660px] rounded-md w-[13px]"></div>
                              <div className="bg-red-200 h-[13px] md:ml-[0] ml-[74px] rounded-md w-[13px]"></div>
                            </div>
                            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[46%] md:w-full">
                              <div className="bg-red-200 h-[13px] rounded-md w-[13px]"></div>
                              <div className="bg-red-200 h-[13px] md:ml-[0] ml-[156px] rounded-md w-[13px]"></div>
                              <div className="bg-red-200 h-[13px] md:ml-[0] ml-[155px] rounded-md w-[13px]"></div>
                            </div>
                          </List>
                        </div>
                      </div>
                      <div className="absolute bg-red-200 bottom-[30%] h-[13px] right-[0] rounded-md w-[13px]"></div>
                      <div className="absolute bg-red-200 bottom-[40%] h-[13px] right-[27%] rounded-md w-[13px]"></div>
                      <div className="absolute bg-red-200 bottom-[1%] h-[13px] right-[36%] rounded-md w-[13px]"></div>
                      <div className="absolute bg-red-200 bottom-[1%] h-[13px] left-[46%] rounded-md w-[13px]"></div>
                      <div className="absolute bg-red-200 bottom-[0] h-[13px] left-[28%] rounded-md w-[13px]"></div>
                      <div className="absolute bg-red-200 bottom-[1%] h-[13px] left-[0] rounded-md w-[13px]"></div>
                    </div>
                  </div>
                  <Line className="bg-gray-500 h-px md:ml-[0] ml-[58px] w-[95%]" />
                  <div className="flex md:flex-col flex-row gap-[30px] items-start justify-start md:ml-[0] ml-[77px] mt-[7px] rotate-[180deg] w-auto md:w-full">
                    <Text
                      className="text-[13px] text-light_green-800 w-[25px]"
                      size="txtPoppinsMedium13"
                    >
                      {props?.janonetext}
                    </Text>
                    <Text
                      className="text-[13px] text-light_green-800"
                      size="txtPoppinsMedium13"
                    >
                      {props?.febonetext}
                    </Text>
                    <Text
                      className="text-[13px] text-light_green-800 w-7"
                      size="txtPoppinsMedium13"
                    >
                      {props?.maronetext}
                    </Text>
                    <Text
                      className="text-[13px] text-light_green-800 w-[25px]"
                      size="txtPoppinsMedium13"
                    >
                      {props?.apronetext}
                    </Text>
                    <Text
                      className="text-[13px] text-light_green-800 w-[29px]"
                      size="txtPoppinsMedium13"
                    >
                      {props?.mayonetext}
                    </Text>
                    <Text
                      className="text-[13px] text-light_green-800 w-[25px]"
                      size="txtPoppinsMedium13"
                    >
                      {props?.junonetext}
                    </Text>
                    <Text
                      className="text-[13px] text-light_green-800 w-[22px]"
                      size="txtPoppinsMedium13"
                    >
                      {props?.julonetext}
                    </Text>
                    <Text
                      className="text-[13px] text-light_green-800 w-7"
                      size="txtPoppinsMedium13"
                    >
                      {props?.augonetext}
                    </Text>
                    <Text
                      className="text-[13px] text-light_green-800 w-[22px]"
                      size="txtPoppinsMedium13"
                    >
                      {props?.seponetext}
                    </Text>
                    <Text
                      className="text-[13px] text-light_green-800 w-[27px]"
                      size="txtPoppinsMedium13"
                    >
                      {props?.octonetext}
                    </Text>
                    <Text
                      className="text-[13px] text-light_green-800 w-[29px]"
                      size="txtPoppinsMedium13"
                    >
                      {props?.novonetext}
                    </Text>
                    <Text
                      className="text-[13px] text-light_green-800 w-[26px]"
                      size="txtPoppinsMedium13"
                    >
                      {props?.deconetext}
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

EnergyColumnEight.defaultProps = {
  facilityonetwobutton: "FACILITY 1",
  facilitytwotwobutton: "FACILITY 2",
  facilitythreetwobutton: "FACILITY 3",
  allonebutton: "ALL",
  zipcodeninetext: "3500",
  zipcodetentext: "3000",
  zipcodeeleventext: "2500",
  zipcodetwelvetext: "2000",
  zipcodethirteentext: "1500",
  zipcodefourteentext: "1000",
  fivehundredonetext: "500",
  onehundredonetext: "100",
  janonetext: "JAN",
  febonetext: "FEB",
  maronetext: "MAR",
  apronetext: "APR",
  mayonetext: "MAY",
  junonetext: "JUN",
  julonetext: "JUL",
  augonetext: "AUG",
  seponetext: "SEP",
  octonetext: "OCT",
  novonetext: "NOV",
  deconetext: "DEC",
};

export default EnergyColumnEight;
