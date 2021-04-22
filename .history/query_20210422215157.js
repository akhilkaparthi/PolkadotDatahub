const { ApiPromise, Keyring } = require('@polkadot/api');
const { HttpProvider } = require('@polkadot/rpc-provider');
require("dotenv").config();

const main = async () => {
    const httpProvider = new HttpProvider(process.env.DATAHUB_URL);
    const api = await ApiPromise.create({ provider: httpProvider });
    const keyring = new Keyring({ type: 'sr25519' });

    // 1. Query blockchain details
    console.log(`Genesis hash: ${api.genesisHash}`);
    console.log(`Runtime version: ${api.runtimeVersion}`);
    console.log(`Library info: ${api.libraryInfo}`);

    const chain = await api.rpc.system.chain();
    const lastHeader = await api.rpc.chain.getHeader();

    console.log(`Chain name: ${chain}`);
    console.log(`Last block number: ${lastHeader.number}`);
    console.log(`Last block hash: ${lastHeader.hash}`);
    // 2. Query account details
    const { nonce, refcount, data: balance } = await api.query.system.account(process.env.ADDRESS);
console.log(`Nonce: ${nonce}`);
console.log(`Referendum count: ${refcount}`);
console.log(`Free balance: ${balance.free}`);
console.log(`Reserved balance: ${balance.reserved}`);
    // 3. Query validator set
    const eraAtRaw = await api.query.staking.activeEra();
const eraAt = eraAtRaw.unwrap().index.toNumber();
const eraStakers = await api.query.staking.erasStakers.entries(eraAt)

eraStakers.map(async ([key, data]) => {
  console.log(`Validator stash account: ${key.args[1]}`);
  console.log(`Total: ${data.total}`);
  console.log(`Own: ${data.own}`);
  console.log('-----------------');
});
    // 4. Query list of transactions
    // 5. Query blockchain information at given height
    // 6. Query events
}

main().catch((err) => { console.error(err) }).finally(() => process.exit())