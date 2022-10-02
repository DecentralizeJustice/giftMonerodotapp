<template>
  <div
    class="row justify-center align-center"
    :class="{'q-my-lg': $q.screen.gt.sm}"
  >
    <div
      class=" justify-center col-12 col-md-8 "
    >
      <q-stepper
        ref="stepper"
        v-model="step"
        style=""
        :class="{'straight-corner': $q.screen.lt.md}"
        header-nav
        animated
        :vertical="$q.screen.lt.md"
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
          <q-stepper-navigation
            class="text-right desktop-only"
            style="padding-top:0px;"
          >
            <q-btn
              no-margin
              icon-right="navigate_next"
              color="primary"
              label="Next"
              @click="() => { done1 = true; step = 2 }"
            />
          </q-stepper-navigation>
          <customizeCard />
          <q-stepper-navigation
            class="text-right mobile-only"
            style="padding-top:0px;"
          >
            <q-btn
              no-margin
              icon-right="navigate_next"
              color="primary"
              label="Next"
              @click="() => { done1 = true; step = 2 }"
            />
          </q-stepper-navigation>
        </q-step>
        <q-step
          :name="2"
          title="Refund Address"
          icon="payments"
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
          icon="attach_money"
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
          icon="share"
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
  .straight-corner
    border-radius: 0px
</style>
