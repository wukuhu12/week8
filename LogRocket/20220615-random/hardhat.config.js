require("@nomiclabs/hardhat-waffle");
require('dotenv').config()

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more


// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * 
 */

module.exports = {
  solidity: "0.8.4",
  networks: {
    
    "optimism": {
       url: "https://opt-goerli.g.alchemy.com/v2/8CEdJFDsDJnqtKtRp0PAp3HQsYXL0jX_",
       accounts: [ "fbc743cd28d212dac4ac5d6f49af85d36bc94c088e151358cbafa94a48991840" ]
    }
  }
};