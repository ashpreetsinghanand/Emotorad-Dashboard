import SidebarMenuItem from "./SidebarMenuItem";
// import HelpCenter from "./HelpCenter";
// import SidebarLogoutButton from "./SidebarLogoutButton";
// import { useSelector } from "react-redux";
import { useContext } from "react";
import SidebarEventButton from "./SidebarEventButton";


function Sidebar() {
  // const darkMode = useSelector((state) => state.darkMode;
   


  return (
    <div
      className={`px-3 font-brandonBlack h-full flex flex-col justify-between  bg-blue-500 overflow-y-auto `}>
      <div className="">
    <div className="text-6xl text-white p-5">Board.</div>

        {/* Menu items */}
        <div className="flex flex-col py-[8px] mt-[2px]">
          <SidebarMenuItem
            text="Dashboard"
          
            href="/home"
            redirectlink={"/dashboard"}
          />
          <SidebarMenuItem
            text="Transactions"
          
            href="/transactions"
            redirectlink={"/transactions"}
          />
          

          <SidebarMenuItem
            text="Schedules"
           
            redirectlink={"/schedules"}
            href="/schedules"
          />
          <SidebarMenuItem
            text="Users"
           
            // hasProgressBar
            redirectlink={"/users"}
            href="/users"
          />

          <SidebarMenuItem
            text="Settings"
         
            redirectlink={"/settings"}
            href="/settings"
          />

          {/* <SidebarMenuItem
            text="Settings"
            Icon="/Icons/settings_black_24dp.svg"
            IconWhite="/Icons/settings_white_24dp.svg"
            redirectlink={"/settings/account"}
            href="/settings"
          /> */}
        </div>
      </div>

        <div className="text-white text-md m-5">
            <div>Help</div>
            <div>Contact Us</div>
        </div>
    </div>
  );
}

export default Sidebar;
