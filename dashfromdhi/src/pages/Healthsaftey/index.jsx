import React from "react";

import { CircularProgressbar } from "react-circular-progressbar";

import { Img, List, Text } from "components";

import "react-circular-progressbar/dist/styles.css";

const HealthsafteyPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-end justify-start mx-auto p-14 md:px-10 sm:px-5 w-full">
        <div className="flex flex-col items-start justify-start mb-[17px] mr-2 w-[92%] md:w-full">
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
            HEALTH & SAFETY
          </Text>
          <div className="flex md:flex-col flex-row md:gap-10 gap-[65px] items-end justify-start mt-11 w-[93%] md:w-full">
            <div className="flex flex-col gap-11 items-start justify-start w-[39%] md:w-full">
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[142px] items-center justify-start p-[26px] sm:px-5 w-[37%] md:w-full"
                style={{ backgroundImage: "url('images/img_group101.png')" }}
              >
                <Img
                  className="h-[90px] md:h-auto object-cover w-[90px]"
                  src="images/img_thunderbolt1_7.png"
                  alt="thunderboltOne"
                />
              </div>
              <div className="bg-light_green-100 flex flex-col gap-[18px] items-center justify-end p-[22px] sm:px-5 w-full">
                <Text
                  className="mt-[11px] text-4xl sm:text-[32px] md:text-[34px] text-center text-light_green-800_01"
                  size="txtPoppinsBold36"
                >
                  <span className="text-light_green-800_01 font-poppins font-bold">
                    <>
                      LTI <br />
                    </>
                  </span>
                  <span className="md:text-[22px] sm:text-xl text-light_green-800_01 font-poppins text-2xl font-light">
                    (Lost Time to Injury in Hrs)
                  </span>
                </Text>
                <Text
                  className="bg-clip-text bg-gradient  md:text-5xl text-[75px] text-transparent"
                  size="txtPoppinsExtraBold75"
                >
                  10
                </Text>
              </div>
            </div>
            <div className="flex flex-col gap-[25px] items-center justify-start md:mt-0 mt-[186px] w-[56%] md:w-full">
              <div className="flex md:flex-col flex-row gap-6 items-center justify-between w-full">
                <div className="bg-gradient  flex flex-col items-center justify-end p-3">
                  <Text
                    className="mt-[11px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                    size="txtPoppinsLight24"
                  >
                    WORK RELATED ILLNESS
                  </Text>
                  <Text
                    className="h-12 text-4xl sm:text-[32px] md:text-[34px] text-white-A700"
                    size="txtPoppinsExtraBold36WhiteA700"
                  >
                    00
                  </Text>
                </div>
                <div className="bg-gradient  flex flex-col items-center justify-center p-5">
                  <Text
                    className="mt-[3px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                    size="txtPoppinsLight24"
                  >
                    WORK RELATED INJURY
                  </Text>
                  <Text
                    className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                    size="txtPoppinsSemiBold24"
                  >
                    01{" "}
                  </Text>
                </div>
              </div>
              <div className="flex md:flex-col flex-row gap-[25px] items-center justify-between w-full">
                <div className="bg-gradient  flex flex-col justify-end p-[13px]">
                  <Text
                    className="mt-[7px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                    size="txtPoppinsLight24"
                  >
                    WORK RELATED FATALITY
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[120px] mr-[106px] text-4xl sm:text-[32px] md:text-[34px] text-white-A700"
                    size="txtPoppinsExtraBold36WhiteA700"
                  >
                    00
                  </Text>
                </div>
                <div className="bg-gradient  flex flex-col items-center justify-end p-[13px]">
                  <Text
                    className="mt-[7px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                    size="txtPoppinsLight24"
                  >
                    HEALTH SCREENING
                  </Text>
                  <Text
                    className="text-4xl sm:text-[32px] md:text-[34px] text-white-A700"
                    size="txtPoppinsExtraBold36WhiteA700"
                  >
                    2195
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gradient  flex md:flex-col flex-row md:gap-10 gap-[444px] items-start justify-start mt-12 p-[15px] w-[94%] md:w-full">
            <Text
              className="md:ml-[0] ml-[21px] md:mt-0 mt-[5px] md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
              size="txtPoppinsBold32"
            >
              Average Overtime/Person
            </Text>
            <Text
              className="md:mt-0 mt-[5px] md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
              size="txtPoppinsBold32"
            >
              <span className="text-white-A700 font-poppins text-left font-bold">
                15{" "}
              </span>
              <span className="text-white-A700 font-poppins text-left text-xl font-light">
                Hours /month
              </span>
            </Text>
          </div>
          <List
            className="flex flex-col gap-[38px] ml-1 md:ml-[0] mt-[61px] w-[93%]"
            orientation="vertical"
          >
            <div className="md:h-[129px] h-[130px] relative w-full">
              <div className="absolute bg-light_green-100 flex flex-col h-full inset-y-[0] items-end justify-end my-auto p-[5px] right-[0]">
                <Text
                  className="bg-clip-text bg-gradient  mr-[205px] mt-1.5 md:text-5xl text-[75px] text-transparent"
                  size="txtPoppinsExtraBold75"
                >
                  2100
                </Text>
              </div>
              <Text
                className="absolute bottom-[0] left-[0] sm:text-2xl md:text-[26px] text-[28px] text-light_green-800_01 w-[46%] sm:w-full"
                size="txtPoppinsBold28"
              >
                No. Employees covered under medical insurance and schemes
              </Text>
            </div>
            <div className="md:h-32 h-[130px] relative w-full">
              <div className="absolute bg-light_green-100 flex flex-col h-full inset-y-[0] items-end justify-start my-auto p-[5px] right-[0]">
                <Text
                  className="bg-clip-text bg-gradient  mb-[5px] mr-[220px] md:text-5xl text-[75px] text-transparent"
                  size="txtPoppinsExtraBold75"
                >
                  229
                </Text>
              </div>
              <Text
                className="absolute bottom-[0] left-[0] sm:text-2xl md:text-[26px] text-[28px] text-light_green-800_01 w-[46%] sm:w-full"
                size="txtPoppinsBold28"
              >
                No. of employees benefited from medical insurance and schemes
              </Text>
            </div>
          </List>
          <div className="flex md:flex-col flex-row md:gap-10 gap-20 items-start justify-start mt-[104px] w-[84%] md:w-full">
            <div className="bg-light_green-100 md:h-[285px] h-[397px] p-[55px] md:px-10 sm:px-5 relative w-[46%] md:w-full">
              <div className="!w-[285px] h-[285px] m-auto overflow-visible">
                <CircularProgressbar
                  className="!w-[285px] h-[285px] m-auto overflow-visible"
                  value={87}
                  counterClockwise
                  strokeWidth={17}
                  styles={{
                    trail: { strokeWidth: 17, stroke: "#d9d9d9" },
                    path: {
                      strokeLinecap: "square",
                      height: "100%",
                      transformOrigin: "center",
                      transform: "rotate(225deg)",
                      stroke: "#448e1f",
                    },
                  }}
                ></CircularProgressbar>
              </div>
              <Text
                className="absolute h-max inset-[0] justify-center m-auto text-5xl sm:text-[38px] md:text-[44px] text-black-900 w-max"
                size="txtPoppinsRegular48"
              >
                80%
              </Text>
            </div>
            <Text
              className="md:mt-0 mt-[115px] text-5xl sm:text-[38px] md:text-[44px] text-black-900"
              size="txtPoppinsBold48Black900"
            >
              % of Employees trained in safety{" "}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default HealthsafteyPage;
