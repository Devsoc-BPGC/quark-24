import logo_topbar from "../assets/logo_topBar.png";

function TopBar() {
  return (
    <>
      <div className="flex relative flex-row space-evenly gap-6 w-[100vw] h-[10vh] mt-4 justify-evenly">
        <span className="font-roboInvaders pt-2 text-white inline-block group transition cursor-pointer duration-300 ease-out">
          <span className="group-hover:bg-purple-500 px-2 py-1">EVENTS</span>
        </span>
        <span className="font-roboInvaders pt-2 text-white inline-block group transition cursor-pointer duration-300 ease-in-out">
          <span className="group-hover:bg-purple-500 px-2 py-1">WORKSHOPS</span>
        </span>
        <span className="font-roboInvaders  pt-2 text-white inline-block group transition cursor-pointer duration-300 ease-in-out">
          <span className="group-hover:bg-purple-500 px-2 py-1">
            EXHIBITONS
          </span>
        </span>
        <span className="font-roboInvaders pt-2 text-white inline-block group transition cursor-pointer duration-300 ease-in-out">
          <span className="group-hover:bg-purple-500 px-2 py-1">NIGHTS</span>
        </span>
        <img
          src={logo_topbar}
          className="ease-in-out cursor-pointer"
          alt="Logo"
        />
        <span className="font-roboInvaders pt-2 text-white inline-block group transition cursor-pointer duration-300 ease-in-out">
          <span className="group-hover:bg-purple-500 px-2 py-1">
            GUEST LECTURES
          </span>
        </span>
        <span className="font-roboInvaders pt-2 text-white inline-block group transition cursor-pointer duration-300 ease-in-out">
          <span className="group-hover:bg-purple-500 px-2 py-1">WORKSHOPS</span>
        </span>
        <span className="font-roboInvaders pt-2 text-white inline-block group transition cursor-pointer duration-300 ease-in-out">
          <span className="group-hover:bg-purple-500 px-2 py-1">SPONSORS</span>
        </span>
        <span className="font-roboInvaders pt-2 text-white inline-block group transition cursor-pointer duration-700 ease-in">
          <span className="group-hover:bg-purple-500 px-2 py-1">OUR TEAM</span>
        </span>
      </div>
    </>
  );
}

export default TopBar;
