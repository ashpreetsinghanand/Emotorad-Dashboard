// import { FormDataContext } from "@/components/utils/FormDataProvider";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";


function SidebarMenuItem({
  text,
  Icon,
  IconWhite,
  redirectlink,
  href,
}) {

  // console.log("isExpanded, ", isExpanded);

  const router = useRouter();
  const segments = router.pathname.split("/");
  const url = "/" + segments[1];
  const isActive = url === href;



  return (
    <div className="">
      <Link href={`${redirectlink}`}>
        <div
          className={`rounded-lg pl-4 flex space-x-4 items-center 
          ${
            isActive && ""
          }   py-2 mx-3 my-1 lg:my-2 cursor-pointer 
          ${!isActive && "hover:bg-black"}`}
        >
          {/* { isActive ? (
            <Image alt="" src={IconWhite} width={50} height={50} className={`h-8 w-8`} />
          ) : (
            // <Image alt="" src={Icon} width={50} height={50} className={`h-8 w-8 `} />
            <Image src={Icon} width={8} height={8} alt="" className={`h-8 w-8`}/>
          )} */}

          <div
            className={`hidden md:inline font-brandonBoldItalic text-sm md:text-lg 
              ${
                isActive ? "text-white" : "text-gray-300"
              }`}
          >
            {text}
          </div>
        </div>
      </Link>
    </div>
  );
}

export default SidebarMenuItem;
