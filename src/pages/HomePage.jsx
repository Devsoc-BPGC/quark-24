import landing_gif from "../assets/landing_gif.gif";
import TopBar from "../components/TopBar";
import logo_quark from "../assets/logo_quark.png";

function HomePage() {
  return (
    <>
      <div
        className="h-full min-h-screen relative bg-cover flex flex-col items-center"
        style={{
          backgroundImage: `url(${landing_gif})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <TopBar />
        <div className="flex-grow flex items-center  flex-col justify-center">
          <img src={logo_quark} alt="Quark Logo" />
          <div className="font-roboInvaders text-4xl text-white font-light tracking-[0.1rem]">
            16-18 FEBRUARY
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;