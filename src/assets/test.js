const monerojs = require("monero-javascript");
export async function test() {
  let walletFull = await monerojs.createWalletFull({
    networkType: "stagenet",
    password: "0"
  });
  const mnemonic = await walletFull.getMnemonic()
  return mnemonic
}
export default test;
