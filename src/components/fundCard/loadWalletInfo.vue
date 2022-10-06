<template>
  <div class="row justify-center">
    <q-card
      class="text-white col col-md-6 col-12 text-left"
      style="border-radius: 10px;"
    >
      <q-card-section
        class="bg-secondary  q-pa-md row justify-center "
        style="white-space: normal"
      >
        <div class="text-center text-h6 text-white q-mb-md col-12">
          Send Stagnet Monero Here to Load Gift Card:
        </div>
        <div class="text-weight-medium text-white col-12 my-card">
          {{ walletInfo.address }}
        </div>
        <div class="col col-12 text-center q-mt-md">
          <canvas
            id="canvas"
            style=""
          />
        </div>
        <div class="col col-12 q-mt-md text-center">
          <q-btn
            color="primary"
            icon="file_copy"
            label="Copy"
            @click="copy"
          />
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { copyToClipboard } from 'quasar'
import getStagenetMnemonicAndAddress from '@/assets/monero-javascript/getStagenetMnemonicAndAddress.js'
import QRCode from 'qrcode'
async function getInfo () {
  const result = await getStagenetMnemonicAndAddress()
  return result
}
const walletInfo = await getInfo()
onMounted(() => {
  const canvas = document.getElementById('canvas')
  QRCode.toCanvas(canvas, walletInfo.address, { errorCorrectionLevel: 'M' }, function (error) {
    if (error) console.error(error)
  })
})
function copy () {
  copyToClipboard(walletInfo.address)
    .then(() => {
    // success!
    })
    .catch(() => {
    // fail
    })
}

</script>
  <style lang="sass" scoped>
.my-card
  overflow-wrap: break-word
  </style>
