// Libraries
const Web3 = require('web3');
const {Web3Wrapper} = require('@0xproject/web3-wrapper');

const INFURA_URL = 'https://ropsten.infura.io';

const run = async () => {
  const provider = new Web3.providers.HttpProvider(`${INFURA_URL}/${process.env.INFURA_KEY}`);
  const client = new Web3Wrapper(provider);
  const blockNumber = await client.getBlockNumberAsync();
  console.log(`Latest block number: ${blockNumber}`);

  const block = await client.getBlockAsync(blockNumber);
  console.log(`Latest block:\n${JSON.stringify(block, null, 2)}`);
};

run();
