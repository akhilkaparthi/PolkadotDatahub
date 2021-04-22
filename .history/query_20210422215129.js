const { ApiPromise, Keyring } = require('@polkadot/api');
const { HttpProvider } = require('@polkadot/rpc-provider');
require("dotenv").config();

const main = async () => {
  const httpProvider = new HttpProvider(process.env.DATAHUB_URL);
  const api = await ApiPromise.create({ provider: httpProvider });
  const keyring = new Keyring({type: 'sr25519'});

  // 1. Query blockchain details
  // 2. Query account details
  // 3. Query validator set
  // 4. Query list of transactions
  // 5. Query blockchain information at given height
  // 6. Query events
}

main().catch((err) => { console.error(err) }).finally(() => process.exit())