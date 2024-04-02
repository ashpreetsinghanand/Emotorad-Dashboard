import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";



// component
const UpdateModal = ({
    setShowUpdateModal,
    closeShowUpdateModal,
    updateId,
    u_name,
    u_email,
    u_contact,
    u_instagram,
    u_youtube

}) => {

  const router = useRouter();
//   ref
  const clickingAnywhereElse = useRef(null);

  useEffect(() => {
    // Retrieve email from local storage
    const emailFromStorage = localStorage.getItem("email");
    setUser(emailFromStorage);
  }, []);


  const handleOutsideClick = (e) => {
    if (
      clickingAnywhereElse.current &&
      !clickingAnywhereElse.current.contains(e.target)
    ) {
        setShowUpdateModal(false);
    }
  };
  const [user,setUser] = useState('')
  const [name, setName] = useState(u_name);
  const [email, setEmail] = useState(u_email);
  const [contact, setContact] = useState(u_contact);
  const [instagram, setInstagram] = useState(u_instagram);
  const [yt, setYt] = useState(u_youtube);
  const [next,setNext] = useState(false);

  function toggleSetNext(){
    setNext(!next);
  }

  const handleDone = () => {
    // Create an object with the data to be updated
    const userData = { name, email, contact, instagram, yt, updateId };

    // Make an API request to update user data
    fetch("/api/updateUserData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => {
        if (response.ok) {
          // Upon successful update, redirect to /users
          closeShowUpdateModal
         // window.location.reload();
        } else {
          alert("Failed to update user data");
        }
      })
      .catch((error) => {
        alert("Error:", error);
      });
  };
  

  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-black z-50 bg-opacity-50 flex justify-center items-center "
    onClick={handleOutsideClick}>
          <form className=" rounded-lg shadow-lg p-2 px-5 relative bg-white "  
          ref={clickingAnywhereElse}>
          <button className=" absolute top-0 right-0   rounded-full  mx-2 mt-4 text-[#e4e5e5] hover:text-queueTxt bg-[#f6f6f6]" onClick={closeShowUpdateModal}>
          <div size="20px"> X
             {/* <AiOutlineCloseCircle size={20} className="w-[20px] h-[20px]"/> */}
              </div>
            </button>
            
            <p className=" text-xl   mb-2  text-black  font-[500] ">Add New Profile</p>
            <div className="flex justify-between gap-x-10 mb-3">
                <div className="w-1/2">
                    <div className="text-center font-[500]">Basic</div>
                    <div className={`w-full my-1  ${next? "bg-gray-500 ": "bg-blue-500"} h-1`}></div>
                </div>
                <div className="w-1/2">
                <div className="text-center font-[500]">Social</div>
                <div className={`w-full my-1  ${next? "bg-blue-500 ": "bg-gray-500"} h-1`}></div>
                </div>
            </div>

        {next ?(<>
            <p className=" text-[1rem]  font-[500]  mb-2 text-queueTxt">Enter Instagram(optional) </p>
            <div className="w-full mb-2 text-queueTxt">

              <input
                type="instagram"
                className="py-1 bg-white rounded-md px-2 w-full h-[2.375rem] text-queueTxt text-[14px] placeholder:text-gray-400 border-[#E4E5E5] border-[2px] "
                id="instagram"
                value={instagram}
                onChange={(e) => setInstagram(e.target.value)}
                placeholder="Eg. instagram.com/username"
            
              />

            </div>
            <p className=" text-[1rem]  font-[500]  mb-2 text-queueTxt">Enter Youtube (optional) </p>
            <div className="w-full mb-2 text-queueTxt">

              <input
                type="yt"
                className="py-1 bg-white rounded-md px-2 w-[25rem] h-[2.375rem] text-queueTxt text-[14px] placeholder:text-gray-400 border-[#E4E5E5] border-[2px] "
                id="yt"
                value={yt}
                onChange={(e) => setYt(e.target.value)}
                placeholder="Eg. youtube/username"
            
              />

            </div>
            <div className="flex justify-end gap-x-5">

                <div
                className="border border-blue-400 flex text-right text-blue-400 rounded-md my-4  py-3 px-5  text-[18px] focus:ring-1 cursor-pointer"
                onClick={toggleSetNext}
                >
                    Back
                </div>
                <div
                className="bg-blue-500 flex text-right text-white rounded-md my-4  py-3 px-5  text-[18px] focus:ring-1 cursor-pointer"
                onClick={handleDone}
                >
                    Done
                </div>
            </div>
        </>):(<>
            <p className=" text-[1rem]  font-[500]  mb-2 text-queueTxt">Enter Name* </p>
            <div className="w-full mb-2 text-queueTxt">

              <input
                type="name"
                className="py-1 bg-white rounded-md px-2 w-full h-[2.375rem] text-queueTxt text-[14px] placeholder:text-gray-400 border-[#E4E5E5] border-[2px] "
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Eg.  John Doe"
            
              />

            </div>
            <p className=" text-[1rem]  font-[500] mb-2 text-queueTxt">Enter Email* </p>
            <div className="w-full mb-2 text-queueTxt">

              <input
                type="email"
                className="py-1 bg-white rounded-md px-2 w-[25rem] h-[2.375rem] text-queueTxt text-[14px] placeholder:text-gray-400 border-[#E4E5E5] border-[2px] "
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Eg.  John@xyz.com"
            
              />

            </div>
            <p className=" text-[1rem]   font-[500] mb-2 text-queueTxt">Enter Phone* </p>
            <div className="w-full mb-2 text-queueTxt">

              <input
                type="contact"
                className="py-1 bg-white rounded-md px-2 w-full h-[2.375rem] text-queueTxt text-[14px] placeholder:text-gray-400 border-[#E4E5E5] border-[2px] "
                id="contact"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                placeholder="Eg.  9123456789"
            
              />

            </div>
            <div className="flex justify-end">

                <div
                className="bg-blue-500 flex text-right text-white rounded-md my-4  py-3 px-5  text-[18px] focus:ring-1 cursor-pointer"
                onClick={toggleSetNext}
                >
                    Next
                </div>
            </div>
            </>)}
          </form>
        </div>
  );
};

export default UpdateModal;
