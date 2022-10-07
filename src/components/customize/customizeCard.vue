<template>
  <div
    class="justify-center full-height full-width text-center row"
    :class="{'justify-around': $q.screen.gt.sm}"
  >
    <div class="column col-12 col-md-6">
      <displayCardInfo />
    </div>
    <div class="column col-12 col-md-5 justify-center">
      <div>
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
          class="desktop-only"
          @click="clear"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import displayCardInfo from '@/components/customize/displayCardInfo.vue'
import { ref } from 'vue'
// import password from '@/components/customize/pass-word.vue'
const to = ref('Satoshi')
const from = ref('Fluffy Pony')
const message = ref("I know you're really into privacy, so here's some monero!")
const options = ['People', 'Animals', 'Halloween']
const theme = ref(options[0])
const clear = function () {
  to.value = ''
  from.value = ''
  message.value = ''
}
// const cardTo = computed(() => {
//   const toValue = to.value
//   if (toValue.length === 0) {
//     return ''
//   }
//   return "<span class='text-weight-bold'>To:</span> " + toValue
// })
// const cardFrom = computed(() => {
//   const fromValue = from.value
//   if (fromValue.length === 0) {
//     return ''
//   }
//   return "<span class='text-weight-bold'>From:</span> " + fromValue
// })
// const howToRedeem = 'Go to giftmonero.app/redeem within <span class=\'text-weight-bold\' style=\'color:#ff6600;\'>1 Hour</span> to get your Monero!'
</script>

<style lang="sass" scoped>
.moneroLogo
  width: 100%
</style>
