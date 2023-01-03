import '../styles/globals.css';
import '@rainbow-me/rainbowkit/styles.css';
import type { AppProps } from 'next/app';
import dynamic from "next/dynamic";

import {
  darkTheme,
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';

import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import {useAccount} from "wagmi"
const { chains, provider } = configureChains(
  [mainnet, polygon, optimism, arbitrum],
  [
    alchemyProvider({ apiKey: "gg7wSSi0KMBsdKnGVfHDueq6xMB9EkC" }),
    publicProvider()
  ]
); 
const { connectors } = getDefaultWallets({
  appName: 'My RainbowKit App',
  chains
});
const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider


})

{/*bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-rose-500 to-indigo-700*/}



function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider modalSize='compact' chains={chains} theme={darkTheme({
      accentColor: '#a100fe',
      accentColorForeground: 'white',
      borderRadius: 'medium',
      fontStack: 'system',
      overlayBlur: 'small',
    })}>
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default dynamic(() => Promise.resolve(MyApp), {
  ssr: false,
});
