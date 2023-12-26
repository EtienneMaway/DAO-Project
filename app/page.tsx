/** @format */

import Proposals from "@/components/proposals";
import Home from "@/components/ui/home";
import { Web3Provider } from "@ethersproject/providers";
import { Web3ReactProvider } from "@web3-react/core";

export default function Pages() {
  return (
    <div>
      <Home />
      <Proposals />
    </div>
  );
}
