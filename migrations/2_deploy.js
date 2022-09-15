const ERC20Token = artifacts.require("ERC20Token");
const VolunteerNFT = artifacts.require("VolunteerNFT");

module.exports = function (deployer) {
  await deployer.deploy(ERC20Token, "DoGood Token", "DGT");
  const token = await ERC20Token.deployed();
  
  await deployer.deploy(VolunteerNFT, token.address);
  const volunteerNFT = await VolunteerNFT.deployed();

  await token.passMinterRole(volunteerNFT.address);
};
