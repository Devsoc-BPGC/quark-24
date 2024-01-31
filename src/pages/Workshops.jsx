import workshops from "../assets/images/workshop.png";
import TopBar from "../components/TopBar";
import workshops_logo from "../assets/images/workshops_logo.png";

function Workshop() {
    return (
      
            <div
                className="h-full min-h-screen relative bg-cover flex flex-col items-center"
                style={{
                    backgroundImage: `url(${workshops})`,
                    backgroundRepeat: "no-repeat",
                    marginLeft: 'auto',
                    marginRight: 'auto',
                }}
            >
                <TopBar />
                <div className="flex-grow flex items-center  flex-col justify-center">
                    <img src={workshops_logo} alt="Workshops logo" />
                </div>
            </div>
      
    );
}

export default Workshop;