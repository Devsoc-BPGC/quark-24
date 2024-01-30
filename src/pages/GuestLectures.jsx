import guestLectures from "../assets/GuestLecture.png";
import TopBar from "../components/TopBar";
import guest_logo from "../assets/guest_logo.png";

function GuestLectures() {
    return (
        <>
            <div
                className="h-full min-h-screen relative bg-cover flex flex-col items-center"
                style={{
                    backgroundImage: `url(${guestLectures})`,
                }}
            >
                <TopBar />
                <div className="flex-grow flex items-center  flex-col justify-center">
                    <img src={guest_logo} alt="Guest Lectures logo" />
                </div>
            </div>
        </>
    );
}

export default GuestLectures;