import React from "react";

import { Img, List, Text } from "components";

const DashboardColumnTwo = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-start w-full">
          <List
            className="sm:flex-col flex-row gap-[46px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center w-full"
            orientation="horizontal"
          >
            <div className="flex flex-1 flex-col items-center justify-start sm:ml-[0] w-full">
              <div
                className="common-pointer bg-white-A700 border border-light_green-800 border-solid flex flex-col gap-[9px] items-center justify-end p-[38px] sm:px-5 w-full"
                onClick={props?.onClick5}
              >
                <Img
                  className="h-[90px] md:h-auto mt-[9px] object-cover w-[90px]"
                  src="images/img_thunderbolt1.png"
                  alt="thunderboltOne"
                />
                <Text
                  className="text-2xl md:text-[22px] text-light_green-800 sm:text-xl"
                  size="txtPoppinsLight24Lightgreen800"
                >
                  {props?.energytext}
                </Text>
              </div>
            </div>
            <div className="flex flex-1 flex-col items-center justify-start sm:ml-[0] w-full">
              <div
                className="common-pointer bg-white-A700 border border-light_green-800 border-solid flex flex-col gap-[7px] items-center justify-end p-10 sm:px-5 w-full"
                onClick={props?.onClick4}
              >
                <Img
                  className="h-[90px] md:h-auto mt-[7px] object-cover w-[90px]"
                  src="images/img_thunderbolt1_90x90.png"
                  alt="thunderboltOne"
                />
                <Text
                  className="text-2xl md:text-[22px] text-light_green-800 sm:text-xl"
                  size="txtPoppinsLight24Lightgreen800"
                >
                  {props?.emissionstext}
                </Text>
              </div>
            </div>
            <div className="flex flex-1 flex-col items-center justify-start sm:ml-[0] w-full">
              <div
                className="common-pointer bg-white-A700 border border-light_green-800 border-solid flex flex-col gap-[7px] items-center justify-end p-10 sm:px-5 w-full"
                onClick={props?.onClick3}
              >
                <Img
                  className="h-[90px] md:h-auto mt-[7px] object-cover w-[90px]"
                  src="images/img_thunderbolt1_1.png"
                  alt="thunderboltOne"
                />
                <Text
                  className="text-2xl md:text-[22px] text-light_green-800 sm:text-xl"
                  size="txtPoppinsLight24Lightgreen800"
                >
                  {props?.wastetext}
                </Text>
              </div>
            </div>
            <div className="flex flex-1 flex-col items-center justify-start sm:ml-[0] w-full">
              <div
                className="common-pointer bg-white-A700 border border-light_green-800 border-solid flex flex-col gap-[7px] items-center justify-end p-10 sm:px-5 w-full"
                onClick={props?.onClick2}
              >
                <Img
                  className="h-[90px] md:h-auto mt-[7px] object-cover w-[90px]"
                  src="images/img_thunderbolt1_2.png"
                  alt="thunderboltOne"
                />
                <Text
                  className="text-2xl md:text-[22px] text-light_green-800 sm:text-xl"
                  size="txtPoppinsLight24Lightgreen800"
                >
                  {props?.watertext}
                </Text>
              </div>
            </div>
          </List>
          <div className="flex md:flex-col flex-row md:gap-[46px] items-center justify-between mt-[31px] w-full">
            <List
              className="md:flex-1 sm:flex-col flex-row gap-[46px] grid sm:grid-cols-1 grid-cols-2 w-[48%] md:w-full"
              orientation="horizontal"
            >
              <div className="flex flex-col items-center justify-start sm:ml-[0] w-full">
                <div
                  className="common-pointer bg-white-A700 border border-light_green-800 border-solid flex flex-col gap-[7px] items-center justify-end p-10 sm:px-5 w-full"
                  onClick={props?.onClick}
                >
                  <Img
                    className="h-[90px] md:h-auto mt-[7px] object-cover w-[90px]"
                    src="images/img_thunderbolt1_3.png"
                    alt="thunderboltOne"
                  />
                  <Text
                    className="text-2xl md:text-[22px] text-light_green-800 sm:text-xl"
                    size="txtPoppinsLight24Lightgreen800"
                  >
                    {props?.effluentstext}
                  </Text>
                </div>
              </div>
              <div className=" common-pointer flex flex-col items-center justify-start sm:ml-[0] w-full"
             onClick={props?.onClick8}        >
                <div className="bg-white-A700 border border-light_green-800 border-solid flex flex-col gap-[9px] items-center justify-start p-[43px] md:px-10 sm:px-5 w-full">
                  <Img
                    className="h-[90px] md:h-auto object-cover w-[90px]"
                    src="images/img_thunderbolt1_4.png"
                    alt="thunderboltOne"
                  />
                  <Text
                    className="text-2xl md:text-[22px] text-center text-light_green-800 sm:text-xl"
                    size="txtPoppinsLight24Lightgreen800"
                  >
                    {props?.equalitytext}
                  </Text>
                </div>
              </div>
            </List>
            <div
              className="common-pointer bg-white-A700 border border-light_green-800 border-solid flex md:flex-1 flex-col gap-2 items-center justify-end p-[42px] md:px-10 sm:px-5 w-[48%] md:w-full"
              onClick={props?.onClick1}
            >
              <Img
                className="h-[81px] mt-[11px] w-20"
                src="images/img_settings.svg"
                alt="settings"
              />
              <Text
                className="text-2xl md:text-[22px] text-center text-light_green-800 sm:text-xl"
                size="txtPoppinsLight24Lightgreen800"
              >
                {props?.employmentpracticestext}
              </Text>
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-[46px] items-center justify-between mt-[34px] w-full">
            <div className="common-pointer flex md:flex-1 flex-col items-center justify-start w-[48%] md:w-full"
             onClick={props?.onClickh} >
              <div className="bg-white-A700 border border-light_green-800 border-solid flex flex-col gap-[11px] items-center justify-start p-[42px] md:px-10 sm:px-5 w-full">
                <Img
                  className="h-[90px] md:h-auto object-cover w-[90px]"
                  src="images/img_thunderbolt1_5.png"
                  alt="thunderboltOne"
                />
                <Text
                  className="text-2xl md:text-[22px] text-center text-light_green-800 sm:text-xl"
                  size="txtPoppinsLight24Lightgreen800"
                >
                  {props?.healthsafetytext}
                </Text>
              </div>
            </div>
            <div className="common-pointer flex md:flex-1 flex-col items-center justify-start w-[48%] md:w-full"
             onClick={props?.onClickb}>
              <div className="bg-white-A700 border border-light_green-800 border-solid flex flex-col gap-1.5 items-center justify-end p-[41px] md:px-10 sm:px-5 w-full">
                <Img
                  className="h-[90px] md:h-auto mt-1.5 object-cover w-[90px]"
                  src="images/img_thunderbolt1_6.png"
                  alt="thunderboltOne_One"
                />
                <Text
                  className="text-2xl md:text-[22px] text-center text-light_green-800 sm:text-xl"
                  size="txtPoppinsLight24Lightgreen800"
                >
                  {props?.businessethicstext}
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

DashboardColumnTwo.defaultProps = {
  energytext: "ENERGY",
  emissionstext: "EMISSIONS",
  wastetext: "WASTE",
  watertext: "WATER",
  effluentstext: "EFFLUENTS",
  equalitytext: "EQUALITY",
  employmentpracticestext: "EMPLOYMENT PRACTICES",
  healthsafetytext: "HEALTH & SAFETY",
  businessethicstext: "BUSINESS ETHICS & LABOUR RIGHTS",
};

export default DashboardColumnTwo;
