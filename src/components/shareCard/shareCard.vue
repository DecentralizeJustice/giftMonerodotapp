<template>
  <div
    class="justify-center full-height full-width text-center row"
    :class="{'justify-around': $q.screen.gt.sm}"
  >
    <div
      id="printableCard"
      class="column col-12 col-md-6"
    >
      <q-card
        class="text-white text-center q-pa-md"
        style="background: #4c4c4c;"
      >
        <div class="row justify-center">
          <q-card
            class="text-white text-center q-pa-sm q-my-md col-9 col-md-5 column"
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
            class="col-12 col-md-8 text-center text-body1 q-my-md"
            v-html="howToRedeem"
          />
        </div>
        <!-- eslint-enable -->
      </q-card>
    </div>
    <q-btn
      color="white"
      text-color="black"
      label="Standard"
      @click="down"
    />
  </div>
</template>
<script setup>
import * as htmlToImage from 'html-to-image'
import download from 'downloadjs'
import { ref, computed } from 'vue'
import password from '@/components/customize/pass-word.vue'
const moneroFullLogo = require('@/assets/svgs/monero-xmr-logo-full.svg')
const to = ref('Satoshi')
const from = ref('Fluffy Pony')
const message = ref("I know you're really into privacy, so here's some monero!")
const options = ['People', 'Animals', 'Halloween']
const theme = ref(options[0])
function down () {
  htmlToImage.toPng(document.getElementById('printableCard'))
    .then(function (dataUrl) {
      download(dataUrl, 'giftMonero.png')
    })
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
const howToRedeem = 'Go to giftmonero.app/redeem within <span class=\'text-weight-bold\' style=\'color:#ff6600;\'>1 Hour</span> to get your Monero!'
</script>

<style lang="sass" scoped>
.moneroLogo
  width: 100%
</style>
