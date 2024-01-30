import workshops from "../assets/workshop.png";
import TopBar from "../components/TopBar";
import workshops_logo from "../assets/workshops_logo.png";

function Workshop() {
    return (
      
            <div
                className="h-full min-h-screen relative bg-cover flex flex-col items-center"
                style={{
                    backgroundImage: `url(${workshops})`,
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