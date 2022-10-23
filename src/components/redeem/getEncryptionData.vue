<template>
  <div
    class="row justify-center align-center text-center"
    :class="{'q-my-lg': $q.screen.gt.sm}"
  >
    <div
      class=" justify-center col-12 col-md-8 text-center"
    >
      Get Data!!!!!!!
    </div>
  </div>
</template>
<script setup>
import { toRef, toRaw } from 'vue'
import { getShaData } from '@/assets/misc.js'
const props = defineProps({
  theme: { type: String, required: true },
  entropy: { type: Object, required: true }
})
// const theme = toRef(props, 'theme')
const entropy = toRef(props, 'entropy')
function getEntropyString () {
  const entropyData = { avatars: [], words: [] }
  for (let index = 0; index < entropy.value.length; index++) {
    const element = entropy.value[index]
    entropyData.avatars.push(toRaw(element.avatar))
    entropyData.words.push(toRaw(element.words[0]))
    entropyData.words.push(toRaw(element.words[1]))
  }
  console.log(entropyData)
  const entropyString = getShaData(entropyData)
  return entropyString
}
const entropyString = getEntropyString()
console.log(entropyString)
</script>

<style lang="sass" scoped>
</style>
