import { ethers } from "hardhat";

async function main() {
//   const signer = await ethers.getSigners();

  const tokenA = "0x7E0574e87c0040f837b6214158f27d5bB50330B7";
  const tokenB = "0x04f24c5514491AD0843480aCAe707319B3FCb176";
  const swap = "0x9A7BD09e228a204cE6dd5D01739FEf302Ce37033";
  const signer = "0x764693DD666E8dD9275CDE8F05C6B07446B1d941";

  const tokenAContract = await ethers.getContractAt("IERC", tokenA );
  const tokenBContract =  await ethers.getContractAt("IERC", tokenB);
  const swapContract = await ethers.getContractAt("ISwap", swap);
  const unlimitedApproval = ethers.parseEther("1000");

  const impersonatedSiger = await ethers.getImpersonatedSigner(signer);
  
  //@ts-ignore
  await network.provider.send('hardhat_setBalance', [
    signer,
    '0x6342FD14ED9ACF95F0000',
  ])

  //@ts-ignore
   await network.provider.send('hardhat_setBalance', [
    swap,
    '0x10E7C44DC39731000',
  ])


//   approve contract to spend tokens
  console.log("==============approving=================")
  await tokenAContract.connect(impersonatedSiger).approve(swapContract, unlimitedApproval);
  await tokenBContract.connect(impersonatedSiger).approve(swapContract, unlimitedApproval);



  const AddTokenA = ethers.parseUnits(String(1000), 0);
  const AddTokenB = ethers.parseUnits(String(5000), 0);
//   console.log(`allowance of tokenA ${await tokenAContract.allowance(signer, swapContract)}`);
//   console.log("===================================");

  const swapA = ethers.parseUnits(String(50), 0);
  const swapB = ethers.parseUnits(String(1), 0);


  await swapContract.connect(impersonatedSiger).addLiquidity(AddTokenA, AddTokenB);
  console.log("Liquidity added successfully");
  console.log("===================================");


  console.log(`signer balance of tokenB before swap: ${await tokenBContract.balanceOf(signer)}`);
  console.log("===================================");

  await swapContract.connect(impersonatedSiger).swapTokenAForB(swapA);

  console.log(`signer balance of tokenB after swap: ${await tokenBContract.balanceOf(signer)}`);
  console.log("===================================");

  console.log(`signer balance of tokenA before swap: ${await tokenAContract.balanceOf(signer)}`);

  await swapContract.connect(impersonatedSiger).swapTokenBForA(swapB);

  console.log(`signer balance of tokenA after swap: ${await tokenAContract.balanceOf(signer)}`);

  console.log("===========removing_liqidity=============")
  await swapContract.connect(impersonatedSiger).removeLiquidity(AddTokenA, AddTokenB);
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
