import logo_topbar from "../assets/logo_topBar.png";
import { Outlet, Link } from 'react-router-dom';

function TopBar() {
  return (
    <>
      <div className="flex relative flex-row space-evenly gap-6 w-[100vw] h-[10vh] mt-4 justify-evenly">
        <span className="font-roboInvaders pt-2 text-white inline-block group transition cursor-pointer duration-300 ease-out">
          <span className="group-hover:bg-purple-500 px-2 py-1"><Link to="/events">EVENTS</Link></span>
        </span>
        <span className="font-roboInvaders pt-2 text-white inline-block group transition cursor-pointer duration-300 ease-in-out">
          <span className="group-hover:bg-purple-500 px-2 py-1"><Link to="/workshops">WORKSHOPS</Link></span>
        </span>
        <span className="font-roboInvaders  pt-2 text-white inline-block group transition cursor-pointer duration-300 ease-in-out">
          <span className="group-hover:bg-purple-500 px-2 py-1">
          <Link to="/exhibitions"> EXHIBITIONS </Link>
          </span>
        </span>
        <span className="font-roboInvaders pt-2 text-white inline-block group transition cursor-pointer duration-300 ease-in-out">
          <span className="group-hover:bg-purple-500 px-2 py-1"><Link to="nights">NIGHTS</Link></span>
        </span>
        <Link to="/"> 
        <img
          src={logo_topbar}
          className="ease-in-out cursor-pointer"
          alt="Logo"
        />
        </Link>
        <span className="font-roboInvaders pt-2 text-white inline-block group transition cursor-pointer duration-300 ease-in-out">
          <span className="group-hover:bg-purple-500 px-2 py-1">
           <Link to="/GuestLectures"> GUEST LECTURES </Link>
          </span>
        </span>
        <span className="font-roboInvaders pt-2 text-white inline-block group transition cursor-pointer duration-300 ease-in-out">
          <span className="group-hover:bg-purple-500 px-2 py-1"><Link to="/workshops">WORKSHOPS</Link></span>
        </span>
        <span className="font-roboInvaders pt-2 text-white inline-block group transition cursor-pointer duration-300 ease-in-out">
          <span className="group-hover:bg-purple-500 px-2 py-1"><Link to="/sponsors">SPONSORS</Link></span>
        </span>
        <span className="font-roboInvaders pt-2 text-white inline-block group transition cursor-pointer duration-700 ease-in">
          <span className="group-hover:bg-purple-500 px-2 py-1"><Link to="/team">OUR TEAM </Link></span>
        </span>
        <Outlet />
      </div>
    </>
  );
}

export default TopBar;
