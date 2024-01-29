import React from "react";

import { Img, Input, Line, List, Text } from "components";

const EmploymentpractisesPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-end justify-start mx-auto p-14 md:px-10 sm:px-5 w-full">
        <div className="flex flex-col items-start justify-start mb-[25px] mr-2 w-[92%] md:w-full">
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
            className="mt-10 text-5xl sm:text-[38px] md:text-[44px] text-cyan-900"
            size="txtPoppinsBold48"
          >
            EMPLOYMENT PRACTICES
          </Text>
          <div className="flex sm:flex-col flex-row gap-[38px] items-center justify-start mt-11 w-[32%] md:w-full">
            <div
              className="bg-cover bg-no-repeat flex flex-col h-[142px] items-center justify-start p-[30px] sm:px-5 w-[41%] sm:w-full"
              style={{ backgroundImage: "url('images/img_group101.png')" }}
            >
              <Img
                className="h-[81px] w-[81px]"
                src="images/img_user.svg"
                alt="user"
              />
            </div>
            <div className="flex flex-col items-start justify-start">
              <Text
                className="bg-clip-text bg-gradient  md:text-5xl text-[75px] text-transparent"
                size="txtPoppinsExtraBold75"
              >
                2800
              </Text>
              <Text
                className="text-2xl md:text-[22px] text-light_green-800 sm:text-xl"
                size="txtPoppinsRegular24"
              >
                Employees
              </Text>
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 gap-[65px] items-center justify-start mt-11 w-[93%] md:w-full">
            <div className="bg-light_green-100 flex flex-col items-center justify-start p-[53px] md:px-10 sm:px-5">
              <Text
                className="text-4xl sm:text-[32px] md:text-[34px] text-light_green-800_01"
                size="txtPoppinsBold36"
              >
                ATTRITION RATE
              </Text>
              <Text
                className="bg-clip-text bg-gradient  mb-4 md:text-5xl text-[75px] text-transparent"
                size="txtPoppinsExtraBold75"
              >
                10%
              </Text>
            </div>
            <div className="md:gap-5 gap-[60px] grid md:grid-cols-1 grid-cols-2 min-h-[auto] w-[56%] md:w-full">
              <div className="bg-gradient  flex flex-col items-center justify-end p-3 w-full">
                <Text
                  className="mt-[11px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                  size="txtPoppinsLight24"
                >
                  NEW HIRE
                </Text>
                <Text
                  className="text-4xl sm:text-[32px] md:text-[34px] text-white-A700"
                  size="txtPoppinsExtraBold36WhiteA700"
                >
                  02
                </Text>
              </div>
              <div className="bg-gradient  flex flex-col items-center justify-end p-[21px] sm:px-5 w-full">
                <Text
                  className="mt-0.5 text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                  size="txtPoppinsLight24"
                >
                  RETIREMENT
                </Text>
                <Text
                  className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                  size="txtPoppinsSemiBold24"
                >
                  01{" "}
                </Text>
              </div>
              <div className="bg-gradient  flex flex-col items-center justify-end p-[11px] w-full">
                <Text
                  className="mt-[9px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                  size="txtPoppinsLight24"
                >
                  TERMINATION
                </Text>
                <Text
                  className="text-4xl sm:text-[32px] md:text-[34px] text-white-A700"
                  size="txtPoppinsExtraBold36WhiteA700"
                >
                  00
                </Text>
              </div>
              <div className="bg-gradient  flex flex-col items-center justify-start p-5 w-full">
                <Text
                  className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                  size="txtPoppinsLight24"
                >
                  RESIGNATION
                </Text>
                <Text
                  className="mb-0.5 text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                  size="txtPoppinsSemiBold24"
                >
                  03{" "}
                </Text>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 gap-[65px] items-center justify-start mt-12 w-[93%] md:w-full">
            <div className="bg-light_green-100 flex flex-col items-center justify-end p-[25px] sm:px-5 w-[39%] md:w-full">
              <div className="flex flex-col items-start justify-start mt-1.5 w-[92%] md:w-full">
                <div className="flex flex-row items-center justify-start w-[97%] md:w-full">
                  <Text
                    className="text-light_green-800 text-xl"
                    size="txtPoppinsExtraBold20"
                  >
                    Gender
                  </Text>
                  <Text
                    className="ml-[99px] text-light_green-800 text-xl"
                    size="txtPoppinsExtraBold20"
                  >
                    Male
                  </Text>
                  <Text
                    className="ml-[35px] text-light_green-800 text-xl"
                    size="txtPoppinsExtraBold20"
                  >
                    Female
                  </Text>
                </div>
                <Line className="bg-black-900 h-px mt-5 w-full" />
                <div className="flex flex-row items-start justify-start mt-[11px] w-[86%] md:w-full">
                  <Text
                    className="mt-[3px] text-black-900 text-xl"
                    size="txtPoppinsLight20"
                  >
                    New Hire
                  </Text>
                  <Text
                    className="ml-[104px] mt-1 text-black-900 text-xl"
                    size="txtPoppinsLight20"
                  >
                    01
                  </Text>
                  <Text
                    className="mb-1 ml-[76px] text-black-900 text-xl"
                    size="txtPoppinsLight20"
                  >
                    01
                  </Text>
                </div>
                <Line className="bg-black-900 h-px mt-[17px] w-full" />
                <div className="flex flex-row items-center justify-start mt-[15px] w-[86%] md:w-full">
                  <Text
                    className="text-black-900 text-xl"
                    size="txtPoppinsLight20"
                  >
                    Retirement
                  </Text>
                  <Text
                    className="ml-[82px] text-black-900 text-xl"
                    size="txtPoppinsLight20"
                  >
                    00
                  </Text>
                  <Text
                    className="ml-[69px] text-black-900 text-xl"
                    size="txtPoppinsLight20"
                  >
                    01
                  </Text>
                </div>
                <Line className="bg-black-900 h-px mt-[17px] w-full" />
                <div className="flex flex-row items-center justify-start mt-[15px] w-[88%] md:w-full">
                  <Text
                    className="text-black-900 text-xl"
                    size="txtPoppinsLight20"
                  >
                    Termination
                  </Text>
                  <Text
                    className="ml-[72px] text-black-900 text-xl"
                    size="txtPoppinsLight20"
                  >
                    00
                  </Text>
                  <Text
                    className="ml-[69px] text-black-900 text-xl"
                    size="txtPoppinsLight20"
                  >
                    00
                  </Text>
                </div>
                <Line className="bg-black-900 h-px mt-[17px] w-full" />
                <div className="flex flex-row items-start justify-start mt-[15px] w-[88%] md:w-full">
                  <Text
                    className="mt-0.5 text-black-900 text-xl"
                    size="txtPoppinsLight20"
                  >
                    Resignation
                  </Text>
                  <Text
                    className="mb-0.5 ml-[75px] text-black-900 text-xl"
                    size="txtPoppinsLight20"
                  >
                    03
                  </Text>
                  <Text
                    className="mb-0.5 ml-[69px] text-black-900 text-xl"
                    size="txtPoppinsLight20"
                  >
                    00
                  </Text>
                </div>
              </div>
            </div>
            <div className="bg-light_green-100 flex flex-col items-center justify-end p-[25px] sm:px-5 w-[56%] md:w-full">
              <div className="flex flex-col items-start justify-start mt-1.5 w-[94%] md:w-full">
                <List
                  className="flex flex-col gap-[16.5px] w-[95%]"
                  orientation="vertical"
                >
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start my-0 w-full">
                    <Text
                      className="text-light_green-800 text-xl"
                      size="txtPoppinsExtraBold20"
                    >
                      <span className="text-light_green-800 font-poppins text-left font-extrabold">
                        Age{" "}
                      </span>
                      <span className="text-light_green-800 font-poppins text-left font-light">
                        (Years)
                      </span>
                    </Text>
                    <Text
                      className="sm:ml-[0] ml-[61px] text-light_green-800 text-xl"
                      size="txtPoppinsExtraBold20"
                    >
                      21-30
                    </Text>
                    <Text
                      className="sm:ml-[0] ml-[30px] text-light_green-800 text-xl"
                      size="txtPoppinsExtraBold20"
                    >
                      31-40
                    </Text>
                    <Text
                      className="sm:ml-[0] ml-[38px] text-light_green-800 text-xl"
                      size="txtPoppinsExtraBold20"
                    >
                      41-50
                    </Text>
                    <Text
                      className="sm:ml-[0] ml-[35px] text-light_green-800 text-xl"
                      size="txtPoppinsExtraBold20"
                    >
                      51-60
                    </Text>
                  </div>
                  <Line className="self-center h-px bg-black-900 w-full" />
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start mr-6 my-0 w-[96%] md:w-full">
                    <Text
                      className="text-black-900 text-xl"
                      size="txtPoppinsLight20"
                    >
                      New Hire
                    </Text>
                    <Text
                      className="sm:ml-[0] ml-[104px] text-black-900 text-xl"
                      size="txtPoppinsLight20"
                    >
                      00
                    </Text>
                    <Text
                      className="sm:ml-[0] ml-[69px] text-black-900 text-xl"
                      size="txtPoppinsLight20"
                    >
                      02
                    </Text>
                    <Text
                      className="sm:ml-[0] ml-[69px] text-black-900 text-xl"
                      size="txtPoppinsLight20"
                    >
                      00
                    </Text>
                    <Text
                      className="sm:ml-[0] ml-[63px] text-black-900 text-xl"
                      size="txtPoppinsLight20"
                    >
                      00
                    </Text>
                  </div>
                  <Line className="self-center h-px bg-black-900 w-full" />
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start mr-[31px] my-0 w-[94%] md:w-full">
                    <Text
                      className="text-black-900 text-xl"
                      size="txtPoppinsLight20"
                    >
                      Retirement
                    </Text>
                    <Text
                      className="sm:ml-[0] ml-[82px] text-black-900 text-xl"
                      size="txtPoppinsLight20"
                    >
                      00
                    </Text>
                    <Text
                      className="sm:ml-[0] ml-[69px] text-black-900 text-xl"
                      size="txtPoppinsLight20"
                    >
                      00
                    </Text>
                    <Text
                      className="sm:ml-[0] ml-[69px] text-black-900 text-xl"
                      size="txtPoppinsLight20"
                    >
                      00
                    </Text>
                    <Text
                      className="sm:ml-[0] ml-[63px] text-black-900 text-xl"
                      size="txtPoppinsLight20"
                    >
                      01
                    </Text>
                  </div>
                  <Line className="self-center h-px bg-black-900 w-full" />
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start mr-6 my-0 w-[96%] md:w-full">
                    <Text
                      className="text-black-900 text-xl"
                      size="txtPoppinsLight20"
                    >
                      Termination
                    </Text>
                    <Text
                      className="sm:ml-[0] ml-[72px] text-black-900 text-xl"
                      size="txtPoppinsLight20"
                    >
                      00
                    </Text>
                    <Text
                      className="sm:ml-[0] ml-[69px] text-black-900 text-xl"
                      size="txtPoppinsLight20"
                    >
                      00
                    </Text>
                    <Text
                      className="sm:ml-[0] ml-[69px] text-black-900 text-xl"
                      size="txtPoppinsLight20"
                    >
                      00
                    </Text>
                    <Text
                      className="sm:ml-[0] ml-[63px] text-black-900 text-xl"
                      size="txtPoppinsLight20"
                    >
                      00
                    </Text>
                  </div>
                  <Line className="self-center h-px bg-black-900 w-full" />
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start mr-6 my-0 w-[96%] md:w-full">
                    <Text
                      className="sm:mt-0 mt-0.5 text-black-900 text-xl"
                      size="txtPoppinsLight20"
                    >
                      Resignation
                    </Text>
                    <Text
                      className="mb-0.5 sm:ml-[0] ml-[75px] text-black-900 text-xl"
                      size="txtPoppinsLight20"
                    >
                      01
                    </Text>
                    <Text
                      className="mb-0.5 sm:ml-[0] ml-[76px] text-black-900 text-xl"
                      size="txtPoppinsLight20"
                    >
                      02
                    </Text>
                    <Text
                      className="mb-0.5 sm:ml-[0] ml-[69px] text-black-900 text-xl"
                      size="txtPoppinsLight20"
                    >
                      00
                    </Text>
                    <Text
                      className="mb-0.5 sm:ml-[0] ml-[63px] text-black-900 text-xl"
                      size="txtPoppinsLight20"
                    >
                      00
                    </Text>
                  </div>
                </List>
              </div>
            </div>
          </div>
          <div className="bg-gradient  flex md:flex-col flex-row md:gap-10 gap-[293px] items-start justify-start mt-[60px] p-3.5 w-[94%] md:w-full">
            <Text
              className="md:ml-[0] ml-[22px] md:mt-0 mt-[5px] md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
              size="txtPoppinsBold32"
            >
              Average Training hours / Employee
            </Text>
            <Text
              className="md:mt-0 mt-[7px] md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
              size="txtPoppinsBold32"
            >
              <span className="text-white-A700 font-poppins text-left font-bold">
                12{" "}
              </span>
              <span className="text-white-A700 font-poppins text-left text-xl font-light">
                hours/Employee
              </span>
            </Text>
          </div>
          <div className="bg-light_green-100 flex flex-col items-center justify-end mt-[60px] p-[26px] sm:px-5 w-[94%] md:w-full">
            <div className="flex flex-col justify-start mt-3.5 w-[92%] md:w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[93%] md:w-full">
                <div className="flex flex-col items-start justify-start md:mt-0 mt-2">
                  <Text
                    className="text-[13px] text-black-900 text-right"
                    size="txtPoppinsLight13"
                  >
                    3000
                  </Text>
                  <Text
                    className="mt-[53px] text-[13px] text-black-900 text-right"
                    size="txtPoppinsLight13"
                  >
                    2500
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[3px] mt-[52px] text-[13px] text-black-900 text-right"
                    size="txtPoppinsLight13"
                  >
                    1500
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[7px] mt-[54px] text-[13px] text-black-900 text-right"
                    size="txtPoppinsLight13"
                  >
                    500
                  </Text>
                  <Text
                    className="h-5 md:ml-[0] ml-[11px] mt-[45px] text-[13px] text-black-900 text-right"
                    size="txtPoppinsLight13"
                  >
                    100
                  </Text>
                </div>
                <Line className="bg-black-900 h-[322px] md:h-px md:ml-[0] ml-[22px] md:w-full w-px" />
                <div className="flex flex-col gap-[7px] items-center justify-start md:ml-[0] ml-[137px] md:mt-0 mt-[133px] w-[9%] md:w-full">
                  <Text
                    className="text-base text-black-900"
                    size="txtPoppinsLight16"
                  >
                    1300 Hrs
                  </Text>
                  <div className="bg-light_green-800 h-[156px] w-full"></div>
                </div>
                <div className="flex flex-col gap-1.5 items-center justify-start ml-4 md:ml-[0] w-[9%] md:w-full">
                  <Text
                    className="text-base text-black-900"
                    size="txtPoppinsLight16"
                  >
                    2800 Hrs
                  </Text>
                  <div className="bg-cyan-900 h-[291px] w-full"></div>
                </div>
                <div className="flex flex-col items-center justify-start ml-24 md:ml-[0] md:mt-0 mt-[203px] w-[9%] md:w-full">
                  <Text
                    className="text-base text-black-900"
                    size="txtPoppinsLight16"
                  >
                    800 Hrs
                  </Text>
                  <div className="bg-light_green-800 h-[94px] w-full"></div>
                </div>
                <div className="flex flex-col gap-2 items-start justify-start ml-3.5 md:ml-[0] md:mt-0 mt-[82px] w-[9%] md:w-full">
                  <Text
                    className="text-base text-black-900"
                    size="txtPoppinsLight16"
                  >
                    1768 Hrs
                  </Text>
                  <div className="bg-cyan-900 h-[207px] w-full"></div>
                </div>
                <div className="flex flex-col items-start justify-start md:ml-[0] ml-[115px] md:mt-0 mt-[123px] w-[9%] md:w-full">
                  <Text
                    className="md:ml-[0] ml-[3px] text-base text-black-900"
                    size="txtPoppinsLight16"
                  >
                    1650 Hrs
                  </Text>
                  <div className="bg-light_green-800 h-[171px] mt-0.5 w-full"></div>
                </div>
                <div className="flex flex-col gap-2 items-start justify-start ml-4 md:ml-[0] md:mt-0 mt-[254px] w-[9%] md:w-full">
                  <Text
                    className="md:ml-[0] ml-[3px] text-base text-black-900"
                    size="txtPoppinsLight16"
                  >
                    300Hrs
                  </Text>
                  <Input
                    name="rectangle701"
                    placeholder=""
                    className="p-0 w-full"
                    wrapClassName="flex h-[34px] w-full"
                    shape="square"
                    color="cyan_900"
                    variant="fill"
                  ></Input>
                </div>
              </div>
              <Line className="bg-black-900 h-px md:ml-[0] ml-[54px] w-[95%]" />
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-end md:ml-[0] ml-[242px] mt-[13px] w-[62%] md:w-full">
                <Text
                  className="text-base text-black-900"
                  size="txtPoppinsLight16"
                >
                  Facility 1
                </Text>
                <Text
                  className="md:ml-[0] ml-[199px] text-base text-black-900"
                  size="txtPoppinsLight16"
                >
                  Facility 2
                </Text>
                <Text
                  className="md:ml-[0] ml-[211px] text-base text-black-900"
                  size="txtPoppinsLight16"
                >
                  Facility 3
                </Text>
              </div>
            </div>
          </div>
          <Text
            className="md:ml-[0] ml-[280px] mt-[31px] text-black-900 text-xl"
            size="txtPoppinsLight20"
          >
            Total Training hours for employee skill development
          </Text>
          <div className="bg-gradient  flex sm:flex-col flex-row md:gap-10 gap-[495px] items-center justify-start mt-[81px] p-3.5 w-[94%] md:w-full">
            <Text
              className="sm:ml-[0] ml-[22px] sm:mt-0 my-[3px] md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
              size="txtPoppinsBold32"
            >
              Parental Leave Availed
            </Text>
            <Text
              className="sm:mt-0 mt-[7px] md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
              size="txtPoppinsBold32"
            >
              <span className="text-white-A700 font-poppins text-left font-bold">
                10{" "}
              </span>
              <span className="text-white-A700 font-poppins text-left text-xl font-light">
                Employees
              </span>
            </Text>
          </div>
          <Text
            className="md:ml-[0] ml-[780px] mt-[62px] text-black-900 text-xl"
            size="txtPoppinsBold20"
          >
            Parental leave availed
          </Text>
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-3 w-[93%] md:w-full">
            <div className="flex flex-col md:gap-10 gap-56 items-start justify-start md:mt-0 mt-14 w-[55%] md:w-full">
              <Text
                className="text-5xl sm:text-[38px] md:text-[44px] text-black-900"
                size="txtPoppinsBold48Black900"
              >
                Employees entitled for parental leave
              </Text>
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                <div className="bg-light_green-100 h-[148px] md:h-[72px] p-[30px] sm:px-5 relative w-[27%] md:w-full">
                  <Text
                    className="absolute right-[24%] text-5xl sm:text-[38px] md:text-[44px] text-light_green-800 top-[20%]"
                    size="txtPoppinsBold48Lightgreen800"
                  >
                    120
                  </Text>
                  <Text
                    className="absolute bottom-[20%] inset-x-[0] mx-auto text-black-900 text-xl w-max"
                    size="txtPoppinsBold20"
                  >
                    FEMALES
                  </Text>
                </div>
                <div className="bg-light_green-100 flex flex-col items-center justify-end ml-4 md:ml-[0] p-[30px] sm:px-5">
                  <Text
                    className="text-5xl sm:text-[38px] md:text-[44px] text-light_green-800"
                    size="txtPoppinsBold48Lightgreen800"
                  >
                    300
                  </Text>
                  <Text
                    className="text-black-900 text-xl"
                    size="txtPoppinsBold20"
                  >
                    MALES
                  </Text>
                </div>
                <Line className="bg-black-900 h-px md:ml-[0] ml-[52px] md:mt-0 my-[73px] w-[36%]" />
              </div>
            </div>
            <div className="flex flex-col items-center justify-start md:mt-0 mt-[66px] w-[13%] md:w-full">
              <div className="h-[503px] relative w-full">
                <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0] w-full">
                  <div className="flex flex-col md:gap-10 gap-[251px] items-center justify-start w-full">
                    <Line className="bg-black-900 h-px w-full" />
                    <Line className="bg-black-900 h-px w-full" />
                  </div>
                </div>
                <Line className="absolute bg-black-900 h-[503px] inset-y-[0] left-[0] my-auto w-px" />
              </div>
              <Line className="bg-black-900 h-px w-full" />
            </div>
            <div className="flex flex-col items-start justify-start md:ml-[0] ml-[26px] w-[31%] md:w-full">
              <div className="flex flex-row gap-4 items-center justify-between w-full">
                <div className="bg-light_green-100 h-[148px] md:h-[72px] p-6 sm:px-5 relative w-[48%]">
                  <Text
                    className="absolute inset-x-[0] mx-auto text-5xl sm:text-[38px] md:text-[44px] text-light_green-800 top-[16%] w-max"
                    size="txtPoppinsBold48Lightgreen800"
                  >
                    10
                  </Text>
                  <Text
                    className="absolute bottom-[24%] right-[17%] text-black-900 text-xl"
                    size="txtPoppinsBold20"
                  >
                    FEMALES
                  </Text>
                </div>
                <div className="bg-light_green-100 flex flex-col items-start justify-start p-6 sm:px-5">
                  <Text
                    className="md:ml-[0] ml-[31px] text-5xl sm:text-[38px] md:text-[44px] text-light_green-800"
                    size="txtPoppinsBold48Lightgreen800"
                  >
                    02
                  </Text>
                  <Text
                    className="mb-3 md:ml-[0] ml-[31px] text-black-900 text-xl"
                    size="txtPoppinsBold20"
                  >
                    MALES
                  </Text>
                </div>
              </div>
              <Text
                className="mt-12 text-black-900 text-xl"
                size="txtPoppinsBold20"
              >
                Rejoined post parental leave
              </Text>
              <div className="flex flex-row gap-4 items-center justify-between mt-4 w-full">
                <div className="bg-light_green-100 h-[148px] md:h-[72px] p-[26px] sm:px-5 relative w-[48%]">
                  <Text
                    className="absolute inset-x-[0] mx-auto text-5xl sm:text-[38px] md:text-[44px] text-light_green-800 top-[18%] w-max"
                    size="txtPoppinsBold48Lightgreen800"
                  >
                    07
                  </Text>
                  <Text
                    className="absolute bottom-1/4 right-[19%] text-black-900 text-xl"
                    size="txtPoppinsBold20"
                  >
                    FEMALES
                  </Text>
                </div>
                <div className="bg-light_green-100 h-[148px] md:h-[72px] p-[26px] sm:px-5 relative w-[48%]">
                  <Text
                    className="absolute right-[29%] text-5xl sm:text-[38px] md:text-[44px] text-light_green-800 top-[18%]"
                    size="txtPoppinsBold48Lightgreen800"
                  >
                    02
                  </Text>
                  <Text
                    className="absolute bottom-[26%] right-[27%] text-black-900 text-xl"
                    size="txtPoppinsBold20"
                  >
                    MALES
                  </Text>
                </div>
              </div>
              <Text
                className="mt-[52px] text-black-900 text-xl"
                size="txtPoppinsBold20"
              >
                Attrition rate
              </Text>
              <div className="flex flex-row gap-4 items-center justify-between mt-[21px] w-full">
                <div className="bg-light_green-100 h-[148px] md:h-[72px] p-[27px] sm:px-5 relative w-[48%]">
                  <Text
                    className="absolute right-[19%] text-5xl sm:text-[38px] md:text-[44px] text-light_green-800 top-[18%]"
                    size="txtPoppinsBold48Lightgreen800"
                  >
                    <span className="text-light_green-800 font-poppins text-left font-bold">
                      70
                    </span>
                    <span className="md:text-3xl sm:text-[28px] text-light_green-800 font-poppins text-left text-[32px] font-bold">
                      %
                    </span>
                  </Text>
                  <Text
                    className="absolute bottom-[24%] inset-x-[0] mx-auto text-black-900 text-xl w-max"
                    size="txtPoppinsBold20"
                  >
                    FEMALES
                  </Text>
                </div>
                <div className="bg-light_green-100 flex flex-col justify-center p-[23px] sm:px-5">
                  <Text
                    className="md:ml-[0] ml-[7px] mt-[3px] text-5xl sm:text-[38px] md:text-[44px] text-light_green-800"
                    size="txtPoppinsBold48Lightgreen800"
                  >
                    <span className="text-light_green-800 font-poppins text-left font-bold">
                      100
                    </span>
                    <span className="md:text-3xl sm:text-[28px] text-light_green-800 font-poppins text-left text-[32px] font-bold">
                      %
                    </span>
                  </Text>
                  <Text
                    className="mb-[13px] md:ml-[0] ml-[21px] mr-[30px] text-black-900 text-xl"
                    size="txtPoppinsBold20"
                  >
                    MALES
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

export default EmploymentpractisesPage;
