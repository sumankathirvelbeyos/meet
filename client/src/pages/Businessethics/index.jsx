import React from "react";

import { CircularProgressbar } from "react-circular-progressbar";
import { useNavigate } from "react-router-dom";

import { Img, Line, List, Text } from "components";

import "react-circular-progressbar/dist/styles.css";

const BusinessethicsPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="common-pointer bg-white-A700 flex flex-col font-poppins items-center justify-start mx-auto p-[49px] md:px-10 sm:px-5 w-full"
        onClick={() => navigate("/dashboard")}
      >
        <div className="flex flex-col md:gap-10 gap-20 items-center justify-start max-w-[1303px] mb-[105px] mx-auto w-full">
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
              BUSINESS ETHICS & LABOUR RIGHTS
            </Text>
            <div
              className="bg-cover bg-no-repeat flex flex-col h-[142px] items-center justify-end mt-[62px] p-6 sm:px-5 w-[15%] md:w-full"
              style={{ backgroundImage: "url('images/img_group22.png')" }}
            >
              <Img
                className="h-[90px] md:h-auto mt-1 object-cover w-[90px]"
                src="images/img_thunderbolt1_9.png"
                alt="thunderboltone"
              />
            </div>
            <Text
              className="mt-[50px] md:text-3xl sm:text-[28px] text-[32px] text-black-900"
              size="txtPoppinsBold32Black900"
            >
              CORRUPTION
            </Text>
            <div className="flex flex-col items-center justify-start mt-[31px] w-[99%] md:w-full">
              <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between w-full">
                <Text
                  className="sm:mt-0 mt-[3px] md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                  size="txtPoppinsLight32"
                >
                  No. of Corruption incidents Identified
                </Text>
                <Text
                  className="mb-[3px] md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                  size="txtPoppinsBold32Black900"
                >
                  0
                </Text>
              </div>
              <Line className="bg-black-900 h-px w-full" />
              <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between mt-[5px] w-full">
                <Text
                  className="sm:mt-0 mt-[3px] md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                  size="txtPoppinsLight32"
                >
                  No. of Corruption incidents Open
                </Text>
                <Text
                  className="mb-[3px] md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                  size="txtPoppinsBold32Black900"
                >
                  0
                </Text>
              </div>
              <Line className="bg-black-900 h-px w-full" />
              <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between mt-[7px] w-full">
                <Text
                  className="sm:mt-0 mt-[3px] md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                  size="txtPoppinsLight32"
                >
                  No. of Corruption incidents Closed
                </Text>
                <Text
                  className="mb-[3px] md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                  size="txtPoppinsBold32Black900"
                >
                  0
                </Text>
              </div>
              <Line className="bg-black-900 h-px mt-0.5 w-full" />
            </div>
            <Text
              className="mt-[97px] md:text-3xl sm:text-[28px] text-[32px] text-black-900"
              size="txtPoppinsBold32Black900"
            >
              LEGAL NOTICES
            </Text>
            <div className="flex flex-col items-start justify-start mt-[26px] w-[99%] md:w-full">
              <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between w-[96%] md:w-full">
                <Text
                  className="sm:mt-0 mt-[3px] md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                  size="txtPoppinsLight32"
                >
                  No. of Legal notices received
                </Text>
                <Text
                  className="mb-[3px] md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                  size="txtPoppinsBold32Black900"
                >
                  1
                </Text>
              </div>
              <Line className="bg-black-900 h-px w-full" />
              <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between mt-[5px] w-[96%] md:w-full">
                <Text
                  className="sm:mt-0 mt-[3px] md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                  size="txtPoppinsLight32"
                >
                  No. of Legal notices resolved
                </Text>
                <Text
                  className="mb-[3px] md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                  size="txtPoppinsBold32Black900"
                >
                  1
                </Text>
              </div>
              <Line className="bg-black-900 h-px w-full" />
            </div>
            <Text
              className="mt-[97px] md:text-3xl sm:text-[28px] text-[32px] text-black-900"
              size="txtPoppinsBold32Black900"
            >
              CHILD LABOUR & FORCED LABOUR
            </Text>
            <div className="flex flex-col items-center justify-start mt-[26px] w-[99%] md:w-full">
              <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between w-full">
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                  size="txtPoppinsLight32"
                >
                  No. of child labour & forced labour cases Identified
                </Text>
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                  size="txtPoppinsBold32Black900"
                >
                  0
                </Text>
              </div>
              <Line className="bg-black-900 h-px mt-[5px] w-full" />
              <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between mt-[5px] w-full">
                <Text
                  className="sm:mt-0 mt-[3px] md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                  size="txtPoppinsLight32"
                >
                  No. of child labour & forced labour cases Open
                </Text>
                <Text
                  className="mb-[3px] md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                  size="txtPoppinsBold32Black900"
                >
                  0
                </Text>
              </div>
              <Line className="bg-black-900 h-px w-full" />
              <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between mt-[7px] w-full">
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                  size="txtPoppinsLight32"
                >
                  No. of child labour & forced labour cases Closed
                </Text>
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                  size="txtPoppinsBold32Black900"
                >
                  0
                </Text>
              </div>
              <Line className="bg-black-900 h-px mt-1.5 w-full" />
            </div>
            <Text
              className="ml-3 md:ml-[0] mt-[91px] md:text-3xl sm:text-[28px] text-[32px] text-black-900"
              size="txtPoppinsBold32Black900"
            >
              SUPPLIER ASSESSMENT
            </Text>
            <List
              className="sm:flex-col flex-row md:gap-10 gap-[103px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center mt-[63px] w-full"
              orientation="horizontal"
            >
              <div className="flex flex-1 flex-col gap-[22px] items-center justify-start w-full">
                <div className="bg-light_green-100 md:h-[188px] h-[261px] p-9 sm:px-5 relative w-full">
                  <div className="!w-[187px] h-[188px] m-auto overflow-visible">
                    <CircularProgressbar
                      className="!w-[187px] h-[188px] m-auto overflow-visible"
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
                    className="absolute h-max inset-[0] justify-center m-auto text-4xl sm:text-[32px] md:text-[34px] text-black-900 w-max"
                    size="txtPoppinsRegular36Black900"
                  >
                    80%
                  </Text>
                </div>
                <Text
                  className="text-2xl md:text-[22px] text-black-900 text-center sm:text-xl w-[88%] sm:w-full"
                  size="txtPoppinsSemiBold24Black900"
                >
                  % of suppliers audited for child labour
                </Text>
              </div>
              <div className="flex flex-1 flex-col gap-[19px] items-center justify-start w-full">
                <div className="bg-light_green-100 md:h-[188px] h-[261px] p-9 sm:px-5 relative w-full">
                  <div className="!w-[187px] h-[188px] m-auto overflow-visible">
                    <CircularProgressbar
                      className="!w-[187px] h-[188px] m-auto overflow-visible"
                      value={70}
                      counterClockwise
                      strokeWidth={17}
                      styles={{
                        trail: { strokeWidth: 17, stroke: "#d9d9d9" },
                        path: {
                          strokeLinecap: "square",
                          height: "100%",
                          transformOrigin: "center",
                          transform: "rotate(252deg)",
                        },
                      }}
                    ></CircularProgressbar>
                  </div>
                  <Text
                    className="absolute h-max inset-[0] justify-center m-auto text-4xl sm:text-[32px] md:text-[34px] text-black-900 w-max"
                    size="txtPoppinsRegular36Black900"
                  >
                    70%
                  </Text>
                </div>
                <Text
                  className="text-2xl md:text-[22px] text-black-900 text-center sm:text-xl w-[88%] sm:w-full"
                  size="txtPoppinsSemiBold24Black900"
                >
                  % of suppliers audited for forced labour
                </Text>
              </div>
              <div className="flex flex-1 flex-col gap-[22px] items-center justify-start w-full">
                <div className="bg-light_green-100 md:h-[188px] h-[261px] p-9 sm:px-5 relative w-full">
                  <div className="!w-[187px] h-[188px] m-auto overflow-visible">
                    <CircularProgressbar
                      className="!w-[187px] h-[188px] m-auto overflow-visible"
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
                    className="absolute h-max inset-[0] justify-center m-auto text-4xl sm:text-[32px] md:text-[34px] text-black-900 w-max"
                    size="txtPoppinsRegular36Black900"
                  >
                    80%
                  </Text>
                </div>
                <Text
                  className="text-2xl md:text-[22px] text-black-900 text-center sm:text-xl w-[88%] sm:w-full"
                  size="txtPoppinsSemiBold24Black900"
                >
                  % of suppliers audited on Business ethics
                </Text>
              </div>
            </List>
          </div>
        </div>
      </div>
    </>
  );
};

export default BusinessethicsPage;
