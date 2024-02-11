import exhibitions from "../assets/images/exhibition.png";
import TopBar from "../components/TopBar";
import exhibitions_logo from "../assets/images/exhibitions_logo.png";
import events_bg from "../assets/images/events_bg.jpg";
import { CardForEvents } from "../components/ui/CardEvents";
import dsa from "../assets/images/cards/dsa.png"
import ai from "../assets/images/cards/ai.png"
import stock from "../assets/images/cards/stock.png"
import DAKSH from "../assets/images/cards/DAKSH.jpeg"
import INDRO from "../assets/images/cards/INDRO.jpeg"
import nft from "../assets/images/cards/nft.png"
import mngment from "../assets/images/cards/mngment.png"
import ui from "../assets/images/cards/ui.png"

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
            <div className="absolute bottom-0 w-full h-[20vh] bg-gradient-to-t from-black to-transparent" />
            <div className="flex-grow flex flex-col justify-center bg-black"
                style={{
                    backgroundImage: `url(${events_bg})`,
                    backgroundSize: "cover",
                }}
            >
                <div className="relative">
                    <div className="absolute mb-15 top-0 left-0 w-full h-[20vh] bg-gradient-to-b from-black to-transparent" />
                </div>
                <div className="flex flex-col md:justify-start mt-20 justify-center ml-5 md:ml-20 ">
                    <div className="flex flex-wrap">
                        <CardForEvents title="INDRO 5.0" imageSrc={INDRO} description="Top 5 most advanced humanoid robots of India.
                        Highest number of active Axis(joints) that is 18 Axis in India. A versatile 6-foot humanoid robot that talks, dances, serves, felicitates, advertises, clicks selfies, guides, monitors events, and operates 24/7 with its advanced features like voice communication, precise movements, and dual lithium-ion batteries for uninterrupted performance." />
                        <CardForEvents title="DRDO DAKSH" imageSrc={DAKSH} description="Daksh: A groundbreaking creation by the Defence Research and Development Organisation, revolutionizing defense technology. Engineered for bomb recovery, it effortlessly navigates various terrains, neutralizing threats with its robotic arm, X-Ray device, and shotgun. With remote control capabilities over 500 meters, Daksh ensures safety with its precision and military-approved design." />
                        <CardForEvents title="INDIAN NAVY EXHIBIT" imageSrc={stock} description="Are you ready to take on the world's best and claim victory? The arena is waiting for you, so lace up your boots and let's play" />
                        {/* <CardForEvents title="NFT AND WEB 3.0" imageSrc = {nft}  description="Get your team ready and join the ultimate Valorant tournament. Prove your worth, master your aim, and become the champion. Are you up for the challenge?" />
                        <CardForEvents title="PRODUCT MANAGMENT 101" imageSrc = {mngment}  description="Get your team ready and join the ultimate Valorant tournament. Prove your worth, master your aim, and become the champion. Are you up for the challenge?" />
                        <CardForEvents title="UI/UX BY LOLLYPOP DESIGNS"  imageSrc = {ui} description="Get your team ready and join the ultimate Valorant tournament. Prove your worth, master your aim, and become the champion. Are you up for the challenge?" />
                        <CardForEvents title="DATA STRUCTURES AND ALGORITHMS" imageSrc = {dsa}  description="Get your team ready and join the ultimate Valorant tournament. Prove your worth, master your aim, and become the champion. Are you up for the challenge?" /> */}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Exhibhition;