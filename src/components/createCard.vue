<template>
  <div class="q-pa-md row justify-center align-center">
    <div class="q-pa-md justify-center col-12 col-md-8 ">
      <q-stepper
        ref="stepper"
        v-model="step"
        header-nav
        animated
        keep-alive
        class="text-center"
      >
        <q-step
          :name="1"
          title="Customize"
          icon="settings"
          :done="step > 1"
          :header-nav="step > 1"
        >
          <customizeCard />
          <q-stepper-navigation>
            <q-btn
              color="primary"
              label="Continue"
              @click="() => { done1 = true; step = 2 }"
            />
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
            <q-btn
              color="primary"
              label="Continue"
              @click="() => { done2 = true; step = 3 }"
            />
            <q-btn
              flat
              color="primary"
              label="Back"
              class="q-ml-sm"
              @click="step = 1"
            />
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
            <q-btn
              color="primary"
              label="Continue"
              @click="() => { done3 = true; step = 4 }"
            />
            <q-btn
              flat
              color="primary"
              label="Back"
              class="q-ml-sm"
              @click="step = 2"
            />
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
            <q-btn
              color="primary"
              label="Finish"
              @click="done3 = true"
            />
            <q-btn
              flat
              color="primary"
              label="Back"
              class="q-ml-sm"
              @click="step = 2"
            />
          </q-stepper-navigation>
        </q-step>
      </q-stepper>
    </div>
  </div>
</template>
<script setup>
import customizeCard from '@/components/customizeCard.vue'
// import test from '../assets/test.js'
import { ref } from 'vue'
const step = ref(1)

</script>

<style lang="sass" scoped>
.my-card
  background: #4c4c4c !important
  width: 50vw
</style>
