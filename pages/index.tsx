import { ConnectButton } from "@rainbow-me/rainbowkit";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useAccount } from "wagmi";
import { useEffect } from "react";

const Home: NextPage = () => {
  const { address, isConnecting, isDisconnected } = useAccount();

  return (
    <>
      <div className=" flex justify-center w-[100%] border-2 border-red-500 h-16 text-center">
        <div className="border-2 flex h-min align-middle self-center font-pressKaro  text-lg ">
          w3ifier
        </div>
      </div>

      {/*bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-rose-500 to-indigo-700*/}
    </>
  );
};

export default Home;
