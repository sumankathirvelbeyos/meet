import React from "react";

import { CircularProgressbar } from "react-circular-progressbar";
import { useNavigate } from "react-router-dom";

import { Img, Text } from "components";

import "react-circular-progressbar/dist/styles.css";

const HealthsafteyPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-start mx-auto p-[49px] md:px-10 sm:px-5 w-full">
        <div className="flex flex-col md:gap-10 gap-24 items-center justify-start max-w-[1303px] mb-[98px] mx-auto w-full">
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
              className="text-5xl sm:text-[38px] md:text-[44px] text-cyan-900"
              size="txtPoppinsBold48"
            >
              HEALTH & SAFETY
            </Text>
            <div
              className="bg-cover bg-no-repeat flex flex-col h-[142px] items-center justify-start mt-11 p-[26px] sm:px-5 w-[15%] md:w-full"
              style={{ backgroundImage: "url('images/img_group22.png')" }}
            >
              <Img
                className="h-[90px] md:h-auto object-cover w-[90px]"
                src="images/img_thunderbolt1_7.png"
                alt="thunderboltone"
              />
            </div>
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-11 w-full">
              <div className="bg-light_green-100 flex md:flex-1 flex-col gap-[18px] items-center justify-end p-[22px] sm:px-5 w-[450px] md:w-full">
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
              <div className="flex md:flex-1 flex-col items-center justify-start w-[56%] md:w-full">
                <div className="flex flex-col gap-[25px] h-full items-center justify-start w-full">
                  <div className="flex md:flex-col flex-row gap-6 items-center justify-between w-full">
                    <div className="bg-gradient  flex flex-1 flex-col justify-start p-[19px] w-full items-center justify-end p-3 w-[324px] md:w-full">
                      <Text
                        className="mt-[11px] text-white-A700 text-xl"
                        size="txtPoppinsLight20WhiteA700"
                      >
                        WORK RELATED ILLNESS
                      </Text>
                      <Text
                        className="text-4xl sm:text-[32px] md:text-[34px] text-white-A700"
                        size="txtPoppinsExtraBold36WhiteA700"
                      >
                        00
                      </Text>
                    </div>
                    <div className="bg-gradient  flex flex-1 flex-col justify-start p-[19px] w-full items-center justify-end p-[21px] sm:px-5 w-[324px] md:w-full">
                      <Text
                        className="mt-0.5 text-white-A700 text-xl"
                        size="txtPoppinsLight20WhiteA700"
                      >
                        WORK RELATED INJURY
                      </Text>
                      <Text
                        className="font-extrabold h-9 mt-1 md:text-[22px] text-[28px] text-white-A700 sm:text-xl"
                        size="txtPoppinsSemiBold24"
                      >
                        01{" "}
                      </Text>
                    </div>
                  </div>
                  <div className="flex md:flex-col flex-row gap-[25px] items-center justify-between w-full">
                    <div className="bg-gradient  flex flex-1 flex-col justify-start p-[19px] w-full items-center justify-end p-[13px] w-[324px] md:w-full">
                      <Text
                        className="mt-[7px] text-center text-white-A700 text-xl"
                        size="txtPoppinsLight20WhiteA700"
                      >
                        WORK RELATED FATALITY
                      </Text>
                      <Text
                        className="text-4xl sm:text-[32px] md:text-[34px] text-white-A700"
                        size="txtPoppinsExtraBold36WhiteA700"
                      >
                        00
                      </Text>
                    </div>
                    <div className="bg-gradient  flex flex-1 flex-col justify-start p-[19px] w-full items-center justify-end p-[13px] w-[324px] md:w-full">
                      <Text
                        className="mt-[7px] text-white-A700 text-xl"
                        size="txtPoppinsLight20WhiteA700"
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
            </div>
            <div className="bg-gradient  flex sm:flex-col flex-row md:gap-10 items-start justify-between mt-12 p-[15px] w-full">
              <Text
                className="sm:ml-[0] ml-[21px] sm:mt-0 mt-[5px] md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                size="txtPoppinsBold32"
              >
                Average Overtime/Person
              </Text>
              <Text
                className="mr-[31px] sm:mt-0 mt-[5px] md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
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
            <div className="flex md:flex-col flex-row gap-[11px] items-center justify-between ml-1 md:ml-[0] mt-[61px] w-full">
              <Text
                className="sm:text-2xl md:text-[26px] text-[28px] text-light_green-800_01 w-[554px]"
                size="txtPoppinsBold28"
              >
                No. Employees covered under medical insurance and schemes
              </Text>
              <div className="bg-light_green-100 flex md:flex-1 flex-col items-end justify-end p-[5px] w-[405px] md:w-full">
                <Text
                  className="bg-clip-text bg-gradient1  mr-[104px] mt-1.5 md:text-5xl text-[75px] "
                  size="txtPoppinsExtraBold75"
                >
                  2100
                </Text>
              </div>
            </div>
            <div className="flex md:flex-col flex-row gap-3 items-center justify-between ml-1 md:ml-[0] mt-[38px] w-full">
              <Text
                className="sm:text-2xl md:text-[26px] text-[28px] text-light_green-800_01"
                size="txtPoppinsBold28"
              >
                No. of employees benefited from medical insurance and schemes
              </Text>
              <div className="bg-light_green-100 flex md:flex-1 flex-col items-end justify-start p-[5px] w-[545px] md:w-full">
                <Text
                  className="bg-clip-text bg-gradient1  mb-[5px] mr-[120px] md:text-5xl text-[75px]"
                  size="txtPoppinsExtraBold75"
                >
                  229
                </Text>
              </div>
            </div>
            <div className="flex md:flex-col flex-row md:gap-10 gap-20 items-start justify-start mt-[104px] w-[90%] md:w-full">
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
      </div>
    </>
  );
};

export default HealthsafteyPage;
