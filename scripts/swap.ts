import { ethers } from "hardhat";

async function main() {
  const tokenA = "0xaaD4e6c594c02d842e4104A3B04B2C9176D9A258";
  const tokenB = "0x85eFac8fF26F83EbCD956A915329A25F6bAe0239"

  const Swap = await ethers.deployContract("Swap", [tokenA, tokenB]);
  await Swap.waitForDeployment();

  console.log(
`Token deployed to ${Swap.target}`
  );
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});


