<template>
  <div class="q-pa-md">

  <div class="row">
    <div class="col">
      <div class="q-pa-md">
        <q-select rounded standout v-model="model" :options="options" label="Select Theme" />
      </div>
      <div class="q-pa-md">
      <q-input filled v-model="text" label="To:" />
      </div>
      <div class="q-pa-md">
        <q-input
          label="Message"
          v-model="message"
          filled
          type="textarea"
        />
      </div>
    </div>
    <div class="col">
      <div class="row q-col-gutter-x-lg q-col-gutter-y-lg justify-center align-center">
        <div class="col-5" v-for="n in 4" :key="`none-${n}`">
          <q-card
          class="text-white"
          style="background: #F56C3C"
          >
          <q-card-section class="text-h4 text-left">
            <q-item-label class="">{{n}}.</q-item-label>
          </q-card-section>
          <q-card-section>
            <getSVG />
          </q-card-section>
            <q-card-section class="q-pt-none text-h4">
              {{fourLetterWordList[getRandomInt(0,4030)]}}
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </div>

</div>

</template>
<script>
// import test from '../assets/test.js'
import { ref } from 'vue'
import getSVG from '@/components/getSVG.vue'
import textg from '@/assets/4letterWords.txt'
export default {
  components: {
    getSVG
  },
  setup () {
    const fourLetterWordList = textg.split('\n')
    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
    }
    let step = ref(1)
    let text = ref('')
    let message = ref('')
    let options = ['Birthday', 'Standard']
    let model = ref(null)
    return {
      step, text, options, model, message, getRandomInt, fourLetterWordList
    }
  }
}
</script>

<style lang="sass" scoped>
</style>
