const monerojs = require('monero-javascript')
export async function getBlockHeight (node) {
  const daemon = await monerojs.connectToDaemonRpc(node)
  const height = await daemon.getHeight()
  return { height }
}
export default getBlockHeight
