import guestLectures from "../assets/images/GuestLecture.png";
import TopBar from "../components/TopBar";
import guest_logo from "../assets/images/guest_logo.png";
import isMobile from "../components/useIsMobile.js";
import aman from "../assets/images/aman.jpeg";

function GuestLectures() {
  return (
    <>
      <div
        className="h-full min-h-screen relative bg-cover flex flex-col items-center"
        style={{
          backgroundImage: `url(${guestLectures})`,
          backgroundRepeat: "no-repeat",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <TopBar />
        <div className="flex-grow flex items-center  flex-col justify-center">
          <img src={guest_logo} alt="Guest Lectures logo" />
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${aman})`,
          backgroundRepeat: "no-repeat",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: `${isMobile ? "66.7vw" : "100vh"}`,
          backgroundSize: "cover",
        }}
      ></div>
    </>
  );
}

export default GuestLectures;
