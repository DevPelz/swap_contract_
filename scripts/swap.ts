import { ethers } from "hardhat";

async function main() {
  const tokenA = "0x7E0574e87c0040f837b6214158f27d5bB50330B7";
  const tokenB = "0x04f24c5514491AD0843480aCAe707319B3FCb176";
  
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