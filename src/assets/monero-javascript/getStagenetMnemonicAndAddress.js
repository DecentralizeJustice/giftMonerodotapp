const monerojs = require('monero-javascript')
export async function getStagenetMnemonicAndAddress () {
  const walletFull = await monerojs.createWalletFull({
    networkType: 'stagenet',
    password: '0'
  })
  const mnemonic = await walletFull.getMnemonic()
  const address = await walletFull.getAddress(0, 0) // never change account numbers
  return { mnemonic, address }
}
export default getStagenetMnemonicAndAddress
