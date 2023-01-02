import { ConnectButton } from "@rainbow-me/rainbowkit";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useAccount } from "wagmi";
import { useEffect, useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faAngleDoubleDown, fas } from '@fortawesome/free-solid-svg-icons'


const Home: NextPage = () => {
  const [text, setText] = useState("Kind of hard to believe, isn't it?");
  const [opacity, setOpacity] = useState(1);
  const [scrolled, setScrolled] = useState(0); // Define the scrolled state variable
  const { address, isConnecting, isDisconnected } = useAccount();
  useEffect(() => {
    // Define the event handler function
    const handleScroll = () => {
      // Check the scroll position
      if (window.scrollY<= window.innerHeight/2){
        setText("Kind of hard to believe, isn't it?");
        setScrolled(0);
      }
      else if (window.scrollY > window.innerHeight/2 && window.scrollY<=window.innerHeight){
        setText("Something just seems...off 🤨");
        setScrolled(1); // Update the scrolled state variable
      }
      else{
        setScrolled(2)
        setText(`Maybe if you connected your wallet 🤔`);

      }
      // if (window.scrollY > window.innerHeight/2 && window.scrollY<window.innerHeight) {
      //   if (window.scrollY > window.innerHeight) {
      //     setText(`Maybe if you connected your wallet 🤔`);
      //   } else {
      //     setText("Something just seems...off");
      //   }
      //   setScrolled(1); // Update the scrolled state variable
      // } else {
      //   setText("Kind of hard to believe, isn't it?");
      //   setScrolled(0); // Update the scrolled state variable
      // }
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col bg-gradient-to-r from-gray-700 via-gray-900 to-black min-h-screen ">
      <div className=" fixed flex justify-center w-[100%]  border-red-500 h-16 text-center bg-gradient-to-r from-gray-900  to-black">
        <div className=" flex h-min align-middle self-center font-pressKaro  text-sm text-white ">
          w3ifier
        </div>
      </div>
      <div className="mt-20  flex w-[100%] justify-center flex-col fixed">
        <div className=" flex self-center text-white font-[Inter] text-3xl font-bold">
          This is a
        </div>
        <div className=" flex self-center text-white font-[Inter] text-3xl font-bold">
          <span className=" text-blue-700">Web3</span>&nbsp;site
        </div>
      </div>
      {/*bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-rose-500 to-indigo-700*/}
      <div
        className={` mt-80 text-center text-white font-[Inter] text-xl fixed w-[100%] transition-color duration-200 ${
          scrolled===1 ? "text-blue-700" : scrolled===0?"text-white":scrolled===2?"text-white":""
        }`}
      >
        {text}
      </div>
      <div className=" mt-[22rem] text-center text-white font-[Inter] text-xl fixed w-[100%]">
      {scrolled!=2?
      (<FontAwesomeIcon icon={faAngleDoubleDown} color="grey" />):""
      }
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      
      <div className=" fixed bottom-0 flex justify-center w-[100%]  border-red-500 h-16 text-center bg-gradient-to-r from-gray-900  to-black">
        <div className=" flex h-min align-middle self-center font-pressKaro text-[10px] text-white ">
          Made with a smug smile on his face by:&nbsp;
          <a href="https://twitter.com/awesamarth_" target="_blank">
            <span className="text-blue-700 hover:cursor-pointer">
              {" "}
              Samarth Saxena
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
