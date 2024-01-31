import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, Text } from "components";

const EqualityPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-start mx-auto p-[49px] md:px-10 sm:px-5 w-full">
        <div className="flex flex-col gap-9 items-center justify-start max-w-[1303px] mb-[45px] mx-auto w-full">
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
          <div className="flex flex-col items-start justify-start w-[87%] md:w-full">
            <Text
              className="text-5xl sm:text-[38px] md:text-[44px] text-cyan-900"
              size="txtPoppinsBold48"
            >
              EQUALITY
            </Text>
            <div
              className="bg-cover bg-no-repeat flex flex-col h-[142px] items-center justify-start mt-[42px] p-[26px] sm:px-5 w-[15%] md:w-full"
              style={{ backgroundImage: "url('images/img_group22.png')" }}
            >
              <Img
                className="h-[90px] md:h-auto object-cover w-[90px]"
                src="images/img_thunderbolt1_8.png"
                alt="thunderboltone"
              />
            </div>
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-[37px] w-full">
              <div className="bg-gradient  flex md:flex-1 flex-col items-center justify-end p-3 w-[330px] md:w-full">
                <Text
                  className="mt-[11px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                  size="txtPoppinsLight24"
                >
                  MALE EMPLOYEES
                </Text>
                <Text
                  className="text-4xl sm:text-[32px] md:text-[34px] text-white-A700"
                  size="txtPoppinsExtraBold36WhiteA700"
                >
                  1882
                </Text>
              </div>
              <div className="bg-gradient  flex md:flex-1 flex-col items-center justify-end p-3 w-[330px] md:w-full">
                <Text
                  className="mt-[11px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                  size="txtPoppinsLight24"
                >
                  FEMALE EMPLOYEES
                </Text>
                <Text
                  className="text-4xl sm:text-[32px] md:text-[34px] text-white-A700"
                  size="txtPoppinsExtraBold36WhiteA700"
                >
                  893
                </Text>
              </div>
              <div className="bg-gradient  flex md:flex-1 flex-col items-center justify-end p-3 w-[330px] md:w-full">
                <Text
                  className="mt-[11px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                  size="txtPoppinsLight24"
                >
                  MALE TO FEMALE RATIO
                </Text>
                <Text
                  className="text-4xl sm:text-[32px] md:text-[34px] text-white-A700"
                  size="txtPoppinsExtraBold36WhiteA700"
                >
                  2 : 1
                </Text>
              </div>
            </div>
            <div className="flex md:flex-col flex-row md:gap-10 gap-[55px] items-center justify-start mt-12 w-full">
              <div className="bg-gradient  flex md:flex-1 flex-col justify-end p-[9px] w-[330px] md:w-full">
                <Text
                  className="md:ml-[0] ml-[25px] mr-[29px] mt-[13px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                  size="txtPoppinsLight24"
                >
                  GENDER PAY GAP (M:F)
                </Text>
                <Text
                  className="md:ml-[0] ml-[100px] mr-[127px] text-4xl sm:text-[32px] md:text-[34px] text-white-A700"
                  size="txtPoppinsExtraBold36WhiteA700"
                >
                  1.2 : 1
                </Text>
              </div>
              <div className="bg-gradient  flex md:flex-1 flex-col items-center justify-end p-3 w-[330px] md:w-full">
                <Text
                  className="mt-[11px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                  size="txtPoppinsLight24"
                >
                  PERSON WITH DISABILITY
                </Text>
                <Text
                  className="text-4xl sm:text-[32px] md:text-[34px] text-white-A700"
                  size="txtPoppinsExtraBold36WhiteA700"
                >
                  12
                </Text>
              </div>
            </div>
            <div className="bg-gradient  flex sm:flex-col flex-row md:gap-10 items-center justify-between mt-[61px] p-[13px] w-full">
              <Text
                className="sm:ml-[0] ml-[23px] sm:mt-0 mt-2 md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                size="txtPoppinsBold32"
              >
                Board Level Women Representation
              </Text>
              <Text
                className="mr-[35px] sm:mt-0 my-1 md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                size="txtPoppinsBold32"
              >
                30%{" "}
              </Text>
            </div>
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between md:ml-[0] ml-[13px] mt-[87px] w-[99%] md:w-full">
              <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-evenly w-[39%] md:w-full">
                <Text
                  className="text-2xl md:text-[22px] text-black-900 sm:text-xl w-[63%] sm:w-full"
                  size="txtPoppinsBold24"
                >
                  No.of discrimination incidents reported
                </Text>
                <div className="bg-light_green-100 flex flex-col items-center justify-end p-[15px] w-[123px] sm:w-full">
                  <Text
                    className="mt-1.5 sm:text-4xl md:text-[38px] text-[40px] text-light_green-800"
                    size="txtPoppinsBold40"
                  >
                    01
                  </Text>
                </div>
              </div>
              <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-evenly w-[42%] md:w-full">
                <Text
                  className="text-2xl md:text-[22px] text-black-900 sm:text-xl w-[66%] sm:w-full"
                  size="txtPoppinsBold24"
                >
                  No.of discrimination incidents resolved
                </Text>
                <div className="bg-light_green-100 flex flex-col items-center justify-end p-[15px] w-[123px] sm:w-full">
                  <Text
                    className="mt-1.5 sm:text-4xl md:text-[38px] text-[40px] text-light_green-800"
                    size="txtPoppinsBold40"
                  >
                    01
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between md:ml-[0] ml-[13px] mt-[42px] w-[99%] md:w-full">
              <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-evenly w-[39%] md:w-full">
                <Text
                  className="text-2xl md:text-[22px] text-black-900 sm:text-xl w-[63%] sm:w-full"
                  size="txtPoppinsBold24"
                >
                  No.of Harassment incidents reported
                </Text>
                <div className="bg-light_green-100 flex flex-col items-end justify-end p-[15px] w-[123px] sm:w-full">
                  <Text
                    className="mr-[23px] mt-1.5 sm:text-4xl md:text-[38px] text-[40px] text-light_green-800"
                    size="txtPoppinsBold40"
                  >
                    00
                  </Text>
                </div>
              </div>
              <div className="flex sm:flex-col flex-row gap-4 items-center justify-between px-3 w-[42%] md:w-full">
                <Text
                  className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                  size="txtPoppinsBold24"
                >
                  No.of Harassment incidents action taken
                </Text>
                <Text
                  className="bg-light_green-100 h-[98px] justify-center pb-[15px] pr-[35px] pt-[22px] sm:px-5 px-[35px] sm:text-4xl md:text-[38px] text-[40px] text-light_green-800 w-[123px]"
                  size="txtPoppinsBold40"
                >
                  00
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EqualityPage;
