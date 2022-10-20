const _sodium = require('libsodium-wrappers')
function getShaData (entropyData) {
  let shaString = ''
  for (let index = 0; index < entropyData.avatars.length; index++) {
    const element = entropyData.avatars[index]
    shaString = shaString.concat(element.toString())
  }
  for (let index = 0; index < entropyData.words.length; index++) {
    const element = entropyData.words[index]
    shaString = shaString.concat(element.toString())
  }
  return shaString
}
const convert = (from, to) => str => Buffer.from(str, from).toString(to)
const utf8ToHex = convert('utf8', 'hex')

async function encrypt (stringMessage, stringKey) {
  await _sodium.ready
  const sodium = _sodium
  const keyHashed = sodium.crypto_generichash(sodium.crypto_secretbox_KEYBYTES, sodium.from_hex(utf8ToHex(stringKey)))
  const nonceUInt8 = sodium.randombytes_buf(sodium.crypto_secretbox_NONCEBYTES)
  const cipherText = sodium.crypto_secretbox_easy(sodium.from_hex(utf8ToHex(stringMessage)), nonceUInt8, keyHashed)
  const cipherAndNonceUInt8 = new Uint8Array(nonceUInt8.length + cipherText.length)
  cipherAndNonceUInt8.set(nonceUInt8)
  cipherAndNonceUInt8.set(cipherText, nonceUInt8.length)
  const cipherAndNonceHex = Buffer.from(cipherAndNonceUInt8).toString('hex')
  const decrypted = await decrypt(cipherAndNonceHex, stringKey)
  console.log('encryption/dcryption working: ' + (decrypted === stringMessage))
  return cipherAndNonceHex
}
function toArrayBuffer (buffer) {
  return buffer.buffer.slice(buffer.byteOffset, buffer.byteOffset + buffer.byteLength)
}
async function decrypt (hexNonceAndCiphertext, stringKey) {
  await _sodium.ready
  const sodium = _sodium
  const cipherText = Buffer.from(hexNonceAndCiphertext, 'hex')
  const uInt8Cipher = new Uint8Array(toArrayBuffer(cipherText))
  const keyHashed = sodium.crypto_generichash(sodium.crypto_secretbox_KEYBYTES, sodium.from_hex(utf8ToHex(stringKey)))
  const nonce = uInt8Cipher.slice(0, sodium.crypto_secretbox_NONCEBYTES)
  const ciphertext = uInt8Cipher.slice(sodium.crypto_secretbox_NONCEBYTES)
  const resultsUint8 = sodium.crypto_secretbox_open_easy(ciphertext, nonce, keyHashed)
  return Buffer.from(resultsUint8).toString('utf-8')
}

function getWordListArray (text) {
  const newList = []
  const totalWordList = (text.split('\n'))
  totalWordList.pop()
  totalWordList.pop()
  for (let i = 0; i < totalWordList.length; i++) {
    const tempString = totalWordList[i]
    newList[i] = tempString.split(' ')[2]
    newList[i] = newList[i].replace(/\s/g, '')
  }
  return newList
}
exports.getShaData = getShaData
exports.encrypt = encrypt
exports.getWordListArray = getWordListArray
