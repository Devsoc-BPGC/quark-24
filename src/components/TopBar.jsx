import logo_topbar from "../assets/images/logo_topBar.png";
import { Outlet, Link } from "react-router-dom";
import useIsMobile from "./useIsMobile";

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
          <Link to="nights">
            {" "}
            <span className="font-roboInvaders pt-2 text-white inline-block group transition cursor-pointer duration-300 ease-in-out">
              <span className="group-hover:bg-[rgba(77,0,162,0.4)] group-hover:shadow-[0_0_25px_-0px_rgba(77,0,162,1)] rounded-full px-2 py-1">
                NIGHTS
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
          <Link to="/workshops">
            {" "}
            <span className="font-roboInvaders pt-2 text-white inline-block group transition cursor-pointer duration-300 ease-in-out">
              <span className="group-hover:bg-[rgba(77,0,162,0.4)] group-hover:shadow-[0_0_25px_-0px_rgba(77,0,162,1)] rounded-full px-2 py-1">
                WORKSHOPS
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
            <img
              src={logo_topbar}
              className="ease-in-out cursor-pointer"
              alt="Logo"
            />
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
            {" "}
            <span className="font-azonix pt-2 text-white  inline-block group transition cursor-pointer duration-300 ease-out">
              <span className="group-hover:bg-[rgba(77,0,162,0.4)] group-hover:shadow-[0_0_25px_-0px_rgba(77,0,162,1)] rounded-full px-2 py-1">
                SPONSORS
              </span>
            </span>{" "}
          </Link>
          <Link to="https://register.bitsquark.in/">
            {" "}
            <span className="font-azonix pt-2 text-white  inline-block group transition cursor-pointer duration-300 ease-out">
              <span className="group-hover:bg-[rgba(77,0,162,0.4)] group-hover:shadow-[0_0_25px_-0px_rgba(77,0,162,1)] rounded-full px-2 py-1">
                REGISTER
              </span>
            </span>{" "}
          </Link>
        </div>
      )}
    </>
  );
}

export default TopBar;
