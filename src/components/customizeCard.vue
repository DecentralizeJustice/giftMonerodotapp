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
            label="To:"
          />
        </div>
        <div class="q-pa-md">
          <q-input
            v-model="message"
            label="Message"
            filled
            type="textarea"
          />
        </div>
      </div>
      <div class="col">
        <div class="row q-col-gutter-x-lg q-col-gutter-y-lg justify-center align-center">
          <div
            v-for="n in 4"
            :key="`none-${n}`"
            class="col-5"
          >
            <q-card
              class="text-white text-center"
              style="background: #f9530c"
            >
              <q-card-section class="text-h4 text-left">
                <q-item-label class="">
                  {{ n }}.
                </q-item-label>
              </q-card-section>
              <q-card-section>
                <getSVG />
              </q-card-section>
              <q-card-section class="q-pt-none text-h4">
                {{ fourLetterWordList[getRandomInt(0,4030)] }}
              </q-card-section>
            </q-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
// import test from '../assets/test.js'
import { ref } from 'vue'
import getSVG from '@/components/getSVG.vue'
import textg from '@/assets/4letterWords.txt'
const fourLetterWordList = textg.split('\n')
function getRandomInt (min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min) + min) // The maximum is exclusive and the minimum is inclusive
}
const text = ref('')
const message = ref('')
const options = ['Birthday', 'Standard']
const model = ref(null)
</script>

<style lang="sass" scoped>
</style>
