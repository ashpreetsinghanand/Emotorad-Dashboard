import { useContext, useEffect, useRef, useState } from "react";
import Link from "next/link";
// import { motion } from "framer-motion";
// import { signOut, useSession } from "next-auth/react";
// import { FormDataContext } from "../utils/FormDataProvider";


const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session, status } = useSession();
  const dropdownRef = useRef(null);

//   const { darkMode, setDarkMode } = useContext(FormDataContext);

  // drop down show and close
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // for the night mode button click
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleOutsideClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <div
        className={`flex items-center gap-1 md:gap-2 cursor-pointer ${
          isOpen ? "rounded-lg" : ""
        }`}
        onClick={toggleDropdown}
      >
        
        {/* name searchbar */}
        <div
          className={`text-sm lg:text-[16px] cursor-pointer font-brandonMediumItalic rounded-lg mr-2 py-1 ${
            darkMode ? "text-queueDarkText1" : "text-queueLightText1"
          }`}
        >
          {session?.user ? (
            <>
            {/* {console.log(session.user)} */}
        <p>
          {session.user.name ? session.user.name.split(" ")[0] : session.user.email.split('@')[0]}
        </p>
        {/* <p>
          {session.user.id}
        </p> */}
        </>
) : (
  <p>Loading...</p>
)}
        </div>

{/* profile image  */}
{session?.user?.image ? (
  <img
    // width={10}
    // height={10}
    src={session.user.image}
    alt="👋"
    className="rounded-full w-8 aspect-square"
  />
) : (
  <img
    // width={10}
    // height={10}
    src="/monkeyNft.jpg"
    alt="User"
    className="rounded-full w-8 aspect-square"
  />
)}
      </div>
      {isOpen && (
        <div className="duration-500 absolute top-full right-0 mt-2 bg-white rounded-lg min-w-[15rem] drop-shadow-2xl flex justify-center items-center">
          <ul className="py-2 w-full mx-2 font-[620]">
            <Link
              href="/profile"
              className="flex items-center px-2 py-4 space-x-4 hover:bg-gray-100  rounded-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>

              <p>Profile</p>
            </Link>
            <Link
              href="/settings/account"
              className="flex items-center space-x-4  px-2 py-4 hover:bg-gray-100 rounded-lg "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>

              <p>Settings</p>
            </Link>

            {/* night mode/ dark mode */}
            <div
              
              onClick={toggleDarkMode}
              className="flex items-center px-2 py-4 space-x-4 hover:bg-gray-100 rounded-lg cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                />
              </svg>

              <span className="">Night Mode</span>

              <div
                className={`flex items-center w-10 h-5  rounded-full cursor-pointer border border-solid-3 bg-gray-500 ${
                  darkMode
                    ? "bg-queueBlue justify-end pr-1"
                    : "justify-start pl-1"
                }`}
              >
                <motion.div
                  className={`h-3 w-3 rounded-full   bg-white`}
                  layout
                  transition={{ type: "spring", stiffness: 700, damping: 30 }}
                />
              </div>
            </div>

            {/* help center */}
            <Link
              href="/"
              className="flex items-center space-x-4 px-2  py-4 hover:bg-gray-100 rounded-lg "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
                />
              </svg>

              <p>Help Center</p>
            </Link>

{/* logout */}
            <Link
              href="/"
              className="flex items-center px-2 py-4 space-x-4 hover:bg-gray-100 rounded-lg "
            //   onClick={() => signOut()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                />
              </svg>

              <p>Logout</p>
            </Link>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
