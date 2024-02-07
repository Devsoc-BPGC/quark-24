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
import thechallenge from "../assets/images/cards/the_challenge.png";
import maze_runner from "../assets/images/cards/maze_runner.png";
import regalia from "../assets/images/cards/regalia.png";
import CaseCrackdown from "../assets/images/cards/casecrackdown.png";
import policy from "../assets/images/cards/policy.png";
import bullion from "../assets/images/cards/bullion.png";
import codejam from "../assets/images/cards/codejam.png";
import codewars from "../assets/images/cards/codewars.png";
import hackathon from "../assets/images/cards/hackathon.png";
import fools_coding from "../assets/images/cards/Fools_Coding.png";
import CTF from "../assets/images/cards/CTF.png";
import cryptomania from "../assets/images/cards/cryptomania.png";
import anftee from "../assets/images/cards/anftee.png";
import dappthon from "../assets/images/cards/dapp-thon.png";
import ganimatronics from "../assets/images/cards/ganimatronics.png";
import quiz from "../assets/images/cards/quiz.png";
import search from "../assets/images/cards/search.png";
import trailbazers from "../assets/images/cards/trailbazers.png";
import burnout from "../assets/images/cards/burnout.png";
import cubix from "../assets/images/cards/cubix.png";
import idk from "../assets/images/cards/idk.png";
import debate from "../assets/images/cards/debate.png";
import enigmatica from "../assets/images/cards/enigmatica.png";
import digilogica from "../assets/images/cards/digilogica.png";
import ucmania from "../assets/images/cards/ucmania.png";
import events_bg from "../assets/images/events_bg.jpg";
import React from "react";

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
      <div
        className="flex-grow flex flex-col justify-center bg-black"
        style={{
          backgroundImage: `url(${events_bg})`,
          backgroundSize: "cover",
        }}
      >
        <div className="flex flex-col md:justify-start mt-20 justify-center ml-5 md:ml-20 ">
          <div className="text-white text-5xl font-normal font-roboInvaders ml-5 mb-2">
            ROBOFICIAL
          </div>
          <div className="flex flex-wrap">
            <CardForEvents
              title="ROBOWARS"
              imageSrc={robowar}
              description="Get your team ready and join the ultimate Valorant tournament. Prove your worth, master your aim, and become the champion. Are you up for the challenge?"
            />
            <CardForEvents
              title="ROBORACE"
              imageSrc={roborace}
              description="Are you ready to take on the world's best and claim victory? The arena is waiting for you, so lace up your boots and let's play"
            />
            <CardForEvents
              title="ROBOSOCCER"
              imageSrc={robosoccer}
              description="Get your team ready and join the ultimate Valorant tournament. Prove your worth, master your aim, and become the champion. Are you up for the challenge?"
            />
            <CardForEvents
              title="THE CHALLENGE"
              imageSrc={thechallenge}
              description="Get your team ready and join the ultimate Valorant tournament. Prove your worth, master your aim, and become the champion. Are you up for the challenge?"
            />
            <CardForEvents
              title="ROBOCLENCH"
              imageSrc={roboclench}
              description="Get your team ready and join the ultimate Valorant tournament. Prove your worth, master your aim, and become the champion. Are you up for the challenge?"
            />
            <CardForEvents
              title="MAZE RUNNER"
              imageSrc={maze_runner}
              description="Get your team ready and join the ultimate Valorant tournament. Prove your worth, master your aim, and become the champion. Are you up for the challenge?"
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
              description="Get your team ready and join the ultimate Valorant tournament. Prove your worth, master your aim, and become the champion. Are you up for the challenge?"
            />
            <CardForEvents
              title="CASE CRACKDOWN"
              imageSrc={CaseCrackdown}
              description="Are you ready to take on the world's best and claim victory? The arena is waiting for you, so lace up your boots and let's play"
            />
            <CardForEvents
              title="POLICY MAVERICK"
              imageSrc={policy}
              description="Get your team ready and join the ultimate Valorant tournament. Prove your worth, master your aim, and become the champion. Are you up for the challenge?"
            />
            <CardForEvents
              title="BULLION BEATDOWN"
              imageSrc={bullion}
              description="Are you ready to take on the world's best and claim victory? The arena is waiting for you, so lace up your boots and let's play"
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
              description="Get your team ready and join the ultimate Valorant tournament. Prove your worth, master your aim, and become the champion. Are you up for the challenge?"
            />
            <CardForEvents
              title="FOOLS CODING"
              imageSrc={fools_coding}
              description="Get your team ready and join the ultimate Valorant tournament. Prove your worth, master your aim, and become the champion. Are you up for the challenge?"
            />
            <CardForEvents
              title="HACKATHON"
              imageSrc={hackathon}
              description="Are you ready to take on the world's best and claim victory? The arena is waiting for you, so lace up your boots and let's play"
            />
            <CardForEvents
              title="CODEWARS"
              imageSrc={codewars}
              description="Are you ready to take on the world's best and claim victory? The arena is waiting for you, so lace up your boots and let's play"
            />
            <CardForEvents
              title="BITS CTF"
              imageSrc={CTF}
              description="Get your team ready and join the ultimate Valorant tournament. Prove your worth, master your aim, and become the champion. Are you up for the challenge?"
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
          </div>
        </div>
        <div className="flex flex-col md:justify-start mt-20 justify-center ml-5 md:ml-20">
          <div className="text-white text-5xl font-normal font-roboInvaders ml-5 mb-2">
            BLOCKCHAINIFY
          </div>
          <div className="flex flex-wrap">
            <CardForEvents
              title="DAPP-ATHON"
              imageSrc={dappthon}
              description="Get your team ready and join the ultimate Valorant tournament. Prove your worth, master your aim, and become the champion. Are you up for the challenge?"
            />
            <CardForEvents
              title="cryptomania"
              imageSrc={cryptomania}
              description="Are you ready to take on the world's best and claim victory? The arena is waiting for you, so lace up your boots and let's play"
            />
            <CardForEvents
              title="anftee"
              imageSrc={anftee}
              description="Get your team ready and join the ultimate Valorant tournament. Prove your worth, master your aim, and become the champion. Are you up for the challenge?"
            />
          </div>
        </div>
        <div className="flex md:justify-start mt-20 justify-center ml-5 md:ml-20">
          <div className="text-white text-5xl font-normal font-roboInvaders ml-5 mb-2">
            DESIGN AND BUILD
          </div>
          <div className="flex flex-wrap">
            <CardForEvents
              title="Burnout"
              imageSrc={burnout}
              description="Get your team ready and join the ultimate Valorant tournament. Prove your worth, master your aim, and become the champion. Are you up for the challenge?"
            />
            <CardForEvents
              title="Search and Rescue"
              imageSrc={search}
              description="Are you ready to take on the world's best and claim victory? The arena is waiting for you, so lace up your boots and let's play"
            />
            <CardForEvents
              title="Trailblazers"
              imageSrc={trailbazers}
              description="Get your team ready and join the ultimate Valorant tournament. Prove your worth, master your aim, and become the champion. Are you up for the challenge?"
            />
          </div>
        </div>
        <div className="flex md:justify-start mt-20 justify-center ml-5 md:ml-20">
          <div className="text-white text-5xl font-normal font-roboInvaders ml-5 mb-2">
            SCHOOL BAG
          </div>
          <div className="flex flex-wrap">
            <CardForEvents
              title="Quiz"
              imageSrc={idk}
              description="Get your team ready and join the ultimate Valorant tournament. Prove your worth, master your aim, and become the champion. Are you up for the challenge?"
            />
            <CardForEvents
              title="Debate"
              imageSrc={debate}
              description="Are you ready to take on the world's best and claim victory? The arena is waiting for you, so lace up your boots and let's play"
            />
            <CardForEvents
              title="Enigmatica"
              imageSrc={enigmatica}
              description="Are you ready to take on the world's best and claim victory? The arena is waiting for you, so lace up your boots and let's play"
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
              description="Get your team ready and join the ultimate Valorant tournament. Prove your worth, master your aim, and become the champion. Are you up for the challenge?"
            />
            <CardForEvents
              title="Ganimatoonics"
              imageSrc={ganimatronics}
              description="Are you ready to take on the world's best and claim victory? The arena is waiting for you, so lace up your boots and let's play"
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
              description="Get your team ready and join the ultimate Valorant tournament. Prove your worth, master your aim, and become the champion. Are you up for the challenge?"
            />
            <CardForEvents
              title="μC MANIA"
              imageSrc={ucmania}
              description="Are you ready to take on the world's best and claim victory? The arena is waiting for you, so lace up your boots and let's play"
            />
          </div>
        </div>
        <div className="flex flex-col md:justify-start mt-20 justify-center ml-5 md:ml-20">
          <div className="text-white text-5xl font-normal font-roboInvaders ml-5 mb-2">
            CUBIX
          </div>
          <div className="flex flex-wrap">
            <CardForEvents
              title="Cubix"
              imageSrc={cubix}
              description="Get your team ready and join the ultimate Valorant tournament. Prove your worth, master your aim, and become the champion. Are you up for the challenge?"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Event;
