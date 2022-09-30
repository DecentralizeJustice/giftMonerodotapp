<template>
  <div class="q-pa-md">
    <div class="row q-gutter-md">
      <div class="col">
        <div class="q-pa-md">
          <q-select
            v-model="theme"
            :options="options"
            label="Select Theme"
            filled
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
        <q-btn
          icon="backspace"
          color="primary"
          label="Clear All"
          @click="clear"
        />
      </div>
      <div class="col">
        <q-card
          class="text-white text-center q-pa-md"
          style="background: #4c4c4c;"
        >
          <div class="row justify-center">
            <q-card
              class="text-white text-center q-pa-sm q-my-md col-5"
              style="background: white;"
            >
              <img
                :src="moneroFullLogo"
                class="moneroLogo"
              >
            </q-card>
            <!-- eslint-disable vue/no-v-html -->
            <div
              class="col-12 text-left text-body1"
              v-html="cardTo"
            />
            <div class="col-12 text-left text-h6 q-my-sm">
              {{ message }}
            </div>
            <div
              class="col-12 text-right text-body1 q-mb-sm"
              v-html="cardFrom"
            />
            <password :theme="theme" />
            <div
              class="col-8 text-center text-body1 q-my-md"
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
import { ref, computed } from 'vue'
import password from '@/components/pass-word.vue'
const moneroFullLogo = require('../assets/svgs/monero-xmr-logo-full.svg')
const to = ref('Satoshi')
const from = ref('Fluffy Pony')
const message = ref('Happy Birthday. I know youre really into privacy so I decided to gift you some monero. Hope this B-day is great one!')
const options = ['People', 'Animals', 'Halloween']
const theme = ref(options[0])
const clear = function () {
  to.value = ''
  from.value = ''
  message.value = ''
}
const cardTo = computed(() => {
  const toValue = to.value
  if (toValue.length === 0) {
    return ''
  }
  return "<span class='text-weight-bold'>To:</span> " + toValue
})
const cardFrom = computed(() => {
  const fromValue = from.value
  if (fromValue.length === 0) {
    return ''
  }
  return "<span class='text-weight-bold'>From:</span> " + fromValue
})
const sixDaysFromNow = 518400000
const day = new Date(Date.now() + sixDaysFromNow).toLocaleDateString(
  'en-gb',
  {
    day: 'numeric'
  }
)
const month = new Date(Date.now() + sixDaysFromNow).toLocaleDateString(
  'en-gb',
  {
    month: 'long'
  }
)
const nth = function (d) {
  if (d > 3 && d < 21) return 'th'
  switch (d % 10) {
    case 1: return 'st'
    case 2: return 'nd'
    case 3: return 'rd'
    default: return 'th'
  }
}
const howToRedeem = `Head over to givemonero.com/redeem before <span class='text-weight-bold' style='color:#ff6600;'>${month} ${day}${nth(day)}</span> to get your Monero!`
</script>

<style lang="sass" scoped>
.moneroLogo
  width: 100%
</style>
