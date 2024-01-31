import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, List, Text } from "components";
import DashboardColumnTwo from "components/DashboardColumnTwo";

const DashboardPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-start mx-auto p-[49px] md:px-10 sm:px-5 w-full">
        <div className="flex flex-col gap-[23px] items-center justify-start max-w-[1303px] mx-auto w-full">
          <div className="flex flex-col md:gap-10 gap-[68px] justify-start w-full">
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
                alt="userFiftyOne"
              />
            </div>
            <Text
              className="md:ml-[0] ml-[97px] text-5xl sm:text-[38px] md:text-[44px] text-cyan-900"
              size="txtPoppinsBold48"
            >
              DASHBOARD
            </Text>
          </div>
          <div className="flex flex-col items-center justify-start p-2.5 w-[92%] md:w-full">
            <DashboardColumnTwo
              className="flex flex-col gap-[46px] h-[775px] md:h-auto items-start justify-start max-w-[1175px] mb-[67px] p-[21px] sm:px-5 w-full"
              onClick={() => navigate("/effluents")}
              onClick1={() => navigate("/employmentpractises")}
              onClick2={() => navigate("/water")}
              onClick3={() => navigate("/waste")}
              onClick4={() => navigate("/emissions")}
              onClick5={() => navigate("/energy")}
              onClickh={() => navigate("/healthsaftey")}
              onClickb={() => navigate("/businessethics")}
              onClick8={() => navigate("/equality")}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
