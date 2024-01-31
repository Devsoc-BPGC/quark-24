import landing_gif from "../assets/landing_gif.gif";
import TopBar from "../components/TopBar";
import logo_quark from "../assets/logo_quark.png";

function HomePage() {
  return (
    <div className="h- min-h-screen h-[120vh] relative bg-cover flex flex-col items-center">
      <div
        className="absolute inset-0 "
        style={{
          backgroundImage: `url(${landing_gif})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          filter: "brightness(60%)",
        }}
      />
      <div className="absolute top-0 left-0 w-full h-[20vh] bg-gradient-to-b from-black to-transparent" />
      <TopBar />
      <div className="flex-grow flex items-center  flex-col justify-center z-10">
        <img src={logo_quark} alt="Quark Logo" className="z-10" />
        <div className="font-roboInvaders text-4xl text-white font-light tracking-[0.1rem] z-10">
          16-18 FEBRUARY
        </div>
        <div className="absolute bottom-0 w-full h-[20vh] bg-gradient-to-t from-black to-transparent" />
      </div>
    </div>
  );
}

export default HomePage;
