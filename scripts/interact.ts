import { ethers } from "hardhat";

async function main() {
//   const [signer] = await ethers.getSigners();

  const tokenA = "0x7E0574e87c0040f837b6214158f27d5bB50330B7";
  const tokenB = "0x04f24c5514491AD0843480aCAe707319B3FCb176";
  const swap = "0x4ac04c80F69a4743F9e38e84A60cFA55ecb8DC47";
  const signer = "0x764693DD666E8dD9275CDE8F05C6B07446B1d941";

  const tokenAContract = await ethers.getContractAt("IERC", tokenA );
  const tokenBContract =  await ethers.getContractAt("IERC", tokenB);
  const swapContract = await ethers.getContractAt("ISwap", swap);
  const unlimitedApproval = ethers.parseEther("100000000000");

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



  const AddTokenA = ethers.parseEther("100");
  const AddTokenB = ethers.parseEther("20");

  console.log(`contracts's allowance of tokenA ${await tokenAContract.allowance(signer, swapContract)}`);
  console.log("===================================");

  console.log(`contracts's allowance of tokenB ${await tokenBContract.allowance(signer, swapContract)}`);
  console.log("===================================");

  const swapA = ethers.parseEther("500");
  const swapB = ethers.parseEther("500");


  await swapContract.connect(impersonatedSiger).addLiquidity(AddTokenA, AddTokenB);
  console.log("Liquidity added successfully");
  console.log("===================================");

  console.log(`signer balance of tokenB before swap: ${ethers.formatEther(await tokenBContract.balanceOf(signer))}`);
  console.log("===================================");

  await swapContract.connect(impersonatedSiger).swapTokenAForB(swapA);

  console.log(`signer balance of tokenB after swap: ${ethers.formatEther(await tokenBContract.balanceOf(signer))}`);
  console.log("===================================");

  console.log(`signer balance of tokenA before swap: ${ethers.formatEther(await tokenAContract.balanceOf(signer))}`);

  await swapContract.connect(impersonatedSiger).swapTokenBForA(swapB);

  console.log(`signer balance of tokenA after swap: ${ethers.formatEther(await tokenAContract.balanceOf(signer))}`);

  console.log("===========removing_liqidity=============");
  await swapContract.connect(impersonatedSiger).removeLiquidity(AddTokenA, AddTokenB);
  console.log("Liquidity removed successfully");
  console.log("===================================");

  console.log(`contract balance of tokenA after liquidity removed: ${ethers.formatEther(await tokenAContract.balanceOf(swap))}`);
  console.log(`contract balance of tokenB after liquidity removed: ${ethers.formatEther(await tokenBContract.balanceOf(swap))}`);
  console.log("===================================");
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
