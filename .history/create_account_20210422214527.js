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
  // Create mnemonic string for your own account using BIP39
const MNEMONIC = mnemonicGenerate()
console.log(`mnemonicGenerate: ${MNEMONIC}`)
    
// Validate the mnemonic string that was generated, returns a boolean
const isValidMnemonic = mnemonicValidate(MNEMONIC)
console.log(`isValidMnemonic: ${isValidMnemonic}`)
  // 2. Create an account  
  // 3. Persist the account data  
  // 4. Sign and verify a message
}

main().catch((err) => {
  console.error(err)
}).finally(() => process.exit());