import event from "../assets/events.png";
import TopBar from "../components/TopBar";
import events_logo from "../assets/events_logo.png";

function Event() {
    return (
        <>
            <div
                className="h-full min-h-screen relative bg-cover flex flex-col items-center"
                style={{
                    backgroundImage: `url(${event})`,
                    backgroundRepeat: "no-repeat",
                }}
            >
                <TopBar />
                <div className="flex-grow flex items-center  flex-col justify-center">
                    <img src={events_logo} alt="Events logo" />
                </div>
            </div>
        </>
    );
}

export default Event;