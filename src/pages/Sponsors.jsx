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

import { Card, CardContent, HoverText } from "@/components/ui/card";

let sponsor = [
  {
    name: "sda_bocconi",
    src: sda_bocconi,
    title: "Associate Sponsor of Corporate",
  },
  {
    name: "nomura",
    src: nomura,
    title: "Co-Title",
  },
  {
    name: "learners cortex",
    src: learners_cortex,
    title: "Official Learning Partner",
  },
  {
    name: "languify",
    src: languify,
    title: "Assessment Partner",
  },
  {
    name: "ims goa",
    src: ims_goa,
    title: "Exam Prep Partner",
  },
  {
    name: "brain wonders",
    src: brain_wonders,
    title: "Official Powered by Sponsor of Qriosity",
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
          {sponsor.map((sponsorItem, index) => {
            return (
              <>
                <div className="font-azonix text-center mb-6 text-white text-2xl">
                  {sponsorItem.title}
                </div>
                <Card
                  className={`lg:h-96 lg:w-96 w-[80vw] h-[80vw] flex mb-24 justify-center mx-[auto]`}
                >
                  <CardContent className="flex object-cover  items-center justify-center">
                    <img
                      src={sponsorItem.src}
                      alt={`Image ${index + 1}`}
                      className=" object-cover "
                    />
                  </CardContent>
                </Card>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Sponsors;
