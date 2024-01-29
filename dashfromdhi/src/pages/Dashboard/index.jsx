import React from "react";
import { Link } from "react-router-dom";
import { Img, List, Text } from "components";
import DashboardColumn from "components/DashboardColumn";
import DashboardColumn1 from "components/DashboardColumn1";
import DashboardColumn2 from "components/DashboardColumn2";
import DashboardColumn3 from "components/DashboardColumn3";
import DashboardColumn4 from "components/DashboardColumn4";
import DashboardColumn5 from "components/DashboardColumn5";
import DashboardColumn6 from "components/DashboardColumn6";
import DashboardColumnOne from "components/DashboardColumnOne";

const DashboardPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-end justify-start mx-auto p-14 md:px-10 sm:px-5 w-full">
        <div className="flex flex-col gap-[23px] items-center justify-start mb-[11px] mr-2 w-[94%] md:w-full">
          <div className="flex flex-col md:gap-10 gap-[61px] items-start justify-start w-[98%] md:w-full">
            <div className="flex flex-row md:gap-10 items-start justify-between w-full">
              <Img
                className="h-12 md:h-auto mt-2.5 object-cover"
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
              className="text-5xl sm:text-[38px] md:text-[44px] text-cyan-900"
              size="txtPoppinsBold48"
            >
              DASHBOARD
            </Text>
          </div>
          <div className="flex flex-col items-center justify-start p-[11px] w-[97%] md:w-full">
            <div className="flex flex-col items-center justify-start mb-[22px] w-[97%] md:w-full">
              <List
                className="sm:flex-col flex-row gap-[42px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center w-full"
                orientation="horizontal"
              >
                 <Link to="/energy">
                  <DashboardColumn className="flex flex-1 flex-col items-center justify-start sm:ml-[0] w-full" />
                 </Link> 
                 <Link to="/emissions">
                  <DashboardColumn1 className="flex flex-1 flex-col items-center justify-start sm:ml-[0] w-full" />
                 </Link> 
                 <Link to="/waste"> 
                 <DashboardColumn2 className="flex flex-1 flex-col items-center justify-start sm:ml-[0] w-full" />
                 </Link> 
                
               <Link to="/water"><DashboardColumn3 className="flex flex-1 flex-col items-center justify-start sm:ml-[0] w-full" />
               </Link> 
              </List>
              <div className="flex md:flex-col flex-row md:gap-[46px] items-center justify-between mt-[50px] w-full">
                <List
                  className="md:flex-1 sm:flex-col flex-row gap-[42px] grid sm:grid-cols-1 grid-cols-2 w-[48%] md:w-full"
                  orientation="horizontal"
                >
                 <Link to="/effluents"> <DashboardColumn4 className="flex flex-col items-center justify-start sm:ml-[0] w-full" />
                 </Link> 
                 <Link to="/equality"><DashboardColumn5 className="flex flex-col items-center justify-start sm:ml-[0] w-full" />
                 </Link> 
                </List>
               <div className="bg-white-A700 border border-light_green-800 border-solid flex md:flex-1 flex-col gap-[9px] items-center justify-end p-[35px] sm:px-5 w-[49%] md:w-full">
               <Link to="/employmentpractises"> <Img
                    className="h-[81px] mt-[18px] w-20"
                    src="images/img_settings.svg"
                    alt="settings"
                  /></Link>
                  <Text
                    className="sm:text-2xl md:text-[26px] text-[28px] text-center text-light_green-800"
                    size="txtPoppinsLight28"
                  >
                    EMPLOYMENT PRACTICES
                  </Text>
                </div>
              </div>
              <div className="flex md:flex-col flex-row md:gap-[46px] items-center justify-between mt-[34px] w-full">
            <DashboardColumn6 className="flex md:flex-1 flex-col items-center justify-start w-[48%] md:w-full" />
        
             <DashboardColumnOne className="flex md:flex-1 flex-col items-center justify-start w-[48%] md:w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
