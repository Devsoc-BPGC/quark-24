import event from "../assets/images/events.png";
import TopBar from "../components/TopBar";
import events_logo from "../assets/images/events_logo.png";
import { CardForEvents } from "../components/ui/CardEvents";
import transition from "../assets/images/transition_rectangle.png";
import valorant from "../assets/images/cards/valorant.png";
import fifa from "../assets/images/cards/fifa.png";
import roboclench from "../assets/images/cards/roboclench.png";
import roborace from "../assets/images/cards/roborace.png";
import robosoccer from "../assets/images/cards/robosoccer.png";
import robowar from "../assets/images/cards/robowars.png";
import thechallenge from "../assets/images/cards/The_challenge.png";
import maze_runner from "../assets/images/cards/maze_runner.png";
import regalia from "../assets/images/cards/Regalia.png";
import CaseCrackdown from "../assets/images/cards/CaseCrackdown.png";
import policy from "../assets/images/cards/Policy.png";
import bullion from "../assets/images/cards/Bullion.png";
import codejam from "../assets/images/cards/CodeJam.png";
import codewars from "../assets/images/cards/CodeWars.png";
import hackathon from "../assets/images/cards/Hackathon.png";
import fools_coding from "../assets/images/cards/Fools_Coding.png";
import CTF from "../assets/images/cards/CTF.png";
import cryptomania from "../assets/images/cards/CRYPTOMANIA.png";
import anftee from "../assets/images/cards/ANFTEE.png";
import dappthon from "../assets/images/cards/DAPP-THON.png";
import ganimatronics from "../assets/images/cards/Ganimatronics.png";
import quiz from "../assets/images/cards/quiz.png";
import search from "../assets/images/cards/search.png";
import trailbazers from "../assets/images/cards/trailbazers.png";
import burnout from "../assets/images/cards/Burnout.png";
import cubix from "../assets/images/cards/cubix.png";
import idk from "../assets/images/cards/idk.png";
import debate from "../assets/images/cards/debate.png";
import enigmatica from "../assets/images/cards/enigmatica.png";
import digilogica from "../assets/images/cards/digilogica.png";
import ucmania from "../assets/images/cards/ucmania.png";
import bgmi from "../assets/images/cards/bgmi.jpg";
import events_bg from "../assets/images/events_bg.jpg";
import React from "react";
import tq from "../assets/images/cards/tq.jpg";
import show from "../assets/images/cards/show.jpg";

function Event() {
  return (
    <>
      <div
        className="flex-grow h-full min-h-screen relative bg-cover flex flex-col items-center"
        style={{
          backgroundImage: `url(${event}), url(${transition})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          transition: "background-position 1s ease-in-out",
          margin: 0,
          padding: 0,
        }}
      >
        <TopBar />
        <div className="flex-grow flex items-center flex-col justify-center">
          <img src={events_logo} alt="Events logo" />
        </div>
      </div>
      <div className="absolute bottom-0 w-full h-[20vh] bg-gradient-to-t from-black to-transparent" />
      <div
        className="flex-grow flex flex-col justify-center bg-black"
        style={{
          backgroundImage: `url(${events_bg})`,
          backgroundSize: "cover",
        }}
      >
        <div className="relative">
          <div className="absolute mb-15 top-0 left-0 w-full h-[20vh] bg-gradient-to-b from-black to-transparent" />
        </div>

        <div className="flex flex-col md:justify-start mt-20 justify-center ml-5 md:ml-20 ">
          <div className="text-white text-5xl font-normal font-roboInvaders ml-5 mb-2 mt-9">
            ROBOFICIAL
          </div>
          <div className="flex flex-wrap">
            <CardForEvents
              title="ROBOWARS"
              imageSrc={robowar}
              description="Gear up for an adrenaline-pumping spectacle at our techfest's Robowars! Witness custom-built robots battle it out in a fierce arena, showcasing engineering prowess and strategic brilliance"
            />
            <CardForEvents
              title="ROBORACE"
              imageSrc={roborace}
              description="Experience the thrill of the race as cutting-edge robots compete for the top spot in a lightning-fast dash to the finish line."
            />
            <CardForEvents
              title="ROBOSOCCER"
              imageSrc={robosoccer}
              description="Experience the thrill of the race as cutting-edge robots compete for the top spot in a lightning-fast dash to the finish line."
            />
            <CardForEvents
              title="TIME CHALLENGE"
              imageSrc={thechallenge}
              description="Get ready to put your engineering skills to the test at Time Challenge, where you'll build a lightning-fast line follower that can tackle any circuit and race to the finish line in record time."
            />
            <CardForEvents
              title="ROBOCLENCH"
              imageSrc={roboclench}
              description="Get ready to witness the ultimate test of robotic dexterity as machines with claws battle it out to pick up and hold on tight to victory at RoboClench"
            />
            <CardForEvents
              title="ROBOSUMO"
              imageSrc={maze_runner}
              description="Prepare for intense clashes and strategic showdowns at our techfest's Robosumo! Watch pint-sized robots engage in fierce sumo-style battles, pushing boundaries and opponents out of the ring with precision and wit."
            />
          </div>
        </div>
        <div className="flex flex-col md:justify-start mt-20 justify-center ml-5 md:ml-20">
          <div className="text-white text-5xl font-normal font-roboInvaders ml-5 mb-2">
            CORPORATE
          </div>
          <div className="flex flex-wrap">
            <CardForEvents
              title="REGALIA"
              imageSrc={regalia}
              description="Join us at Regalia to be held during Quark, the biggest techno-management fest of India held at BITS-Pilani, Goa Campus and manifest your dream of having a shark tank like experience."
            />
            <CardForEvents
              title="CASE CRACKDOWN"
              imageSrc={CaseCrackdown}
              description="Calling all aspiring strategists and marketers! Join Case Crackdown and take on real-world business challenges."
            />
            {/* <CardForEvents
              title="POLICY MAVERICK"
              imageSrc={policy}
              description="Get your team ready and join the ultimate Valorant tournament. Prove your worth, master your aim, and become the champion. Are you up for the challenge?"
            /> */}
            <CardForEvents
              title="BULLION BEATDOWN"
              imageSrc={bullion}
              description="Put your trading skills to the test in our intense market competition featuring gold trading and negotiations"
            />
          </div>
        </div>
        <div className="flex flex-col md:justify-start mt-20 justify-center ml-5 md:ml-20">
          <div className="text-white text-5xl font-normal font-roboInvaders ml-5 mb-2">
            PROGAMMERS INC.
          </div>
          <div className="flex flex-wrap">
            <CardForEvents
              title="CODEJAM"
              imageSrc={codejam}
              description="Calling all coding enthusiasts! Compete wth the brightest minds and test your coding skills in our upcoming coding competition!"
            />
            <CardForEvents
              title="FOOLS CODING"
              imageSrc={fools_coding}
              description="Be the Bond of programming and figure out what is the hidden source code by looking at its behavior on your inputs."
            />
            <CardForEvents
              title="HACKATHON"
              imageSrc={hackathon}
              description="Calling all developers, designers, and tech enthusiasts! Come and showcase your skills at our upcoming hackathon and compete for exciting prizes!"
            />
            <CardForEvents
              title="Hack ME IF YOU CAN"
              imageSrc={codewars}
              description="Join our beginner-friendly offline hacking event where you'll navigate a series of challenges on a dedicated target machine. Compete individually to uncover flags and earn scores."
            />
            <CardForEvents
              title="BITS CTF"
              imageSrc={CTF}
              description="Are you a hacker, coder, or just passionate about cybersecurity? Compete in our Capture the Flag and see if you have what it takes to come out on top"
            />
          </div>
        </div>
        <div className="flex flex-col md:justify-start mt-20 justify-center ml-5 md:ml-20">
          <div className="text-white text-5xl font-normal font-roboInvaders ml-5 mb-2">
            MATKA
          </div>
          <div className="flex flex-wrap">
            <CardForEvents
              title="Valorant"
              imageSrc={valorant}
              description="Get your team ready and join the ultimate Valorant tournament. Prove your worth, master your aim, and become the champion. Are you up for the challenge?"
            />
            <CardForEvents
              title="Fifa"
              imageSrc={fifa}
              description="Are you ready to take on the world's best and claim victory? The arena is waiting for you, so lace up your boots and let's play"
            />
            <CardForEvents
              title="BGMI"
              imageSrc={bgmi}
              description="Gear up for the ultimate battleground in our techfest's BGMI Online Gaming Contest! Dive into the fast-paced world of Battle Grounds Mobile India, where strategic brilliance and lightning reflexes rule."
            />
          </div>
        </div>
        <div className="flex flex-col md:justify-start mt-20 justify-center ml-5 md:ml-20">
          <div className="text-white text-5xl font-normal font-roboInvaders ml-5 mb-2">
            BLOCKCHAIN AND AI/ML
          </div>
          <div className="flex flex-wrap">
            <CardForEvents
              title="PROMPT ENGINEERING"
              imageSrc={dappthon}
              description="Get your team ready and join the ultimate Valorant tournament. Prove your worth, master your aim, and become the champion. Are you up for the challenge?"
            />
            <CardForEvents
              title="cryptomania"
              imageSrc={cryptomania}
              description="Are you a crypto trading pro? Put your skills to the test and compete to win big in our upcoming competition. Join now."
            />
            <CardForEvents
              title="anftee"
              imageSrc={anftee}
              description="Unleash your inner artist in a 60-hour digital art marathon,Individual participation, no boundaries, no bounds.Craft unique masterpieces based on themed prompts."
            />
          </div>
        </div>
        <div className="flex flex-col md:justify-start mt-20 justify-center ml-5 md:ml-20">
          <div className="text-white text-5xl font-normal font-roboInvaders ml-5 mb-2">
            DESIGN AND BUILD
          </div>
          <div className="flex flex-wrap">
            <CardForEvents
              title="Burnout"
              imageSrc={burnout}
              description="Get ready to burn rubber and leave the competition in the dust at Burnout, the electrifying robot car racing event!"
            />
            <CardForEvents
              title="Search and Rescue"
              imageSrc={search}
              description="Are you ready to put your engineering skills to the test and make a difference in the world? Join us at 'Search and Rescue' and design a drone to deliver critical medical supplies in record time!"
            />
            <CardForEvents
              title="Trailblazers"
              imageSrc={trailbazers}
              description="Get ready to soar to new heights and blaze your own trail in the world of aviation - join us for Trailblazers, the thrilling plane-building competition where speed and agility reign supreme!"
            />
          </div>
        </div>
        <div className="flex flex-col md:justify-start mt-20 justify-center ml-5 md:ml-20">
          <div className="text-white text-5xl font-normal font-roboInvaders ml-5 mb-2">
            SCHOOL BAG
          </div>
          <div className="flex flex-wrap">
            <CardForEvents
              title="Quiz"
              imageSrc={idk}
              description="Join us on campus to witness the culmination of months of hard work - a group project presentation showcasing innovative ideas and cutting-edge technology"
            />
            <CardForEvents
              title="Debate"
              imageSrc={debate}
              description="Join us for the Schoolbag 2023 Debate and showcase your verbal prowess in a battle of wits and rebuttals - the ultimate test of your persuasive skills!"
            />
            <CardForEvents
              title="Enigmatica"
              imageSrc={enigmatica}
              description="Join us for Enigmatica - an exciting and challenging exam that requires no prerequisites and puts your mental prowess to the ultimate test!"
            />
            <CardForEvents
              title="Open Showcase"
              imageSrc={show}
              description="Join us for Open Showcase, an exam like no other, No prerequisites needed, just bring your mental power. Navigate puzzles and challenges with flair, Prove your prowess, rise beyond compare"
            />
          </div>
        </div>
        <div className="flex flex-col md:justify-start mt-20 justify-center  ml-5 md:ml-20">
          <div className="text-white text-5xl font-normal font-roboInvaders ml-5 mb-2">
            ELIXIR
          </div>
          <div className="flex flex-wrap">
            <CardForEvents
              title="Quark National Quiz"
              imageSrc={quiz}
              description="Are you ready to put your grey matter to the test? Join us at Quark'23 National Quiz and compete against the brightest minds in the nation for a chance to win exciting prizes!"
            />
            <CardForEvents
              title="Ganimatoonics"
              imageSrc={ganimatronics}
              description="Get ready to test your knowledge and unravel the secrets of Ganimatoonics with our exciting quiz - an adventure awaits!"
            />
            <CardForEvents
              title="Torque and Trivia"
              imageSrc={tq}
              description="Engage in a battle of engineering knowledge with challenging trivia, testing the gears of your intellect. From calculating torque to navigating mind-bending questions, participants embark on a quest for both mental acuity and mechanical finesse."
            />
          </div>
        </div>
        <div className="flex flex-col md:justify-start mt-20 justify-center ml-5 md:ml-20">
          <div className="text-white text-5xl font-normal font-roboInvaders ml-5 mb-2">
            ELECTRIFY
          </div>
          <div className="flex flex-wrap">
            <CardForEvents
              title="Digilogica"
              imageSrc={digilogica}
              description="Do you think that Digital Design is just a boring course , just about gates and logic? Well, you’re in for a huge surprise!"
            />
            <CardForEvents
              title="μC MANIA"
              imageSrc={ucmania}
              description="This event is very flexible with the microcontrollers the participant wants to use. Test your Arduino skills and race to the top!"
            />
          </div>
        </div>
        <div className="flex flex-col md:justify-start mt-20 justify-center ml-5 md:ml-20">
          {/* <div className="text-white text-5xl font-normal font-roboInvaders ml-5 mb-2">
            CUBIX
          </div>
          <div className="flex flex-wrap">
            <CardForEvents
              title="Cubix"
              imageSrc={cubix}
              description="Get your team ready and join the ultimate Valorant tournament. Prove your worth, master your aim, and become the champion. Are you up for the challenge?"
            />
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Event;
