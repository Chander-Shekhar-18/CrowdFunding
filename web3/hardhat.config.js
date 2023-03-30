/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: '0.8.9',
    defaultNetword:'goerli',
    networks: {
      hardhat:{},
      goerli:{
        //'https://rpc.ankr.com/eth_goerli {use this if below url does not work}
        url:'https://rpc.ankr.com/eth_goerli/ad6e85297fdc3b14def79483796e59368967ec65b69a1622a5c8f65b8b2b1b89',
        accounts:[`0x${process.env.PRIVATE_KEY}`]
      }
    },
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
