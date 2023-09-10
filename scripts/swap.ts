import { ethers } from "hardhat";

async function main() {
  const tokenA = "0x607A57dA8B47f3a3965299B282bE5115B3bC6508";
  const tokenB = "0x759085D523aD2636fa166E31fc8d4A6d5114B6E0";
  
  // deploy swap contract to get address
  const Swap = await ethers.deployContract("Swap", [tokenA, tokenB]);
  await Swap.waitForDeployment();

  console.log(
`Swap deployed to ${Swap.target}`
  );
}
 

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});


// deployed = 0x88D361303E103e4c6c23ce13f46CEAbf3d1E9035