const monerojs = require('monero-javascript')
export async function getBlockHeight () {
  const daemon = await monerojs.connectToDaemonRpc('https://stagenet.xmr.ditatompel.com:443')
  const height = await daemon.getHeight()
  return { height }
}
export default getBlockHeight
