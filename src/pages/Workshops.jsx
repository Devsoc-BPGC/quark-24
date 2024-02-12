import workshops from "../assets/images/workshop.png";
import TopBar from "../components/TopBar";
import workshops_logo from "../assets/images/workshops_logo.png";
import events_bg from "../assets/images/events_bg.jpg";
import { CardForEvents } from "../components/ui/CardWorkshops";
import ai from "../assets/images/cards/ai.png"
import stock from "../assets/images/cards/stock.png"
import nft from "../assets/images/cards/nft.png"
import mngment from "../assets/images/cards/mngment.png"
import ui from "../assets/images/cards/ui.png"
import dsa from "../assets/images/cards/dsa.png"
import cons from "../assets/images/cards/cons.jpeg"
import data from "../assets/images/cards/data.jpeg"
import risk from "../assets/images/cards/risk.jpeg"
import cloud from "../assets/images/cards/cloud.jpeg"
import hack from "../assets/images/cards/hack.jpeg"

function Workshop() {
    return (
        <>
            <div
                className="h-full min-h-screen relative bg-cover flex flex-col items-center"
                style={{
                    backgroundImage: `url(${workshops})`,
                    backgroundRepeat: "no-repeat",
                    marginLeft: 'auto',
                    marginRight: 'auto',
                }}
            >
                <TopBar />
                <div className="flex-grow flex items-center  flex-col justify-center">
                    <img src={workshops_logo} alt="Workshops logo" />
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
                        <CardForEvents title="MICROSOFT AI/ML" imageSrc={ai} description="Unlock the potential of artificial intelligence and machine learning with our Microsoft AI/ML Workshop. Immerse yourself in hands-on sessions utilizing Microsoft Azure's robust AI and ML tools." />
                        <CardForEvents title="MICROSOFT DATA SCIENCE" imageSrc={data} description="Unleash the power of data science with our Microsoft Data Science Workshop. Immerse yourself in the Microsoft ecosystem, leveraging tools like Azure Machine Learning, Power BI, and SQL Server for comprehensive data analysis." />
                        <CardForEvents title="BAIN CONSULTING" imageSrc={cons} description="Embark on a transformative journey with Bain & Company's Consulting Workshop. Engage in dynamic case simulations, strategic problem-solving exercises, and collaborative sessions designed to mirror the challenges faced in the consulting industry." />
                        <CardForEvents title="GOOGLE CLOUD AND CYBERSECURITY" imageSrc={cloud} description="Elevate your expertise in cloud and cybersecurity with our Google Cloud and Cybersecurity Workshop. Dive into the comprehensive suite of Google Cloud services, exploring infrastructure security, data protection, and threat detection strategies. " />
                        <CardForEvents title="FLIPKART PRODUCT MANAGEMENT" imageSrc={mngment} description="Join our Flipkart Product Management Workshop for a deep dive into the intricacies of effective product management. Explore key strategies, learn to navigate the product development lifecycle, and gain insights into market trends. " />
                        <CardForEvents title="TEAM BOUNTERS ETHICAL HACKING" imageSrc={hack} description="Embark on a cybersecurity journey with our Team Bounters Ethical Hacking Workshop. Delve into the world of ethical hacking, where you'll learn cutting-edge techniques to identify and mitigate security vulnerabilities. " />
                        <CardForEvents title="ATLASSIAN SOFTWARE DEVELOPMENT" imageSrc={dsa} description="Accelerate your software development prowess at our Atlassian Software Development Workshop. Dive into the comprehensive suite of Atlassian tools, exploring Jira, Confluence, Bitbucket, and more." />
                        <CardForEvents title="BLACKROCK RISK MANAGEMENT" imageSrc={risk} description="Master the intricacies of risk management with our BlackRock Risk Management Workshop. Delve into the world of financial risk analysis, exploring methodologies, models, and tools utilized by industry leaders. " />

                    </div>
                </div>
            </div>
        </>
    );
}

export default Workshop;


