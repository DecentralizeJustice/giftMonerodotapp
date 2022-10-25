<template>
  <div
    class="row justify-center align-center text-center"
    :class="{'q-my-lg': $q.screen.gt.sm}"
  >
    <div
      v-if="basketUndefined"
      class=" justify-center col-12 col-md-8 text-center"
    >
      <q-card
        class="my-card text-white"
      >
        <q-card-section>
          <div class="text-h6">
            Card Does Not Exist 😔
          </div>
          <div class="text-subtitle2">
            Try to enter Card Again or Contact whom gave you the gift card.
          </div>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>
<script setup>
import { toRef, toRaw, ref } from 'vue'
import { getShaData, getCardId, decrypt } from '@/assets/misc.js'
const emit = defineEmits(['gotCardData'])
const props = defineProps({
  theme: { type: String, required: true },
  entropy: { type: Object, required: true }
})
const basketUndefined = ref(false)
// const theme = toRef(props, 'theme')
const entropy = toRef(props, 'entropy')
const axios = require('axios')
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
const cardID = getCardId(entropyString)
console.log(cardID)
const data = { bucket: cardID }
try {
  const results = await axios.post('/.netlify/functions/getCard', data)
  const encryptedData = results.data.box
  const plainText = await decrypt(encryptedData, entropyString)
  const object = JSON.parse(plainText)
  object.refundTransaction = results.data.refundTransaction
  object.expires = results.data.expires
  emit('gotCardData', object)
} catch (err) {
  basketUndefined.value = err.response.data.includes('Could not get basket')
}
</script>

<style lang="sass" scoped>
.my-card
  background: $secondary
</style>
