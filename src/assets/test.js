const monerojs = require("monero-javascript");
export async function main() {
  const walletFull = await monerojs.createWalletFull({
    networkType: "stagenet",
    password: "0",
    mnemonic: 'sack people folding mice ferry etched sifting ruffled elbow orphans village stunning nurse argue atom emulate deity antics swept dizzy fiat because zeal alchemy dizzy'
  });
  const address = await walletFull.getAddress(0, 0) // never change account numbers
  return address
}
