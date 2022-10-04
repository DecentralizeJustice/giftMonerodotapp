<template>
  <div class="row justify-center">
    <q-card
      class="text-white col col-md-6 col-12 my-card text-left"
      style="border-radius: 10px;"
    >
      <q-card-section
        class="bg-black q-pa-md"
        style="white-space: normal"
      >
      {{walletInfo.address}}
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup>
import getStagenetMnemonicAndAddress from '@/assets/monero-javascript/getStagenetMnemonicAndAddress.js'
async function getInfo () {
  const result = await getStagenetMnemonicAndAddress()
  return result
}
const walletInfo = await getInfo()
</script>
  <style lang="sass" scoped>
.my-card
  overflow-wrap: break-word
  </style>
