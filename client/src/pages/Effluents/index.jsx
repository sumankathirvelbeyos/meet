import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, List, Text } from "components";
import EffluentsColumnone from "components/EffluentsColumnone";

const EffluentsPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="common-pointer bg-white-A700 flex flex-col font-poppins items-end justify-start mx-auto p-14 md:px-10 sm:px-5 w-full"
        onClick={() => navigate("/dashboard")}
      >
        <div className="flex flex-col items-start justify-start mb-1.5 mr-2 w-[92%] md:w-full">
          <div className="flex flex-row md:gap-10 items-start justify-between w-full">
            <Img
              className="common-pointer h-[49px] md:h-auto mt-[21px] object-cover"
              src="images/img_logo1.png"
              alt="logoone"
              onClick={() => navigate("/dashboard")}
            />
            <Img
              className="h-[42px] md:h-auto object-cover w-[42px]"
              src="images/img_user51.png"
              alt="userfiftyone"
            />
          </div>
          <Text
            className="mt-[15px] text-5xl sm:text-[38px] md:text-[44px] text-cyan-900"
            size="txtPoppinsBold48"
          >
            EFFLUENTS
          </Text>
          <div className="flex sm:flex-col flex-row gap-[38px] items-center justify-start mt-11 w-[35%] md:w-full">
            <div
              className="bg-cover bg-no-repeat flex flex-col h-[142px] items-center justify-start p-[26px] sm:px-5 w-[38%] sm:w-full"
              style={{ backgroundImage: "url('images/img_group22.png')" }}
            >
              <Img
                className="h-[90px] md:h-auto object-cover w-[90px]"
                src="images/img_thunderbolt1_3.png"
                alt="thunderboltone"
              />
            </div>
            <div className="flex flex-col items-start justify-start">
              <Text
                className="bg-clip-text bg-gradient  md:text-5xl text-[75px] text-transparent"
                size="txtPoppinsExtraBold75"
              >
                49.5k
              </Text>
              <Text
                className="text-2xl md:text-[22px] text-light_green-800 sm:text-xl"
                size="txtPoppinsRegular24"
              >
                Litres
              </Text>
            </div>
          </div>
          <div className="bg-gradient  flex md:flex-col flex-row md:gap-10 gap-[285px] items-start justify-start mt-[72px] p-[13px] w-[94%] md:w-full">
            <Text
              className="md:ml-[0] ml-[23px] md:mt-0 mt-2 md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
              size="txtPoppinsBold32"
            >
              Water Consumption Intensity
            </Text>
            <Text
              className="md:mt-0 mt-2 md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
              size="txtPoppinsBold32"
            >
              <span className="text-white-A700 font-poppins text-left font-bold">
                30{" "}
              </span>
              <span className="text-white-A700 font-poppins text-left text-xl font-light">
                Litres /MT of production
              </span>
            </Text>
          </div>
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mt-[34px] w-[94%] md:w-full">
            <div className="bg-light_green-100 flex flex-col h-[130px] items-center justify-end p-[25px] w-[200px] md:w-full">
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
            <div className="bg-light_green-100 flex flex-col justify-end md:ml-[0] ml-[52px] p-4">
              <Text
                className="ml-3.5 md:ml-[0] mr-2 mt-4 text-black-900 text-xl"
                size="txtPoppinsLight20"
              >
                Base Consumption
              </Text>
              <Text
                className="md:ml-[0] ml-[53px] mr-6 text-4xl sm:text-[32px] md:text-[34px] text-light_green-800"
                size="txtPoppinsExtraBold36"
              >
                <span className="text-light_green-800 font-poppins text-left font-extrabold">
                  67k{" "}
                </span>
                <span className="md:text-[22px] sm:text-xl text-light_green-800 font-poppins text-left text-2xl font-light">
                  Litres
                </span>
              </Text>
            </div>
            <div className="bg-light_green-100 flex flex-col justify-end md:ml-[0] ml-[50px] p-4">
              <Text
                className="ml-1.5 md:ml-[0] mt-4 text-black-900 text-xl"
                size="txtPoppinsLight20"
              >
                Target Consumption
              </Text>
              <Text
                className="ml-12 md:ml-[0] mr-[22px] text-4xl sm:text-[32px] md:text-[34px] text-light_green-800"
                size="txtPoppinsExtraBold36"
              >
                <span className="text-light_green-800 font-poppins text-left font-extrabold">
                  56K{" "}
                </span>
                <span className="md:text-[22px] sm:text-xl text-light_green-800 font-poppins text-left text-2xl font-light">
                  Litres
                </span>
              </Text>
            </div>
            <div className="bg-light_green-100 h-[124px] md:h-[54px] md:ml-[0] ml-[55px] p-4 relative w-[22%] md:w-full">
              <Text
                className="absolute inset-x-[0] mx-auto text-black-900 text-xl top-[24%] w-max"
                size="txtPoppinsLight20"
              >
                Status
              </Text>
              <Text
                className="absolute bottom-[13%] inset-x-[0] mx-auto text-4xl sm:text-[32px] md:text-[34px] text-light_green-800 w-max"
                size="txtPoppinsExtraBold36"
              >
                +10%
              </Text>
            </div>
          </div>
          <div className="flex md:flex-col flex-row gap-[45px] items-center justify-start mt-[88px] w-[95%] md:w-full">
            <div className="md:gap-5 gap-[60px] grid md:grid-cols-1 grid-cols-2 min-h-[auto] w-[55%] md:w-full">
              <div className="bg-gradient  flex flex-col justify-end p-[21px] sm:px-5 w-full">
                <Text
                  className="mr-3 mt-0.5 text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                  size="txtPoppinsLight24"
                >
                  WATER WITHDRAWN
                </Text>
                <Text
                  className="md:ml-[0] ml-[82px] mr-[54px] text-2xl md:text-[22px] text-white-A700 sm:text-xl w-[150px]"
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
                  className="md:ml-[0] mx-1 text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                  size="txtPoppinsLight24"
                >
                  WATER DISCHARGED
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
              <div className="bg-gradient  flex flex-col justify-start p-[19px] w-full">
                <Text
                  className="md:ml-[0] mx-[22px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                  size="txtPoppinsLight24"
                >
                  WATER RECYCLED
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
                  className="md:ml-[0] mx-3 text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                  size="txtPoppinsLight24"
                >
                  WATER CONSUMED
                </Text>
                <Text
                  className="mb-0.5 md:ml-[0] ml-[73px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                  size="txtPoppinsSemiBold24"
                >
                  <span className="md:text-[34px] sm:text-[32px] text-white-A700 font-poppins text-left text-4xl font-extrabold">
                    3280
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
            <div className="flex flex-col gap-4 justify-start w-[42%] md:w-full">
              <div className="flex flex-row items-center justify-end ml-40 md:ml-[0] w-[67%] md:w-full">
                <Text
                  className="text-base text-black-900 w-[27%] sm:w-full"
                  size="txtPoppinsLight16"
                >
                  Facility 1 (Litres)
                </Text>
                <Text
                  className="ml-[42px] text-base text-black-900 w-[27%] sm:w-full"
                  size="txtPoppinsLight16"
                >
                  Facility 2 (Litres)
                </Text>
                <Text
                  className="ml-[27px] text-base text-black-900 w-[27%] sm:w-full"
                  size="txtPoppinsLight16"
                >
                  Facility 3 (Litres)
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start mr-[21px] w-[96%] md:w-full">
                <Line className="bg-black-900 h-px w-full" />
                <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start mt-[9px] w-[95%] md:w-full">
                  <Text
                    className="text-base text-black-900"
                    size="txtPoppinsLight16"
                  >
                    Water Withdrawn
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[29px] text-black-900 text-xl"
                    size="txtPoppinsBold20"
                  >
                    11 K{" "}
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[86px] text-black-900 text-xl"
                    size="txtPoppinsBold20"
                  >
                    05 K{" "}
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[65px] text-black-900 text-xl"
                    size="txtPoppinsBold20"
                  >
                    11 K{" "}
                  </Text>
                </div>
                <Line className="bg-black-900 h-px mt-2 w-full" />
                <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start mt-[9px] w-[95%] md:w-full">
                  <Text
                    className="text-base text-black-900"
                    size="txtPoppinsLight16"
                  >
                    Water Recycled
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[43px] text-black-900 text-xl"
                    size="txtPoppinsBold20"
                  >
                    17 K
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[83px] text-black-900 text-xl"
                    size="txtPoppinsBold20"
                  >
                    04 K
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[65px] text-black-900 text-xl"
                    size="txtPoppinsBold20"
                  >
                    17 K
                  </Text>
                </div>
                <Line className="bg-black-900 h-px mt-2 w-full" />
                <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start mt-[9px] w-[95%] md:w-full">
                  <Text
                    className="text-base text-black-900"
                    size="txtPoppinsLight16"
                  >
                    Water Discharged
                  </Text>
                  <Text
                    className="ml-6 sm:ml-[0] text-black-900 text-xl"
                    size="txtPoppinsBold20"
                  >
                    21 K
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[82px] text-black-900 text-xl"
                    size="txtPoppinsBold20"
                  >
                    01 K
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[71px] text-black-900 text-xl"
                    size="txtPoppinsBold20"
                  >
                    21 K
                  </Text>
                </div>
                <Line className="bg-black-900 h-px mt-2 w-full" />
                <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start mt-4 w-[95%] md:w-full">
                  <Text
                    className="text-base text-black-900"
                    size="txtPoppinsLight16"
                  >
                    Water Consumed
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[27px] text-black-900 text-xl"
                    size="txtPoppinsBold20"
                  >
                    21 K
                  </Text>
                  <Text
                    className="ml-20 sm:ml-[0] text-black-900 text-xl"
                    size="txtPoppinsBold20"
                  >
                    0.5 K
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[62px] text-black-900 text-xl"
                    size="txtPoppinsBold20"
                  >
                    11 K{" "}
                  </Text>
                </div>
                <Line className="bg-black-900 h-px mt-3.5 w-full" />
              </div>
            </div>
          </div>
          <Text
            className="mt-[83px] text-2xl md:text-[22px] text-cyan-900 sm:text-xl"
            size="txtPoppinsSemiBold24Cyan900"
          >
            Total Water Consumption breakdown by Facility{" "}
          </Text>
          <EffluentsColumnone
            className="flex flex-col items-center justify-start mt-[53px] w-[94%] md:w-full"
            klitrescounter={
              <Text className="absolute font-bold h-full inset-y-[0] my-auto right-[0] md:text-3xl sm:text-[28px] text-[32px] text-light_green-800 text-right">
                <span className="text-light_green-800 font-poppins">21 K</span>
                <span className="text-light_green-800 font-poppins text-xl font-light">
                  Litres
                </span>
              </Text>
            }
            measurement={
              <Text className="absolute font-bold h-full inset-y-[0] my-auto right-[7%] md:text-3xl sm:text-[28px] text-[32px] text-light_green-800 text-right">
                <span className="text-light_green-800 font-poppins">12 </span>
                <span className="text-light_green-800 font-poppins text-xl font-light">
                  Litres
                </span>
              </Text>
            }
            measurement1={
              <Text className="absolute font-bold h-full inset-y-[0] my-auto right-[5%] md:text-3xl sm:text-[28px] text-[32px] text-light_green-800 text-right">
                <span className="text-light_green-800 font-poppins">16 </span>
                <span className="text-light_green-800 font-poppins text-xl font-light">
                  Litres
                </span>
              </Text>
            }
          />
        </div>
      </div>
    </>
  );
};

export default EffluentsPage;
