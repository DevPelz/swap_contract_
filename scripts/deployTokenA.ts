import { ethers } from "hardhat";

async function main() {

  const TokenA = await ethers.deployContract("TokenA", []);

  await TokenA.waitForDeployment();

  console.log(
    `Token deployed to ${TokenA.target}`
  );
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// deployed = 0xaaD4e6c594c02d842e4104A3B04B2C9176D9A258