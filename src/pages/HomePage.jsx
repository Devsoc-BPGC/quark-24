import { useState, useEffect } from 'react';
import TopBar from "../components/TopBar";
import logo_quark from "../assets/images/logo_quark.png";
import isMobile from "../components/useIsMobile";
import mainscrn from "../assets/images/mainscrn.jpeg";
import landing_gif from "../assets/images/landing_gif.gif";

function HomePage() {
  const [backgroundImage, setBackgroundImage] = useState(mainscrn);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setBackgroundImage(mainscrn);
      } else {
        setBackgroundImage(landing_gif);
      }
    };

    // Initial call
    handleResize();

    // Event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <div className="h- min-h-screen h-[120vh] relative bg-cover flex flex-col items-center">
        <div
          className="absolute inset-0 home"
          style={{
            backgroundImage: `url(${backgroundImage})`,
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
    </>
  );
}

export default HomePage;
