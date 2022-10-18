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
exports.getShaData = getShaData
