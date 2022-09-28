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
            v-model="text"
            filled
            label="To:(optional)"
          />
        </div>
        <div class="q-pa-md">
          <q-input
            v-model="text"
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
          <div class="no-margin no-padding" style="background: white;">
            <img
              :src='moneroFullLogo'
              class="no-margin no-padding theIcon"
            >
          </div>
          <div class="col-12 justify-center align-center">
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
                    {{ fourLetterWordList[getRandomInt(0,4030)] }}
                  </q-card-section>
                </q-card>
              </div>
            </div>
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
const fourLetterWordList = textg.split('\n')
function getRandomInt (min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min) + min) // The maximum is exclusive and the minimum is inclusive
}
const text = ref('')
const message = ref('Happy Birthday. I know youre really into privacy so I decided to gift you some crypto. Hope this B-day is great one!')
const options = ['Birthday', 'Standard']
const model = ref(null)
</script>

<style lang="sass" scoped>
  .theIcon
    height: auto
    width: 100%
</style>
