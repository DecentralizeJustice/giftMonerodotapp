<template>
  <div
    class="justify-center full-height full-width text-center row"
    :class="{'justify-around': $q.screen.gt.sm}"
  >
    <div class="col col-12 col-md-6">
      <displayCardInfo :cardinfoobject="desiredValue" />
    </div>
    <div class="col col-12 q-mt-md">
      <q-btn
        icon="download"
        color="black"
        text-color="white"
        label="Download"
        @click="alert = true"
      />
    </div>
    <q-dialog v-model="alert">
      <q-card>
        <q-card-section class="bg-red text-white">
          <div class="text-h4 text-center">
            This Card Isn't Activated
          </div>
        </q-card-section>

        <q-card-section class="text-h6">
          You have not loaded this new gift card with monero. In order to activate this card go to Manage Gift Card in the menu bar.

          <q-card-actions align="center">
            <q-btn
              icon="download"
              color="black"
              text-color="white"
              label="Download Empty Card"
              @click="down()"
            />
          </q-card-actions>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>
<script setup>
import displayCardInfo from '@/components/create/customize/displayCardInfo.vue'
import getStagenetMnemonicAndAddress from '@/assets/monero-javascript/getStagenetMnemonicAndAddress.js'
import getBlockHeight from '@/assets/monero-javascript/getBlockHeight.js'
import { useCardStore } from '@/store/stagenetGiftCards.js'
import * as htmlToImage from 'html-to-image'
import download from 'downloadjs'
import { defineProps, reactive, ref, toRaw } from 'vue'
const node = 'https://stagenet.xmr.ditatompel.com:443'

const props = defineProps({
  cardinfoobject: { type: Object, required: true }
})
const desiredValue = reactive(props).cardinfoobject
async function getInfo () {
  const result = await getStagenetMnemonicAndAddress()
  return result
}
const walletInfo = await getInfo()
let height = await getBlockHeight(node)
height = height.height - 720 // days worth of blocks
const store = useCardStore()
const rawCardObject = toRaw(desiredValue)
rawCardObject.mnemonic = walletInfo.mnemonic
rawCardObject.depositAddress = walletInfo.address
rawCardObject.startSearchHeight = height
store.addCard(rawCardObject)
const alert = ref(false)
async function down () {
  const element = document.getElementById('printableCard')
  const imageSettings = { quality: 1 }
  const url = await htmlToImage.toJpeg(element, imageSettings)
  const img = document.createElement('img')
  img.src = url
  const image = await new Promise((resolve) => {
    img.onload = () => {
      htmlToImage.toJpeg(element, imageSettings).then((dataUrl) => {
        resolve(dataUrl)
      })
    }
  })
  await download(image, 'giftMonero.png')
  return true
}
</script>

<style lang="sass" scoped>
.moneroLogo
  width: 100%
</style>
