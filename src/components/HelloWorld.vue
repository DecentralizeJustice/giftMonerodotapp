<template>
  <div class="q-pa-md row justify-center align-center full-height full-width text-center back">
    <div class="q-pa-md justify-center">
    <q-btn label="Reset" push color="white" text-color="primary" @click="step = 1" class="q-mb-md" />

    <q-stepper
      v-model="step"
      header-nav
      ref="stepper"
      color="primary"
      animated
    >
      <q-step
        :name="1"
        title="Custamize"
        icon="settings"
        :done="step > 1"
        :header-nav="step > 1"
      >
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

        <q-stepper-navigation>
          <q-btn @click="() => { done1 = true; step = 2 }" color="primary" label="Continue" />
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="2"
        title="Refund Address"
        icon="create_new_folder"
        :done="step > 2"
        :header-nav="step > 2"
      >


        <q-stepper-navigation>
          <q-btn @click="() => { done2 = true; step = 3 }" color="primary" label="Continue" />
          <q-btn flat @click="step = 1" color="primary" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="3"
        title="Fund"
        icon="add_comment"
        :header-nav="step > 3"
        :done="step > 3"
      >
        Try out different ad text to see what brings in the most customers, and learn how to
        enhance your ads using features like ad extensions. If you run into any problems with
        your ads, find out how to tell if they're running and how to resolve approval issues.

        <q-stepper-navigation>
          <q-btn @click="() => { done3 = true; step = 4 }" color="primary" label="Continue" />
          <q-btn flat @click="step = 2" color="primary" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>
      <q-step
        :name="4"
        title="Share"
        icon="add_comment"
        :header-nav="step > 4"
      >
        Try out different ad text to see what brings in the most customers, and learn how to
        enhance your ads using features like ad extensions. If you run into any problems with
        your ads, find out how to tell if they're running and how to resolve approval issues.

        <q-stepper-navigation>
          <q-btn color="primary" @click="done3 = true" label="Finish" />
          <q-btn flat @click="step = 2" color="primary" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>
    </q-stepper>
  </div>
  </div>
</template>
<script>
// import test from '../assets/test.js'
import { ref } from 'vue'
export default {
  setup () {
    let step = ref(1)
    let text = ref('')
    let message = ref('')
    let options = ['Birthday', 'Halloween', 'Secret']
    let model = ref(null)
    return {
      step, text, options, model, message
    }
  }
}
</script>

<style lang="sass" scoped>
.my-card
  background: #4c4c4c !important
  width: 50vw
.back
  background-color: #f9530c
</style>
