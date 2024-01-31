import logo_topbar from "../assets/images/logo_topBar.png";
import { Outlet, Link } from 'react-router-dom';

function TopBar() {
  return (
    <>
      <div className="flex relative flex-row space-evenly gap-6 w-[100vw] h-[10vh] mt-4 justify-evenly">
        <Link to="/events"> <span className="font-roboInvaders pt-2 text-white inline-block group transition cursor-pointer duration-300 ease-out">
          <span className="group-hover:bg-purple-500 px-2 py-1">EVENTS</span>
        </span> </Link>
        <Link to="/workshops"> <span className="font-roboInvaders pt-2 text-white inline-block group transition cursor-pointer duration-300 ease-in-out">
          <span className="group-hover:bg-purple-500 px-2 py-1">WORKSHOPS</span>
        </span> </Link>
        <Link to="/exhibitions">  <span className="font-roboInvaders  pt-2 text-white inline-block group transition cursor-pointer duration-300 ease-in-out">
          <span className="group-hover:bg-purple-500 px-2 py-1">
            EXHIBITIONS
          </span>
        </span> </Link>
        <Link to="/nights"> <span className="font-roboInvaders pt-2 text-white inline-block group transition cursor-pointer duration-300 ease-in-out">
          <span className="group-hover:bg-purple-500 px-2 py-1">NIGHTS</span>
        </span> </Link>
        <Link to="/">
          <img
            src={logo_topbar}
            className="ease-in-out cursor-pointer"
            alt="Logo"
          />
        </Link>
        <Link to="/GuestLectures">  <span className="font-roboInvaders pt-2 text-white inline-block group transition cursor-pointer duration-300 ease-in-out">
          <span className="group-hover:bg-purple-500 px-2 py-1">
            GUEST LECTURES 
          </span>
        </span> </Link>
        <Link to="/workshops"> <span className="font-roboInvaders pt-2 text-white inline-block group transition cursor-pointer duration-300 ease-in-out">
          <span className="group-hover:bg-purple-500 px-2 py-1"> WORKSHOPS </span>
        </span> </Link>
        <Link to="/sponsors"> <span className="font-roboInvaders pt-2 text-white inline-block group transition cursor-pointer duration-300 ease-in-out">
          <span className="group-hover:bg-purple-500 px-2 py-1">SPONSORS</span>
        </span> </Link>
        <Link to="/team"> <span className="font-roboInvaders pt-2 text-white inline-block group transition cursor-pointer duration-700 ease-in">
          <span className="group-hover:bg-purple-500 px-2 py-1">OUR TEAM </span>
        </span> </Link>
        <Outlet />
      </div>
    </>
  );
}

export default TopBar;
