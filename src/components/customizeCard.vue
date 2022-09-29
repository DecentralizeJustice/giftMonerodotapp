<template>
  <div class="q-pa-md">
    <div class="row">
      <div class="col">
        <div class="q-pa-md">
          <q-select
            v-model="theme"
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
                  class="no-margin no-padding moneroLogo"
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
            <password :theme="theme" />
            <!-- eslint-disable vue/no-v-html -->
            <div
              class="col-8 text-center text-body1 q-mt-md"
              v-html="howToRedeem"
            />
          </div>
          <!-- eslint-enable -->
        </q-card>
        <div class="q-mt-md">
          <q-chip
            icon="preview"
            :ripple="false"
          >
            Gift Preview
          </q-chip>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import password from '@/components/pass-word.vue'
const moneroFullLogo = require('../assets/svgs/monero-xmr-logo-full.svg')
const to = ref('Satoshi')
const from = ref('Fluffy Pony')
const message = ref(`Happy Birthday. I know youre really into privacy so I
  decided to gift you some monero. Hope this B-day is great one!`)
const options = ['People', 'Animals', 'Halloween']
const theme = ref(options[0])
const howToRedeem = `Head over to givemonero.com/redeem before
<span class='text-weight-bold' style='color:#ff6600;'>
September 3rd</span> to get your Monero!`
</script>

<style lang="sass" scoped>
.moneroLogo
  height: auto
  width: 100%
</style>
