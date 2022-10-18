<template>
  <div
    v-if="dataReady"
    class="justify-center full-height full-width text-center row"
    :class="{'justify-around': $q.screen.gt.sm}"
  >
    <div class="column col-12 col-md-6">
      <displayCardInfo :cardinfoobject="cardinfoobject" />
    </div>
    <div class="column col-12 col-md-5 justify-center">
      <div>
        <div class="q-pa-md">
          <q-select
            v-model="cardinfoobject.theme"
            :options="options"
            label="Select Theme"
            filled
          />
        </div>
        <div class="q-pa-md">
          <q-input
            v-model="cardinfoobject.to"
            filled
            label="To:(optional)"
          />
        </div>
        <div class="q-pa-md">
          <q-input
            v-model="cardinfoobject.from"
            filled
            label="From:(optional)"
          />
        </div>
        <div class="q-pa-md">
          <q-input
            v-model="cardinfoobject.message"
            label="Message(optional):"
            filled
            type="textarea"
          />
        </div>
        <q-btn
          icon="backspace"
          color="primary"
          label="Clear All"
          class="desktop-only"
          @click="clear"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import displayCardInfo from '@/components/create/customize/displayCardInfo.vue'
import { reactive, onUpdated, defineEmits, onMounted, onActivated, defineProps, toRef, watch, ref } from 'vue'
const _sodium = require('libsodium-wrappers')
const dataReady = ref(false)
const emit = defineEmits(['update-card'])
const options = ['People', 'Animals', 'Halloween', 'Christmas']
const clear = function () {
  cardinfoobject.to = ''
  cardinfoobject.from = ''
  cardinfoobject.message = ''
}
const props = defineProps({
  resetEntropy: { type: Number, required: true }
})
const resetEntropy = toRef(props, 'resetEntropy')
watch(resetEntropy, () => {
  genRandomData()
})
let cardinfoobject = {
  to: 'Satoshi',
  from: 'Fluffy Pony',
  message: "I know you're really into privacy, so here's some monero!",
  theme: options[2],
  entropyData: {
    avatars: [0, 0, 0, 0],
    words: [0, 0, 0, 0, 0, 0, 0]
  },
  refundAddress: '',
  funded: false,
  startSearchHeight: 0,
  cardID: '',
  createdAt: 0,
  fundedAt: 0
}
cardinfoobject = reactive(cardinfoobject)
function updateCardInfo () {
  emit('update-card', cardinfoobject)
}
onMounted(() => {
  updateCardInfo()
})
onUpdated(() => {
  updateCardInfo()
})
onActivated(() => {
  genRandomData()
})
async function genRandomData () {
  dataReady.value = true
  cardinfoobject.entropyData.avatars[0] = 0 // constant first avatar to encode template type
  for (let i = 0; i < 8; i++) {
    cardinfoobject.entropyData.words[i] = await getRandomInt(65536) // 2^16
  }
  for (let i = 1; i < 4; i++) {
    cardinfoobject.entropyData.avatars[i] = await getRandomInt(20)
  }
}
async function getRandomInt (max) {
  await _sodium.ready
  const sodium = _sodium
  // The min is 0 (inclusive) and the max is exclusive
  return sodium.randombytes_uniform(max)
}
</script>

<style lang="sass" scoped>
.moneroLogo
  width: 100%
</style>
