import bg_about from "../assets/images/bg_about.gif";
import CarouselComp from "../components/CarouselComp";

export default function About() {
  return (
    <>
      <div className="w-[100vw] relative">
        <div
          className="absolute inset-0 "
          style={{
            backgroundImage: `url(${bg_about})`,
            // background: "white",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            filter: "brightness(30%)",
          }}
        />
        <div className="absolute  mb-10 top-0 left-0 w-full h-[20vh] bg-gradient-to-b from-black to-transparent" />
        <div className="lg:pt-[35vh] pt-[10vh]">
          <div className="flex lg:flex-row relative flex-col  z-10">
            <div className="lg:w-[50vw] flex flex-col justify-center self-center">
              <div
                style={{}}
                className="font-roboInvaders text-white  text-8xl self-center tracking-wide"
              >
                ABOUT <br /> QUARK
              </div>
            </div>
            <div className="lg:w-[50vw] p-8 font-nicoMoji text-lg md:text-3xl text-white">
              Quark is the annual technical festival of BITS, Pilani K.K. Birla
              Goa Campus, one of the biggest festivals of its kind in India.
              From its modest beginnings in 2006, Quark morphed into a national
              level festival in its 2008 version. Since then, Quark has
              consistently seen participation from all leading colleges across
              India. Quark usually features various events pertaining to the
              different engineering branches as well as the pure sciences.
            </div>
          </div>
          <div className="mt-[15vh] pb-96">
            <CarouselComp />
          </div>
        </div>
      </div>
      <footer
        style={{ color: "white", fontSize: "1rem", backgroundColor: "black" }}
        className="z-20 flex justify-center"
      >
        Made with ❤️ by{" "}
        <a href="https://devsoc.club" style={{ color: "#ADD8E6" }}>
          DevSoc
        </a>
      </footer>
    </>
  );
}
