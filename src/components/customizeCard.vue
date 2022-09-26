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
      <div class="row">
        <div class="col-6"><getSVG /></div>
        <div class="col-6"><getSVG /></div>
      </div>
      <div class="row">
        <div class="col-6"><getSVG /></div>
        <div class="col-6"><getSVG /></div>
      </div>
    </div>
  </div>

</div>

</template>
<script>
// import test from '../assets/test.js'
import { ref } from 'vue'
import getSVG from '@/components/getSVG.vue'
export default {
  components: {
    getSVG
  },
  setup () {
    let step = ref(1)
    let text = ref('')
    let message = ref('')
    let options = ['Birthday', 'Standard']
    let model = ref(null)
    return {
      step, text, options, model, message
    }
  }
}
</script>

<style lang="sass" scoped>
</style>
