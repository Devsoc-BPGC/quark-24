import exhibitions from "../assets/images/exhibition.png";
import TopBar from "../components/TopBar";
import exhibitions_logo from "../assets/images/exhibitions_logo.png";

function Exhibhition() {
    return (
        <>
            <div
                className="h-full min-h-screen relative bg-cover  flex flex-col items-center"
                style={{
                    backgroundImage: `url(${exhibitions})`,
                    backgroundRepeat: "no-repeat",
                    marginLeft: 'auto',
                    marginRight: 'auto',
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