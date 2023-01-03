import { ConnectButton } from "@rainbow-me/rainbowkit";
import type { NextPage } from "next";

import { useAccount } from "wagmi";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faAngleDoubleDown,
  fas,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { disconnect } from "@wagmi/core";

const Home: NextPage = () => {
  const [text, setText] = useState("Kind of hard to believe, isnt it?");
  const [opacity, setOpacity] = useState(1);
  const [scrolled, setScrolled] = useState(0); // Define the scrolled state variable
  const { address, isConnecting, isDisconnected } = useAccount();
  useEffect(() => {
    window.scrollTo(0, 0);
    // Define the event handler function
    const handleScroll = () => {
      // Check the scroll position
      if (window.scrollY <= window.innerHeight / 2) {
        setText("Kind of hard to believe, isn't it?");
        setScrolled(0);
      } else if (
        window.scrollY > window.innerHeight / 2 &&
        window.scrollY <= window.innerHeight
      ) {
        setText("Something just seems...off 🤨");
        setScrolled(1); // Update the scrolled state variable
      } else {
        setScrolled(2);
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [address]);

  return (
    <div
      className={`flex flex-col  min-h-screen transition-all  ${
        !address
          ? "bg-gradient-to-r from-gray-700 via-gray-900 to-black"
          : "bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-rose-500 to-indigo-700"
      } `}
    >
      <div
        className={`fixed z-10 flex justify-center w-[100%]  border-red-500 h-16 text-center transition-colors duration-200 ${
          !address
            ? "bg-gradient-to-r from-gray-900  to-black"
            : "bg-gradient-to-tr from-rose-700 to-indigo-900"
        }`}
      >
        <div className=" flex h-min absolute align-middle self-center z-[9999] font-pressKaro text-sm text-white ">
          w3ifier
        </div>
      </div>

      {!address ? (
        <div>
          <div
            className={` mt-80 text-center text-white font-[Inter] text-2xl fixed w-[100%] transition-colors duration-200 ${
              scrolled === 1
                ? "text-blue-700"
                : scrolled === 0
                ? "text-white"
                : scrolled === 2
                ? "text-white"
                : ""
            }`}
          >
            {text}
          </div>
          <div className=" mt-[22rem] text-center text-white font-[Inter] text-xl fixed w-[100%]">
            {scrolled != 2 ? (
              <FontAwesomeIcon icon={faAngleDoubleDown} color="grey" />
            ) : (
              <div className="flex justify-center mt-4">
                <ConnectButton />
              </div>
            )}
          </div>
          <div className=" mt-[24rem] text-center text-white font-[Inter] text-xl fixed w-[100%]"></div>
          <div id="brs">
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
          </div>
        </div>
      ) : (
        <div className=" flex flex-col pl-40 pr-40">
          <div className="flex  mt-48 justify-between ">
            <div className="flex flex-col  border-red-500 w-[42%] h-min self-center ">
              <div className=" flex  text-gray-200 font-[Inter]  text-2xl mb-2 font-bold">
                Presenting: an NFT project that has 0 utility
              </div>
              <div className="flex text-purple-200 font-Poppins  text-xl font-light">
                Here is a description that is jam-packed with buzzwords and
                empty promises. The entire thing condenses down to: trust me bro
                we’ll make you rich
              </div>
            </div>
            <div className=" h-min self-center text-[6.1em]">💩💩💩</div>
          </div>

          <div className="flex mt-12 justify-between ">
            <div className="flex flex-col  border-red-500 w-[40%] h-min self-center ">
              <div className=" flex  text-gray-200 font-[Inter]  text-2xl mb-2 font-bold">
                A DAO that only favours the founders{" "}
              </div>
              <div className="flex text-purple-200 font-Poppins  text-xl font-light">
                Oh yeah, we need to completely decentralize the way companies
                work today so that the community members can have a say in the
                operations. We’re still keeping all the benefits though lol
              </div>
            </div>
            <div className=" h-min self-center text-[6.1em]">
              <Image src={"/good.png"} width={200} height={200} />
              <Image src={"/good.png"} width={200} height={200} />
            </div>
          </div>

          <div className="flex  mt-12 mb-32 justify-between ">
            <div className="flex flex-col  border-red-500 w-[40%] h-min self-center">
              <div className=" flex  text-gray-200 font-[Inter]  text-2xl mb-2 font-bold">
                Drain your life savings
              </div>
              <div className="flex text-purple-200 font-Poppins  text-xl font-light">
                We hope you were impressed by our over-engineering and vague
                explanations. Now pls gib your money. We aren’t accepting crypto
                at the moment because uhhh it’s uhhhh we’re still working on
                that part
              </div>
            </div>
            <div className=" w-[32%] self-center text-[1em] flex justify-center">
              <div className=" w-52 h-16 flex ">
                {" "}
                <a
                  href="https://www.buymeacoffee.com/awesamarth"
                  target="_blank"
                  className="h-[100%] w-[100%]"
                  rel="noreferrer"
                >
                  <button className="bg-purple-500 transition-colors hover:bg-purple-900 h-[100%] w-[100%] text-white font-bold py-2 px-4 rounded-lg m-auto font-Inter">
                    gib money
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
      {!address ? (
        <div className="mt-20  flex w-[100%] justify-center flex-col fixed">
          <div className="flex-col self-center text-center ">
            <div className=" text-center flex self-center justify-center text-white font-[Inter]  border-red-500 text-3xl font-bold">
              <div className="flex  self-center ">This is a</div>
            </div>
            <div className=" flex self-center text-white font-[Inter] text-3xl font-bold">
              <span className=" text-blue-700">Web3</span>&nbsp;site
            </div>
          </div>
        </div>
      ) : (
        <div className="absolute z-0 top-24  flex w-[100%] justify-center flex-col ">
          <div className="flex-col self-center text-center font-[Monument] text-4xl font-bold text-purple-400">
            That&apos;s more like it!
          </div>
        </div>
      )}

      <div
        className={`fixed bottom-0 flex justify-center w-[100%]  border-red-500 h-16 text-center transition-colors duration-200 ${
          !address
            ? "bg-gradient-to-r from-gray-900  to-black"
            : "bg-gradient-to-tr from-rose-700 to-indigo-900"
        }`}
      >
        <div className=" flex h-min align-middle self-center font-pressKaro text-[10px] text-white ">
          Made with a smug smile on his face by:&nbsp;
          <a href="https://twitter.com/awesamarth_" target="_blank" rel="noreferrer">
            <span className="text-blue-400 hover:cursor-pointer">
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
