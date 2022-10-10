<template>
  <div
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
import { reactive, onUpdated, defineEmits, onMounted } from 'vue'
const emit = defineEmits(['update-card'])
const options = ['People', 'Animals', 'Halloween']
const clear = function () {
  cardinfoobject.to = ''
  cardinfoobject.from = ''
  cardinfoobject.message = ''
}
let cardinfoobject = {
  to: 'Satoshi',
  from: 'Fluffy Pony',
  message: "I know you're really into privacy, so here's some monero!",
  theme: options[2],
  entropyData: {
    avatars: [0, 0, 0, 0],
    words: [0, 0, 0, 0, 0, 0, 0]
  },
  refundAddress: ''
}
cardinfoobject = reactive(cardinfoobject)
function getRandomInt (min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  // The maximum is exclusive and the minimum is inclusive
  return Math.floor(Math.random() * (max - min) + min)
}
cardinfoobject.entropyData.words[0] = getRandomInt(0, 65536) // 2^16
for (let i = 1; i < 8; i++) {
  cardinfoobject.entropyData.words[i] = getRandomInt(0, 65536) // 2^16
}
for (let i = 0; i < 4; i++) {
  cardinfoobject.entropyData.avatars[i] = getRandomInt(0, 19)
}
function updateCardInfo () {
  emit('update-card', cardinfoobject)
}
onMounted(() => {
  updateCardInfo()
})
onUpdated(() => {
  updateCardInfo()
})
</script>

<style lang="sass" scoped>
.moneroLogo
  width: 100%
</style>
