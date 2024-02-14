import logo_topbar from "../assets/images/logo_topBar.png";
import logo_mobile from "../assets/images/logo_mobile.png";

import { Outlet, Link } from "react-router-dom";
import useIsMobile from "./useIsMobile";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function TopBar() {
  const isMobile = useIsMobile();
  return (
    <>
      {!isMobile && (
        <div className="flex relative flex-row space-evenly gap-6 w-[100vw] h-[10vh] mt-4 justify-evenly">
          <Link to="/events">
            {" "}
            <span className="font-roboInvaders pt-2 text-white  inline-block group transition cursor-pointer duration-300 ease-out">
              <span className="group-hover:bg-[rgba(77,0,162,0.4)] group-hover:shadow-[0_0_25px_-0px_rgba(77,0,162,1)] rounded-full px-2 py-1">
                Events
              </span>
            </span>{" "}
          </Link>
          <Link to="/workshops">
            {" "}
            <span className="font-roboInvaders pt-2 text-white inline-block group transition cursor-pointer duration-300 ease-in-out">
              <span className="group-hover:bg-[rgba(77,0,162,0.4)] group-hover:shadow-[0_0_25px_-0px_rgba(77,0,162,1)] rounded-full px-2 py-1">
                WORKSHOPS
              </span>
            </span>{" "}
          </Link>
          <Link to="/exhibitions">
            {" "}
            <span className="font-roboInvaders  pt-2 text-white inline-block group transition cursor-pointer duration-300 ease-in-out">
              <span className="group-hover:bg-[rgba(77,0,162,0.4)] group-hover:shadow-[0_0_25px_-0px_rgba(77,0,162,1)] rounded-full px-2 py-1">
                EXHIBITIONS
              </span>
            </span>{" "}
          </Link>
          <Link to="/media">
            {" "}
            <span className="font-roboInvaders pt-2 text-white inline-block group transition cursor-pointer duration-300 ease-in-out">
              <span className="group-hover:bg-[rgba(77,0,162,0.4)] group-hover:shadow-[0_0_25px_-0px_rgba(77,0,162,1)] rounded-full px-2 py-1">
                MEDIA PARTNERS
              </span>
            </span>{" "}
          </Link>

          <Link to="/">
            <img
              src={logo_topbar}
              className="ease-in-out cursor-pointer"
              alt="Logo"
            />
          </Link>
          <Link to="/GuestLectures">
            {" "}
            <span className="font-roboInvaders pt-2 text-white inline-block group transition cursor-pointer duration-300 ease-in-out">
              <span className="group-hover:bg-[rgba(77,0,162,0.4)] group-hover:shadow-[0_0_25px_-0px_rgba(77,0,162,1)] rounded-full px-2 py-1">
                GUEST LECTURES
              </span>
            </span>{" "}
          </Link>
          <Link to="/nights">
            {" "}
            <span className="font-roboInvaders pt-2 text-white inline-block group transition cursor-pointer duration-300 ease-in-out">
              <span className="group-hover:bg-[rgba(77,0,162,0.4)] group-hover:shadow-[0_0_25px_-0px_rgba(77,0,162,1)] rounded-full px-2 py-1">
                NIGHTS
              </span>
            </span>{" "}
          </Link>

          <Link to="/sponsors">
            {" "}
            <span className="font-roboInvaders pt-2 text-white inline-block group transition cursor-pointer duration-300 ease-in-out">
              <span className="group-hover:bg-[rgba(77,0,162,0.4)] group-hover:shadow-[0_0_25px_-0px_rgba(77,0,162,1)] rounded-full px-2 py-1">
                SPONSORS
              </span>
            </span>{" "}
          </Link>
          <Link to="/team">
            {" "}
            <span className="font-roboInvaders pt-2 text-white inline-block group transition cursor-pointer duration-700 ease-in">
              <span className="group-hover:bg-[rgba(77,0,162,0.4)] group-hover:shadow-[0_0_25px_-0px_rgba(77,0,162,1)] rounded-full px-2 py-1">
                OUR TEAM
              </span>
            </span>{" "}
          </Link>
          <Outlet />
        </div>
      )}
      {isMobile && (
        <div className="min-w-[100vw] text-xs h-auto relative max-w-full flex flex-row justify-evenly mt-2 ">
          <Link to="/">
            <div className="flex self-center justify-center my-[auto]">
              <img
                src={logo_mobile}
                className="ease-in-out cursor-pointer py-1"
                alt="Logo"
              />
            </div>
          </Link>
          <Link to="/">
            {" "}
            <span className="font-azonix pt-2 text-white  inline-block group transition cursor-pointer duration-300 ease-out">
              <span className="group-hover:bg-[rgba(77,0,162,0.4)] group-hover:shadow-[0_0_25px_-0px_rgba(77,0,162,1)] rounded-full px-2 py-1">
                HOME
              </span>
            </span>{" "}
          </Link>
          <Link to="/about">
            {" "}
            <span className="font-azonix pt-2 text-white  inline-block group transition cursor-pointer duration-300 ease-out">
              <span className="group-hover:bg-[rgba(77,0,162,0.4)] group-hover:shadow-[0_0_25px_-0px_rgba(77,0,162,1)] rounded-full px-2 py-1">
                ABOUT
              </span>
            </span>{" "}
          </Link>
          <Link to="/sponsors">
            <span className="font-azonix pt-2 text-white  inline-block group transition cursor-pointer duration-300 ease-out">
              <span className="group-hover:bg-[rgba(77,0,162,0.4)] group-hover:shadow-[0_0_25px_-0px_rgba(77,0,162,1)] rounded-full px-2 py-1">
                SPONSORS
              </span>
            </span>
          </Link>
          <Link to="https://register.bitsquark.in/">
            {" "}
            <span className="font-azonix pt-2 text-white  inline-block group transition cursor-pointer duration-300 ease-out">
              <span className="group-hover:bg-[rgba(77,0,162,0.4)] group-hover:shadow-[0_0_25px_-0px_rgba(77,0,162,1)] rounded-full pl-2 py-1">
                REGISTER
              </span>
            </span>{" "}
          </Link>
          <div className="">
            <DropdownMenu className="bg-white z-20 ">
              <DropdownMenuTrigger asChild>
                <Button className="px-2 pb-5">
                  <svg
                    className="h-5 w-5 fill-current text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3 18h18v-2H3v2zM3 13h18v-2H3v2zM3 6v2h18V6H3z"
                    />
                  </svg>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 mr-2 font-azonix text-white text-right bg-gradient-to-l from-black to-transparent via-gray-800 rounded outline-none border-none ">
                <DropdownMenuGroup>
                  <DropdownMenuItem className="flex justify-end text-right">
                    <Link to="/events">Events</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex justify-end text-right">
                    <Link to="/exhibitions">Exhibitions</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex justify-end text-right">
                    <Link to="/nights">Nights</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex justify-end text-right">
                    <Link to="/team">Our Team</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex justify-end text-right">
                    <Link to="/workshops">Workshops</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex justify-end text-right">
                    <Link to="/media">Media Partners</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex justify-end text-right">
                    <Link to="/GuestLectures">Guest Lectures</Link>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      )}
    </>
  );
}

export default TopBar;
