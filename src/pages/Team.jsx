import team from "../assets/images/team.png";
import TopBar from "../components/TopBar";
import team_logo from "../assets/images/team_logo.png";

function Team() {
    return (
        <>
            <div
                className="h-full min-h-screen relative bg-cover flex flex-col items-center"
                style={{
                    backgroundImage: `url(${team})`,
                    backgroundRepeat: "no-repeat",
                    marginLeft: 'auto',
                    marginRight: 'auto',
                }}
            >
                <TopBar />
                <div className="flex-grow flex items-center  flex-col justify-center">
                    <img src={team_logo} alt="Team logo" />
                </div>
            </div>
        </>
    );
}

export default Team;