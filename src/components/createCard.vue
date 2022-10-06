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
        :class="{'straight-corner': $q.screen.lt.md}"
        header-nav
        animated
        :vertical="$q.screen.lt.md"
        keep-alive
        class="text-center"
      >
        <q-step
          :name="1"
          title="Customize Gift Card"
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
          <q-stepper-navigation
            class="row"
            :class="{'justify-between': $q.screen.gt.sm, 'justify-end': $q.screen.lt.md}"
          >
            <div
              :class="{'col-2': $q.screen.gt.sm, 'col-5': $q.screen.lt.md}"
            >
              <q-btn
                icon="navigate_before"
                color="primary"
                label="Back"
                @click="step = 1"
              />
            </div>
            <div
              class="desktop-only"
            >
              <q-btn
                icon-right="navigate_next"
                color="primary"
                label="Next"
                @click="() => { done2 = true; step = 3 }"
              />
            </div>
          </q-stepper-navigation>
          <refundAddress />
          <q-stepper-navigation
            class="mobile-only row justify-end"
          >
            <div class="col-5">
              <q-btn
                icon-right="navigate_next"
                color="primary"
                label="Next"
                @click="() => { done2 = true; step = 3 }"
              />
            </div>
          </q-stepper-navigation>
        </q-step>

        <q-step
          :name="3"
          title="Share Gift Card"
          icon="share"
          :header-nav="step > 3"
          :done="step > 3"
        >
          <q-stepper-navigation
            class="row"
            :class="{'justify-between': $q.screen.gt.sm, 'justify-end': $q.screen.lt.md}"
          >
            <div
              :class="{'col-2': $q.screen.gt.sm, 'col-5  q-mb-lg text-right': $q.screen.lt.md}"
            >
              <q-btn
                icon="navigate_before"
                color="primary"
                label="Back"
                @click="step = 2"
              />
            </div>
            <div
              class="desktop-only"
            >
              <q-btn
                icon-right="edit"
                color="primary"
                label="Manage Gift Card"
                @click="() => { }"
              />
            </div>
          </q-stepper-navigation>
          <shareCard />
          <q-stepper-navigation
            class="mobile-only row justify-end"
          >
            <div class="col-12 text-center">
              <q-btn
                icon-right="edit"
                color="primary"
                label="Manage Gift Card"
                @click="() => { }"
              />
            </div>
          </q-stepper-navigation>
        </q-step>
      </q-stepper>
    </div>
  </div>
</template>
<script setup>
import customizeCard from '@/components/customize/customizeCard.vue'
import refundAddress from '@/components/refund/refundAddress.vue'
import shareCard from '@/components/shareCard/shareCard.vue'
import { ref } from 'vue'
const step = ref(1)

</script>

<style lang="sass" scoped>
  .straight-corner
    border-radius: 0px
</style>
