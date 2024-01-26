import bg_about from "../assets/bg_about.gif";
import CarouselComp from "../components/CarouselComp";

export default function About() {
  return (
    <div className="w-[100vw] h-[278vh]  relative">
      <div
        className="absolute inset-0 "
        style={{
          backgroundImage: `url(${bg_about})`,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
          filter: "brightness(30%)",
        }}
      />
      <div className="pt-[10vh]">
        <div className="flex flex-row relative  z-10">
          <div className="w-[50vw] flex flex-col justify-center self-center">
            <div
              style={{}}
              className="font-roboInvaders text-white text-8xl self-center tracking-wide"
            >
              ABOUT <br /> QUARK
            </div>
          </div>
          <div className="w-[50vw] font-nicoMoji text-lg md:text-3xl text-white">
            Quark is the annual technical festival of BITS, Pilani K.K. Birla
            Goa Campus, one of the biggest festivals of its kind in India. From
            its modest beginnings in 2006, Quark morphed into a national level
            festival in its 2008 version. Since then, Quark has consistently
            seen participation from all leading colleges across India. Quark
            usually features various events pertaining to the different
            engineering branches as well as the pure sciences.
          </div>
        </div>
        <div className="mt-[15vh]">
          <CarouselComp />
        </div>
      </div>
    </div>
  );
}