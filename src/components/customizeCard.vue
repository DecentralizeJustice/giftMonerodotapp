<template>
  <div class="q-pa-md">
    <div class="row">
      <div class="col">
        <div class="q-pa-md">
          <q-select
            v-model="model"
            :options="options"
            label="Select Theme"
          />
        </div>
        <div class="q-pa-md">
          <q-input
            v-model="to"
            filled
            label="To:(optional)"
          />
        </div>
        <div class="q-pa-md">
          <q-input
            v-model="from"
            filled
            label="From:(optional)"
          />
        </div>
        <div class="q-pa-md">
          <q-input
            v-model="message"
            label="Message(optional):"
            filled
            type="textarea"
          />
        </div>
      </div>
      <div class="col">
        <q-card
          class="text-white text-center q-pa-md"
          style="background: #4c4c4c;"
        >
          <div class="row justify-center">
            <q-card
              class="text-white text-center q-pa-md col-5"
              style="background: white;"
            >
              <div class="no-margin no-padding">
                <img
                  :src="moneroFullLogo"
                  class="no-margin no-padding theIcon"
                >
              </div>
            </q-card>
            <div class="col-12 text-left text-body1">
              To: {{ to }}
            </div>
            <div class="col-12 text-left text-body1">
              From: {{ from }}
            </div>
            <div class="col-12 text-left text-body1">
              {{ message }}
            </div>
            <div class="col-12">
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
                      <getSVG />
                    </q-card-section>
                    <q-card-section
                      class="text-h5 text-weight-regular"
                      style="margin-top: -10%;"
                    >
                      {{ fourLetterWordList[wordRandomNumber[n-1]] }}
                    </q-card-section>
                  </q-card>
                </div>
              </div>
            </div>
            <div class="col-12 text-center text-body1 q-mt-md">
              {{ howToRedeem }}
            </div>
          </div>
        </q-card>
      </div>
    </div>
  </div>
</template>
<script setup>
// import test from '../assets/test.js'
import { ref } from 'vue'
import getSVG from '@/components/getSVG.vue'
import textg from '@/assets/4letterWords.txt'
const moneroFullLogo = require('../assets/svgs/monero-xmr-logo-full.svg')
function getRandomInt (min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min) + min) // The maximum is exclusive and the minimum is inclusive
}
const fourLetterWordList = textg.split('\n')
const wordRandomNumber = []
for (let i = 0; i <= 3; i++) {
  wordRandomNumber.push(getRandomInt(0, 4030))
}
const to = ref('Satoshi')
const howToRedeem = 'Head over to givemonero.com/redeem before September 3rd to get your Monero!'
const from = ref('Fluffy Pony')
const message = ref('Happy Birthday. I know youre really into privacy so I decided to gift you some monero. Hope this B-day is great one!')
const options = ['Birthday', 'Standard', 'Halloween']
const model = ref('Standard')
</script>

<style lang="sass" scoped>
  .theIcon
    height: auto
    width: 100%
</style>
