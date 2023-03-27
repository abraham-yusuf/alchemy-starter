const hre = require("hardhat");

async function main() {
	const Contract = await hre.ethers.getContractFactory("W3id");
	const contract = await Contract.deploy();

	await contract.deployed();

	console.log("W3id deployed to:", contract.address);
}

main().catch((error) => {
	console.error(error);
	process.exitCode = 1;
});