/** @format */

import {
	time,
	loadFixture,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("ETMW", function () {
	// We define a fixture to reuse the same setup in every test.
	// We use loadFixture to run this setup once, snapshot that state,
	// and reset Hardhat Network to that snapshot in every test.
	async function deployETMWFixture() {
		// Contracts are deployed using the first signer/account by default
		const [owner, otherAccount] = await ethers.getSigners();

		const ETMW = await ethers.getContractFactory("ETMW");
		const daoProject = await ETMW.deploy();

		return { daoProject, owner, otherAccount };
	}

	describe("Test cases", function () {
		it("Should receive Ether from any contributer", async function () {
			const { daoProject, owner } = await loadFixture(deployETMWFixture);
			const value = ethers.parseEther("1");

			await daoProject.contribute({ value });

			expect(await daoProject.getBalance()).to.equal(value);

			console.log("Balance: ", await daoProject.getBalance());
			console.log("contract address: ", await daoProject.getAddress());
		});
	});
});
