import sponsors from "../assets/images/sponsors.png";
import TopBar from "../components/TopBar";
import events_bg from "../assets/images/events_bg.jpg";
import CampusVarta from "../assets/images/media/CampusVarta.png";
import unstop from "../assets/images/media/unstop.jpg";
import CampusTimesPune from "../assets/images/media/CampusTimesPune.jpg";
import Goa_365 from "../assets/images/media/Goa_365.jpg";
import indian_college_fest from "../assets/images/media/indian_college_fest.png";
import InsightOne from "../assets/images/media/InsightOne.png";
import OhCampus from "../assets/images/media/OhCampus.png";
import RDX from "../assets/images/media/RDX.png";
import VYGR from "../assets/images/media/VYGR.png";
import Zexpr from "../assets/images/media/Zexpr.png";
import DU_Beat from "../assets/images/media/DU_Beat.png";
import Knowafest from "../assets/images/media/Knowafest.png";
import Valorant from "../assets/images/media/Valorant.jpg";
import NoticeBard from "../assets/images/media/NoticeBard.png";
import TOI from "../assets/images/media/TOI.png";
import Techstory from "../assets/images/media/Techstory.png";
import Golden_Goa from "../assets/images/media/Golden_Goa.jpeg";
import punekar from "../assets/images/media/punekar.png";
import The_Hindu from "../assets/images/media/The_Hindu.jpg";
import ccmag from "../assets/images/media/ccmag.png";
import { Card, CardContent, HoverText } from "@/components/ui/card";

const arr = [
  {
    title: "Unstop - Official Hosting Partner",
    link: "https://unstop.com/",
    logo: unstop,
  },
  {
    title: "Campus Varta",
    link: "https://www.campusvarta.com/",
    logo: CampusVarta,
  },
  {
    title: "Campus Times Pune",
    link: "https://www.campustimespune.com/",
    logo: CampusTimesPune,
  },
  {
    title: "Curriculum Magazine",
    link: "https://curriculum-magazine.com/",
    logo: ccmag,
  },
  {
    title: "Goa 365",
    link: "https://www.goa365.tv/",
    logo: Goa_365,
  },
  {
    title: "IndiaCollegeFest",
    link: "https://indiacollegefest.com/",
    logo: indian_college_fest,
  },
  {
    title: "Insightone",
    link: "https://insightone.se/en/",
    logo: InsightOne,
    style: "bg-white",
  },
  {
    title: "OhCampus",
    link: "https://ohcampus.com/",
    logo: OhCampus,
  },
  {
    title: "RDX Goa",
    link: "https://rdxgoa.com/",
    logo: RDX,
  },
  {
    title: "VYGR",
    link: "https://vygrnews.com/",
    logo: VYGR,
    style: "bg-white",
  },
  {
    title: "ZEXPR",
    link: "https://zexprwire.com/",
    logo: Zexpr,
    style: "bg-white",
  },
  {
    title: "DU Beat",
    link: "https://dubeat.com/",
    logo: DU_Beat,
    style: "bg-white",
  },
  {
    title: "Knowafest",
    link: "https://www.knowafest.com/explore/events",
    logo: Knowafest,
  },
  {
    title: "Riot Games",
    link: "https://www.riotgames.com/en",
    logo: Valorant,
  },
  {
    title: "NoticeBard",
    link: "https://noticebard.com/",
    logo: NoticeBard,
    style: "bg-white",
  },
  {
    title: "TOI",
    link: "https://timesofindia.indiatimes.com/",
    logo: TOI,
  },
  {
    title: "Techstory",
    link: "https://techstory.in",
    logo: Techstory,
  },
  {
    title: "Golden Goa",
    link: "https://mygoldengoa.com/",
    logo: Golden_Goa,
  },
  {
    title: "Punekar News",
    link: "https://www.punekarnews.in/",
    logo: punekar,
  },
  {
    title: "The Hindu",
    link: "https://www.thehindu.com/",
    logo: The_Hindu,
  },
];

function MediaPartner() {
  return (
    <div style={{ overflowX: "hidden" }}>
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
        <div className="flex-grow font-roboInvaders lg:text-9xl md:text-6xl text-4xl md:tracking-wide text-white flex items-center z-20 flex-col justify-center">
          Media Partners
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
          {arr.map((arr, index) => {
            return (
              <>
                <div className="font-azonix text-center mb-6 text-white text-3xl">
                  {arr.title}
                </div>
                <a href={arr.link} target="_blank">
                  <Card
                    className={`lg:h-96 lg:w-96 w-[80vw] h-[80vw] flex mb-24  justify-center mx-[auto]`}
                  >
                    <CardContent
                      className={`flex object-cover   items-center justify-center`}
                    >
                      <img
                        src={arr.logo}
                        alt={`Image ${index + 1}`}
                        className={` ${arr.style} object-cover ${
                          arr.style ? "p-2" : ""
                        }`}
                      />
                    </CardContent>
                  </Card>
                </a>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default MediaPartner;
