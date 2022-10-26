<template>
  <div class="q-mt-xl">
    <!-- Stack the columns on mobile by making one full-width and the other half-width -->
    <div class="row justify-evenly">
      <div class="col col-md-6 justify-evenly">
        <div
          class="column justify-evenly"
          style="height: 100%"
        >
          <div class="row">
            <q-card
              class="text-center col-12"
              style="background: white; color:#303030;"
            >
              <q-card-section>
                <div
                  class="text-h2 text-weight-regular"
                  style="line-height: 120%;font-weight: 400;"
                >
                  Create Fun and Simple Monero Giftcards
                </div>
              </q-card-section>
            </q-card>
          </div>
          <div class="row">
            <q-card
              class="my-card text-center col-12"
              style=""
            >
              <q-card-section>
                <div class="text-h4">
                  How It Works:
                </div>
                <div class="text-subtitle1 q-mt-md">
                  <div class="">
                    <div class="row">
                      <div class="col">
                        Step 1.
                        <br> Create and Fund Gift Card
                        <img
                          :src="web"
                          class="q-mt-md"
                          style="width: 60%"
                        >
                      </div>
                      <div class="col">
                        Step 2.
                        <br> Send the Monero Gift Card
                        <br><img
                          :src="mail"
                          class="q-mt-md"
                          style="width: 60%"
                        >
                      </div>
                      <div class="col">
                        Step 3.
                        <br> They claim the Monero!
                        <br><img
                          :src="working"
                          class="q-mt-md"
                          style="width: 60%"
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </div>
      <div class="col col-md-4 q-mt-md">
        <displayCardInfo :cardinfoobject="cardinfoobject" />
      </div>
    </div>
  </div>
</template>
<script setup>
import displayCardInfo from '@/components/create/customize/displayCardInfo.vue'
import { reactive } from 'vue'
import web from '@/assets/svgs/web.svg'
import mail from '@/assets/svgs/mail.svg'
import working from '@/assets/svgs/working.svg'
const options = ['Halloween', 'People', 'Christmas']
let cardinfoobject = {
  to: 'Satoshi',
  from: 'Fluffy Pony',
  message: "I know you're really into privacy, so here's some monero!",
  theme: options[0],
  entropyData: {
    avatars: [0, 0, 0, 0],
    words: [0, 0, 0, 0, 0, 0, 0, 0]
  },
  refundAddress: '',
  funded: false,
  startSearchHeight: 0,
  cardID: '',
  createdAt: 0,
  fundedAt: 0,
  refundTransaction: '',
  expires: 0
}
function getRandomInt (max) {
  const min = Math.ceil(0)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min) + min) // The maximum is exclusive and the minimum is inclusive
}
cardinfoobject.entropyData.avatars[0] = 0 // constant first avatar to encode template type
for (let i = 0; i < 8; i++) {
  cardinfoobject.entropyData.words[i] = getRandomInt(65536) // 2^16
}
for (let i = 1; i < 4; i++) {
  cardinfoobject.entropyData.avatars[i] = getRandomInt(20)
}
cardinfoobject.theme = options[getRandomInt(options.length)]
cardinfoobject = reactive(cardinfoobject)
</script>
<style lang="sass" scoped>
.my-card
    background: $secondary
    color: white
.icons
  width: 100%
</style>
