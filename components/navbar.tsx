/** @format */
"use client";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarBrand,
  NavbarItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { FaUserSecret } from "react-icons/fa";

import { link as linkStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";

import { ThemeSwitch } from "@/components/theme-switch";
import { GithubIcon } from "@/components/icons";

import { Logo } from "@/components/icons";
import { InjectedConnector } from "@web3-react/injected-connector";
import { Web3ReactProvider, useWeb3React } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import { abi } from "@/artifacts/contracts/DaoContract.sol/ETMW.json";

const injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42, 8545],
});

export const Navbar = () => {
  const { activate, active, library: provider } = useWeb3React();

  async function connect() {
    try {
      await activate(injected);
    } catch (error) {
      console.log(error);
    }
  }

  const execute = async () => {
    // const contractAddress = "0x5fbdb2315678afecb367f032d93f642f64180aa3";
    const signer = await provider.getSigner();
    // const contract = new ethers.Contract(contractAddress, abi, signer);
  };

  return (
    <NextUINavbar
      className="dark:bg-[#212936] shadow-md"
      maxWidth="2xl"
      position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full " justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <p className="font-bold text-inherit flex space-x-2">
              <FaUserSecret size={25} />
              <span className="invisible md:visible">EtMw</span>
            </p>
          </NextLink>
        </NavbarBrand>
        <ul className="hidden lg:flex gap-4 justify-start ml-2 ">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium",
                )}
                color="foreground"
                href={item.href}>
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end">
        <ThemeSwitch />
        <NavbarItem className="hidden sm:flex gap-3">
          <Link isExternal href={siteConfig.links.github} aria-label="Github">
            <GithubIcon className="text-default-500" />
          </Link>

          {active ? (
            <Button
              className="px-4 py-2.5 bg-black font-medium text-sm text-white leading-tight uppercase rounded-full shadow-md dark:shadow-none shadow-gray-400 dark:bg-transparent dark:border dark:border-blue-500 dark:text-white"
              onClick={() => connect()}>
              Connected
            </Button>
          ) : (
            <Button
              onClick={() => connect()}
              className="px-4 py-2.5 bg-blue-500 font-medium text-sm text-white leading-tight uppercase rounded-full shadow-md dark:shadow-none shadow-gray-400 dark:bg-transparent dark:border dark:border-blue-500 dark:text-blue-400">
              Connect Wallet
            </Button>
          )}
        </NavbarItem>
      </NavbarContent>
    </NextUINavbar>
  );
};
