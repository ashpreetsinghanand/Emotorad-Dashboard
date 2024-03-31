import React from "react";
import Searchbar from "./Searchbar";
import BodyHeading from "./BodyHeading";
import Sidebar from "./Sidebar/Sidebar";

const DashboardPageLayout = ({  children, headerText }) => {


  return (
    <>
      

    {/* entire page */}
      <div className="">
      {/* searchbar on top */}
       

        {/* sidebar and body below searchbar combined div */}
        <div
          className={`flex min-h-[calc(100vh-66px)] 
           bg-gradient-to-b  from-[#FFFFFF] to-[#D5E1EE]
           `}
        >
``
          {/* sidebar div */}
          <div
            className={`
            md:basis-1/5 21inch:basis-[15%]`}
          >
            <Sidebar />
          </div>
          {/* <div className=" z-50 sticky top-0">
          <Searchbar />
        </div> */}

          {/* content div */}
          {/* <div className="flex-1"> */}
            <div className="flex-1 flex-col center-section gap-5 ">
              {headerText !=='EventInfo' && (<div> <BodyHeading text={headerText} /></div>)}
              {children}
            </div>
          {/* </div> */}
        </div>
      </div>
    </>
  );
};

export default DashboardPageLayout;

