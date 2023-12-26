/** @format */

import { ethers } from "hardhat";

async function main() {
	const daoContract = await ethers.deployContract("ETMW");

	await daoContract.waitForDeployment();

	console.log("contranct address: ", await daoContract.getAddress());
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
	console.error(error);
	process.exitCode = 1;
});
