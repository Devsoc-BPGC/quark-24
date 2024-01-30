import exhibitions from "../assets/exhibition.png";
import TopBar from "../components/TopBar";
import exhibitions_logo from "../assets/exhibitions_logo.png";

function Exhibhition() {
    return (
        <>
            <div
                className="h-full min-h-screen relative bg-cover flex flex-col items-center"
                style={{
                    backgroundImage: `url(${exhibitions})`,
                }}
            >
                <TopBar />
                <div className="flex-grow flex items-center  flex-col justify-center">
                    <img src={exhibitions_logo} alt="Exhibitions logo" />
                </div>
            </div>
        </>
    );
}

export default Exhibhition;