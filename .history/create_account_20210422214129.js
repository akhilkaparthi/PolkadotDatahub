const { ApiPromise, Keyring } = require('@polkadot/api');
const { HttpProvider } = require('@polkadot/rpc-provider');
const {
  mnemonicGenerate,
  mnemonicValidate,
} = require('@polkadot/util-crypto');
const {
  stringToU8a,
  u8aToString,
  u8aToHex 
} = require('@polkadot/util');
const fs = require('fs');
require("dotenv").config();

const main = async () => {
  const httpProvider = new HttpProvider(process.env.DATAHUB_URL);
  const api = await ApiPromise.create({ provider: httpProvider });
  const keyring = new Keyring({type: 'sr25519'});;
  
  // 1. Generate a mnemonic  
  // 2. Create an account  
  // 3. Persist the account data  
  // 4. Sign and verify a message
}

main().catch((err) => {
  console.error(err)
}).finally(() => process.exit());