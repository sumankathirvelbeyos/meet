import React from "react";

import { Img, Text } from "components";

const EqualityPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-end justify-start mx-auto p-14 md:px-10 sm:px-5 w-full">
        <div className="flex flex-col items-start justify-start mb-[38px] mr-2 w-[92%] md:w-full">
          <div className="flex flex-row md:gap-10 items-start justify-between w-full">
            <Img
              className="h-[45px] md:h-auto mt-[21px] object-cover"
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
            className="mt-[21px] text-5xl sm:text-[38px] md:text-[44px] text-cyan-900"
            size="txtPoppinsBold48"
          >
            EQUALITY
          </Text>
          <div
            className="bg-cover bg-no-repeat flex flex-col h-[142px] items-center justify-start mt-[42px] p-[26px] sm:px-5 w-[14%] md:w-full"
            style={{ backgroundImage: "url('images/img_group101.png')" }}
          >
            <Img
              className="h-[90px] md:h-auto object-cover w-[90px]"
              src="images/img_thunderbolt1_8.png"
              alt="thunderboltOne"
            />
          </div>
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mt-[37px] w-[94%] md:w-full">
            <div className="bg-gradient  flex flex-col items-center justify-end p-3">
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
            <div className="bg-gradient  flex flex-col items-center justify-end md:ml-[0] ml-[77px] p-3">
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
            <div className="bg-gradient  flex flex-col items-center justify-end md:ml-[0] ml-[78px] p-3">
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
          <div className="flex md:flex-col flex-row md:gap-10 gap-[77px] items-center justify-start mt-12 w-[61%] md:w-full">
            <div className="bg-gradient  flex flex-col justify-end p-[9px]">
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
            <div className="bg-gradient  flex flex-col items-center justify-end p-3">
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
          <div className="bg-gradient  flex md:flex-col flex-row md:gap-10 gap-[392px] items-center justify-start mt-[61px] p-[13px] w-[94%] md:w-full">
            <Text
              className="md:ml-[0] ml-[23px] md:mt-0 mt-2 md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
              size="txtPoppinsBold32"
            >
              Board Level Women Representation
            </Text>
            <Text
              className="md:mt-0 my-1 md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
              size="txtPoppinsBold32"
            >
              30%{" "}
            </Text>
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between md:ml-[0] ml-[13px] mt-[87px] w-[93%] md:w-full">
            <div className="h-[98px] relative w-[39%] md:w-full">
              <div className="absolute bg-light_green-100 h-[98px] inset-y-[0] my-auto right-[0] w-[38%]"></div>
              <Text
                className="absolute bottom-[0] left-[0] text-2xl md:text-[22px] text-black-900 sm:text-xl w-[79%] sm:w-full"
                size="txtPoppinsBold24"
              >
                No.of discrimination incidents reported
              </Text>
              <Text
                className="absolute bottom-[15%] right-[14%] sm:text-4xl md:text-[38px] text-[40px] text-light_green-800"
                size="txtPoppinsBold40"
              >
                01
              </Text>
            </div>
            <div className="md:h-24 h-[98px] relative w-[42%] md:w-full">
              <div className="absolute bg-light_green-100 flex flex-col h-full inset-y-[0] items-center justify-end my-auto p-[15px] right-[0]">
                <Text
                  className="mt-1.5 sm:text-4xl md:text-[38px] text-[40px] text-light_green-800"
                  size="txtPoppinsBold40"
                >
                  01
                </Text>
              </div>
              <Text
                className="absolute bottom-[0] left-[0] text-2xl md:text-[22px] text-black-900 sm:text-xl w-3/4 sm:w-full"
                size="txtPoppinsBold24"
              >
                No.of discrimination incidents resolved
              </Text>
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start md:ml-[0] ml-[13px] mt-[42px] w-[93%] md:w-full">
            <Text
              className="md:mt-0 mt-[13px] text-2xl md:text-[22px] text-black-900 sm:text-xl w-1/4 sm:w-full"
              size="txtPoppinsBold24"
            >
              No.of Harassment incidents reported
            </Text>
            <div className="bg-light_green-100 flex flex-col items-end justify-end p-[15px]">
              <Text
                className="mr-[31px] mt-1.5 sm:text-4xl md:text-[38px] text-[40px] text-light_green-800"
                size="txtPoppinsBold40"
              >
                00
              </Text>
            </div>
            <Text
              className="md:ml-[0] ml-[222px] md:mt-0 mt-[13px] text-2xl md:text-[22px] text-black-900 sm:text-xl w-[26%] sm:w-full"
              size="txtPoppinsBold24"
            >
              No.of Harassment incidents action taken
            </Text>
            <Text
              className="bg-light_green-100 h-[98px] justify-center ml-4 md:ml-[0] pb-[15px] pt-[22px] sm:px-5 px-[35px] sm:text-4xl md:text-[38px] text-[40px] text-light_green-800 w-40"
              size="txtPoppinsBold40"
            >
              00
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default EqualityPage;
