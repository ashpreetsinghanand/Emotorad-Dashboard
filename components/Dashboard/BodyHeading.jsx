import React, { useContext } from "react";
// import StepProgressBar from "./StepProgressBar";
import Router, { useRouter } from "next/router";
// import { useSelector } from "react-redux";


const BodyHeading = ({text}) => {

  // const darkMode = useSelector((state) => state.darkMode)
  


  const router = useRouter();
  
  const segments = router.pathname.split('/')
  
  const url = '/'+segments[1]+'/'+segments[2];
  // console.log(url);

  const isEventPage = url === '/events/create';
  const isHomePage = url ==='/'


  return (
    <div className={`z-10 flex flex-col md:flex-row px-5 py-3 mt-4  items-center justify-between rounded-lg text-20  bg-queueLight1 text-queueLightText1 `}>
      <div className=" text-sm md:text-lg text-center font-[500]">{text}</div>
      {/* <button className="btn px-4">Event Page</button> */}
    </div>
  );

};
export default BodyHeading;
