import nights from "../assets/images/nights.png";
import TopBar from "../components/TopBar";
import night_logo from "../assets/images/nights_logo.png";
import coming_soon from "../assets/images/coming_soon.png";
import prog from "../assets/images/prog.jpeg";
import salim from "../assets/images/salim.jpeg";

function Nights() {
  return (
    <>
      <div
        className="h-full min-h-screen relative bg-cover flex flex-col items-center"
        style={{
          backgroundImage: `url(${nights})`,
          backgroundRepeat: "no-repeat",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <TopBar />
        <div className="flex-grow flex items-center  flex-col justify-center">
          <img src={night_logo} alt="Nights logo" />
        </div>
      </div>
      <div className="absolute bottom-0 w-full h-[20vh] bg-gradient-to-t from-black to-transparent" />
      <div
        style={{
          backgroundImage: `url(${prog})`,
          backgroundRepeat: "no-repeat",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          backgroundSize: "cover",
        }}
      >
          <div className="relative">
          <div className="absolute mb-15 top-0 left-0 w-full h-[20vh] bg-gradient-to-b from-black to-transparent" />
        </div>
        <div className="lg:text-6xl text-4xl z-10 font-azonix text-white">
         DAY 1
        </div>
        
      </div>
      <div
        style={{
          backgroundImage: `url(${salim})`,
          backgroundRepeat: "no-repeat",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          backgroundSize: "cover",
        }}
      >
        <div className="lg:text-6xl text-4xl z-10 font-azonix text-white">
          DAY 2
        </div>
        
      </div>
      <div
        style={{
          backgroundImage: `url(${coming_soon})`,
          backgroundRepeat: "no-repeat",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          backgroundSize: "cover",
        }}
      >
        <div className="lg:text-6xl text-4xl z-10 font-azonix text-white">
          DAY 3 COMING SOON 
        </div>
      </div>
      
    </>
  );
}

export default Nights;
