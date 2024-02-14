import sponsors from "../assets/images/sponsors.png";
import TopBar from "../components/TopBar";
import sponsors_logo from "../assets/images/sponsors_logo.png";
import sda_bocconi from "../assets/sponsors/sda_bocconi.jpeg";
import nomura from "../assets/sponsors/nomura.jpeg";
import learners_cortex from "../assets/sponsors/learners_cortex.jpeg";
import brain_wonders from "../assets/sponsors/brain_wonders.jpeg";
import languify from "../assets/sponsors/languify.jpeg";
import ims_goa from "../assets/sponsors/ims_goa.jpeg";
import events_bg from "../assets/images/events_bg.jpg";
import reclaim from "../assets/images/reclaim.jpg";
import real from "../assets/images/real.jpg";
import hexo from "../assets/images/hexo.jpeg";
import taali from "../assets/images/taali.jpeg";
import unwired from "../assets/sponsors/unwired.png";
import fpv from "../assets/sponsors/fpv.png";

import asus from "../assets/sponsors/asus.png";

import skippi from "../assets/sponsors/skippi.png";
import grad from "../assets/sponsors/grad.png";
import dlink from "../assets/sponsors/dlink.png";

import hover_logo from "../assets/sponsors/hover_logo.png";
import instax from "../assets/sponsors/instax.png";

import { Card, CardContent, HoverText } from "@/components/ui/card";

const sponsor = [
  {
    title: "IMS Goa",
    link: "https://www.imsindia.com",
    dsg: "Exam Prep Partner",
    src: ims_goa,
  },
  {
    title: "Languify",
    link: "https://languify.in",
    dsg: "Assessment Partner",
    src: languify,
  },
  {
    title: "Brainwonders",
    link: "https://www.brainwonders.in",
    dsg: "Official Powered by Sponsor of Qriosity",
    src: brain_wonders,
  },
  {
    title: "Learners Cortex",
    link: "https://learnerscortex.com",
    dsg: "Official Learning Partner",
    src: learners_cortex,
  },
  {
    title: "SDA Bocconi",
    link: "https://www.sdabocconi.it/en/home",
    dsg: "Associate Sponsor of Corporate",
    src: sda_bocconi,
  },
  {
    title: "Nomura Services India Private Limited",
    link: "https://www.nomura.com/",
    dsg: "Co-Title",
    src: nomura,
  },
  {
    title: "D-Link",
    link: "https://www.dlink.com/in/en",
    dsg: "Official Connectivity Partner",
    src: dlink,
  },
  {
    title: "Prep For Grad School",
    link: "https://prepforgradschool.com/",
    dsg: "Festive Partner",
    src: grad,
  },
  {
    title: "Hover Robotix",
    link: "https://hoverrobotix.com/",
    dsg: "Official Powered by Sponsor of Roboficial",
    src: hover_logo,
  },
  {
    title: "UnwiredConnect",
    link: "https://www.unwiredconnect.in/",
    dsg: "Official Wireless Partner",
    src: unwired,
    style: "bg-white",
  },
  {
    title: "Inside FPV",
    link: "https://insidefpv.com/",
    dsg: "Official Drone Prize Partner",
    src: fpv,
  },
  {
    title: "Instax",
    link: "https://www.instax.in",
    dsg: "Special Moment Partner",
    src: instax,
  },
  {
    title: "Skippi",
    link: "https://skippi.in/",
    dsg: "Official Ice Popsicle Partner",
    src: skippi,
  },
  {
    title: "Asus",
    link: "https://www.asus.com/in/",
    dsg: "Official Partner of Matka",
    src: asus,
  },
  {
    title: "Hexo",
    link: "",
    dsg: "Official Al Partner",
    src: hexo,
  },
  {
    title: "Taali",
    link: "https://taalifoods.in/",
    dsg: "Festival Partner",
    src: taali,
  },
  {
    title: "Reals",
    link: "",
    dsg: "Hydration Partner",
    src: real,
  },
];

function Sponsors() {
  return (
    <>
      <div
        className="h-full min-h-screen relative bg-cover  flex flex-col items-center"
        style={{
          backgroundImage: `url(${sponsors})`,
          backgroundRepeat: "no-repeat",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <TopBar />
        <div className="flex-grow flex items-center  flex-col justify-center">
          <img src={sponsors_logo} alt="Sponsors logo" />
        </div>
      </div>
      <div className="absolute bottom-0 w-full h-[20vh] bg-gradient-to-t from-black to-transparent" />
      <div
        className="flex-grow flex flex-col pt-36 justify-center   bg-black"
        style={{
          backgroundImage: `url(${events_bg})`,
          backgroundSize: "cover",
        }}
      >
        <div className="lg:mx-[auto] justify-center z-10 flex max-w-[100vw] lg:max-w-[50vw] flex-col">
          {sponsor.map((sponsor, index) => {
            return (
              <>
                <a href={sponsor.link} target="_blank">
                  <div className="font-azonix text-center mb-6 text-white text-2xl">
                    {sponsor.dsg}
                  </div>
                  <Card
                    className={`lg:h-96 lg:w-96 w-[80vw] h-[80vw] flex mb-24 justify-center mx-[auto]`}
                  >
                    <CardContent className="flex object-contain items-center justify-center">
                      <img
                        src={sponsor.src}
                        alt={`Image ${index + 1}`}
                        className={`object-contain ${
                          sponsor.title == "Reals" ? "max-h-80 my-auto" : ""
                        } ${sponsor.style ? "bg-white p-2" : ""}`}
                      />
                    </CardContent>
                  </Card>
                </a>
              </>
            );
          })}
          <>
            <div className="font-azonix text-center mb-6 text-white text-2xl">
              Hackathon Partner
            </div>
            <a href="https://link.reclaimprotocol.org/brand" target="_black">
              <Card
                className={`lg:h-96 lg:w-96 w-[80vw] h-[80vw] flex mb-24 justify-center mx-[auto]`}
              >
                <CardContent className="flex object-cover  items-center justify-center">
                  <img
                    src={reclaim}
                    alt={`Image reclaim}`}
                    className=" object-cover "
                  />
                </CardContent>
              </Card>
            </a>
          </>
        </div>
      </div>
    </>
  );
}

export default Sponsors;
