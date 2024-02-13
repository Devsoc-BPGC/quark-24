import team from "../assets/images/team.png";
import TopBar from "../components/TopBar";
import team_logo from "../assets/images/team_logo.png";
import { Card, CardContent, BottomText } from "@/components/ui/card";
import events_bg from "../assets/images/events_bg.jpg";

let arr = [
  {
    name: "Ipshita Bandyopadhyay",
    img: "https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg",
    dsgn: "Quark coordinator",
    dpt: "Quark Controls",
  },
  {
    name: "Abhyuday Singh",
    img: "https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg",
    dsgn: "General secretary ",
    dpt: "CSA",
  },
  {
    name: "Anshal",
    img: "https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg",
    dsgn: "Quark coordinator",
    dpt: "Department of Photography",
  },
  {
    name: "Armesh Pereira",
    img: "https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg",
    dsgn: "Quark Media Coordinator ",
    dpt: "Department Of Media And Coverage ",
  },
  {
    name: "Pranshul Garg",
    img: "https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpgs",
    dsgn: "Chief Coordinator",
    dpt: "Department of Publicity and Public Relations",
  },

  {
    name: "Pranshul Garg",
    img: "",
    dsgn: "Chief Coordinator",
    dpt: "Department of Publicity and Public Relations.",
  },
  {
    name: "Avinash Reddy ",
    img: "",
    dsgn: "Chief Coordinator",
    dpt: "DoSAR",
  },

  {
    name: "Dhruv Baphana",
    img: "",
    dsgn: "Food and Beverage Head",
    dpt: "Department of Sponsorship and Marketing",
  },
  {
    name: "Aditya PK",
    img: "",
    dsgn: "Head of Sponsorship and Marketing, Quark",
    dpt: "Department of Sponsorship and Marketing",
  },
  {
    name: "Preet Shah",
    img: "",
    dsgn: "Chief Coordinator",
    dpt: "Department of Media and Coverage",
  },
  {
    name: "Atharva Deshpande",
    img: "",
    dsgn: "Secretary-General",
    dpt: "BITSMUN Goa",
  },
  {
    name: "Chahak Punamiya",
    img: "",
    dsgn: "Publicity & Design Head",
    dpt: "Department of Publicity & Public Relations ",
  },
];

function Team() {
  return (
    <>
      <div
        className="h-full min-h-screen relative bg-cover flex flex-col items-center"
        style={{
          backgroundImage: `url(${team})`,
          backgroundRepeat: "no-repeat",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <TopBar />
        <div className="flex-grow flex items-center  flex-col justify-center">
          <img src={team_logo} alt="Team logo" />
        </div>
      </div>
      <div
        className="flex-grow flex flex-col pt-36 justify-center   bg-black"
        style={{
          backgroundImage: `url(${events_bg})`,
          backgroundSize: "cover",
        }}
      >
        <div className="flex flex-row flex-wrap pb-12 justify-evenly">
          {arr.map((arr, index) => (
            <>
              <div key={index}>
                <Card className="lg:h-96 lg:w-96 h-80 w-80 mt-10 mb-14 cursor-">
                  <CardContent className="flex items-center justify-center">
                    <img
                      src="https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"
                      alt={`Image ${index}`}
                      className="aspect-square   p-2 rounded-lg object-cover"
                    />
                    <BottomText
                      title={arr.name}
                      description={`${arr.dsgn}`}
                      dept={arr.dpt}
                      className="font-azonix"
                    />
                  </CardContent>
                </Card>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}

export default Team;
