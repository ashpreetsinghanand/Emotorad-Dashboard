import React, { useContext } from "react";
// import StepProgressBar from "./StepProgressBar";
import Router, { useRouter } from "next/router";
import { googleLogout } from "@react-oauth/google";
// import { useSelector } from "react-redux";


const BodyHeading = ({text}) => {

  const handleLogout = async () => {
    try {
      // Perform logout from Google account
      await googleLogout();

      // Clear localStorage
      localStorage.clear();

      // Redirect or perform any other action after logout
      // For example, redirect to the login page
      window.location.href = "/"; // Redirect to your login page
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };
  


  const router = useRouter();
  
  const segments = router.pathname.split('/')
  
  const url = '/'+segments[1]+'/'+segments[2];
  // console.log(url);

  const isEventPage = url === '/events/create';
  const isHomePage = url ==='/'


  return (
    <div className={`z-10 flex flex-col md:flex-row px-5 py-3 mt-4  items-center justify-between rounded-lg text-20  bg-queueLight1 text-queueLightText1 `}>
      <div className=" text-sm md:text-lg text-center font-[500]">{text}</div>
      <button className="btn px-4 font-[700] ml-3  text-xl" onClick={handleLogout}>Logout</button>
    </div>
  );

};
export default BodyHeading;
