import sponsors from "../assets/images/sponsors.png";
import TopBar from "../components/TopBar";
import sponsors_logo from "../assets/images/sponsors_logo.png";

function Sponsors() {
    return (
        <>
            <div
                className="h-full min-h-screen relative bg-cover  flex flex-col items-center"
                style={{
                    backgroundImage: `url(${sponsors})`,
                    backgroundRepeat: "no-repeat",
                    marginLeft: 'auto',
                    marginRight: 'auto',
                }}
            >
                <TopBar />
                <div className="flex-grow flex items-center  flex-col justify-center">
                    <img src={sponsors_logo} alt="Sponsors logo" />
                </div>
            </div>
        </>
    );
}

export default Sponsors;