import nights from "../assets/images/nights.png";
import TopBar from "../components/TopBar";
import night_logo from "../assets/images/nights_logo.png";

function Nights() {
    return (
        <>
            <div
                className="h-full min-h-screen relative bg-cover flex flex-col items-center"
                style={{
                    backgroundImage: `url(${nights})`,
                    backgroundRepeat: "no-repeat",
                    marginLeft: 'auto',
                    marginRight: 'auto',
                }}
            >
                <TopBar />
                <div className="flex-grow flex items-center  flex-col justify-center">
                    <img src={night_logo} alt="Nights logo" />
                </div>
            </div>
        </>
    );
}

export default Nights;