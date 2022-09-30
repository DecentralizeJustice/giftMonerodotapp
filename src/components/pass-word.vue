<template>
  <div class="col-12">
    <q-card
      class="text-white text-center q-ma-sm q-pa-md"
      style="background: black"
    >
      <div class="q-mb-md">
        <q-chip
          icon="lock"
          :ripple="false"
          color="red-5"
          dark
        >
          Secret Password: Do Not Share!!!
        </q-chip>
      </div>
      <div class="row q-col-gutter-x-md justify-center align-center">
        <div
          v-for="n in 4"
          :key="`none-${n}`"
          class="col-3"
        >
          <q-card
            class="text-white text-center"
            style="background: #ff6600"
          >
            <div
              style="margin-bottom: -5%;"
              class="text-left text-h5 q-pt-sm q-pl-sm"
            >
              {{ n }}.
            </div>
            <q-card-section class="no-margin no-padding">
              <getSVG :theme="theme" />
            </q-card-section>
            <q-card-section
              class="text-h5 text-weight-regular"
              style="margin-top: -10%;"
            >
              {{ totalWordList[wordRandomNumber[n-1]] }}
            </q-card-section>
          </q-card>
        </div>
      </div>
    </q-card>
  </div>
</template>
<script setup>
// import test from '../assets/test.js'
import { toRef } from 'vue'
import getSVG from '@/components/getSVG.vue'
import text3 from '@/assets/Scrabble-3-letters-1063.txt'
import text4 from '@/assets/Scrabble-4-letters-4030.txt'
import text5 from '@/assets/Scrabble-5-letters-8938.txt'
const props = defineProps({
  theme: { type: String, required: true }
})
const theme = toRef(props, 'theme')
function getRandomInt (min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  // The maximum is exclusive and the minimum is inclusive
  return Math.floor(Math.random() * (max - min) + min)
}
let totalWordList = text3.concat(text4, text5)
totalWordList = (totalWordList.split('\n'))
const wordRandomNumber = []
for (let i = 0; i <= 3; i++) {
  wordRandomNumber.push(getRandomInt(0, totalWordList.length))
}
</script>

<style lang="sass" scoped>
.moneroLogo
  height: auto
  width: 100%
</style>
