import workshops from "../assets/images/workshop.png";
import TopBar from "../components/TopBar";
import workshops_logo from "../assets/images/workshops_logo.png";
import events_bg from "../assets/images/events_bg.jpg";
import { CardForEvents } from "../components/ui/CardEvents";
import ai from "../assets/images/cards/ai.png"
import stock from "../assets/images/cards/stock.png"
import nft from "../assets/images/cards/nft.png"
import mngment from "../assets/images/cards/mngment.png"
import ui from "../assets/images/cards/ui.png"
import dsa from "../assets/images/cards/dsa.png"

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
            <div className="flex-grow flex flex-col justify-center bg-black" 
               style={{
                backgroundImage: `url(${events_bg})`,
                backgroundSize: "cover",
               }}
            >
                <div className= "flex flex-col md:justify-start mt-20 justify-center ml-5 md:ml-20 ">
                    <div className="flex flex-wrap">
                        <CardForEvents title="MICROSOFT AI/ML"  imageSrc = {ai} description="Unlock the potential of artificial intelligence and machine learning with our Microsoft AI/ML Workshop. Immerse yourself in hands-on sessions utilizing Microsoft Azure's robust AI and ML tools. From building intelligent applications to leveraging Azure Machine Learning services, this workshop provides a comprehensive understanding of AI and ML in the Microsoft ecosystem. Explore real-world applications, learn to deploy models, and gain insights into cutting-edge AI technologies. Whether you're a developer, data scientist, or business professional, this workshop offers a unique opportunity to harness the transformative power of Microsoft's AI and ML capabilities for innovation and business success." />
                        <CardForEvents title="MICROSOFT DATA SCIENCE"  imageSrc = {stock} description="Unleash the power of data science with our Microsoft Data Science Workshop. Immerse yourself in the Microsoft ecosystem, leveraging tools like Azure Machine Learning, Power BI, and SQL Server for comprehensive data analysis. Through hands-on exercises and real-world case studies, you'll master the art of extracting valuable insights from data. Whether you're a data scientist, analyst, or business professional, this workshop provides a deep dive into statistical modeling, machine learning algorithms, and effective data visualization. Join us to sharpen your data science skills and stay at the forefront of innovation in the Microsoft data landscape." />
                        <CardForEvents title="BAIN CONSULTING" imageSrc = {nft}  description="Embark on a transformative journey with Bain & Company's Consulting Workshop. Engage in dynamic case simulations, strategic problem-solving exercises, and collaborative sessions designed to mirror the challenges faced in the consulting industry. Led by seasoned consultants, this workshop offers a firsthand experience of Bain's renowned approach to solving complex business problems. Whether you're an aspiring consultant or a professional looking to refine your skills, join us for a unique opportunity to gain insights, network with industry experts, and immerse yourself in the world of strategic consulting at Bain & Company." />
                        <CardForEvents title="GOOGLE CLOUD AND CYBERSECURITY" imageSrc = {mngment}  description="Elevate your expertise in cloud and cybersecurity with our Google Cloud and Cybersecurity Workshop. Dive into the comprehensive suite of Google Cloud services, exploring infrastructure security, data protection, and threat detection strategies. Through practical exercises and simulations, you'll gain hands-on experience in securing cloud environments effectively. Our expert instructors will guide you through the latest cybersecurity best practices, covering topics such as identity management, encryption, and compliance. Join us in this workshop to empower yourself with the knowledge and skills needed to navigate the evolving landscape of cloud technology and cybersecurity." />
                        <CardForEvents title="FLIPKART PRODUCT MANAGEMENT"  imageSrc = {mngment} description="Join our Flipkart Product Management Workshop for a deep dive into the intricacies of effective product management. Explore key strategies, learn to navigate the product development lifecycle, and gain insights into market trends. Through interactive sessions, real-world case studies, and expert guidance, elevate your product management skills to drive innovation and success in the dynamic e-commerce landscape. Don't miss this opportunity to refine your expertise and network with industry professionals." />
                        <CardForEvents title="TEAM BOUNTERS ETHICAL HACKING" imageSrc = {dsa}  description="Embark on a cybersecurity journey with our Team Bounters Ethical Hacking Workshop. Delve into the world of ethical hacking, where you'll learn cutting-edge techniques to identify and mitigate security vulnerabilities. Engage in hands-on exercises, simulations, and ethical hacking challenges under the guidance of seasoned experts. This workshop equips you with the skills needed to secure systems, networks, and applications responsibly. Join us to become a proficient ethical hacker, defending against cyber threats in today's digital landscape." />
                        <CardForEvents title="ATLASSIAN SOFTWARE DEVELOPMENT" imageSrc = {dsa}  description="Accelerate your software development prowess at our Atlassian Software Development Workshop. Dive into the comprehensive suite of Atlassian tools, exploring Jira, Confluence, Bitbucket, and more. Gain hands-on experience in optimizing collaboration, streamlining workflows, and ensuring seamless project management. Uncover best practices in agile development, version control, and team coordination. Whether you're a seasoned developer or new to the Atlassian ecosystem, this workshop provides valuable insights to enhance your software development efficiency and elevate your team's productivity. Join us to harness the power of Atlassian tools for unparalleled development success." />
                        <CardForEvents title="BLACKROCK RISK MANAGEMENT" imageSrc = {mngment}  description="Master the intricacies of risk management with our BlackRock Risk Management Workshop. Delve into the world of financial risk analysis, exploring methodologies, models, and tools utilized by industry leaders. Through in-depth case studies and practical simulations, you'll develop a nuanced understanding of market, credit, and operational risks. Our expert instructors will guide you in navigating complex financial landscapes, ensuring you acquire the skills needed to make informed decisions. Elevate your risk management proficiency and join us in this workshop designed to empower professionals in the dynamic field of finance." />
                    
                    </div>
                </div>
                </div>
        </>
    );
}

export default Workshop;


